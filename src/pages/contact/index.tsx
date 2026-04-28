import { PageBanner, ContactSection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';

export default function Contact() {
  const { lang } = useLang();
  return (
    <div>
      <PageBanner
        tag={T.banners.contact.tag[lang]}
        title={T.banners.contact.title[lang]}
        subtitle={T.banners.contact.sub[lang]}
        image="/images/nb-3.jpg"
      />
      <ContactSection />
    </div>
  );
}
