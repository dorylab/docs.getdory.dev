import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/landing/variants";
import Github from "@/components/logos/github";
import { MarketingLayout } from "@/components/marketing-layout";
import { PaintedProductFrame } from "@/components/painted-product-frame";
import FooterSection from "@/components/sections/footer";
import { Link } from "@/i18n/navigation";
import { getMarketingOgImage } from "@/lib/marketing-og";
import { cn } from "@/lib/utils";
import ActionsPreview from "@/public/actions-focus.png";
import AutoCompletePreview from "@/public/auto-complete.png";
import AskPreview from "@/public/ask-focus.png";
import HeroPreview from "@/public/hero.png";
import ChartsPreview from "@/public/charts.png";
import ContextPreview from "@/public/context-focus.png";
import EditDataPreview from "@/public/images/for-humans/dory-edit-data-pending-changes.png";
import ImportDataPreview from "@/public/images/for-humans/dory-import-column-mapping.png";
import ErdPreview from "@/public/images/for-humans/dory-schema-graph-erd.png";
import LargeResultSetPreview from "@/public/large-resultset-2.png";

type PageProps = { params: Promise<{ lang: string }> };
type TextItem = { title: string; description: string };

const aiWorkflowItems = [
  { key: "ask", image: AskPreview },
  { key: "actions", image: ActionsPreview },
  { key: "context", image: ContextPreview },
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "landing" });
  const title = t("agentHome.humans.metaTitle");
  const description = t("agentHome.humans.metaDescription");
  const image = getMarketingOgImage("home", lang);

  return {
    title: { absolute: title },
    description,
    openGraph: { title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

function ProductFrame({
  src,
  alt,
  className,
  width = 3024,
  height = 1730,
  priority = false,
}: {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-black/10 bg-[#11100f] p-1.5 shadow-[0_28px_90px_rgba(16,16,15,0.16)] dark:border-white/12 dark:shadow-[0_28px_90px_rgba(0,0,0,0.42)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
        className="h-auto w-full rounded-[15px]"
      />
    </div>
  );
}

export default async function ForHumansPage({ params }: PageProps) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "landing" });
  const isCjk = lang === "zh" || lang === "ja";
  const completionFeatures = t.raw("agentHome.humans.workspace.completionFeatures") as TextItem[];
  const resultFeatures = t.raw("agentHome.humans.results.features") as TextItem[];
  const editDataFeatures = t.raw("agentHome.humans.editData.features") as TextItem[];
  const importDataFeatures = t.raw("agentHome.humans.importData.features") as TextItem[];
  const erdFeatures = t.raw("agentHome.humans.erd.features") as TextItem[];
  const chartFeatures = t.raw("agentHome.humans.dailyWorkflow.charts.features") as TextItem[];

  return (
    <MarketingLayout lang={lang}>
      <main lang={lang} className="min-h-screen overflow-x-clip bg-dory-page px-4 pb-20 text-dory-ink sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="relative isolate w-full border-b border-dory-line pt-20 pb-16 sm:pt-24 md:pt-28 md:pb-20">
            <div className="pointer-events-none absolute top-0 left-1/2 h-[480px] w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_30%_0%,rgba(47,108,255,0.13),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_0%,rgba(136,182,255,0.11),transparent_40%)]" />
            <div className="relative max-w-4xl">
              <h1
                className={cn(
                  "max-w-[920px] text-[clamp(3.2rem,6vw,5.75rem)] leading-[0.94] font-medium tracking-[-0.055em] text-balance",
                  isCjk &&
                    "max-w-[850px] text-[clamp(3rem,5.4vw,5.2rem)] leading-[1.02] tracking-[-0.045em]",
                )}
              >
                {t("agentHome.humans.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-dory-muted md:text-lg md:leading-8">
                {t("agentHome.humans.description")}
              </p>
            </div>
            <ProductFrame
              src={HeroPreview}
              alt={t("agentHome.hero.imageAlt")}
              priority
              className="relative mt-10 md:mt-12"
            />
          </header>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-12">
              <div>
                <h3
                  className={cn(
                    "max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance",
                    isCjk && "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.16] tracking-[-0.025em]",
                  )}
                >
                  {t("agentHome.humans.workspace.completionTitle")}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-dory-muted">
                  {t("agentHome.humans.workspace.completionDescription")}
                </p>

                <div className="mt-8 border-t border-dory-line">
                  {completionFeatures.map((item, index) => (
                    <article key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-dory-line py-4 last:border-b-0">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium tracking-[-0.01em]">{item.title}</h4>
                        <p className="mt-1.5 text-sm leading-6 text-dory-muted">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <PaintedProductFrame
                src={AutoCompletePreview}
                alt={t("agentHome.humans.workspace.completionImageAlt")}
                priority
                sizes="(max-width: 1023px) calc(100vw - 72px), 700px"
              />
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
              <div className="lg:order-2">
                <p className="text-[11px] font-medium tracking-[0.16em] text-dory-muted uppercase">
                  {t("agentHome.humans.results.label")}
                </p>
                <h2
                  className={cn(
                    "mt-3 max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance",
                    isCjk && "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.16] tracking-[-0.025em]",
                  )}
                >
                  {t("agentHome.humans.results.title")}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-dory-muted">
                  {t("agentHome.humans.results.description")}
                </p>

                <div className="mt-8 border-t border-dory-line">
                  {resultFeatures.map((item, index) => (
                    <article key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-dory-line py-4 last:border-b-0">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium tracking-[-0.01em]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-dory-muted">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <PaintedProductFrame
                src={LargeResultSetPreview}
                alt={t("agentHome.humans.results.imageAlt")}
                sizes="(max-width: 1023px) calc(100vw - 72px), 700px"
                className="lg:order-1"
                magnifier={{ zoom: 1.8 }}
              />
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
              <div className="lg:order-2">
                <p className="text-[11px] font-medium tracking-[0.16em] text-dory-muted uppercase">
                  {t("agentHome.humans.dailyWorkflow.charts.label")}
                </p>
                <h2
                  className={cn(
                    "mt-3 max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance",
                    isCjk && "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.16] tracking-[-0.025em]",
                  )}
                >
                  {t("agentHome.humans.dailyWorkflow.charts.title")}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-dory-muted">
                  {t("agentHome.humans.dailyWorkflow.charts.description")}
                </p>

                <div className="mt-8 border-t border-dory-line">
                  {chartFeatures.map((item, index) => (
                    <article key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-dory-line py-4 last:border-b-0">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium tracking-[-0.01em]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-dory-muted">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <PaintedProductFrame
                src={ChartsPreview}
                alt={t("agentHome.humans.dailyWorkflow.charts.imageAlt")}
                sizes="(max-width: 1023px) calc(100vw - 72px), 700px"
                className="lg:order-1"
              />
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-12">
              <div>
                <p className="text-[11px] font-medium tracking-[0.16em] text-dory-muted uppercase">
                  {t("agentHome.humans.editData.label")}
                </p>
                <h2
                  className={cn(
                    "mt-3 max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance",
                    isCjk && "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.16] tracking-[-0.025em]",
                  )}
                >
                  {t("agentHome.humans.editData.title")}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-dory-muted">
                  {t("agentHome.humans.editData.description")}
                </p>

                <div className="mt-8 border-t border-dory-line">
                  {editDataFeatures.map((item, index) => (
                    <article key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-dory-line py-4 last:border-b-0">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium tracking-[-0.01em]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-dory-muted">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <PaintedProductFrame
                src={EditDataPreview}
                alt={t("agentHome.humans.editData.imageAlt")}
                sizes="(max-width: 1023px) calc(100vw - 72px), 700px"
              />
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
              <div className="lg:order-2">
                <p className="text-[11px] font-medium tracking-[0.16em] text-dory-muted uppercase">
                  {t("agentHome.humans.importData.label")}
                </p>
                <h2
                  className={cn(
                    "mt-3 max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance",
                    isCjk && "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.16] tracking-[-0.025em]",
                  )}
                >
                  {t("agentHome.humans.importData.title")}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-dory-muted">
                  {t("agentHome.humans.importData.description")}
                </p>

                <div className="mt-8 border-t border-dory-line">
                  {importDataFeatures.map((item, index) => (
                    <article key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-dory-line py-4 last:border-b-0">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium tracking-[-0.01em]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-dory-muted">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <PaintedProductFrame
                src={ImportDataPreview}
                alt={t("agentHome.humans.importData.imageAlt")}
                sizes="(max-width: 1023px) calc(100vw - 72px), 700px"
                className="lg:order-1"
              />
            </div>
          </section>

          <section className="border-b border-dory-line py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-12">
              <div>
                <p className="text-[11px] font-medium tracking-[0.16em] text-dory-muted uppercase">
                  {t("agentHome.humans.erd.label")}
                </p>
                <h2
                  className={cn(
                    "mt-3 max-w-xl text-[clamp(2rem,3vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance",
                    isCjk && "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.16] tracking-[-0.025em]",
                  )}
                >
                  {t("agentHome.humans.erd.title")}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-dory-muted">
                  {t("agentHome.humans.erd.description")}
                </p>

                <div className="mt-8 border-t border-dory-line">
                  {erdFeatures.map((item, index) => (
                    <article key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-dory-line py-4 last:border-b-0">
                      <span className="pt-0.5 font-mono text-[10px] text-dory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium tracking-[-0.01em]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-dory-muted">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <PaintedProductFrame
                src={ErdPreview}
                alt={t("agentHome.humans.erd.imageAlt")}
                sizes="(max-width: 1023px) calc(100vw - 72px), 700px"
              />
            </div>
          </section>

          <section className="relative isolate overflow-hidden bg-[#171615] px-6 py-20 text-[#f7f1e8] md:px-10 md:py-28">
            <div className="pointer-events-none absolute top-[-260px] right-[-180px] size-[620px] rounded-full bg-[#315f94]/28 blur-[140px]" />
            <div className="relative">
              <div className="grid gap-6 md:grid-cols-[0.78fr_1.22fr] md:items-end">
                <h2
                  className={cn(
                    "max-w-3xl text-4xl leading-[1.02] font-medium tracking-[-0.04em] text-balance md:text-6xl",
                    isCjk && "leading-[1.08] tracking-[-0.035em]",
                  )}
                >
                  {t.rich("aiNative.heading", {
                    ask: (chunks) => <span>{chunks}</span>,
                    act: (chunks) => <span className="text-[#8bb7ff]">{chunks}</span>,
                    stay: (chunks) => <span className="text-[#f7f1e8]/44">{chunks}</span>,
                  })}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-[#f7f1e8]/62 md:justify-self-end md:text-lg md:leading-8">
                  {t("aiNative.description")}
                </p>
              </div>

              <div className="mt-14 grid border-y border-white/14 lg:grid-cols-3">
                {aiWorkflowItems.map(({ key, image }, index) => (
                  <article
                    key={key}
                    className="flex min-h-full flex-col justify-between border-b border-white/14 py-8 last:border-b-0 lg:min-h-[620px] lg:border-r lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                  >
                    <div>
                      <div className="mb-9 flex items-center justify-between text-xs text-[#f7f1e8]/42">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>{t(`aiNative.tabs.${key}.label`)}</span>
                      </div>
                      <h3 className="text-2xl leading-tight font-medium text-balance md:text-[1.75rem]">
                        {t(`aiNative.tabs.${key}.title`)}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-[#f7f1e8]/58">
                        {t(`aiNative.tabs.${key}.description`)}
                      </p>
                    </div>

                    <div className="mt-10 overflow-hidden border border-white/12 bg-[#0b0b0b] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                      <Image
                        src={image}
                        alt={t(`aiNative.tabs.${key}.imageAlt`)}
                        sizes="(max-width: 1023px) calc(100vw - 80px), 350px"
                        className="aspect-[1.08/1] w-full bg-black object-cover object-left-top lg:aspect-[1.03/1]"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative isolate mt-8 overflow-hidden border border-black/6 bg-[#ece8df] px-6 py-20 text-[#171615] md:mt-12 md:px-10 md:py-28 dark:border-white/10 dark:bg-[#211f1c] dark:text-[#f7f1e8]">
            <div className="pointer-events-none absolute bottom-[-260px] left-[-180px] size-[560px] rounded-full bg-[#c5a96d]/24 blur-[140px] dark:bg-[#725f3f]/20" />
            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs font-medium tracking-[0.16em] text-[#171615]/48 uppercase dark:text-[#f7f1e8]/46">
                  {t("agentHome.humans.cta.label")}
                </p>
                <h2
                  className={cn(
                    "mt-6 max-w-[860px] text-[clamp(3.2rem,6.8vw,6.75rem)] leading-[0.9] font-medium tracking-[-0.06em] text-balance",
                    isCjk && "leading-[0.98] tracking-[-0.05em]",
                  )}
                >
                  {t("agentHome.humans.cta.title")}
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-7 text-[#171615]/62 md:text-lg md:leading-8 dark:text-[#f7f1e8]/62">
                  {t("agentHome.humans.cta.description")}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/download"
                  className={cn(
                    buttonVariants(),
                    "gap-2 focus-visible:ring-2 focus-visible:ring-[#4b7fbd] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ece8df] focus-visible:outline-none dark:focus-visible:ring-[#8bb7ff] dark:focus-visible:ring-offset-[#211f1c]",
                  )}
                >
                  {t("agentHome.humans.cta.download")}
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://github.com/dorylab/dory"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "gap-2 focus-visible:ring-2 focus-visible:ring-[#4b7fbd] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ece8df] focus-visible:outline-none dark:focus-visible:ring-[#8bb7ff] dark:focus-visible:ring-offset-[#211f1c]",
                  )}
                >
                  <Github className="size-4" />
                  {t("agentHome.humans.cta.github")}
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <FooterSection locale={lang} />
    </MarketingLayout>
  );
}
