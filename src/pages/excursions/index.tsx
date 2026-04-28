import { PageBanner, ExperiencesSection, WhyUsSection, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';

export default function Excursions() {
  const { lang } = useLang();
  return (
    <div>
      <PageBanner
        tag={T.banners.excursions.tag[lang]}
        title={T.banners.excursions.title[lang]}
        subtitle={T.banners.excursions.sub[lang]}
        image="/images/nb-4.jpg"
      />
      <ExperiencesSection />
      <WhyUsSection />
      <CTASection />
    </div>
  );
}
