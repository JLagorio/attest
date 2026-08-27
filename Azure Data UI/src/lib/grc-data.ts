import type { Tone } from "@/components/app/ui";

export type Risk = {
  id: string;
  title: string;
  summary: string;
  owner: string;
  team: string;
  framework: string;
  control: string;
  inherent: number;
  residual: number;
  likelihood: string;
  impact: string;
  status: "Active" | "Mitigating" | "Accepted" | "Closed";
  tone: Tone;
  updated: string;
  opened: string;
  due: string;
  treatment: string;
};

export const risks: Risk[] = [
  {
    id: "RSK-2419",
    title: "IDOR on billing export endpoint",
    summary:
      "Object references on /v1/exports are not scoped to the requesting workspace, allowing cross-tenant document retrieval when an ID is guessed.",
    owner: "Linus Aarto",
    team: "Platform Security",
    framework: "SOC 2",
    control: "CC6.1",
    inherent: 92,
    residual: 71,
    likelihood: "Likely",
    impact: "Severe",
    status: "Active",
    tone: "danger",
    updated: "Aug 27, 09:41",
    opened: "Aug 12, 2026",
    due: "Sep 04, 2026",
    treatment: "Mitigate",
  },
  {
    id: "RSK-2402",
    title: "Configuration drift across production clusters",
    summary:
      "Terraform state and live cluster configuration diverge in us-east-2 after three manual hotfixes applied during the July incident window.",
    owner: "Marcus Ryde",
    team: "Infrastructure",
    framework: "ISO 27001",
    control: "A.8.9",
    inherent: 78,
    residual: 34,
    likelihood: "Possible",
    impact: "Major",
    status: "Mitigating",
    tone: "warning",
    updated: "Aug 26, 17:02",
    opened: "Jul 30, 2026",
    due: "Sep 15, 2026",
    treatment: "Mitigate",
  },
  {
    id: "RSK-2388",
    title: "Admin token issuance is not logged to the audit sink",
    summary:
      "Break-glass admin tokens bypass the structured audit pipeline, leaving a gap in privileged access evidence for auditor sampling.",
    owner: "Grace Hoppel",
    team: "Security Engineering",
    framework: "SOC 2",
    control: "CC7.2",
    inherent: 64,
    residual: 22,
    likelihood: "Unlikely",
    impact: "Major",
    status: "Mitigating",
    tone: "warning",
    updated: "Aug 26, 11:20",
    opened: "Jul 18, 2026",
    due: "Sep 30, 2026",
    treatment: "Mitigate",
  },
  {
    id: "RSK-2350",
    title: "Sub-processor lacks a current SOC 2 Type II report",
    summary:
      "Northwind Analytics has not delivered a refreshed report; the prior report expired Jun 30 and covers a superseded control set.",
    owner: "Priya Raghavan",
    team: "Vendor Risk",
    framework: "SOC 2",
    control: "CC9.2",
    inherent: 55,
    residual: 40,
    likelihood: "Possible",
    impact: "Moderate",
    status: "Active",
    tone: "danger",
    updated: "Aug 25, 08:55",
    opened: "Jul 02, 2026",
    due: "Sep 12, 2026",
    treatment: "Transfer",
  },
  {
    id: "RSK-2311",
    title: "Laptop disk encryption unverified for 6 contractors",
    summary:
      "MDM enrollment is missing for contractor devices onboarded through the agency channel in Q2.",
    owner: "Dana Whitlock",
    team: "IT Operations",
    framework: "ISO 27001",
    control: "A.8.1",
    inherent: 48,
    residual: 12,
    likelihood: "Rare",
    impact: "Moderate",
    status: "Closed",
    tone: "success",
    updated: "Aug 21, 14:33",
    opened: "Jun 11, 2026",
    due: "Aug 20, 2026",
    treatment: "Mitigate",
  },
  {
    id: "RSK-2290",
    title: "Retention policy not enforced on analytics warehouse",
    summary:
      "Event-level records older than 24 months persist in the warehouse beyond the documented retention commitment.",
    owner: "Marcus Ryde",
    team: "Data Platform",
    framework: "GDPR",
    control: "Art. 5(1)(e)",
    inherent: 61,
    residual: 45,
    likelihood: "Likely",
    impact: "Moderate",
    status: "Accepted",
    tone: "neutral",
    updated: "Aug 19, 10:07",
    opened: "May 28, 2026",
    due: "Dec 31, 2026",
    treatment: "Accept",
  },
];

export const riskStatusTone: Record<Risk["status"], Tone> = {
  Active: "danger",
  Mitigating: "warning",
  Accepted: "neutral",
  Closed: "success",
};

export const frameworks = [
  { name: "SOC 2 Type II", coverage: 94, controls: "118 / 126", window: "Window closes Oct 31", tone: "success" as const },
  { name: "ISO 27001:2022", coverage: 81, controls: "76 / 93", window: "Stage 2 audit Nov 12", tone: "info" as const },
  { name: "GDPR", coverage: 88, controls: "44 / 50", window: "Continuous", tone: "info" as const },
  { name: "HIPAA", coverage: 62, controls: "31 / 50", window: "Scoping in progress", tone: "warning" as const },
];

export type Control = {
  id: string;
  name: string;
  framework: string;
  owner: string;
  automation: "Automated" | "Manual";
  lastRun: string;
  evidence: number;
  state: "Passing" | "Failing" | "Needs review";
};

export const controls: Control[] = [
  { id: "CC6.1", name: "Logical access provisioning", framework: "SOC 2", owner: "Grace Hoppel", automation: "Automated", lastRun: "12 min ago", evidence: 42, state: "Failing" },
  { id: "CC6.6", name: "Encryption in transit enforced", framework: "SOC 2", owner: "Marcus Ryde", automation: "Automated", lastRun: "12 min ago", evidence: 18, state: "Passing" },
  { id: "CC7.2", name: "Security event logging and review", framework: "SOC 2", owner: "Grace Hoppel", automation: "Automated", lastRun: "1 hr ago", evidence: 63, state: "Needs review" },
  { id: "A.8.9", name: "Configuration management", framework: "ISO 27001", owner: "Marcus Ryde", automation: "Manual", lastRun: "Aug 24", evidence: 9, state: "Failing" },
  { id: "A.6.3", name: "Security awareness training", framework: "ISO 27001", owner: "Dana Whitlock", automation: "Manual", lastRun: "Aug 15", evidence: 214, state: "Passing" },
  { id: "Art. 30", name: "Records of processing activities", framework: "GDPR", owner: "Priya Raghavan", automation: "Manual", lastRun: "Aug 02", evidence: 7, state: "Passing" },
  { id: "CC9.2", name: "Vendor due diligence", framework: "SOC 2", owner: "Priya Raghavan", automation: "Manual", lastRun: "Jul 28", evidence: 31, state: "Needs review" },
];

export const controlStateTone: Record<Control["state"], Tone> = {
  Passing: "success",
  Failing: "danger",
  "Needs review": "warning",
};

export const activity = [
  {
    tone: "success" as const,
    title: "Control CC6.6 verified",
    time: "12:04",
    body: "Automated check passed across 38 production instances.",
    actor: "Continuous monitor",
  },
  {
    tone: "danger" as const,
    title: "RSK-2419 escalated to critical",
    time: "09:41",
    body: "Scanner confirmed cross-tenant document retrieval on /v1/exports.",
    actor: "Linus Aarto",
  },
  {
    tone: "info" as const,
    title: "Evidence requested by auditor",
    time: "08:15",
    body: "Q3 physical access logs for the us-east-2 facility.",
    actor: "Whitcombe LLP",
  },
  {
    tone: "neutral" as const,
    title: "Policy AC-204 acknowledged",
    time: "07:52",
    body: "14 of 16 engineers have signed the updated access policy.",
    actor: "Dana Whitlock",
  },
];
