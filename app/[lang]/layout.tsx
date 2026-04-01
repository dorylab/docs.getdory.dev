import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

import { i18nUI } from '@/lib/layout.shared';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <RootProvider i18n={i18nUI.provider(lang)}>{children}</RootProvider>;
}
