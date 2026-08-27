import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ Button */

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "link";
type ButtonSize = "sm" | "md";

const buttonBase =
  "inline-flex select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium transition-[box-shadow,background-color,color,transform] duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-button-primary hover:brightness-[1.07] active:brightness-95",
  secondary: "bg-card text-foreground shadow-button hover:bg-subtle",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
  danger: "bg-danger text-primary-foreground shadow-button-primary hover:brightness-[1.07]",
  link: "text-primary hover:underline underline-offset-2 decoration-primary/40",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-7 px-2.5 text-[13px]",
  md: "h-8 px-3 text-[13px]",
};

export function Button({
  variant = "secondary",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return (
    <button
      className={cn(
        buttonBase,
        buttonVariants[variant],
        variant === "link" ? "h-auto px-0 text-[13px]" : buttonSizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function IconButton({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        buttonBase,
        "size-7 shrink-0 text-muted-foreground shadow-button hover:bg-subtle hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

/* ------------------------------------------------------------------- Badge */

export type Tone = "neutral" | "success" | "warning" | "danger" | "info";

const toneStyles: Record<Tone, string> = {
  neutral: "bg-muted text-muted-foreground ring-border-strong/70",
  success: "bg-success-soft text-success ring-success/20",
  warning: "bg-warning-soft text-warning ring-warning/25",
  danger: "bg-danger-soft text-danger ring-danger/20",
  info: "bg-info-soft text-info ring-info/20",
};

export function Badge({
  tone = "neutral",
  children,
  icon,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-[5px] px-1.5 py-0.5 text-[12px] font-medium leading-4 ring-1 ring-inset",
        toneStyles[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function Dot({ tone = "neutral" }: { tone?: Tone }) {
  const map: Record<Tone, string> = {
    neutral: "bg-muted-foreground/50",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-info",
  };
  return <span className={cn("size-1.5 shrink-0 rounded-full", map[tone])} />;
}

/* -------------------------------------------------------------------- Card */

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}
      {...props}
    />
  );
}

/* ----------------------------------------------------------------- Section */
/* Borderless block: a rule + label, the way Stripe separates page regions. */

export function Section({
  title,
  description,
  action,
  children,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="flex items-center justify-between gap-4 border-b border-border pb-2">
        <div className="min-w-0">
          <h2 className="text-[13px] font-semibold tracking-[-0.005em]">{title}</h2>
          {description ? (
            <p className="mt-0.5 text-[12px] text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}

export function CardHeader({
  title,
  description,
  action,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 border-b border-border px-4 py-3",
        className,
      )}
    >
      <div className="min-w-0">
        <h2 className="text-[14px] font-semibold tracking-[-0.01em]">{title}</h2>
        {description ? (
          <p className="mt-0.5 text-[13px] text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
    </div>
  );
}

/* ------------------------------------------------------------------- Table */

export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full border-collapse text-left text-[13px]", className)} {...props} />
    </div>
  );
}

export function Th({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "h-8 whitespace-nowrap border-b border-border px-3 text-[12px] font-medium text-muted-foreground first:pl-3 last:pr-3",
        className,
      )}
      {...props}
    />
  );
}

export function Td({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "h-9 max-w-0 truncate whitespace-nowrap px-3 align-middle first:pl-3 last:pr-3",
        className,
      )}
      {...props}
    />
  );
}

export function Tr({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-border/70 transition-colors last:border-0 hover:bg-subtle",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------- Tabs */

export function Tabs({
  items,
  active,
}: {
  items: { label: string; to?: string; count?: number }[];
  active: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-border">
      {items.map((item) => {
        const isActive = item.label === active;
        const content = (
          <span
            className={cn(
              "-mb-px inline-flex items-center gap-1.5 border-b-2 px-0.5 pb-2.5 pt-1 text-[13px] transition-colors",
              isActive
                ? "border-primary font-semibold text-primary"
                : "border-transparent font-medium text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
            {typeof item.count === "number" ? (
              <span className="tnum rounded bg-muted px-1 text-[11px] font-medium text-muted-foreground">
                {item.count}
              </span>
            ) : null}
          </span>
        );
        return item.to ? (
          <Link key={item.label} to={item.to}>
            {content}
          </Link>
        ) : (
          <button key={item.label}>{content}</button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ Filter chips */

export function FilterChip({
  label,
  value,
  active,
  className,
  ...props
}: ComponentProps<"button"> & {
  label: string;
  value?: string;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-md border border-dashed px-2 text-[13px] transition-colors",
        active
          ? "border-solid border-primary/30 bg-primary-soft text-primary"
          : "border-border-strong text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground",
        className,
      )}
      {...props}
    >
      <span className="text-[13px] leading-none">+</span>
      {label}
      {value ? <span className="font-medium text-foreground">{value}</span> : null}
    </button>
  );
}

/* ------------------------------------------------------------- Key / value */

export function KeyValue({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[112px_1fr] items-start gap-3 py-1.5">
      <dt className="text-[13px] text-muted-foreground">{label}</dt>
      <dd className="min-w-0 text-[13px] text-foreground">{children}</dd>
    </div>
  );
}

export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-[12px] tracking-tight text-foreground", className)}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------ Progress bar */

export function Meter({ value, tone = "info" }: { value: number; tone?: Tone }) {
  const map: Record<Tone, string> = {
    neutral: "bg-muted-foreground/40",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-primary",
  };
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div className={cn("h-full rounded-full", map[tone])} style={{ width: `${value}%` }} />
    </div>
  );
}

/* ------------------------------------------------------------- Page header */

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="min-w-0">
        {eyebrow ? <div className="mb-1 text-[13px] text-muted-foreground">{eyebrow}</div> : null}
        <h1 className="text-[22px] font-semibold tracking-[-0.02em]">{title}</h1>
        {description ? (
          <p className="mt-1 max-w-2xl text-[13px] text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </div>
  );
}

/* ------------------------------------------------------------ Form inputs */

export function Field({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1 block text-[12px] font-medium text-foreground">{label}</span>
      {children}
      {hint ? <span className="mt-1 block text-[12px] text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

const controlBase =
  "h-8 w-full rounded-md border border-input bg-card px-2.5 text-[13px] text-foreground shadow-[0_1px_1px_oklch(0.21_0.03_264/0.04)] outline-none transition-[box-shadow,border-color] placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/20";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlBase, className)} {...props} />;
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return <select className={cn(controlBase, "pr-7", className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(controlBase, "h-auto min-h-[68px] resize-y py-1.5 leading-snug", className)}
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ Modal */

export function Modal({
  open,
  onClose,
  title,
  description,
  footer,
  aside,
  children,
  width = "md",
}: {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  width?: "md" | "lg";
}) {
  if (!open || typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-10">
      <div
        className="fixed inset-0 bg-foreground/25 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        className={cn(
          "relative z-10 w-full overflow-hidden rounded-xl bg-card shadow-pop",
          width === "lg" ? "max-w-[860px]" : "max-w-[520px]",
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-3.5">
          <div className="min-w-0">
            <h2 className="text-[15px] font-semibold tracking-[-0.01em]">{title}</h2>
            {description ? (
              <p className="mt-0.5 text-[13px] text-muted-foreground">{description}</p>
            ) : null}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            ✕
          </button>
        </div>
        <div className={cn("grid", aside ? "md:grid-cols-[minmax(0,1fr)_300px]" : "")}>
          <div className="px-5 py-4">{children}</div>
          {aside ? (
            <div className="border-t border-border bg-subtle px-5 py-4 md:border-l md:border-t-0">
              {aside}
            </div>
          ) : null}
        </div>
        {footer ? (
          <div className="flex items-center justify-end gap-2 border-t border-border bg-subtle px-5 py-3">
            {footer}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
