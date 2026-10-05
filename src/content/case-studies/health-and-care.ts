import type { CaseFigure } from "@/components/case-study/types";

/**
 * Health and Care — Ambulance Service Android Application.
 *
 * Final-year academic project, BS Computer Science, The Islamia University
 * of Bahawalpur. Supervisor documented in both the SRS and SDD: Mr. Fahad Ali.
 *
 * EVIDENCE RULE: this is a design-dossier case study. The available evidence
 * is the SRS document, the SDD document, UI mockups, and system diagrams.
 * There is no verified source code, APK, Firebase configuration, deployment,
 * working-app screenshot, empirical testing, or measured performance.
 * Copy must use documented / specified / proposed / designed — never
 * implemented, deployed, tested, launched, or achieved.
 */

export const healthCare = {
  name: "Health and Care",
  fullName: "Ambulance Service Android Application",
  classification: "Final-year academic project",
  year: "2025",
  statement:
    "A proposed Android ambulance-service system designed around emergency request, nearest-driver coordination, and location-aware tracking.",

  metadata: [
    { label: "Project type", value: "Final-year academic project" },
    { label: "Degree", value: "BS Computer Science" },
    { label: "University", value: "The Islamia University of Bahawalpur" },
    { label: "Supervisor", value: "Mr. Fahad Ali" },
    { label: "Design dossier", value: "SRS · SDD · UI mockups · System diagrams" },
    { label: "Direction", value: "Kotlin · Firebase · Google Maps" },
  ],

  problem: {
    title: "The coordination gap.",
    paragraphs: [
      "Emergency medical assistance can become difficult to coordinate when ambulance booking, driver availability, location, and communication are disconnected from each other. A person in need of medical transport may have no reliable way to find the nearest available ambulance, and providers may have no structured way to receive and prioritize requests.",
      "The documented design objective was to explore a mobile workflow that could reduce this coordination friction: one request carrying location and emergency information, matched to a nearby available driver, with both sides able to follow the ambulance in real time. The project approaches response time as a design problem to be structured, not as an outcome it claims to have achieved.",
    ],
  },

  system: {
    title: "The documented workflow.",
    intro:
      "The system design centers on a single emergency request and follows it from the patient's phone to the driver's acceptance. Each step below is documented in the SRS use cases and the SDD sequence design.",
    steps: [
      {
        title: "Request",
        body: "The user requests an ambulance, providing location and emergency information. A one-tap SOS path is documented for situations where every second of interaction matters.",
      },
      {
        title: "Match",
        body: "The documented design identifies a nearby available driver using location and availability, rather than leaving the patient to search.",
      },
      {
        title: "Notify",
        body: "The selected driver receives the request with its details through the documented notification flow.",
      },
      {
        title: "Accept",
        body: "The driver accepts or rejects the request. A rejection returns the request to matching against the next nearest available driver.",
      },
      {
        title: "Confirm",
        body: "The user receives booking confirmation once a driver accepts.",
      },
      {
        title: "Track",
        body: "The proposed interface provides location-aware ambulance tracking with an estimated time of arrival, so the patient can follow the response.",
      },
    ],
  },

  interaction: {
    title: "Three interactions, one emergency.",
    paragraphs: [
      "The UI mockups documented in the system design reduce the product to three primary interactions: access, emergency request, and tracking. The home screen carries two large actions — Request Ambulance and SOS — with no navigation competing for attention during an emergency.",
      "The tracking view pairs a map with an estimated arrival time and the patient's current location, keeping the response visible from dispatch to arrival. The mockups carry the MobileRescue branding used inside the design documents.",
    ],
  },

  architecture: {
    title: "Documented system architecture.",
    paragraphs: [
      "The documented architecture is client-server and Firebase-centric: the Android application authenticates through Firebase Authentication and reads and writes operational data in Cloud Firestore, while the Google Maps API and GPS provide location services.",
      "The SDD also documents an AWS cloud layer described as synchronizing data. The relationship between the Firebase backend and the AWS layer is vague in the source documents, and this case study preserves that ambiguity rather than inventing an implementation detail the documents do not support.",
    ],
  },

  dispatch: {
    title: "Nearest driver, available now.",
    paragraphs: [
      "The central dispatch concept in the documented design is straightforward: match each request to the nearest available driver using location and availability status. The flowchart traces the emergency path from login through the emergency button to immediate dispatch and driver notification.",
      "The documented business rules sharpen this: drivers are expected to respond to requests within 30 seconds, assignment follows proximity and availability, and a request can only be cancelled before the ambulance begins its journey.",
    ],
  },

  roles: {
    title: "Three documented actors.",
    intro:
      "The SRS use-case design defines three actors. Each sees only what its role requires — the same data read three different ways.",
    items: [
      {
        role: "Patient / User",
        sees: "request · tracking · history",
        body: "Registers and logs in, requests an ambulance with location and emergency type, uses one-tap SOS, tracks the ambulance, pays for the service, reviews booking history, and cancels before the journey starts.",
      },
      {
        role: "Ambulance Driver",
        sees: "requests · status · navigation",
        body: "Receives request notifications, accepts or rejects bookings, updates location and availability status, views booking history, and communicates with the patient.",
      },
      {
        role: "System Administrator",
        sees: "fleet · operations · data",
        body: "Manages the ambulance fleet, adding and updating ambulance details, and monitors system operations and stored data.",
      },
    ],
    note: "These are documented capabilities from the requirements — the design scope, not evidence that real drivers or administrators used a built system.",
  },

  data: {
    title: "A small, deliberate data model.",
    paragraphs: [
      "The documented data model keeps four entities: users, drivers, bookings, and payments. A user has bookings; a driver is assigned to bookings; a booking carries the request from creation through completion or cancellation.",
      "The Firestore collections documented in the SDD mirror this directly: users hold identity and contact fields, drivers hold license and availability status, and bookings link the two with a timestamp and a status of pending, completed, or cancelled.",
    ],
  },

  specification: {
    title: "What the documents specify.",
    intro:
      "The technical register below contains only documented specifications. Every performance figure is a specified target — a requirement, not a measured result.",
    items: [
      { label: "Platform", value: "Android 8.0 (Oreo) and above; 2 GB RAM minimum; GPS and internet connectivity required" },
      { label: "Development direction", value: "Kotlin, Android SDK, Material Design guidelines, Android Jetpack" },
      { label: "Authentication", value: "Firebase Authentication (documented)" },
      { label: "Data", value: "Cloud Firestore, NoSQL document collections (documented)" },
      { label: "Location", value: "Google Maps API and GPS for tracking and ETA (documented)" },
      { label: "Payment", value: "Razorpay or Stripe specified in the documentation" },
      { label: "Communication", value: "Twilio specified in the documentation" },
      { label: "Login target", value: "Specified target: under 2 seconds" },
      { label: "ETA target", value: "Specified target: calculated and displayed within 3 seconds" },
      { label: "Tracking target", value: "Documented as every 5 seconds in the SDD and every 10 seconds in the SRS — the documents contradict each other here" },
      { label: "Scale target", value: "Specified target: 500 simultaneous requests without degradation" },
      { label: "Driver response rule", value: "Documented business rule: respond within 30 seconds" },
    ],
  },

  evidence: {
    title: "What this case study can prove.",
    lede:
      "An honest boundary, stated plainly. The left column is what the documents establish; the right column is what they do not.",
    documented: [
      "Requirements and use cases (SRS)",
      "System architecture (SDD)",
      "Dispatch workflow and business rules",
      "Patient / driver / admin roles",
      "UI concepts and interaction design",
      "Data model (User, Driver, Booking, Payment)",
      "Proposed location-aware tracking",
      "Proposed emergency SOS flow",
      "Academic authorship and design documentation",
    ],
    notVerified: [
      "Working Android implementation",
      "Production deployment",
      "Firebase deployment",
      "Live GPS tracking",
      "Real ambulance fleet integration",
      "Payment processing",
      "Real-world users",
      "User testing",
      "Production performance",
      "Measured response-time improvement",
    ],
  },

  outcome: {
    title: "Academic outcome.",
    paragraphs: [
      "Health and Care received Grade A as the final-year project for the BS Computer Science degree. The grade recognizes the academic work — the requirements analysis, system design, and documentation — not a technical deployment or real-world performance, and this case study does not present it as such.",
    ],
  },

  closing: {
    statement:
      "How might mobile location services, structured dispatch logic, and simple emergency interfaces reduce coordination friction during a medical emergency?",
    note: "Health and Care explores that question as a system-design problem — documented carefully, bounded honestly.",
  },
};

export const healthCareFigures: CaseFigure[] = [
  {
    src: "/case-studies/health-and-care/mockups.webp",
    width: 1315,
    height: 681,
    alt: "Three UI design mockups branded MobileRescue: a login screen, a home screen with large Request Ambulance and SOS buttons, and a tracking screen showing a map with an ETA of 15 minutes.",
    caption:
      "UI design mockups documented in the system design. Login, home with Request Ambulance and SOS, and the tracking view with map and ETA.",
    meta: "Design mockup — not a shipped screen",
  },
  {
    src: "/case-studies/health-and-care/sequence.webp",
    width: 2625,
    height: 1323,
    alt: "Sequence diagram with four lifelines — User, App, Firebase, Driver — showing the documented flow: Request Ambulance, Fetch Nearest Driver, Notify Request, Accept Request, Confirm Booking.",
    caption:
      "Documented request flow: User → App → Firebase → Driver → confirmation.",
    meta: "System design",
  },
  {
    src: "/case-studies/health-and-care/architecture.webp",
    width: 568,
    height: 435,
    alt: "Architecture diagram showing the Android app using Firebase Auth, which stores user data in Firestore DB; an AWS Cloud layer synchronizing data; and the Google Maps API providing location services.",
    caption:
      "Documented system architecture: Android app, Firebase Auth, Cloud Firestore, Google Maps API, AWS cloud layer.",
    meta: "As documented — see note",
  },
  {
    src: "/case-studies/health-and-care/dispatch-flow.webp",
    width: 576,
    height: 650,
    alt: "Flowchart of the documented dispatch logic: user logs in, emergency button triggers immediate dispatch, the nearest driver is notified; parallel boxes list request ambulance, nearest-driver assignment, real-time tracking, confirmation, completion.",
    caption:
      "Documented dispatch logic: emergency request → nearest-driver assignment → notification.",
    meta: "System design",
  },
  {
    src: "/case-studies/health-and-care/use-cases.webp",
    width: 1978,
    height: 1246,
    alt: "Use case diagram for the Ambulance Service Application with three actors — User, Ambulance Driver, Admin — and nine use cases including Register/Login, Request Ambulance, Real-Time Tracking, SOS Emergency Request, Payment Processing, and Accept/Reject Booking.",
    caption:
      "Documented actors and use cases: Patient, Ambulance Driver, System Admin.",
    meta: "SRS",
  },
  {
    src: "/case-studies/health-and-care/er-diagram.webp",
    width: 341,
    height: 271,
    alt: "Entity-relationship diagram: USER has BOOKING, DRIVER is assigned_to BOOKING.",
    caption: "Documented data model: User —has→ Booking ←assigned_to— Driver.",
    meta: "System design",
  },
  {
    src: "/case-studies/health-and-care/er-payment.webp",
    width: 466,
    height: 361,
    alt: "Entity-relationship diagram variant: User books Booking; AmbulanceDriver serves Payment.",
    caption: "Booking and payment entities as documented.",
    meta: "System design",
  },
];
