// components/featuresData.ts

export type FeatureId =
  | "interactive"
  | "scoring"
  | "remediation"
  | "exports"
  | "vendor"
  | "security";

export type Feature = {
  id: FeatureId;
  title: string;
  desc: string;
};

export const FEATURES: Feature[] = [
  {
    id: "interactive",
    title: "Interactive Assessments",
    desc: "Guided questions, evidence upload, contextual help.",
  },
  {
    id: "scoring",
    title: "Auto Risk Scoring",
    desc: "Control-level H/M/L plus portfolio heatmap.",
  },
  {
    id: "remediation",
    title: "Remediation Built-In",
    desc: "Tasks, owners, SLAs and due dates.",
  },
  {
    id: "exports",
    title: "Exports & Audit Trail",
    desc: "PDF/CSV, signatures, timestamps, change history.",
  },
  {
    id: "vendor",
    title: "Vendor Friendly",
    desc: "Minimal friction, status, reminders.",
  },
  {
    id: "security",
    title: "Security First",
    desc: "Encryption, least-privilege, logging.",
  },
];
