import LangBlogPage, {
  generateMetadata as generateLangMetadata
} from '../../[lang]/blog/page';

export function generateMetadata() {
  return generateLangMetadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <LangBlogPage
      params={Promise.resolve({ lang: 'en' })}
      searchParams={searchParams}
    />
  );
}
