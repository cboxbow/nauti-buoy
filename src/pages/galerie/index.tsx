import { PageBanner, GallerySection, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';

export default function Galerie() {
  const { lang } = useLang();
  return (
    <div>
      <PageBanner
        tag={T.banners.galerie.tag[lang]}
        title={T.banners.galerie.title[lang]}
        subtitle={T.banners.galerie.sub[lang]}
        image="/images/nb-6.jpg"
      />
      <GallerySection />
      <CTASection />
    </div>
  );
}
