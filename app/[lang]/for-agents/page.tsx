import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  Braces,
  ChartNoAxesCombined,
  Check,
  CircleCheck,
  Cloud,
  Database,
  FileArchive,
  FileJson2,
  FileStack,
  FolderClock,
  GitBranch,
  HardDrive,
  History,
  Laptop,
  LockKeyhole,
  Network,
  PanelTop,
  Server,
  ShieldCheck,
  Table2,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/landing/variants";
import { MarketingLayout } from "@/components/marketing-layout";
import FooterSection from "@/components/sections/footer";
import { Link } from "@/i18n/navigation";
import { generateMarketingMetadata } from "@/lib/marketing-og";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ lang: string }> };
type Icon = ComponentType<{ className?: string }>;
type TextItem = { title: string; description: string };
type CapabilityItem = { task: string; description: string };

const contextIcons: Icon[] = [Database, Braces, FolderClock, PanelTop, FileStack, Table2];
const artifactIcons: Icon[] = [FileJson2, Braces, FileStack, FileArchive, GitBranch];
const controlIcons: Icon[] = [LockKeyhole, HardDrive, Cloud, ShieldCheck];

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return generateMarketingMetadata({ page: "for-agents", lang });
}

function ProductFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-black/10 bg-[#11100f] p-1.5 shadow-[0_32px_110px_rgba(16,16,15,0.18)] dark:border-white/12 dark:shadow-[0_32px_110px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={3024}
        height={1730}
        priority={priority}
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
        className="h-auto w-full rounded-[15px]"
      />
    </div>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center text-dory-muted", className)} aria-hidden="true">
      <ArrowDown className="size-4 lg:hidden" />
      <ArrowRight className="hidden size-4 lg:block" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-[11px] font-medium tracking-[0.16em] text-dory-muted uppercase">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2.3rem,4.4vw,4.75rem)] leading-[0.98] font-medium tracking-[-0.05em] text-balance">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-dory-muted md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}

export default async function ForAgentsPage({ params }: PageProps) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "landing" });
  const isCjk = lang === "zh" || lang === "ja";
  const contextItems = t.raw("agentHome.agents.context.items") as TextItem[];
  const artifactFiles = t.raw("agentHome.agents.artifacts.files") as TextItem[];
  const artifactActions = t.raw("agentHome.agents.artifacts.actions") as string[];
  const runFeatures = t.raw("agentHome.agents.runs.features") as string[];
  const handoffSteps = t.raw("agentHome.agents.handoff.steps") as string[];
  const runtimeAgents = t.raw("agentHome.agents.runtime.agents") as string[];
  const runtimeTransports = t.raw("agentHome.agents.runtime.transports") as string[];
  const runtimeModes = t.raw("agentHome.agents.runtime.modes") as TextItem[];
  const capabilities = t.raw("agentHome.agents.capabilities.items") as CapabilityItem[];
  const controls = t.raw("agentHome.agents.privacy.items") as TextItem[];

  return (
    <MarketingLayout lang={lang}>
      <main
        id="main-content"
        lang={lang}
        className="min-h-screen overflow-x-clip bg-dory-page px-4 pb-20 text-dory-ink sm:px-6 md:px-8 lg:px-10"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <header className="relative isolate border-b border-dory-line pt-20 pb-16 sm:pt-24 md:pt-32 md:pb-24">
            <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[620px] w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_68%_0%,rgba(47,108,255,0.16),transparent_42%)] dark:bg-[radial-gradient(circle_at_68%_0%,rgba(136,182,255,0.12),transparent_42%)]" />
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
              <div className="max-w-5xl">
                <p className="text-xs font-medium tracking-[0.16em] text-dory-muted uppercase">
                  {t("agentHome.agents.label")}
                </p>
                <h1
                  className={cn(
                    "mt-6 max-w-[1120px] text-[clamp(3.5rem,7.6vw,7.8rem)] leading-[0.88] font-medium tracking-[-0.068em] text-balance",
                    isCjk && "max-w-[980px] text-[clamp(3.1rem,7vw,7rem)] leading-[0.98] tracking-[-0.055em]",
                  )}
                >
                  {t("agentHome.agents.hero.title")}
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-pretty text-dory-muted md:text-xl md:leading-9">
                  {t("agentHome.agents.hero.description")}
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-stretch lg:pb-2">
                <Link
                  href="/docs/agents/mcp-setup"
                  className={cn(buttonVariants(), "min-h-11 justify-between gap-3 px-4 motion-reduce:transition-none")}
                >
                  {t("agentHome.agents.hero.primaryCta")}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/docs/agents/agent-runs"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "min-h-11 justify-between gap-3 px-4 motion-reduce:transition-none",
                  )}
                >
                  {t("agentHome.agents.hero.secondaryCta")}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative mt-12 md:mt-16">
              <div className="absolute -top-4 right-4 z-10 hidden items-center gap-2 border border-dory-line bg-dory-page px-3 py-2 text-xs font-medium md:flex">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {t("agentHome.agents.hero.runBadge")}
              </div>
              <ProductFrame
                src="/images/agent-runs/agent-run-detail.png"
                alt={t("agentHome.agents.hero.imageAlt")}
                priority
              />
              <div className="mt-4 flex flex-col gap-2 text-sm text-dory-muted sm:flex-row sm:items-center sm:justify-between">
                <p>{t("agentHome.agents.hero.imageCaption")}</p>
                <p className="font-mono text-[11px] tracking-[0.08em] uppercase">Agent Run / Workspace / ResultSet</p>
              </div>
            </div>
          </header>

          <section id="workspace-context" className="border-b border-dory-line py-16 md:py-24">
            <SectionHeading
              eyebrow={t("agentHome.agents.context.eyebrow")}
              title={t("agentHome.agents.context.title")}
              description={t("agentHome.agents.context.description")}
            />

            <div className="mt-12 grid overflow-hidden border border-dory-line lg:grid-cols-[0.72fr_1.28fr]">
              <article className="bg-dory-surface-soft p-5 sm:p-7 lg:border-r lg:border-dory-line lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-medium tracking-[0.13em] text-dory-muted uppercase">
                    {t("agentHome.agents.context.temporaryLabel")}
                  </p>
                  <span className="font-mono text-[10px] text-dory-muted">REQUEST / RESPONSE</span>
                </div>
                <div className="mt-10 flex flex-col items-stretch gap-3">
                  <div className="flex min-h-12 items-center justify-center gap-2 border border-dory-line bg-dory-page px-4 text-sm font-medium">
                    <Bot className="size-4" />
                    Agent
                  </div>
                  <ArrowDown className="mx-auto size-4 text-dory-muted" aria-hidden="true" />
                  <div className="border border-dory-line bg-dory-page px-4 py-4 font-mono text-xs">run_sql(&quot;select …&quot;)</div>
                  <ArrowDown className="mx-auto size-4 text-dory-muted" aria-hidden="true" />
                  <div className="flex min-h-12 items-center justify-center gap-2 border border-dory-line bg-dory-page px-4 text-sm font-medium">
                    <Database className="size-4" />
                    Database
                  </div>
                  <ArrowDown className="mx-auto size-4 text-dory-muted" aria-hidden="true" />
                  <div className="border border-dashed border-dory-line px-4 py-4 text-center text-sm text-dory-muted">
                    {t("agentHome.agents.context.temporaryResult")}
                  </div>
                </div>
              </article>

              <article className="bg-[#171615] p-5 text-[#f7f1e8] sm:p-7 lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-medium tracking-[0.13em] text-[#b7b1a7] uppercase">
                    {t("agentHome.agents.context.doryLabel")}
                  </p>
                  <Workflow className="size-5 text-[#d9c48b]" />
                </div>
                <div className="mt-8 grid items-stretch gap-3 lg:grid-cols-[132px_20px_minmax(0,1fr)_20px_132px]">
                  <div className="flex min-h-14 items-center justify-center gap-2 border border-white/12 bg-white/[0.035] px-4 text-sm font-medium">
                    <Bot className="size-4" />
                    Agent
                  </div>
                  <FlowArrow className="text-[#736f68]" />
                  <div className="border border-white/12 bg-white/[0.035] p-4">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Boxes className="size-4 text-[#d9c48b]" />
                        Dory MCP
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.12em] text-[#8e8980] uppercase">Workspace context</span>
                    </div>
                    <div className="mt-3 grid gap-px bg-white/10 sm:grid-cols-2">
                      {contextItems.map((item, index) => {
                        const ContextIcon = contextIcons[index] ?? FileStack;
                        return (
                          <div key={item.title} className="min-h-24 bg-[#171615] p-3.5">
                            <ContextIcon className="size-4 text-[#9f9a91]" />
                            <h3 className="mt-4 text-sm font-medium">{item.title}</h3>
                            <p className="mt-1 text-xs leading-5 text-[#9f9a91]">{item.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <FlowArrow className="text-[#736f68]" />
                  <div className="flex min-h-14 items-center justify-center gap-2 border border-white/12 bg-white/[0.035] px-4 text-center text-sm font-medium">
                    <Database className="size-4" />
                    Database
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#171615] px-4 py-20 text-[#f7f1e8] sm:px-6 md:px-10 md:py-28">
            <div className="mx-auto w-full max-w-[1240px]">
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.16em] text-[#9f9a91] uppercase">
                    {t("agentHome.agents.artifacts.eyebrow")}
                  </p>
                  <h2 className="mt-4 text-[clamp(2.4rem,4.5vw,4.9rem)] leading-[0.96] font-medium tracking-[-0.05em] text-balance">
                    {t("agentHome.agents.artifacts.title")}
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-[#aaa49b] md:text-lg md:leading-8">
                  {t("agentHome.agents.artifacts.description")}
                </p>
              </div>

              <div className="mt-14 grid gap-4 lg:grid-cols-[0.62fr_1.38fr]">
                <article className="border border-white/12 p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium tracking-[0.13em] text-[#9f9a91] uppercase">
                      {t("agentHome.agents.artifacts.transientLabel")}
                    </span>
                    <History className="size-4 text-[#77736c]" />
                  </div>
                  <div className="mt-10 space-y-3 text-sm">
                    {["SQL result", "JSON response", t("agentHome.agents.artifacts.lostLabel")].map((item, index) => (
                      <div key={item}>
                        <div
                          className={cn(
                            "border border-white/12 px-4 py-4",
                            index === 2 && "border-dashed text-[#8c877f] line-through decoration-[#8c877f]/70",
                          )}
                        >
                          {item}
                        </div>
                        {index < 2 ? <ArrowDown className="mx-auto my-3 size-4 text-[#66625c]" /> : null}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="border border-white/12 bg-white/[0.025] p-5 sm:p-7">
                  <div className="flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(0,1fr)_300px]">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium tracking-[0.13em] text-[#d9c48b] uppercase">ResultSet Artifact</span>
                        <FileArchive className="size-4 text-[#d9c48b]" />
                      </div>
                      <div className="mt-6 border-l border-white/14 pl-5">
                        {artifactFiles.map((file, index) => {
                          const ArtifactIcon = artifactIcons[index] ?? FileStack;
                          return (
                            <div key={file.title} className="relative grid grid-cols-[20px_1fr] gap-3 border-b border-white/10 py-3.5 last:border-b-0">
                              <span className="absolute top-1/2 -left-[21px] h-px w-4 bg-white/14" aria-hidden="true" />
                              <ArtifactIcon className="mt-0.5 size-4 text-[#8e8980]" />
                              <div>
                                <h3 className="font-mono text-xs text-[#eee9df]">{file.title}</h3>
                                <p className="mt-1 text-xs leading-5 text-[#8e8980]">{file.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="border border-white/14 bg-[#11100f] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs text-[#aaa49b]">
                          <CircleCheck className="size-4 text-emerald-400" />
                          {t("agentHome.agents.artifacts.createdBy")}
                        </div>
                        <span className="font-mono text-[9px] tracking-[0.1em] text-[#77736c] uppercase">Parquet</span>
                      </div>
                      <h3 className="mt-8 font-mono text-sm text-[#f7f1e8]">customer_revenue.parquet</h3>
                      <p className="mt-2 text-xs leading-5 text-[#9f9a91]">
                        {t("agentHome.agents.artifacts.exampleMeta")}
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-px bg-white/10">
                        {artifactActions.map((action) => (
                          <div key={action} className="bg-[#11100f] px-2 py-2.5 text-center text-[10px] text-[#c9c3b8]">
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow={t("agentHome.agents.runs.eyebrow")}
                  title={t("agentHome.agents.runs.title")}
                  description={t("agentHome.agents.runs.description")}
                />
                <div className="mt-8 border-t border-dory-line">
                  {runFeatures.map((feature, index) => (
                    <div key={feature} className="grid grid-cols-[32px_1fr] gap-3 border-b border-dory-line py-4">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">{String(index + 1).padStart(2, "0")}</span>
                      <p className="text-sm leading-6">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ProductFrame src="/images/agent-runs/agent-runs-list.png" alt={t("agentHome.agents.runs.imageAlt")} />
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <SectionHeading
              eyebrow={t("agentHome.agents.handoff.eyebrow")}
              title={t("agentHome.agents.handoff.title")}
              description={t("agentHome.agents.handoff.description")}
            />

            <ol className="mt-10 grid border-y border-dory-line sm:grid-cols-2 lg:grid-cols-6">
              {handoffSteps.map((step, index) => (
                <li
                  key={step}
                  className="relative min-h-28 border-b border-dory-line p-4 last:border-b-0 sm:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:min-h-36 lg:border-b-0 lg:last:border-r-0"
                >
                  <span className="font-mono text-[10px] text-dory-muted">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-7 max-w-36 text-sm leading-5 font-medium">{step}</p>
                  {index < handoffSteps.length - 1 ? (
                    <ArrowRight className="absolute top-4 right-3 hidden size-3.5 text-dory-muted lg:block" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>

            <ProductFrame
              src="/images/agent-runs/agent-run-workspace.png"
              alt={t("agentHome.agents.handoff.imageAlt")}
              className="mt-10"
            />
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <SectionHeading
                eyebrow={t("agentHome.agents.runtime.eyebrow")}
                title={t("agentHome.agents.runtime.title")}
                description={t("agentHome.agents.runtime.description")}
              />

              <div className="border border-dory-line bg-dory-surface-soft p-4 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {runtimeAgents.map((agent) => (
                    <div key={agent} className="flex min-h-12 items-center justify-center border border-dory-line bg-dory-page px-3 text-center text-xs font-medium">
                      {agent}
                    </div>
                  ))}
                </div>
                <ArrowDown className="mx-auto my-4 size-4 text-dory-muted" aria-hidden="true" />
                <div className="bg-[#171615] px-5 py-6 text-[#f7f1e8]">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <TerminalSquare className="size-5 text-[#d9c48b]" />
                      <div>
                        <p className="font-mono text-sm">@getdory/cli</p>
                        <p className="mt-1 text-xs text-[#8e8980]">Dory Headless Runtime</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {runtimeTransports.map((transport) => (
                        <span key={transport} className="border border-white/14 px-2.5 py-1.5 font-mono text-[10px] text-[#c9c3b8]">
                          {transport}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowDown className="mx-auto my-4 size-4 text-dory-muted" aria-hidden="true" />
                <div className="grid gap-px bg-dory-line sm:grid-cols-3">
                  {runtimeModes.map((mode, index) => {
                    const RuntimeIcon = [Laptop, Server, Network][index] ?? Server;
                    return (
                      <div key={mode.title} className="min-h-40 bg-dory-page p-4">
                        <RuntimeIcon className="size-4 text-dory-muted" />
                        <h3 className="mt-8 font-mono text-xs">{mode.title}</h3>
                        <p className="mt-2 text-xs leading-5 text-dory-muted">{mode.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow={t("agentHome.agents.capabilities.eyebrow")}
                title={t("agentHome.agents.capabilities.title")}
                description={t("agentHome.agents.capabilities.description")}
              />
              <ChartNoAxesCombined className="hidden size-7 text-dory-muted md:block" />
            </div>

            <table className="mt-10 w-full border-collapse text-left">
              <thead className="sr-only">
                <tr>
                  <th>{t("agentHome.agents.capabilities.taskLabel")}</th>
                  <th>{t("agentHome.agents.capabilities.detailLabel")}</th>
                  <th>{t("agentHome.agents.capabilities.supportLabel")}</th>
                </tr>
              </thead>
              <tbody className="block border-t border-dory-line">
                {capabilities.map((capability, index) => (
                  <tr
                    key={capability.task}
                    className="grid grid-cols-[minmax(0,1fr)_32px] gap-x-4 border-b border-dory-line py-4 sm:grid-cols-[32px_minmax(180px,0.7fr)_minmax(0,1.3fr)_32px] sm:items-center"
                  >
                    <td className="hidden font-mono text-[10px] text-dory-muted sm:table-cell">{String(index + 1).padStart(2, "0")}</td>
                    <th scope="row" className="text-sm font-medium sm:font-normal">
                      {capability.task}
                    </th>
                    <td className="col-start-1 mt-1 text-sm leading-6 text-dory-muted sm:col-start-auto sm:mt-0">
                      {capability.description}
                    </td>
                    <td className="col-start-2 row-start-1 flex justify-end sm:col-start-auto sm:row-start-auto">
                      <span className="flex size-6 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <Check className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">{t("agentHome.agents.capabilities.supportedLabel")}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <SectionHeading
              eyebrow={t("agentHome.agents.privacy.eyebrow")}
              title={t("agentHome.agents.privacy.title")}
              description={t("agentHome.agents.privacy.description")}
            />

            <div className="mt-10 grid gap-px bg-dory-line sm:grid-cols-2 lg:grid-cols-4">
              {controls.map((control, index) => {
                const ControlIcon = controlIcons[index] ?? ShieldCheck;
                return (
                  <article key={control.title} className="min-h-60 bg-dory-page p-5 sm:p-6">
                    <ControlIcon className="size-5 text-dory-muted" />
                    <h3 className="mt-14 text-lg font-medium tracking-[-0.02em]">{control.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-dory-muted">{control.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 border border-dory-line bg-dory-surface-soft p-4 text-sm leading-6 text-dory-muted">
              <ShieldCheck className="mt-0.5 size-4 shrink-0" />
              <p>{t("agentHome.agents.privacy.providerNote")}</p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="relative overflow-hidden bg-[#171615] px-6 py-12 text-[#f7f1e8] sm:px-10 sm:py-16 md:px-14 md:py-20">
              <div className="pointer-events-none absolute top-0 right-0 size-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(87,139,255,0.22),transparent_68%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.16em] text-[#9f9a91] uppercase">
                    {t("agentHome.agents.cta.eyebrow")}
                  </p>
                  <h2 className="mt-4 max-w-3xl text-[clamp(2.7rem,5.4vw,5.8rem)] leading-[0.94] font-medium tracking-[-0.055em] text-balance">
                    {t("agentHome.agents.cta.title")}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#aaa49b]">
                    {t("agentHome.agents.cta.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/docs/workflows/agent-database-analysis"
                    className="inline-flex min-h-12 items-center justify-between gap-3 bg-[#f7f1e8] px-4 text-sm font-medium text-[#171615] transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e8] motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {t("agentHome.agents.cta.primary")}
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/docs/agents/mcp-setup"
                    className="inline-flex min-h-12 items-center justify-between gap-3 border border-white/16 px-4 text-sm font-medium text-[#f7f1e8] transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e8] motion-reduce:transition-none"
                  >
                    {t("agentHome.agents.cta.secondary")}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterSection locale={lang} />
    </MarketingLayout>
  );
}
