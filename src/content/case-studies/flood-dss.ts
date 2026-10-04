export type MetaRow = { label: string; value: string };

export type FlowStage = { label: string; text: string };

export type ArchitectureLayer = {
  id: string;
  label: string;
  title: string;
  text: string;
};

export type MetricFigure = {
  value: number;
  decimals: number;
  label: string;
  note: string;
};

export type InterfaceSurface = {
  index: string;
  title: string;
  role: string;
  paragraphs: string[];
  placeholder: string;
};

export type TechGroup = { label: string; text: string };

export type MethodStage = { title: string; text: string };

import type { CaseFigure } from "@/components/case-study/types";

export type { CaseFigure };

const fig = (file: string, width: number, height: number, alt: string, caption: string, meta?: string): CaseFigure => ({
  src: `/case-studies/flood-dss/${file}`,
  width,
  height,
  alt,
  caption,
  meta,
});

export const floodFigures = {
  modelComparison: fig(
    "model-comparison.webp",
    2200,
    945,
    "Bar chart comparing test-set accuracy, recall, F1, and ROC-AUC for Random Forest, XGBoost, and MLP on a held-out set of 36 district-years, with a second panel showing 5-fold cross-validation F1 and standard-deviation bars. The MLP leads on F1 at 0.875 and ROC-AUC at 0.963.",
    "Test-set metrics and 5-fold cross-validation F1 for the three compared models. The MLP (mlp-v1) was selected.",
    "n = 36 district-years"
  ),
  gisRiskMap: fig(
    "gis-risk-map.webp",
    1440,
    900,
    "The project's GIS Flood Risk Map view: toggle chips for the risk, historical flood, vulnerability, infrastructure, and district-boundary layers, a district search field, and a Leaflet map with low, medium, and high risk markers and a risk-level legend.",
    "The project's interactive risk map: layer toggles, district search, and risk-level markers.",
    "Leaflet"
  ),
  gisFramework: fig(
    "gis-framework.webp",
    2200,
    1184,
    "Project diagram of the GIS framework: five spatial layers (risk, historical floods, vulnerability, infrastructure, district boundaries) feeding a PostGIS database served as GeoJSON through FastAPI endpoints to the decision-support views, Leaflet dashboard, alert center, and mobile map.",
    "How spatial layers move from PostGIS through the API to the decision-support views and map clients.",
    "Project diagram"
  ),
  dashboardOverview: fig(
    "dashboard-overview.webp",
    1440,
    900,
    "Authority dashboard overview for Sindh: stat cards for active flood alerts, high-risk areas, total historical events, and current risk status; a monthly rainfall trends chart; a flood frequency bar chart; a risk distribution donut; and a recent alerts list.",
    "The authority's home view: alert counts, rainfall trends, risk distribution, and recent warnings for Sindh.",
    "Step 1 · Live overview"
  ),
  decisionSupport: fig(
    "decision-support.webp",
    1440,
    900,
    "Decision Support view: a high-risk districts table with probabilities, risk levels, model versions, top factors, and recommended actions; active alerts; a latest predictions table; a resource overview of shelters and facilities; and vulnerability hotspots.",
    "High-risk districts with probabilities, contributing factors, and recommended actions.",
    "Step 2 · Risk explanation"
  ),
  alertCenter: fig(
    "alert-center.webp",
    1440,
    900,
    "Alert Center view: a form for issuing a new public alert by district, severity, title, and message; a citizen report triage queue; and an alert history table with severity and timestamps.",
    "Issuing public warnings and triaging community reports.",
    "Step 3 · Warning workflow"
  ),
  mobileHome: fig(
    "mobile-home.webp",
    390,
    844,
    "Mobile application prototype mockup in a phone frame: home screen showing current flood risk for Badin District at 62 percent medium, active alerts for Dadu and Badin, and bottom navigation for Home, Risk Check, Emergency, and Alerts.",
    "Prototype mockup: current district risk and active alerts on the home screen.",
    "Home"
  ),
  mobileScreens: fig(
    "mobile-screens.webp",
    390,
    844,
    "Two mobile application prototype mockups in phone frames: a risk-check screen for assessing any district, and an emergency screen listing rescue contacts with call buttons and nearby emergency shelters.",
    "Prototype mockups: district risk check, and emergency contacts with shelters.",
    "Risk check · Emergency"
  ),
};

export const floodDss = {
  slug: "flood-dss",
  folio: "Case study · No. 1",
  contextLine: "Selected academic project",
  title: "Flood Risk Prediction and Early Warning Decision Support System",
  summary:
    "A complete decision-support system for flood-prone districts in Sindh, Pakistan. It combines predictive modelling, geospatial analysis, and role-based interfaces so that risk information can reach the people who need to act on it: authorities, volunteers, and the public.",
  meta: [
    { label: "Role", value: "Design and build" },
    { label: "Institution", value: "The Islamia University of Bahawalpur" },
    { label: "Project type", value: "Selected academic project" },
    { label: "Stack", value: "Python · PostGIS · FastAPI · Flutter" },
    { label: "Key result", value: "F1 0.875 · ROC-AUC 0.963 on held-out data" },
  ] as MetaRow[],

  contextParagraphs: [
    "Flooding in Sindh is recurrent and costly. The practical problem is not only prediction: it is assessment under uncertainty, timely warning, and communication. Risk information has to travel from data and models to the specific people who decide and act, in a form each of them can use. That last step, from analysis to decision, is where this project lives.",
    "The work focuses on flood-prone districts in Sindh. Historical flood events and geographic data provide the evidence base; the system turns that evidence into district-level risk information and delivers it through interfaces built for different roles.",
  ],

  objectives: [
    "Model flood risk from historical and geographic data.",
    "Map predicted risk spatially, at district level.",
    "Issue early warnings through a threshold-based alert engine.",
    "Serve the results through interfaces for authorities, volunteers, and the public.",
  ],

  approach: [
    {
      label: "Data",
      text: "Historical flood events and district geography, stored in a PostGIS spatial database; weather data ingested through an automated ETL pipeline.",
    },
    {
      label: "Modelling",
      text: "Three models trained and compared in a central registry with k-fold cross-validation; the MLP neural network selected on held-out performance.",
    },
    {
      label: "Spatial analysis",
      text: "Predicted risk joined to geography: district-level mapping with PostGIS, explored with QGIS and rendered with Leaflet.",
    },
    {
      label: "Risk information",
      text: "Model outputs become readable risk information: district risk levels, mapped and tabulated.",
    },
    {
      label: "Decision support",
      text: "A threshold-based alert engine and an authority dashboard turn risk information into actions: review, warn, coordinate.",
    },
    {
      label: "Interfaces",
      text: "Three surfaces on the same system: authority dashboard, public portal, and a Flutter mobile app for alerts and volunteer coordination.",
    },
  ] as FlowStage[],

  architecture: [
    {
      id: "data",
      label: "Layer 01 · Data",
      title: "Spatial database",
      text: "PostgreSQL with PostGIS: 12 districts and 52 historical flood events. An automated ETL pipeline ingests weather data from the Open-Meteo API.",
    },
    {
      id: "modelling",
      label: "Layer 02 · Processing and modelling",
      title: "Model registry",
      text: "Three models trained and compared with k-fold cross-validation; final scoring on held-out data.",
    },
    {
      id: "prediction",
      label: "Layer 03 · Risk prediction",
      title: "Trained model",
      text: "The selected MLP neural network produces district-level flood-risk scores: F1 0.875, ROC-AUC 0.963 on held-out data.",
    },
    {
      id: "geospatial",
      label: "Layer 04 · Geospatial layer",
      title: "Risk mapping",
      text: "Predictions joined to district geography in PostGIS; analysis in QGIS, rendering with Leaflet.",
    },
    {
      id: "decision",
      label: "Layer 05 · Decision support",
      title: "Alert engine and command dashboard",
      text: "Threshold-based alerts with issue and deactivate controls; coordination views for volunteers and field reports.",
    },
    {
      id: "interfaces",
      label: "Layer 06 · Interfaces",
      title: "Three surfaces, one system",
      text: "Authority dashboard, Next.js public portal, and Flutter mobile app, served by a FastAPI backend with JWT authentication and role-based access.",
    },
  ] as ArchitectureLayer[],

  methodology: [
    {
      title: "Problem",
      text: "Flood-risk assessment and early warning for the flood-prone districts of Sindh.",
    },
    {
      title: "Data",
      text: "52 historical flood events across 12 districts; weather data via the Open-Meteo API.",
    },
    {
      title: "Preparation",
      text: "Automated ETL into a PostGIS spatial database; validation and structuring for modelling.",
    },
    {
      title: "Model",
      text: "Three models trained and compared; the MLP neural network selected.",
    },
    {
      title: "Evaluation",
      text: "k-fold cross-validation with final scoring on held-out data: F1 0.875, ROC-AUC 0.963.",
    },
    {
      title: "Spatial interpretation",
      text: "Predictions joined to district geography and mapped.",
    },
    {
      title: "Decision support",
      text: "Threshold-based alert engine; authority review and coordination.",
    },
    {
      title: "User delivery",
      text: "Dashboard, public portal, and mobile app carry the results to each audience.",
    },
  ] as MethodStage[],

  results: {
    primary: [
      {
        value: 0.875,
        decimals: 3,
        label: "F1 score",
        note: "Held-out data. The harmonic mean of precision and recall: a single summary of what the model flags and what it finds.",
      },
      {
        value: 0.963,
        decimals: 3,
        label: "ROC-AUC",
        note: "Held-out data. The model's ability to rank a true flood-risk case above a non-case.",
      },
    ] as MetricFigure[],
    supporting: [
      { value: "12", label: "Districts", note: "Districts covered in the spatial database." },
      { value: "52", label: "Flood events", note: "Historical flood events in the modelling evidence." },
    ],
    caveat:
      "These are held-out evaluation figures from the modelling work. They describe performance on the project's own test data, not a guarantee of real-world accuracy.",
  },

  spatialParagraphs: [
    "Geography is what turns a risk score into a decision. A district-level prediction means little until it is placed on a map, next to the rivers, roads, and settlements it affects. PostGIS holds that relationship: every prediction is joined to the district it belongs to, so the dashboard can show where risk concentrates and the alert engine can warn the right places.",
  ],
  spatialSequence: [
    { label: "Districts", text: "The 12 districts under study." },
    { label: "Geographic data", text: "Boundaries and spatial attributes in PostGIS." },
    { label: "Predicted risk", text: "Model scores joined to each district." },
    { label: "Spatial visualization", text: "Risk rendered as district-level maps." },
    { label: "Decision support", text: "Maps and tables authorities can act on." },
  ] as FlowStage[],

  interfaces: [
    {
      index: "01",
      title: "Authority dashboard",
      role: "For decision-makers",
      paragraphs: [
        "The working surface of the system. District risk levels, mapped and tabulated; a threshold-based alert engine with issue and deactivate controls; coordination views for volunteers and field reports.",
        "It is built for the moment a warning has to become a decision: review the risk, issue the alert, coordinate the response.",
      ],
      placeholder: "AUTHORITY DASHBOARD · INTERFACE CAPTURE TO BE ADDED",
    },
    {
      index: "02",
      title: "Public portal",
      role: "For the public",
      paragraphs: [
        "The same risk information, translated for public users. District-level risk maps and charts, active alerts, and safety guidance, available without login.",
        "Built in Next.js. No account is needed to see the risk picture for a district.",
      ],
      placeholder: "PUBLIC PORTAL · INTERFACE CAPTURE TO BE ADDED",
    },
    {
      index: "03",
      title: "Flutter mobile application",
      role: "For the field",
      paragraphs: [
        "Risk information that travels. The mobile designs carry alerts and volunteer coordination into the field, where decisions happen away from a desk.",
        "The screens exist as prototype mockups, designed around the same backend and role-based access as the dashboard and portal.",
      ],
      placeholder: "MOBILE APP · INTERFACE CAPTURE TO BE ADDED",
    },
  ] as InterfaceSurface[],

  technology: [
    {
      label: "Modelling",
      text: "Python. Three approaches trained and compared, including XGBoost; the selected model is an MLP neural network. k-fold cross-validation with final scoring on held-out data, managed in a central model registry.",
    },
    {
      label: "Data and spatial",
      text: "PostgreSQL with PostGIS for the spatial database. QGIS for spatial analysis, Leaflet for map rendering, and an automated ETL pipeline ingesting weather data from the Open-Meteo API.",
    },
    {
      label: "Backend",
      text: "FastAPI with JWT authentication and role-based access across authority, NGO, public, and volunteer roles.",
    },
    {
      label: "Interfaces",
      text: "Authority dashboard with Leaflet mapping, a Next.js public portal, and a Flutter mobile app for alerts and volunteer coordination.",
    },
  ] as TechGroup[],

  closingNote:
    "A research build. The figures above describe held-out evaluation of the modelling work, not operational performance, and the system is documented here as the author's own project record.",
};
