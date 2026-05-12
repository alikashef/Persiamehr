export const locales = ["fa", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleDirection(locale: Locale) {
  return locale === "en" ? "ltr" : "rtl";
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : defaultLocale;
}

export function localizePath(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] && isLocale(segments[0])) {
    const stripped = `/${segments.slice(1).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/";
  }

  return pathname || "/";
}

export const languageLabels: Record<Locale, string> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
};

export const copy = {
  fa: {
    nav: {
      home: "صفحه اصلی",
      services: "خدمات",
      products: "محصولات آموزشی",
      about: "درباره ما",
      contact: "تماس با ما",
      servicesEyebrow: "خدمات تخصصی",
      productsEyebrow: "محصولات آموزشی",
      consult: "درخواست مشاوره",
      displayMode: "حالت نمایش",
      language: "زبان",
    },
    consultation: {
      title: "درخواست مشاوره",
      description:
        "اطلاعات تماس و موضوع موردنظر را وارد کنید تا تیم پرشیامهر با شما هماهنگ کند.",
      successTitle: "درخواست شما ثبت شد",
      successBody: "تیم مشاوره در اولین فرصت برای هماهنگی با شما تماس می‌گیرد.",
      name: "نام و نام خانوادگی",
      namePlaceholder: "مثلا علی رضایی",
      phone: "شماره تماس",
      subject: "موضوع مشاوره",
      subjectPlaceholder: "مثلا توسعه بازار تجهیزات پزشکی",
      message: "توضیحات",
      messagePlaceholder: "کمی درباره نیاز یا چالش فعلی بنویسید.",
      submit: "ارسال درخواست",
    },
    hero: {
      eyebrow: "هلدینگ تخصصی تجهیزات پزشکی ایران",
      titlePrefix: "رهبری هوشمند در",
      titleHighlight: "اکوسیستم تجهیزات",
      titleSuffix: "پزشکی",
      description:
        "مشاوره اجرایی حرفه‌ای، طراحی ساختار سازمانی بهینه و توسعه پایدار بازار برای شرکت‌های تجهیزات پزشکی در سطح ملی و بین‌المللی.",
      scroll: "اسکرول کنید",
      stats: [
        { label: "سال تجربه", value: "۱۵+" },
        { label: "پروژه مشاوره", value: "۲۰۰+" },
        { label: "شرکت همکار", value: "۸۰+" },
        { label: "کشور تحت پوشش", value: "۱۲" },
      ],
    },
    servicesSection: {
      eyebrow: "خدمات تخصصی",
      titlePrefix: "سه مسیر اصلی برای",
      titleHighlight: "رشد پایدار",
      titleSuffix: "در صنعت پزشکی",
      description:
        "از توسعه بازار تا طراحی و اجرای برنامه‌های تخصصی پزشکی، خدمات پرشیامهر برای نیازهای عملیاتی شرکت‌ها و تیم‌های درمانی طراحی شده‌اند.",
      more: "بیشتر بدانید",
    },
    subsidiaries: {
      eyebrow: "زیرمجموعه‌های هلدینگ",
      titlePrefix: "اکوسیستم یکپارچه",
      titleHighlight: "خدمات پزشکی",
      description:
        "برندهای زیرمجموعه پرشیامهر هرکدام بخشی از زنجیره تخصصی تجهیزات، ارتباطات و فناوری پزشکی را پوشش می‌دهند.",
      all: "مشاهده همه",
      viewBrand: "مشاهده برند",
    },
    footer: {
      description:
        "هلدینگ تخصصی در حوزه توسعه بازار تجهیزات پزشکی، مشاوره اجرایی و طراحی ساختار سازمانی.",
      services: "خدمات",
      subsidiaries: "زیرمجموعه‌ها",
      contact: "تماس با ما",
      address: "تهران، خیابان ولیعصر، برج پزشکی ایران، طبقه ۱۲",
      copyright: "© ۱۴۰۴ پرشیامهر. تمامی حقوق محفوظ است.",
      privacy: "حریم خصوصی",
      terms: "شرایط استفاده",
    },
    contactPage: {
      title: "تماس با ما",
      description: "راه‌های ارتباط با تیم مشاوران پرشیامهر و ثبت درخواست همکاری",
    },
    aboutPage: {
      title: "درباره ما",
      description: "آشنایی با ماموریت، چشم‌انداز و مسیر رشد هلدینگ پرشیامهر",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      products: "Education Products",
      about: "About",
      contact: "Contact",
      servicesEyebrow: "Specialized services",
      productsEyebrow: "Education products",
      consult: "Request Consultation",
      displayMode: "Display mode",
      language: "Language",
    },
    consultation: {
      title: "Request consultation",
      description:
        "Share your contact details and topic so the Persiamehr team can follow up with you.",
      successTitle: "Your request was submitted",
      successBody: "Our consulting team will contact you as soon as possible.",
      name: "Full name",
      namePlaceholder: "Ali Rezaei",
      phone: "Phone number",
      subject: "Consultation topic",
      subjectPlaceholder: "Medical equipment market development",
      message: "Details",
      messagePlaceholder: "Tell us briefly about your current need or challenge.",
      submit: "Send request",
    },
    hero: {
      eyebrow: "Iranian medical equipment holding",
      titlePrefix: "Intelligent leadership in the",
      titleHighlight: "medical equipment",
      titleSuffix: "ecosystem",
      description:
        "Executive consulting, optimized organizational design, and sustainable market development for medical equipment companies locally and internationally.",
      scroll: "Scroll",
      stats: [
        { label: "Years of experience", value: "15+" },
        { label: "Consulting projects", value: "200+" },
        { label: "Partner companies", value: "80+" },
        { label: "Covered countries", value: "12" },
      ],
    },
    servicesSection: {
      eyebrow: "Specialized services",
      titlePrefix: "Three core paths for",
      titleHighlight: "sustainable growth",
      titleSuffix: "in medical business",
      description:
        "From market development to designing and executing specialized medical programs, Persiamehr services are built for operational needs of companies and clinical teams.",
      more: "Learn more",
    },
    subsidiaries: {
      eyebrow: "Holding subsidiaries",
      titlePrefix: "An integrated ecosystem of",
      titleHighlight: "medical services",
      description:
        "Persiamehr subsidiary brands each cover a specialized part of the medical equipment, communications, and health technology value chain.",
      all: "View all",
      viewBrand: "View brand",
    },
    footer: {
      description:
        "A specialized holding focused on medical equipment market development, executive consulting, and organizational design.",
      services: "Services",
      subsidiaries: "Subsidiaries",
      contact: "Contact",
      address: "Tehran, Valiasr St., Iran Medical Tower, 12th floor",
      copyright: "© 2026 Persiamehr. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    contactPage: {
      title: "Contact",
      description: "Contact Persiamehr consultants and submit a collaboration request",
    },
    aboutPage: {
      title: "About",
      description: "Learn about Persiamehr Holding mission, vision, and growth path",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      products: "المنتجات التعليمية",
      about: "من نحن",
      contact: "اتصل بنا",
      servicesEyebrow: "خدمات متخصصة",
      productsEyebrow: "منتجات تعليمية",
      consult: "طلب استشارة",
      displayMode: "نمط العرض",
      language: "اللغة",
    },
    consultation: {
      title: "طلب استشارة",
      description:
        "أدخل بيانات التواصل والموضوع المطلوب ليتواصل معك فريق پرشیامهر.",
      successTitle: "تم تسجيل طلبك",
      successBody: "سيتواصل معك فريق الاستشارات في أقرب وقت ممكن.",
      name: "الاسم الكامل",
      namePlaceholder: "مثلا علي رضائي",
      phone: "رقم الهاتف",
      subject: "موضوع الاستشارة",
      subjectPlaceholder: "تطوير سوق الأجهزة الطبية",
      message: "التفاصيل",
      messagePlaceholder: "اكتب نبذة قصيرة عن احتياجك أو التحدي الحالي.",
      submit: "إرسال الطلب",
    },
    hero: {
      eyebrow: "هولدينغ إيراني متخصص في الأجهزة الطبية",
      titlePrefix: "قيادة ذكية في",
      titleHighlight: "منظومة الأجهزة",
      titleSuffix: "الطبية",
      description:
        "استشارات تنفيذية، تصميم تنظيمي فعال، وتطوير مستدام للأسواق لشركات الأجهزة الطبية محليا ودوليا.",
      scroll: "مرر للأسفل",
      stats: [
        { label: "سنوات خبرة", value: "+۱۵" },
        { label: "مشروع استشاري", value: "+۲۰۰" },
        { label: "شركة شريكة", value: "+۸۰" },
        { label: "دولة مغطاة", value: "۱۲" },
      ],
    },
    servicesSection: {
      eyebrow: "خدمات متخصصة",
      titlePrefix: "ثلاثة مسارات رئيسية من أجل",
      titleHighlight: "نمو مستدام",
      titleSuffix: "في القطاع الطبي",
      description:
        "من تطوير السوق إلى تصميم وتنفيذ البرامج الطبية المتخصصة، صممت خدمات پرشیامهر لتلبية الاحتياجات التشغيلية للشركات والفرق العلاجية.",
      more: "اعرف المزيد",
    },
    subsidiaries: {
      eyebrow: "الشركات التابعة للهولدينغ",
      titlePrefix: "منظومة متكاملة من",
      titleHighlight: "الخدمات الطبية",
      description:
        "تغطي العلامات التابعة لپرشیامهر أجزاء متخصصة من سلسلة الأجهزة الطبية والاتصالات والتقنيات الصحية.",
      all: "عرض الكل",
      viewBrand: "عرض العلامة",
    },
    footer: {
      description:
        "هولدينغ متخصص في تطوير سوق الأجهزة الطبية والاستشارات التنفيذية وتصميم الهياكل التنظيمية.",
      services: "الخدمات",
      subsidiaries: "الشركات التابعة",
      contact: "اتصل بنا",
      address: "طهران، شارع وليعصر، برج إيران الطبي، الطابق ۱۲",
      copyright: "© ۱۴۰۴ پرشیامهر. جميع الحقوق محفوظة.",
      privacy: "الخصوصية",
      terms: "شروط الاستخدام",
    },
    contactPage: {
      title: "اتصل بنا",
      description: "طرق التواصل مع مستشاري پرشیامهر وتسجيل طلب تعاون",
    },
    aboutPage: {
      title: "من نحن",
      description: "تعرف على رسالة ورؤية ومسار نمو هولدينغ پرشیامهر",
    },
  },
} as const;
