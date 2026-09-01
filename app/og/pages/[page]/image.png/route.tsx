import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';

import {
  getMarketingOgContent,
  type MarketingOgPage
} from '@/lib/marketing-og';
import { DoryOgImage, HomeOgImage } from '@/lib/og-image';
import { getHomeOgHeroDataUrl, getOgLogoDataUrl } from '@/lib/og-logo';

const pages = ['home', 'blog', 'download', 'for-agents'] satisfies MarketingOgPage[];
const lang = 'en';

export const revalidate = false;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ page: string }> }
) {
  const { page } = await params;

  if (!isMarketingOgPage(page)) {
    notFound();
  }

  const content = await getMarketingOgContent(page, lang);
  const logoSrc = await getOgLogoDataUrl();

  if (page === 'home') {
    const screenshotSrc = await getHomeOgHeroDataUrl();

    return new ImageResponse(
      (
        <HomeOgImage
          logoSrc={logoSrc}
          screenshotSrc={screenshotSrc}
          tagline={content.tagline ?? content.title}
        />
      ),
      {
        width: 1200,
        height: 630
      }
    );
  }

  return new ImageResponse(
    (
      <DoryOgImage
        title={content.title}
        description={content.description}
        site={content.site}
        label={content.label}
        logoSrc={logoSrc}
        tone={content.tone}
      />
    ),
    {
      width: 1200,
      height: 630
    }
  );
}

export function generateStaticParams() {
  return pages.map((page) => ({ page }));
}

function isMarketingOgPage(page: string): page is MarketingOgPage {
  return pages.includes(page as MarketingOgPage);
}
