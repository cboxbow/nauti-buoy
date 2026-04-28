import { PageBanner, PricingSection, TestimonialsSection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';

export default function Tarifs() {
  const { lang } = useLang();
  return (
    <div>
      <PageBanner
        tag={T.banners.tarifs.tag[lang]}
        title={T.banners.tarifs.title[lang]}
        subtitle={T.banners.tarifs.sub[lang]}
        image="/images/nb-11.jpg"
      />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
