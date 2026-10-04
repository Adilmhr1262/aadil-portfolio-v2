export const profile = {
  name: "Aadil Ali Mahar",
  role: "Computer Science Graduate",
  university: "The Islamia University of Bahawalpur",
  country: "Pakistan",
  email: "aadilmaharr@gmail.com",
  home: "Ghotki / Mirpur Mathelo, Sindh",
  languages: ["Sindhi", "Urdu", "English", "Hindi"],
  degree: {
    title: "B.S. Computer Science",
    school: "The Islamia University of Bahawalpur",
    dates: "2022 – 2026",
    detail: "Graduated February 2026 · CGPA 3.02 / 4.00",
  },
  summary:
    "I am a computer science graduate from The Islamia University of Bahawalpur, Pakistan. I work with machine learning models, spatial data, and full-stack engineering, most recently on a flood-risk prediction and early-warning system for Sindh.",
} as const;

export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Research", href: "#research" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  title: string;
  year: string;
  status: "complete" | "in-progress";
  stack: string;
  summary: string;
};

export const projects: Project[] = [
  {
    title: "Flood-Risk Prediction and Early-Warning System",
    year: "2026",
    status: "complete",
    stack: "Python · FastAPI · PostgreSQL / PostGIS · Flutter",
    summary:
      "End-to-end decision-support system for flood-prone districts in Sindh: spatial database of 12 districts and 52 historical flood events, three trained machine-learning models (best held-out F1 0.875, ROC-AUC 0.963), and interfaces for authorities, volunteers, and the public.",
  },
  {
    title: "PALMS: Personalized Adaptive Learning Management System",
    year: "2025",
    status: "complete",
    stack: "Next.js · TypeScript · FastAPI · PostgreSQL",
    summary:
      "Learning platform with adaptive mastery tracking: auto-graded MCQ and true/false assessments, teacher-graded short answers, and one active recommendation per student, topic, and rule. Backend test suite: 84 of 84 passing.",
  },
  {
    title: "Health and Care",
    year: "2025",
    status: "complete",
    stack: "Kotlin · Firebase · Google Maps",
    summary:
      "Final-year project (Grade A): proposed Android ambulance application with booking, one-tap SOS, live tracking, driver communication, booking history, and admin management.",
  },
  {
    title: "Personal Nutrition and Calorie Tracking System",
    year: "2025",
    status: "complete",
    stack: "React · Python Flask · SQLite · Nutritionix API",
    summary:
      "Photo-based food tracking: capture or upload a meal photo to identify items and estimate calories, protein, carbohydrates, and fats, with dashboards, goals, and daily reports.",
  },
];

export type ResearchLine = {
  title: string;
  state: "built" | "direction";
  body: string;
};

export const research: ResearchLine[] = [
  {
    title: "Flood-risk prediction and early warning",
    state: "built",
    body: "The complete system built in 2026: spatial data engineering, trained models with held-out validation, and a working alert pipeline. It is the first full example of my research approach: turn data into tools that help people decide.",
  },
  {
    title: "Urban heat and green cover, Karachi 2015–2025",
    state: "built",
    body: "A reproducible pipeline relating vegetation to land surface temperature from Landsat imagery, presented through an interactive dashboard. Environmental data, kept honest: every number traces back to its source.",
  },
  {
    title: "Precise nutritional modelling",
    state: "direction",
    body: "A direction for graduate study: integrate feed composition, animal performance, and rumen microflora data into predictive models that give practical feeding guidance. No results yet; the modelling comes first.",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "HR Specialist",
    company: "Smart Marketing Methods",
    location: "Germany · remote",
    dates: "Feb 2025 – Sep 2026",
    summary:
      "Full-cycle remote recruitment across engineering, trading, and operations roles; team time-tracking and payroll coordination.",
  },
  {
    role: "Customer Service Representative",
    company: "LIBT Admission centre",
    location: "UK · remote",
    dates: "Apr 2025 – Sep 2025",
    summary:
      "Guided 100+ students through the UK university admission journey: course selection, document review, timelines, and follow-ups.",
  },
  {
    role: "Data Scientist",
    company: "Data science China",
    location: "China · remote",
    dates: "Oct 2024 – Mar 2025",
    summary:
      "Web data collection, cleaning pipelines in Python, exploratory analysis, and analytical reports, with ownership from collection to reporting.",
  },
  {
    role: "Travel Agent",
    company: "Asaptickets",
    location: "US · remote",
    dates: "Feb 2024 – Jul 2024",
    summary:
      "Custom itineraries (routes, bookings, schedules) and client queries in fluent English.",
  },
];
