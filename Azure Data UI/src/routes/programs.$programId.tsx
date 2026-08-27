import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronLeft, MoreHorizontal, Plus } from "lucide-react";

import { PoamSection } from "@/components/app/poam";
import { Shell } from "@/components/app/shell";
import {
  Badge,
  Button,
  Dot,
  Field,
  Input,
  KeyValue,
  Meter,
  Modal,
  Mono,
  Section,
  Select,
  Table,
  Td,
  Textarea,
  Th,
  Tr,
} from "@/components/app/ui";
import {
  assessmentTone,
  controlFamilies,
  programControls,
  poamForProgram,
  programStatusTone,
  programTimeline,
  programs,
} from "@/lib/grc-data";

export const Route = createFileRoute("/programs/$programId")({
  loader: ({ params }) => {
    const program = programs.find(
      (p) => p.id.toLowerCase() === params.programId.toLowerCase(),
    );
    if (!program) throw notFound();
    return program;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Program"} — Equinox GRC` },
      {
        name: "description",
        content:
          loaderData?.summary ??
          "Program detail: FIPS-199 categorization, NIST SP 800-53 control families, assessment results and authorization history.",
      },
      { property: "og:title", content: `${loaderData?.name ?? "Program"} — Equinox GRC` },
      {
        property: "og:description",
        content:
          loaderData?.summary ??
          "System assessment program with NIST SP 800-53 control families and results.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramDetail,
});

const tabs = ["Overview", "Controls", "Assessment", "POA&M", "Activity"];

function ProgramDetail() {
  const program = Route.useLoaderData();
  const [tab, setTab] = useState("Overview");
  const [assessing, setAssessing] = useState(false);
  const [family, setFamily] = useState("All");

  const openPoam = poamForProgram(program.id).filter(
    (i) => i.status !== "Completed" && i.status !== "Risk accepted",
  ).length;
  const pct = Math.round((program.controlsAssessed / program.controlsTotal) * 100);
  const rows = useMemo(
    () => (family === "All" ? programControls : programControls.filter((c) => c.family === family)),
    [family],
  );

  return (
    <Shell>
      <div className="animate-slide-up space-y-6">
        <Link
          to="/programs"
          className="inline-flex items-center gap-1 text-[13px] text-primary hover:underline"
        >
          <ChevronLeft className="size-3.5" /> Programs
        </Link>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-[22px] font-semibold tracking-[-0.02em]">{program.name}</h1>
              <Badge tone={programStatusTone[program.status]}>{program.status}</Badge>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
              <Mono>{program.id}</Mono>
              <span className="text-border">·</span>
              <span>{program.system}</span>
              <span className="text-border">·</span>
              <span>{program.baseline}</span>
              <span className="text-border">·</span>
              <span>Owned by {program.owner}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">Export SSP</Button>
            <Button variant="primary" onClick={() => setAssessing(true)}>
              <Plus className="size-3.5" /> Record assessment
            </Button>
            <Button variant="secondary" className="w-8 px-0">
              <MoreHorizontal className="size-4" />
            </Button>
          </div>
        </div>

        {/* Rules, not cards */}
        <div className="grid grid-cols-2 border-y border-border sm:grid-cols-4">
          {[
            { label: "Categorization", value: program.impact, sub: `C ${program.confidentiality} · I ${program.integrity} · A ${program.availability}` },
            { label: "Controls in baseline", value: String(program.controlsTotal), sub: `${program.controlsTotal - program.controlsAssessed} not yet assessed` },
            { label: "Assessment progress", value: `${pct}%`, meter: pct },
            { label: "Open POA&M items", value: String(openPoam), sub: `${program.controlsFailing} controls other than satisfied` },
          ].map((s) => (
            <div
              key={s.label}
              className="border-b border-border px-4 py-3 first:pl-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <div className="text-[12px] text-muted-foreground">{s.label}</div>
              <div className="tnum mt-0.5 text-[17px] font-semibold tracking-[-0.01em]">
                {s.value}
              </div>
              {typeof s.meter === "number" ? (
                <div className="mt-2">
                  <Meter value={s.meter} tone={s.meter === 100 ? "success" : "info"} />
                </div>
              ) : (
                <div className="mt-0.5 text-[12px] text-muted-foreground">{s.sub}</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-b border-border">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)}>
              <span
                className={
                  t === tab
                    ? "-mb-px inline-flex border-b-2 border-primary px-0.5 pb-2.5 pt-1 text-[13px] font-semibold text-primary"
                    : "-mb-px inline-flex border-b-2 border-transparent px-0.5 pb-2.5 pt-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {t}
              </span>
            </button>
          ))}
        </div>

        <div className={tab === "POA&M" ? "grid gap-8" : "grid gap-8 lg:grid-cols-[minmax(0,1fr)_264px]"}>
          <div className="min-w-0 space-y-8">
            {tab === "Controls" || tab === "Assessment" ? (
              <Section
                title="Control assessment"
                description="NIST SP 800-53 Rev. 5 controls tailored to this program."
                action={
                  <Select
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                    className="h-7 w-[176px]"
                  >
                    <option value="All">All families</option>
                    {controlFamilies.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.id} — {f.name}
                      </option>
                    ))}
                  </Select>
                }
              >
                <Table>
                  <thead>
                    <tr>
                      <Th className="w-[84px]">Control</Th>
                      <Th>Title</Th>
                      <Th className="w-[164px]">Implementation</Th>
                      <Th className="w-[160px]">Assessment</Th>
                      <Th className="w-[176px]">Source</Th>
                      <Th className="w-[88px] text-right">Assessed</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((c) => (
                      <Tr key={c.id}>
                        <Td className="w-[84px]">
                          <Mono>{c.id}</Mono>
                        </Td>
                        <Td className="font-medium">{c.title}</Td>
                        <Td className="w-[164px] text-muted-foreground">{c.implementation}</Td>
                        <Td className="w-[160px]">
                          <Badge tone={assessmentTone[c.assessment]}>{c.assessment}</Badge>
                        </Td>
                        <Td className="w-[176px] text-muted-foreground">{c.source}</Td>
                        <Td className="tnum w-[88px] text-right text-muted-foreground">
                          {c.assessed}
                        </Td>
                      </Tr>
                    ))}
                  </tbody>
                </Table>
              </Section>
            ) : null}

            {tab === "Overview" ? (
              <>
                <Section
                  title="Control families"
                  description="Coverage of the tailored baseline by NIST 800-53 family."
                  action={
                    <Button variant="link" onClick={() => setTab("Controls")}>
                      View all controls
                    </Button>
                  }
                >
                  <Table>
                    <thead>
                      <tr>
                        <Th className="w-[56px]">ID</Th>
                        <Th>Family</Th>
                        <Th className="w-[64px] text-right">Total</Th>
                        <Th className="w-[80px] text-right">Satisfied</Th>
                        <Th className="w-[64px] text-right">Other</Th>
                        <Th className="w-[80px] text-right">Inherited</Th>
                        <Th className="w-[132px]">Coverage</Th>
                        <Th className="w-[120px]">Owner</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {controlFamilies.map((f) => {
                        const cov = Math.round((f.satisfied / f.total) * 100);
                        return (
                          <Tr key={f.id}>
                            <Td className="w-[56px]">
                              <Mono>{f.id}</Mono>
                            </Td>
                            <Td className="font-medium">{f.name}</Td>
                            <Td className="tnum w-[64px] text-right text-muted-foreground">{f.total}</Td>
                            <Td className="tnum w-[80px] text-right text-muted-foreground">{f.satisfied}</Td>
                            <Td className="tnum w-[64px] text-right text-muted-foreground">{f.other}</Td>
                            <Td className="tnum w-[80px] text-right text-muted-foreground">{f.inherited}</Td>
                            <Td className="w-[132px]">
                              <span className="flex items-center gap-2">
                                <span className="w-14">
                                  <Meter value={cov} tone={cov >= 95 ? "success" : cov >= 80 ? "info" : "warning"} />
                                </span>
                                <span className="tnum text-muted-foreground">{cov}%</span>
                              </span>
                            </Td>
                            <Td className="w-[120px] text-muted-foreground">{f.owner}</Td>
                          </Tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Section>

                <Section title="System description">
                  <p className="max-w-3xl pt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {program.summary}
                  </p>
                </Section>
              </>
            ) : null}

            {tab === "POA&M" ? (
              <PoamSection
                programId={program.id}
                programName={program.name}
                defaultOwner={program.owner}
              />
            ) : null}


            {tab === "Activity" || tab === "Overview" ? (
              <Section title="Activity">
                <ol className="pt-1">
                  {programTimeline.map((e) => (
                    <li key={e.title} className="flex gap-3 border-b border-border/70 py-2.5 last:border-0">
                      <span className="mt-1.5">
                        <Dot tone={e.tone} />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[13px]">{e.title}</span>
                      <span className="shrink-0 text-[12px] text-muted-foreground">{e.actor}</span>
                      <span className="tnum w-[104px] shrink-0 text-right text-[12px] text-muted-foreground">
                        {e.time}
                      </span>
                    </li>
                  ))}
                </ol>
              </Section>
            ) : null}
          </div>

          {/* Right rail */}
          {tab === "POA&M" ? null : <aside className="space-y-6 lg:border-l lg:border-border lg:pl-6">
            <div>
              <div className="border-b border-border pb-2 text-[13px] font-semibold">
                Program details
              </div>
              <dl className="pt-1">
                <KeyValue label="System type">{program.type}</KeyValue>
                <KeyValue label="Environment">{program.environment}</KeyValue>
                <KeyValue label="Acronym">
                  <Mono>{program.acronym}</Mono>
                </KeyValue>
                <KeyValue label="Baseline">{program.baseline}</KeyValue>
                <KeyValue label="Assessor">{program.assessor}</KeyValue>
                <KeyValue label="AO">{program.authorizingOfficial}</KeyValue>
                <KeyValue label="Authorized">{program.authorized}</KeyValue>
                <KeyValue label="Expires">{program.expires}</KeyValue>
                <KeyValue label="Updated">{program.updated}</KeyValue>
              </dl>
            </div>
            <div>
              <div className="border-b border-border pb-2 text-[13px] font-semibold">
                Linked records
              </div>
              <div className="space-y-1.5 pt-2 text-[13px]">
                <Link to="/risks" className="block text-primary hover:underline">
                  3 risks linked to this system
                </Link>
                <Link to="/controls" className="block text-primary hover:underline">
                  Control library mappings
                </Link>
                <Link to="/evidence" className="block text-primary hover:underline">
                  128 evidence artifacts
                </Link>
              </div>
            </div>
          </aside>}
        </div>
      </div>

      <Modal
        open={assessing}
        onClose={() => setAssessing(false)}
        title="Record a control assessment"
        description={`${program.id} · ${program.baseline}`}
        footer={
          <>
            <Button variant="ghost" onClick={() => setAssessing(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setAssessing(false)}>
              Save assessment
            </Button>
          </>
        }
      >
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Control">
              <Select defaultValue="AC-6(9)">
                {programControls.map((c) => (
                  <option key={c.id}>{c.id}</option>
                ))}
              </Select>
            </Field>
            <Field label="Result">
              <Select defaultValue="Other than satisfied">
                <option>Satisfied</option>
                <option>Other than satisfied</option>
                <option>Not applicable</option>
              </Select>
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Assessment method">
              <Select defaultValue="Test">
                <option>Examine</option>
                <option>Interview</option>
                <option>Test</option>
              </Select>
            </Field>
            <Field label="Assessed on">
              <Input type="date" defaultValue="2026-08-27" />
            </Field>
          </div>
          <Field label="Assessor findings" hint="Included verbatim in the SAR export.">
            <Textarea placeholder="Privileged function invocations on the settlement service are not forwarded to the audit sink; sampling of 20 events found 6 missing." />
          </Field>
        </div>
      </Modal>
    </Shell>
  );
}
