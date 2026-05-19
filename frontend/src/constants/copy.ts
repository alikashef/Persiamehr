export const copy = {
  nav: {
    home: "صفحه اصلی",
    products: "محصولات آموزشی",
    about: "درباره ما",
    contact: "تماس با ما",
    productsEyebrow: "محصولات آموزشی",
    consult: "درخواست مشاوره",
    displayMode: "حالت نمایش",
    medicalRoyalClub:  "مدیکال رویال کلاب",
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
    submitting: "در حال ارسال...",
    error: "ارسال درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.",
  },
  hero: {
    eyebrow: "هلدینگ تخصصی تجهیزات پزشکی ایران",
    titlePrefix: "رهبری هوشمندانه در ",
    titleHighlight: "اکوسیستم سلامت",
    titleSuffix: "پزشکی",
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
    titlePrefix: " دپارتمان های زیر مجموعه پرشیامهر",
    titleHighlight: " پرشیامهر",
    description:
     "دپارتمان های زیرمجموعه پرشیامهر در دو بخش آموزشی و بازرگانی هرکدام بعنوان حلقه ای از زنجیره اکوسیستم سلامت فرصت های شما را به توسعه پایدار تبدیل میکنند",
    all: "مشاهده همه",
    viewBrand: "ادامه",
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
} as const;

export type SiteCopy = typeof copy;
