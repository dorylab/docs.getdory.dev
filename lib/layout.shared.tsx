import { BookOpen, MonitorSmartphone, Sparkles } from 'lucide-react';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { i18n } from '@/lib/i18n';

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English'
    },
    zh: {
      displayName: '简体中文',
      search: '搜索文档'
    }
  }
});

export function baseOptions(locale: string): BaseLayoutProps {
  const isZh = locale === 'zh';

  return {
    i18n,
    githubUrl: 'https://github.com/dorylab/dory',
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ff6a3d,#f7b733)] text-white shadow-sm">
            <BookOpen className="h-4 w-4" />
          </span>
          {isZh ? 'Dory 文档' : 'Dory Docs'}
        </span>
      )
    },
    links: [
      {
        type: 'main',
        text: isZh ? '文档' : 'Docs',
        url: '/docs',
        active: 'nested-url',
        icon: <BookOpen />
      },
      {
        text: isZh ? '演示' : 'Demo',
        url: 'https://app.getdory.dev',
        external: true,
        icon: <MonitorSmartphone />
      },
      {
        text: 'GitHub',
        url: 'https://github.com/dorylab/dory',
        external: true
      },
      {
        text: isZh ? 'AI 能力' : 'AI Features',
        url: '/docs/reference/ai-providers',
        active: 'nested-url',
        icon: <Sparkles />
      }
    ]
  };
}
