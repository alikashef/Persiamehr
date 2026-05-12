import {
  IconSchool,
  IconSitemap,
  IconUserStar,
} from "@tabler/icons-react";
import type { Locale } from "@/lib/i18n";

export const services = [
  {
    slug: "executive-consulting",
    icon: IconUserStar,
    title: "مشاوره اجرایی",
    summary:
      "مشاوره اجرایی با هدف توسعه بازار شرکت‌های تجهیزات پزشکی داخلی و خارجی.",
    description:
      "در این خدمت، وضعیت فعلی شرکت، ظرفیت‌های فروش، مسیرهای ورود به بازار، شبکه ارتباطی و مزیت رقابتی بررسی می‌شود تا یک نقشه عملیاتی برای رشد پایدار طراحی شود.",
    tags: ["توسعه بازار", "استراتژی", "شرکت‌های داخلی و خارجی"],
    sections: [
      {
        title: "تمرکز اصلی",
        body: "کمک به مدیران شرکت‌های تجهیزات پزشکی برای تصمیم‌گیری بهتر در توسعه بازار، انتخاب کانال‌های فروش، جایگاه‌سازی محصول و ساختن روابط حرفه‌ای با بازیگران کلیدی بازار.",
      },
      {
        title: "خروجی همکاری",
        body: "گزارش تشخیصی، برنامه اقدام مرحله‌ای، پیشنهادهای اجرایی برای توسعه فروش و چارچوب پیگیری شاخص‌های رشد.",
      },
      {
        title: "مناسب برای",
        body: "شرکت‌های تولیدکننده، واردکننده، توزیع‌کننده و برندهای خارجی که قصد ورود یا گسترش حضور در بازار تجهیزات پزشکی ایران را دارند.",
      },
    ],
    highlight: false,
  },
  {
    slug: "medical-education-program-design",
    icon: IconSitemap,
    title: "طراحی و مدیریت برنامه‌های پزشکی",
    summary:
      "طراحی و مدیریت برگزاری سمینار، کنگره پزشکی، دوره‌های آموزشی و کارگاه‌های تخصصی حضوری و آنلاین.",
    description:
      "پرشیامهر ساختار علمی، اجرایی و ارتباطی برنامه‌های تخصصی پزشکی را طراحی و مدیریت می‌کند؛ از تعریف هدف و مخاطب تا برنامه‌ریزی محتوایی، هماهنگی ارائه‌دهندگان و اجرای حضوری یا آنلاین.",
    tags: ["طراحی برنامه", "مدیریت اجرا", "حضوری و آنلاین"],
    sections: [
      {
        title: "دامنه خدمات",
        body: "طراحی ساختار برنامه، تدوین مسیر محتوایی، هماهنگی علمی، مدیریت مخاطبان، برنامه‌ریزی اجرایی و کنترل کیفیت تجربه شرکت‌کنندگان.",
      },
      {
        title: "مدل اجرا",
        body: "برنامه‌ها می‌توانند به شکل حضوری، آنلاین یا ترکیبی اجرا شوند و بر اساس نیاز برند، بیمارستان، انجمن علمی یا شرکت تجهیزات پزشکی طراحی می‌شوند.",
      },
      {
        title: "ارزش برای سازمان",
        body: "این خدمت به سازمان کمک می‌کند آموزش و ارتباط علمی را به یک ابزار جدی برای توسعه بازار، اعتمادسازی و معرفی تخصصی محصول تبدیل کند.",
      },
    ],
    highlight: false,
  },
  {
    slug: "surgical-training-execution",
    icon: IconSchool,
    title: "مجری برگزاری دوره‌های جراحی",
    summary:
      "مجری برگزاری دوره‌های جراحی عمومی، جراحی پلاستیک، چاقی، زنان، اندوسکوپی و رباتیک.",
    description:
      "این خدمت روی اجرای عملیاتی دوره‌های تخصصی جراحی تمرکز دارد؛ از آماده‌سازی برنامه آموزشی و هماهنگی مدرسین تا مدیریت اجرا، تجهیزات، سناریوهای آموزشی و تجربه شرکت‌کنندگان.",
    tags: ["جراحی عمومی", "رباتیک", "اندوسکوپی"],
    sections: [
      {
        title: "حوزه‌های تخصصی",
        body: "جراحی عمومی، جراحی پلاستیک، جراحی چاقی، زنان، اندوسکوپی و جراحی رباتیک با توجه به سطح مخاطب و هدف آموزشی برنامه‌ریزی می‌شوند.",
      },
      {
        title: "اجرای عملیاتی",
        body: "هماهنگی مدرسین، طراحی جدول دوره، آماده‌سازی تجهیزات آموزشی، مدیریت ثبت‌نام، کنترل اجرا و جمع‌آوری بازخورد بخشی از فرایند اجرایی است.",
      },
      {
        title: "نتیجه مورد انتظار",
        body: "دوره‌ای منظم، قابل سنجش و حرفه‌ای که برای پزشکان و تیم‌های درمانی تجربه آموزشی کاربردی و استاندارد فراهم کند.",
      },
    ],
    highlight: false,
  },
];

export type ServiceItem = (typeof services)[number];

const serviceTranslations: Record<Exclude<Locale, "fa">, Record<string, Omit<ServiceItem, "slug" | "icon" | "highlight">>> = {
  en: {
    "executive-consulting": {
      title: "Executive Consulting",
      summary:
        "Executive consulting focused on market development for domestic and international medical equipment companies.",
      description:
        "This service assesses the company’s current position, sales capabilities, market-entry paths, relationship network, and competitive advantages to design an actionable growth roadmap.",
      tags: ["Market development", "Strategy", "Local and global companies"],
      sections: [
        {
          title: "Main focus",
          body: "Helping medical equipment executives make better decisions in market development, sales channels, product positioning, and professional relationships with key market players.",
        },
        {
          title: "Collaboration output",
          body: "Diagnostic report, phased action plan, operational recommendations for sales growth, and a framework for tracking growth indicators.",
        },
        {
          title: "Best suited for",
          body: "Manufacturers, importers, distributors, and international brands that plan to enter or expand in Iran’s medical equipment market.",
        },
      ],
    },
    "medical-education-program-design": {
      title: "Medical Program Design and Management",
      summary:
        "Design and management of seminars, medical congresses, educational courses, and specialized in-person or online workshops.",
      description:
        "Persiamehr designs and manages the scientific, operational, and communication structure of specialized medical programs, from objectives and audience definition to content planning and execution.",
      tags: ["Program design", "Execution management", "Online and in-person"],
      sections: [
        {
          title: "Scope of service",
          body: "Program architecture, content pathway design, scientific coordination, audience management, operational planning, and participant experience quality control.",
        },
        {
          title: "Execution model",
          body: "Programs can be held in-person, online, or hybrid and are designed around the needs of brands, hospitals, scientific societies, or medical equipment companies.",
        },
        {
          title: "Organizational value",
          body: "This service turns education and scientific communication into a serious tool for market development, trust-building, and specialized product introduction.",
        },
      ],
    },
    "surgical-training-execution": {
      title: "Surgical Training Execution",
      summary:
        "Execution of general surgery, plastic surgery, bariatric, gynecology, endoscopy, and robotic surgery courses.",
      description:
        "This service focuses on the operational execution of specialized surgical courses, from preparing the educational plan and coordinating instructors to managing equipment, scenarios, and participant experience.",
      tags: ["General surgery", "Robotics", "Endoscopy"],
      sections: [
        {
          title: "Specialty areas",
          body: "General surgery, plastic surgery, bariatric surgery, gynecology, endoscopy, and robotic surgery are planned based on audience level and educational goals.",
        },
        {
          title: "Operational execution",
          body: "Instructor coordination, course scheduling, educational equipment preparation, registration management, execution control, and feedback collection are part of the process.",
        },
        {
          title: "Expected result",
          body: "An organized, measurable, and professional course that gives physicians and clinical teams a practical and standardized learning experience.",
        },
      ],
    },
  },
  ar: {
    "executive-consulting": {
      title: "الاستشارات التنفيذية",
      summary:
        "استشارات تنفيذية بهدف تطوير سوق شركات الأجهزة الطبية المحلية والدولية.",
      description:
        "في هذه الخدمة يتم تحليل وضع الشركة الحالي وقدرات المبيعات ومسارات دخول السوق وشبكة العلاقات والميزة التنافسية لتصميم خارطة طريق عملية للنمو المستدام.",
      tags: ["تطوير السوق", "الاستراتيجية", "شركات محلية ودولية"],
      sections: [
        {
          title: "التركيز الرئيسي",
          body: "مساعدة مديري شركات الأجهزة الطبية على اتخاذ قرارات أفضل في تطوير السوق وقنوات البيع وتموضع المنتج وبناء العلاقات المهنية مع اللاعبين الرئيسيين.",
        },
        {
          title: "مخرجات التعاون",
          body: "تقرير تشخيصي، خطة عمل مرحلية، توصيات تنفيذية لتطوير المبيعات، وإطار لمتابعة مؤشرات النمو.",
        },
        {
          title: "مناسب لـ",
          body: "الشركات المصنعة والمستوردة والموزعة والعلامات الأجنبية التي ترغب في دخول أو توسيع حضورها في سوق الأجهزة الطبية الإيراني.",
        },
      ],
    },
    "medical-education-program-design": {
      title: "تصميم وإدارة البرامج الطبية",
      summary:
        "تصميم وإدارة الندوات والمؤتمرات الطبية والدورات التعليمية وورش العمل المتخصصة حضوريا وعن بعد.",
      description:
        "تصمم پرشیامهر وتدير البنية العلمية والتنفيذية والتواصلية للبرامج الطبية المتخصصة، من تحديد الهدف والجمهور إلى التخطيط المحتوائي والتنسيق والتنفيذ.",
      tags: ["تصميم البرامج", "إدارة التنفيذ", "حضوري وعن بعد"],
      sections: [
        {
          title: "نطاق الخدمة",
          body: "تصميم بنية البرنامج، إعداد المسار المحتوائي، التنسيق العلمي، إدارة الجمهور، التخطيط التنفيذي، وضبط جودة تجربة المشاركين.",
        },
        {
          title: "نموذج التنفيذ",
          body: "يمكن تنفيذ البرامج حضوريا أو عن بعد أو بشكل هجين، حسب احتياج العلامة أو المستشفى أو الجمعية العلمية أو شركة الأجهزة الطبية.",
        },
        {
          title: "القيمة للمؤسسة",
          body: "تساعد هذه الخدمة على تحويل التعليم والتواصل العلمي إلى أداة فعالة لتطوير السوق وبناء الثقة والتعريف المتخصص بالمنتج.",
        },
      ],
    },
    "surgical-training-execution": {
      title: "تنفيذ دورات الجراحة",
      summary:
        "تنفيذ دورات الجراحة العامة والتجميلية وجراحة السمنة والنساء والتنظير والجراحة الروبوتية.",
      description:
        "تركز هذه الخدمة على التنفيذ العملي للدورات الجراحية المتخصصة، من إعداد البرنامج التعليمي وتنسيق المدربين إلى إدارة التنفيذ والتجهيزات والسيناريوهات التعليمية.",
      tags: ["الجراحة العامة", "الروبوتية", "التنظير"],
      sections: [
        {
          title: "المجالات التخصصية",
          body: "الجراحة العامة، التجميلية، جراحة السمنة، النساء، التنظير والجراحة الروبوتية تخطط حسب مستوى الجمهور وهدف البرنامج التعليمي.",
        },
        {
          title: "التنفيذ العملي",
          body: "تنسيق المدربين، تصميم جدول الدورة، تجهيز المعدات التعليمية، إدارة التسجيل، مراقبة التنفيذ وجمع الملاحظات هي جزء من العملية.",
        },
        {
          title: "النتيجة المتوقعة",
          body: "دورة منظمة وقابلة للقياس واحترافية توفر للأطباء والفرق العلاجية تجربة تعليمية عملية ومعيارية.",
        },
      ],
    },
  },
};

export function getServices(locale: Locale = "fa") {
  if (locale === "fa") {
    return services;
  }

  return services.map((service) => ({
    ...service,
    ...serviceTranslations[locale][service.slug],
  }));
}

export function getServiceBySlug(slug: string, locale: Locale = "fa") {
  return getServices(locale).find((service) => service.slug === slug);
}
