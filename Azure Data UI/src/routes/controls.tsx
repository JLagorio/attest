import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Search } from "lucide-react";

import { Shell } from "@/components/app/shell";
import {
  Badge,
  Button,
  Card,
  Dot,
  FilterChip,
  Mono,
  PageHeader,
  Table,

  Td,
  Th,
  Tr,
} from "@/components/app/ui";
import { controlStateTone, controls } from "@/lib/grc-data";

export const Route = createFileRoute("/controls")({
  head: () => ({
    meta: [
      { title: "Controls — Equinox GRC" },
      {
        name: "description",
        content:
          "Monitor 118 automated and manual controls: run state, owner, evidence count, and last evaluation across every framework.",
      },
      { property: "og:title", content: "Controls — Equinox GRC" },
      {
        property: "og:description",
        content: "Run state, owners, evidence counts and last evaluation for every control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Controls,
});

const tabs = [
  { label: "All controls", count: 7 },
  { label: "Failing", count: 2 },
  { label: "Needs review", count: 2 },
  { label: "Automated", count: 3 },
];

function Controls() {
  const [tab, setTab] = useState("All controls");
  const filtered = controls.filter((c) =>
    tab === "Failing"
      ? c.state === "Failing"
      : tab === "Needs review"
        ? c.state === "Needs review"
        : tab === "Automated"
          ? c.automation === "Automated"
          : true,
  );

  return (
    <Shell>
      <div className="space-y-5 animate-slide-up">
        <PageHeader
          title="Controls"
          description="Evaluations run continuously against connected systems. Manual controls require an attestation each cycle."
          actions={
            <>
              <Button variant="secondary">Add control</Button>
              <Button variant="primary">
                <Play className="size-3.5" /> Run all checks
              </Button>
            </>
          }
        />

        <div className="flex items-center gap-4 border-b border-border">
            {tabs.map((t) => {
              const active = t.label === tab;
              return (
                <button key={t.label} onClick={() => setTab(t.label)}>
                  <span
                    className={
                      active
                        ? "-mb-px inline-flex items-center gap-1.5 border-b-2 border-primary px-0.5 pb-2.5 pt-1 text-[13px] font-semibold text-primary"
                        : "-mb-px inline-flex items-center gap-1.5 border-b-2 border-transparent px-0.5 pb-2.5 pt-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                    }
                  >
                    {t.label}
                    <span className="tnum rounded bg-muted px-1 text-[11px] font-medium text-muted-foreground">
                      {t.count}
                    </span>
                  </span>
                </button>
              );
            })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="inline-flex h-7 items-center gap-1.5 rounded-md bg-card px-2 shadow-button">
            <Search className="size-3.5 text-muted-foreground" />
            <input
              placeholder="Search controls"
              className="w-44 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
            />
          </label>
          <FilterChip label="Framework" />
          <FilterChip label="Owner" />
          <FilterChip label="Automation" />
        </div>

        <Card className="overflow-hidden">
          <Table>
            <thead>
              <tr>
                <Th className="w-[104px]">Control</Th>
                <Th>Name</Th>
                <Th className="w-[104px]">Framework</Th>
                <Th className="w-[128px]">Owner</Th>
                <Th className="w-[104px]">Automation</Th>
                <Th className="w-[92px] text-right">Evidence</Th>
                <Th className="w-[104px]">Last run</Th>
                <Th className="w-[124px] text-right">State</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((control) => (
                <Tr key={control.id}>
                  <Td>
                    <Mono className="text-muted-foreground">{control.id}</Mono>
                  </Td>
                  <Td className="font-medium">{control.name}</Td>
                  <Td className="text-muted-foreground">{control.framework}</Td>
                  <Td className="text-muted-foreground">{control.owner}</Td>
                  <Td>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                      <Dot tone={control.automation === "Automated" ? "info" : "neutral"} />
                      {control.automation}
                    </span>
                  </Td>
                  <Td className="tnum text-right text-muted-foreground">{control.evidence}</Td>
                  <Td className="text-[12px] text-muted-foreground">{control.lastRun}</Td>
                  <Td className="text-right">
                    <Badge tone={controlStateTone[control.state]}>{control.state}</Badge>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </Shell>
  );
}
