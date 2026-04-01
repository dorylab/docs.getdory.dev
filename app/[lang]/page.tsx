import Link from 'next/link';
import { ArrowRight, Bot, Database, LineChart, Package, ShieldCheck, Sparkles } from 'lucide-react';

const copy = {
  en: {
    eyebrow: 'AI-native data workspace',
    title: 'Documentation for teams that work in SQL, schemas, and production databases.',
    description:
      'Set up Dory, connect real databases, use AI productively, and understand what is available today across the web app and desktop runtime.',
    primary: 'Open docs',
    secondary: 'Try demo',
    cards: [
      ['Quick start', 'Choose demo, desktop, or Docker and get to a running workspace fast.'],
      ['Database workflows', 'Connections, Explorer, SQL Editor, charts, and saved analysis patterns.'],
      ['AI behavior', 'What Dory’s AI can do, how provider selection works, and current limitations.']
    ],
    sections: [
      ['Installation', 'Homebrew, releases, and Docker flows for evaluation or self-hosting.'],
      ['Core workflows', 'Write SQL, inspect schemas, save queries, and turn results into charts.'],
      ['Operations', 'Review AI provider configuration and self-hosting environment variables.']
    ]
  },
  zh: {
    eyebrow: 'AI 原生数据工作台',
    title: '面向 SQL、Schema 与生产数据库团队的 Dory 文档站点。',
    description:
      '快速部署 Dory，连接真实数据库，理解 AI 能力边界，并查看当前 Web 与桌面版的核心工作流。',
    primary: '进入文档',
    secondary: '打开演示',
    cards: [
      ['快速开始', '根据试用、桌面版或 Docker 场景选择最合适的安装方式。'],
      ['数据库工作流', '覆盖连接、Explorer、SQL Editor、图表与常用查询管理。'],
      ['AI 能力说明', '解释 Dory 的 AI 能做什么、如何切换提供商、有哪些限制。']
    ],
    sections: [
      ['安装方式', '整理 Homebrew、Release 与 Docker 的启动路径。'],
      ['核心使用', '编写 SQL、浏览 Schema、保存查询并将结果转成图表。'],
      ['运维配置', '查看 AI 提供商配置方式与自托管所需环境变量。']
    ]
  }
} as const;

const features = [
  { icon: Database, href: 'docs/guides/connections' },
  { icon: Sparkles, href: 'docs/guides/ai-chat' },
  { icon: LineChart, href: 'docs/guides/charts-results' },
  { icon: Package, href: 'docs/deploy/self-hosting' },
  { icon: ShieldCheck, href: 'docs/reference/ai-providers' },
  { icon: Bot, href: 'docs/release-notes' }
];

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-8 md:px-8 md:py-12">
      <div className="flex items-center justify-between">
        <Link href={`/${lang}`} className="text-sm font-semibold tracking-wide text-[var(--dory-muted)]">
          Dory Docs
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link href={`/${lang}/docs`} className="text-[var(--dory-muted)] transition hover:text-[var(--dory-ink)]">
            Docs
          </Link>
          <a
            href="https://github.com/dorylab/dory"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--dory-muted)] transition hover:text-[var(--dory-ink)]"
          >
            GitHub
          </a>
        </div>
      </div>

      <section className="hero-card grid gap-10 rounded-[2rem] p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <div className="hero-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
            {t.eyebrow}
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{t.title}</h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--dory-muted)] md:text-lg">{t.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${lang}/docs`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--dory-ink)] px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]"
            >
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://app.getdory.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--dory-line)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--dory-ink)] transition hover:bg-white"
            >
              {t.secondary}
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.cards.map(([title, body], index) => (
            <article
              key={title}
              className={`rounded-[1.5rem] border border-[var(--dory-line)] bg-white/75 p-5 ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--dory-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {t.sections.map(([title, body]) => (
          <article key={title} className="rounded-[1.5rem] border border-[var(--dory-line)] bg-[var(--dory-panel)] p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--dory-muted)]">{body}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-3 rounded-[2rem] border border-[var(--dory-line)] bg-white/70 p-6 md:grid-cols-6">
        {features.map(({ icon: Icon, href }) => (
          <Link
            key={href}
            href={`/${lang}/${href}`}
            className="group flex min-h-24 flex-col justify-between rounded-[1.25rem] border border-transparent bg-white/70 p-4 transition hover:border-[var(--dory-line)] hover:bg-white"
          >
            <Icon className="h-5 w-5 text-[var(--dory-orange)]" />
            <span className="text-sm font-medium text-[var(--dory-muted)] group-hover:text-[var(--dory-ink)]">
              {href.replace('docs/', '')}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
