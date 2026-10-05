/**
 * Nutrition Tracking — case-study content.
 *
 * EVIDENCE RULE: the only source for this case study is the author's own
 * account of the system (supplied 2026-10-04). No source code, screenshots,
 * demo, deployment, or design documents were available for review.
 * Everything below is written as "described", never as verified fact.
 * Do not invent architecture, schemas, metrics, users, or outcomes.
 */

export const nutrition = {
  classification: "Project account",
  year: "2025",
  name: "Nutrition Tracking",
  fullName: "Personal Nutrition and Calorie Tracking System",
  statement:
    "A web-based system for tracking what you eat: log meals, search a food database, or photograph a meal to identify it — with calories, protein, carbohydrates, and fats estimated per item, and progress shown on dashboards against personal goals.",

  metadata: [
    { label: "Project type", value: "Independent project" },
    { label: "Year", value: "2025 (portfolio entry)" },
    { label: "Frontend", value: "React · HTML · CSS · JavaScript" },
    { label: "Backend", value: "Python Flask · SQLite" },
    { label: "Food data", value: "Nutritionix API" },
    { label: "Charts", value: "Chart.js dashboards" },
    {
      label: "Evidence",
      value: "Author's account — no code or captures available",
    },
  ],

  problem: {
    title: "The tracking burden.",
    paragraphs: [
      "Keeping a record of what you eat — calories, protein, carbohydrates, and fats, for every meal, every day — is the kind of task that fails on effort alone. The recording is the work, and most of it happens at the table, in the moment.",
      "The system described here was built to take on that burden: make recording a meal cheap enough to actually do. Log it by hand, find it in a food database, or photograph the plate and let the system identify what is on it.",
    ],
  },

  system: {
    title: "A small web stack, as described.",
    lede: "The author's account names five pieces. Nothing more is documented about how they fit together.",
    rows: [
      {
        label: "Frontend",
        value: "React with HTML, CSS, and JavaScript",
      },
      { label: "Backend", value: "Python Flask" },
      { label: "Data", value: "SQLite" },
      { label: "Food data", value: "Nutritionix API" },
      { label: "Charts", value: "Chart.js dashboards" },
    ],
  },

  photo: {
    title: "Photograph the meal.",
    lede:
      "The defining interaction, as described: instead of typing out every item, capture or upload a photo of the meal.",
    steps: [
      {
        no: "01",
        title: "Capture or upload",
        body: "Take a photo of the meal or upload one already on the device.",
      },
      {
        no: "02",
        title: "Identify",
        body: "The system identifies the food items in the photo.",
      },
      {
        no: "03",
        title: "Estimate",
        body: "Calories, protein, carbohydrates, and fats are estimated for the identified items and recorded against the day.",
      },
    ],
    note: "Which recognition step turns the photo into identified food items was not documented in the available account.",
  },

  features: {
    title: "What the system does.",
    lede:
      "The feature list below is the author's account, presented as described — not as verified behavior of a reviewed system.",
    items: [
      {
        label: "Meal logging",
        value: "Record meals across the day",
      },
      {
        label: "Food database search",
        value: "Look up foods via the Nutritionix API",
      },
      {
        label: "Calorie tracking",
        value: "Calories recorded per item and per day",
      },
      {
        label: "Macronutrient tracking",
        value: "Protein, carbohydrates, and fats per item",
      },
      {
        label: "Personalized goals",
        value: "Targets set per user",
      },
      {
        label: "User profiles",
        value: "Individual accounts with their own data",
      },
      {
        label: "Progress charts",
        value: "Chart.js dashboards of intake over time",
      },
      {
        label: "Daily reports",
        value: "A summary of each day's intake",
      },
    ],
  },

  evidence: {
    title: "What this case study can prove.",
    lede:
      "An honest boundary, stated plainly. The left column is what the author's account establishes; the right column is what it does not.",
    documented: [
      "The system's name and purpose",
      "The described stack: React, Flask, SQLite, Nutritionix API, Chart.js",
      "The described features: logging, search, goals, dashboards, reports",
      "The described photo flow: capture or upload, identify, estimate",
      "The author's account, supplied 2026-10-04",
    ],
    notVerified: [
      "Working implementation",
      "Source code",
      "Running deployment",
      "Real users",
      "Accuracy of photo identification",
      "Accuracy of nutrient estimates",
      "Performance or reliability",
    ],
  },

  closing: {
    statement:
      "Can recording what you eat be made cheap enough — a photo instead of a form — that people actually keep doing it?",
    note: "This case study presents the system as its author described it: a photo-based approach to the oldest problem in nutrition tracking, the effort of recording.",
  },
};
