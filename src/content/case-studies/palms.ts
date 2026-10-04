import type { CaseFigure } from "@/components/case-study/types";

/**
 * PALMS: Personalized Adaptive Learning Management System.
 *
 * Independent education-technology project / demonstration platform for
 * education research. Every fact below is verified against the project
 * repository (docs/PROJECT-OVERVIEW.md, docs/DELIVERY.md,
 * design/DESIGN.md, backend/app/services/recommendations.py).
 * The adaptive behavior is implemented through five explicit,
 * deterministic recommendation rules. No machine-learning model is
 * involved anywhere in the system.
 */

export type RecommendationRule = {
  code: string;
  index: string;
  condition: string;
  title: string;
  message: string;
  reason: string;
};

export type MasteryBand = {
  name: string;
  range: string;
};

export const palmsRules: RecommendationRule[] = [
  {
    code: "REPEATED_DIFFICULTY",
    index: "Rule 01",
    condition:
      "Applies when the last two graded attempts for the topic both scored below 50%. Highest priority.",
    title: "Teacher support requested",
    message:
      "This topic has been difficult in repeated attempts. Your teacher has been notified and will follow up.",
    reason: "This topic may require additional teacher support.",
  },
  {
    code: "LOW_PERFORMANCE",
    index: "Rule 02",
    condition: "Applies when the mastery score is below 50%.",
    title: "Additional practice recommended",
    message:
      "Your latest score is below 50%. Review the topic lessons and attempt the assessment again.",
    reason: "Your performance is below the required level for this topic.",
  },
  {
    code: "DEVELOPING",
    index: "Rule 03",
    condition:
      "Applies when the mastery score is at least 50% but below the topic threshold.",
    title: "More practice recommended",
    message:
      "Work through the topic lessons and reassess before moving on to the next topic.",
    reason: "More practice is recommended before moving to the next topic.",
  },
  {
    code: "MASTERY_ACHIEVED",
    index: "Rule 04",
    condition:
      "Applies when the mastery score reaches the topic threshold. Mutually exclusive with the two band rules above: when a new band applies, the previous band's active recommendation is marked completed.",
    title: "Topic mastered",
    message:
      "You reached the required mastery level. The next topic in the course is available to you.",
    reason: "You have achieved the required mastery level for this topic.",
  },
  {
    code: "HIGH_ACHIEVEMENT",
    index: "Rule 05",
    condition: "Applies when the mastery score reaches 85% or above.",
    title: "Enrichment available",
    message:
      "Try the enrichment lessons for this topic to extend what you have learned.",
    reason:
      "Your strong performance allows you to explore additional activities.",
  },
];

export const palmsBands: MasteryBand[] = [
  { name: "Needs Support", range: "0–49" },
  { name: "Developing", range: "50–69" },
  { name: "Proficient", range: "70–84" },
  { name: "Mastered", range: "85–100" },
];

export const palms = {
  name: "PALMS",
  fullName: "Personalized Adaptive Learning Management System",
  classification: "Independent education-technology project",
  year: "2026",
  statement:
    "A mastery-based learning platform designed to make personalized learning pathways explicit, inspectable, and researchable.",

  metadata: [
    { label: "Project type", value: "Independent education-technology project" },
    {
      label: "Focus",
      value: "Mastery-based learning · Explainable recommendation · Education research",
    },
    { label: "System", value: "Student · Teacher · Admin" },
    { label: "Architecture", value: "FastAPI · Next.js · PostgreSQL" },
  ],

  loopWords: [
    "Teach",
    "Assess",
    "Measure",
    "Explain",
    "Recommend",
    "Intervene",
    "Evaluate",
  ],

  problem: {
    title: "Personalization without opacity.",
    paragraphs: [
      "Many personalized learning systems hide the path from learner activity to recommendation: an input goes in, a suggestion comes out, and the reasoning in between is unavailable to the learner or the teacher. PALMS was designed around the opposite principle.",
      "In PALMS, each recommendation is traceable to an observable mastery state and a fixed, inspectable rule, and it carries its reason in plain language. The learner sees why something was recommended; the teacher sees the same state and can act on it. That traceability is the design problem the project addresses.",
    ],
  },

  loop: {
    title: "Following one learning decision.",
    intro:
      "Everything in PALMS follows a single learning loop. This section traces one assessment attempt through the whole system, from the student's submit button to the research record.",
    steps: [
      {
        title: "Teach",
        body: "The teacher authors the course: topics in order, lessons with objectives and resources, a question bank of MCQ, True/False, and Short Answer items, and assessments assembled from the bank.",
      },
      {
        title: "Assess",
        body: "The student takes the assessment one question per view, with a confirm step listing unanswered questions before submit.",
      },
      {
        title: "Measure",
        body: "MCQ and True/False responses are auto-graded on submit. Short-answer responses enter the teacher's grading queue and are scored with points and comments.",
      },
      {
        title: "Explain",
        body: "Once the attempt is graded, the system recalculates the student's topic mastery and maps it to a band: Needs Support, Developing, Proficient, or Mastered.",
      },
      {
        title: "Recommend",
        body: "The five fixed-order recommendation rules are evaluated against the new mastery state. When a rule applies, a recommendation is created carrying the rule's title, message, and plain-language reason. One active recommendation exists per student, topic, and rule.",
      },
      {
        title: "Intervene",
        body: "The student sees the recommendation with its reason. The teacher sees the same mastery state in the interventions inbox, can add a follow-up note, and marks the item reviewed.",
      },
      {
        title: "Evaluate",
        body: "Pre/post research sessions record scores and learning periods. Score change is computed server-side and reported as a measured value, not a causal claim.",
      },
    ],
  },

  signature: {
    title: "The recommendation, with its reason attached.",
    paragraphs: [
      "This is the signature PALMS artifact. Each row pairs a recommendation with the plain-language reason the rule produced, so the pathway from assessment result to suggestion is inspectable rather than opaque. The student can act on it (open the lesson, start practice, or dismiss it), and the teacher sees the same rows in the interventions inbox.",
      "Every name and score visible here is fictional demonstration data from the project's seed set.",
    ],
  },

  student: {
    title: "The student sees the path.",
    paragraphs: [
      "The learning path page turns mastery state into a visible study plan: the current recommended activity sits at the top with its reason, and every topic lists its mastery band, latest score, and lesson progress. Nothing about the student's standing is hidden behind a score alone.",
      "Assessments open from the path. The entry view states the grading behavior up front and lists previous attempts, so the student always knows where an attempt will lead.",
    ],
  },

  teacher: {
    title: "Automation stops short of replacing the teacher.",
    paragraphs: [
      "Objective question types are auto-graded; everything requiring judgment goes to a person. Short answers wait in the teacher's grading queue with the student's answer beside points and comment fields. The teacher inspects per-student mastery in bands, then works the interventions inbox: highest priority first, a note on what was done, and a reviewed mark when followed up.",
    ],
  },

  readings: {
    title: "Three readings of one system.",
    intro:
      "Student, teacher, and admin are not three products. They are three readings of the same underlying learning data, each showing what its role needs and nothing more.",
    roles: [
      {
        role: "Student",
        sees: "learning path · mastery · recommendation",
        body: "Where am I, what should I do next, and why.",
      },
      {
        role: "Teacher",
        sees: "mastery · grading · interventions",
        body: "Who needs support, what needs my judgment, and what did I do about it.",
      },
      {
        role: "Admin",
        sees: "authorization · system management · exports",
        body: "Who may access what, and the class data the research needs.",
      },
    ],
  },

  research: {
    title: "From product behavior to research measurement.",
    paragraphs: [
      "PALMS was built as a demonstration platform for education research, so measurement is part of the system rather than an afterthought. Teachers record pre-test and post-test scores with the learning period and notes; the server computes the score change.",
      "The research workflow records pre/post scores and computes the observed change. In this demonstration, the value is a measured quantity, not a causal claim. The interface states this directly on the page.",
    ],
  },

  engineering: {
    title: "Designed to keep the rules inspectable.",
    paragraphs: [
      "The backend owns all business logic and authorization; the Next.js frontend is a thin client. Browser requests go through server-side API routes that attach the JWT before proxying to FastAPI, so tokens never touch browser JavaScript. The session lives in an httpOnly, SameSite=Lax cookie with a two-hour lifetime.",
      "The data model is organized around the learning loop: courses and topics feed assessments, attempts feed mastery, mastery feeds recommendations, and research sessions sit alongside for measurement. Seven linear, reversible migrations build the seventeen tables.",
    ],
    evidence: [
      { value: "84", label: "pytest tests passing" },
      { value: "17", label: "database tables" },
      { value: "7", label: "linear, reversible migrations" },
      { value: "3", label: "authorization roles" },
      { value: "5", label: "transparent recommendation rules" },
    ],
    evidenceNote:
      "These are engineering verification figures: the test suite covers grading, mastery, all five rules, permissions, exports, research sessions, and security. They describe how thoroughly the system was checked, not user adoption or research outcomes.",
  },

  rulesSection: {
    title: "Five rules, stated exactly.",
    intro:
      "The complete adaptive behavior of PALMS is the five rules below, evaluated in fixed priority order after every graded attempt. Each rule's title, message, and reason are stored verbatim on the recommendation row, which is what makes every recommendation auditable after the fact.",
    contrast:
      "No machine-learning model sits between the learner's activity and the recommendation. The adaptive behavior is implemented through five explicit rules.",
  },

  designProcess: {
    title: "Design before implementation.",
    paragraphs: [
      "Nine annotated wireframes document the intended interaction structure before the final interface was built: recommendations as bordered rows with reason-code badges, assessments as one question per view, grading as a queue. The built interface follows them closely.",
    ],
  },

  qa: {
    title: "Verified, then documented.",
    items: [
      "84 pytest tests passing across grading, mastery, recommendation rules, permissions, exports, research sessions, and security.",
      "Full browser QA across student, teacher, and admin routes with zero console errors.",
      "One UI bug discovered and fixed during QA (a mislabeled confirm button).",
      "Production frontend build compiles cleanly.",
    ],
  },

  limitations: {
    title: "What this does not claim.",
    items: [
      "All interface captures show fixed demonstration seed data, not real learners.",
      "Research score changes are measured values, not causal claims about learning.",
      "The login rate limiter is in-memory per process; a multi-instance deployment would need shared storage.",
      "There is no token revocation list; deactivation is checked per request, but existing tokens remain valid until their two-hour expiry.",
      "Deployment is documented with Docker Compose; no production deployment is claimed.",
    ],
  },

  reflection: {
    paragraphs: [
      "PALMS explores a simple proposition: personalization becomes more useful for education research when the pathway is inspectable.",
      "The system does not attempt to hide its decision-making behind an opaque model. Instead, it exposes mastery states, fixed recommendation rules, reasons, teacher intervention, and measurable research sessions as connected parts of one learning loop.",
    ],
  },
};

export const palmsFigures: Record<string, CaseFigure> = {
  recommendations: {
    src: "/case-studies/palms/recommendations.webp",
    width: 1360,
    height: 840,
    alt: "The PALMS student recommendations page: a table with Topic, Recommendation, Reason, Status, and Action columns. Two rows for the Fractions topic show 'Teacher support requested' and 'Additional practice recommended', each with a plain-language reason.",
    caption:
      "Student recommendations. Each recommendation is paired with a plain-language reason, making the rule-driven pathway inspectable rather than opaque. Demonstration data.",
  },
  learningPath: {
    src: "/case-studies/palms/learning-path.webp",
    width: 1360,
    height: 1146,
    alt: "The PALMS student learning path for Mathematics Foundations: a 'Current recommended activity' panel with its reason, followed by topics (Fractions, Decimals, Percentages, Basic Algebra) each showing mastery state and lesson progress.",
    caption:
      "Student learning path. Mastery states become a visible study plan, with the current recommended activity and its reason at the top. Demonstration data.",
  },
  assessmentEntry: {
    src: "/case-studies/palms/assessment-entry.webp",
    width: 1280,
    height: 840,
    alt: "The PALMS assessment entry page for 'Fractions check': instructions describing how answers are saved and graded, a 'Start a new attempt' button, and a list of previous graded attempts.",
    caption:
      "Assessment entry. The page states the grading behavior up front and lists previous attempts. Demonstration data.",
  },
  interventions: {
    src: "/case-studies/palms/interventions.webp",
    width: 1360,
    height: 840,
    alt: "The PALMS teacher interventions inbox: a table of active recommendations ordered by priority, with student, topic, current mastery, recommendation reason, and a teacher note field with a 'Mark reviewed' action.",
    caption:
      "Teacher interventions inbox. Active recommendations arrive priority-first; the teacher records the follow-up and marks each item reviewed. Demonstration data.",
  },
  gradingQueue: {
    src: "/case-studies/palms/grading-queue.webp",
    width: 1360,
    height: 840,
    alt: "The PALMS teacher grading queue for a Fractions assessment: one short answer awaiting review with points and comment fields, and a reviewed section showing a scored answer with teacher feedback.",
    caption:
      "Grading queue. Short answers wait for teacher judgment with points and comments; objective items are already auto-graded. Demonstration data.",
  },
  teacherMastery: {
    src: "/case-studies/palms/teacher-mastery.webp",
    width: 1360,
    height: 840,
    alt: "The PALMS teacher view of an assessment: the published 'Fractions check' with four questions, and a student mastery table showing graded attempts, latest and best scores, and the Developing band.",
    caption:
      "Teacher view of assessment and mastery. Per-student attempts, scores, and mastery bands in one table. Demonstration data.",
  },
  researchEval: {
    src: "/case-studies/palms/research-eval.webp",
    width: 1360,
    height: 900,
    alt: "The PALMS research evaluation page: a form to add a research record with pre-test score, post-test score, learning period, and notes, above a table of records with a server-computed score change column.",
    caption:
      "Research evaluation. Pre/post records with server-computed score change, stated on the page as a measured value only. Demonstration data.",
  },
  erDiagram: {
    src: "/case-studies/palms/er-diagram.svg",
    width: 1140,
    height: 1336,
    alt: "Entity-relationship diagram of the PALMS database: seventeen tables covering users, courses, topics, lessons, questions, assessments, attempts, mastery, recommendations, research sessions, and authorization, with their relationships.",
    caption:
      "PALMS data model. Seventeen relational tables organized around courses, assessments, attempts, mastery, recommendations, research sessions, and authorization.",
  },
  wireframeDashboard: {
    src: "/case-studies/palms/wireframe-dashboard.webp",
    width: 1200,
    height: 949,
    alt: "Annotated wireframe of the PALMS student dashboard from the design phase: recommendation rows with reason-code badges, messages, reason text, and actions, above a recent-results table with mastery status badges.",
    caption:
      "Design wireframe: student dashboard. Recommendations were specified as bordered rows with reason-code badges before implementation began.",
  },
};
