import { PageBanner, TimelineSection, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';

export default function Programme() {
  const { lang } = useLang();
  return (
    <div>
      <PageBanner
        tag={T.banners.programme.tag[lang]}
        title={T.banners.programme.title[lang]}
        subtitle={T.banners.programme.sub[lang]}
        image="/images/nb-8.jpg"
      />
      <TimelineSection />
      <CTASection />
    </div>
  );
}
