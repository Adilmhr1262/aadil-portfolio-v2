#!/usr/bin/env python3
"""Deploy aadil-portfolio-v2 to Vercel via the REST API.

Pattern: create_deployment with file SHAs -> 400 missing_files ->
upload missing to /v8/files -> retry create_deployment.
Excludes package-lock.json and *.tsbuildinfo (Vercel runs npm install).
"""
import hashlib
import json
import os
import sys
import urllib.request

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

API = "https://api.vercel.com"
REPO = os.path.expanduser("~/workspace/aadil-portfolio-v2")
PROJECT = "aadil-mahar-portfolio-v2"

SKIP = {"package-lock.json", ".git", "node_modules", ".next", "out"}
SKIP_SUFFIX = (".tsbuildinfo",)


def collect_files():
    files = {}
    for root, dirs, names in os.walk(REPO):
        dirs[:] = [d for d in dirs if d not in SKIP and not d.startswith(".")]
        for name in names:
            if name in SKIP or name.endswith(SKIP_SUFFIX):
                continue
            path = os.path.join(root, name)
            rel = os.path.relpath(path, REPO)
            with open(path, "rb") as f:
                data = f.read()
            files[rel] = hashlib.sha1(data).hexdigest()
    return files


def api(method, url, payload=None, raw=None, content_type="application/json"):
    req = urllib.request.Request(url, method=method)
    add_surrogate_to_request(req, "custom.vercel", allowed_hosts=["api.vercel.com"])
    if payload is not None:
        body = json.dumps(payload).encode()
        req.add_header("Content-Type", content_type)
    elif raw is not None:
        body = raw
        req.add_header("Content-Type", content_type)
        req.add_header("Content-Length", str(len(raw)))
    else:
        body = None
    req.data = body
    try:
        resp = urllib.request.urlopen(req, timeout=120)
        return resp.status, read_json_response(resp)
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode())
        except Exception:
            return e.code, {"error": str(e)}


def upload_file(rel, sha):
    path = os.path.join(REPO, rel)
    with open(path, "rb") as f:
        data = f.read()
    url = f"{API}/v8/files"
    req = urllib.request.Request(url, method="POST")
    add_surrogate_to_request(req, "custom.vercel", allowed_hosts=["api.vercel.com"])
    req.add_header("Content-Type", "application/octet-stream")
    req.add_header("Content-Length", str(len(data)))
    req.add_header("x-vercel-digest", sha)
    req.data = data
    try:
        resp = urllib.request.urlopen(req, timeout=120)
        return resp.status
    except urllib.error.HTTPError as e:
        return e.code


def main():
    files = collect_files()
    print(f"collected {len(files)} files", flush=True)
    file_list = [{"file": rel, "sha": sha} for rel, sha in sorted(files.items())]
    payload = {
        "name": PROJECT,
        "project": PROJECT,
        "target": "production",
        "files": file_list,
        "projectSettings": {"framework": "nextjs"},
    }
    for attempt in range(3):
        status, body = api("POST", f"{API}/v13/deployments", payload)
        if status == 400 and isinstance(body, dict) and body.get("error", {}).get("code") == "missing_files":
            missing = body["error"].get("missing", [])
            sha_to_rel = {sha: rel for rel, sha in files.items()}
            print(f"uploading {len(missing)} missing files", flush=True)
            for m in missing:
                sha = m["sha"] if isinstance(m, dict) else m
                rel = m.get("file") if isinstance(m, dict) else sha_to_rel.get(sha)
                if not rel:
                    print(f"no local file for {m}"); continue
                st = upload_file(rel, sha)
                if st not in (200, 409):
                    print(f"upload {rel} -> {st}")
            continue
        print(json.dumps(body, indent=2)[:2000])
        break


main()
