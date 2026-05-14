from django.core.management.base import BaseCommand

from services.models import Service
from settings_app.models import SiteSettings
from subsidiaries.models import Subsidiary


SERVICES = [
    {
        "slug": "executive-consulting",
        "order": 1,
        "icon_key": "user-star",
        "highlight": False,
        "title_i18n": {
            "fa": "مشاوره اجرایی",
            "en": "Executive Consulting",
            "ar": "الاستشارات التنفيذية",
        },
        "summary_i18n": {
            "fa": "مشاوره اجرایی با هدف توسعه بازار شرکت‌های تجهیزات پزشکی داخلی و خارجی.",
            "en": "Executive consulting focused on market development for domestic and international medical equipment companies.",
            "ar": "استشارات تنفيذية بهدف تطوير سوق شركات الأجهزة الطبية المحلية والدولية.",
        },
        "description_i18n": {
            "fa": "در این خدمت، وضعیت فعلی شرکت، ظرفیت‌های فروش، مسیرهای ورود به بازار، شبکه ارتباطی و مزیت رقابتی بررسی می‌شود تا یک نقشه عملیاتی برای رشد پایدار طراحی شود.",
            "en": "This service assesses the company’s current position, sales capabilities, market-entry paths, relationship network, and competitive advantages to design an actionable growth roadmap.",
            "ar": "في هذه الخدمة يتم تحليل وضع الشركة الحالي وقدرات المبيعات ومسارات دخول السوق وشبكة العلاقات والميزة التنافسية لتصميم خارطة طريق عملية للنمو المستدام.",
        },
        "tags": {
            "fa": ["توسعه بازار", "استراتژی", "شرکت‌های داخلی و خارجی"],
            "en": ["Market development", "Strategy", "Local and global companies"],
            "ar": ["تطوير السوق", "الاستراتيجية", "شركات محلية ودولية"],
        },
        "sections": {
            "fa": [
                {
                    "title": "تمرکز اصلی",
                    "body": "کمک به مدیران شرکت‌های تجهیزات پزشکی برای تصمیم‌گیری بهتر در توسعه بازار، انتخاب کانال‌های فروش، جایگاه‌سازی محصول و ساختن روابط حرفه‌ای با بازیگران کلیدی بازار.",
                },
                {
                    "title": "خروجی همکاری",
                    "body": "گزارش تشخیصی، برنامه اقدام مرحله‌ای، پیشنهادهای اجرایی برای توسعه فروش و چارچوب پیگیری شاخص‌های رشد.",
                },
                {
                    "title": "مناسب برای",
                    "body": "شرکت‌های تولیدکننده، واردکننده، توزیع‌کننده و برندهای خارجی که قصد ورود یا گسترش حضور در بازار تجهیزات پزشکی ایران را دارند.",
                },
            ],
            "en": [
                {
                    "title": "Main focus",
                    "body": "Helping medical equipment executives make better decisions in market development, sales channels, product positioning, and professional relationships with key market players.",
                },
                {
                    "title": "Collaboration output",
                    "body": "Diagnostic report, phased action plan, operational recommendations for sales growth, and a framework for tracking growth indicators.",
                },
                {
                    "title": "Best suited for",
                    "body": "Manufacturers, importers, distributors, and international brands that plan to enter or expand in Iran’s medical equipment market.",
                },
            ],
            "ar": [
                {
                    "title": "التركيز الرئيسي",
                    "body": "مساعدة مديري شركات الأجهزة الطبية على اتخاذ قرارات أفضل في تطوير السوق وقنوات البيع وتموضع المنتج وبناء العلاقات المهنية مع اللاعبين الرئيسيين.",
                },
                {
                    "title": "مخرجات التعاون",
                    "body": "تقرير تشخيصي، خطة عمل مرحلية، توصيات تنفيذية لتطوير المبيعات، وإطار لمتابعة مؤشرات النمو.",
                },
                {
                    "title": "مناسب لـ",
                    "body": "الشركات المصنعة والمستوردة والموزعة والعلامات الأجنبية التي ترغب في دخول أو توسيع حضورها في سوق الأجهزة الطبية الإيراني.",
                },
            ],
        },
    },
    {
        "slug": "medical-education-program-design",
        "order": 2,
        "icon_key": "sitemap",
        "highlight": False,
        "title_i18n": {
            "fa": "طراحی و مدیریت برنامه‌های پزشکی",
            "en": "Medical Program Design and Management",
            "ar": "تصميم وإدارة البرامج الطبية",
        },
        "summary_i18n": {
            "fa": "طراحی و مدیریت برگزاری سمینار، کنگره پزشکی، دوره‌های آموزشی و کارگاه‌های تخصصی حضوری و آنلاین.",
            "en": "Design and management of seminars, medical congresses, educational courses, and specialized in-person or online workshops.",
            "ar": "تصميم وإدارة الندوات والمؤتمرات الطبية والدورات التعليمية وورش العمل المتخصصة حضوريا وعن بعد.",
        },
        "description_i18n": {
            "fa": "پرشیامهر ساختار علمی، اجرایی و ارتباطی برنامه‌های تخصصی پزشکی را طراحی و مدیریت می‌کند؛ از تعریف هدف و مخاطب تا برنامه‌ریزی محتوایی، هماهنگی ارائه‌دهندگان و اجرای حضوری یا آنلاین.",
            "en": "Persiamehr designs and manages the scientific, operational, and communication structure of specialized medical programs, from objectives and audience definition to content planning and execution.",
            "ar": "تصمم پرشیامهر وتدير البنية العلمية والتنفيذية والتواصلية للبرامج الطبية المتخصصة، من تحديد الهدف والجمهور إلى التخطيط المحتوائي والتنسيق والتنفيذ.",
        },
        "tags": {
            "fa": ["طراحی برنامه", "مدیریت اجرا", "حضوری و آنلاین"],
            "en": ["Program design", "Execution management", "Online and in-person"],
            "ar": ["تصميم البرامج", "إدارة التنفيذ", "حضوري وعن بعد"],
        },
        "sections": {
            "fa": [
                {
                    "title": "دامنه خدمات",
                    "body": "طراحی ساختار برنامه، تدوین مسیر محتوایی، هماهنگی علمی، مدیریت مخاطبان، برنامه‌ریزی اجرایی و کنترل کیفیت تجربه شرکت‌کنندگان.",
                },
                {
                    "title": "مدل اجرا",
                    "body": "برنامه‌ها می‌توانند به شکل حضوری، آنلاین یا ترکیبی اجرا شوند و بر اساس نیاز برند، بیمارستان، انجمن علمی یا شرکت تجهیزات پزشکی طراحی می‌شوند.",
                },
                {
                    "title": "ارزش برای سازمان",
                    "body": "این خدمت به سازمان کمک می‌کند آموزش و ارتباط علمی را به یک ابزار جدی برای توسعه بازار، اعتمادسازی و معرفی تخصصی محصول تبدیل کند.",
                },
            ],
            "en": [
                {
                    "title": "Scope of service",
                    "body": "Program architecture, content pathway design, scientific coordination, audience management, operational planning, and participant experience quality control.",
                },
                {
                    "title": "Execution model",
                    "body": "Programs can be held in-person, online, or hybrid and are designed around the needs of brands, hospitals, scientific societies, or medical equipment companies.",
                },
                {
                    "title": "Organizational value",
                    "body": "This service turns education and scientific communication into a serious tool for market development, trust-building, and specialized product introduction.",
                },
            ],
            "ar": [
                {
                    "title": "نطاق الخدمة",
                    "body": "تصميم بنية البرنامج، إعداد المسار المحتوائي، التنسيق العلمي، إدارة الجمهور، التخطيط التنفيذي، وضبط جودة تجربة المشاركين.",
                },
                {
                    "title": "نموذج التنفيذ",
                    "body": "يمكن تنفيذ البرامج حضوريا أو عن بعد أو بشكل هجين، حسب احتياج العلامة أو المستشفى أو الجمعية العلمية أو شركة الأجهزة الطبية.",
                },
                {
                    "title": "القيمة للمؤسسة",
                    "body": "تساعد هذه الخدمة على تحويل التعليم والتواصل العلمي إلى أداة فعالة لتطوير السوق وبناء الثقة والتعريف المتخصص بالمنتج.",
                },
            ],
        },
    },
    {
        "slug": "surgical-training-execution",
        "order": 3,
        "icon_key": "school",
        "highlight": False,
        "title_i18n": {
            "fa": "مجری برگزاری دوره‌های جراحی",
            "en": "Surgical Training Execution",
            "ar": "تنفيذ دورات الجراحة",
        },
        "summary_i18n": {
            "fa": "مجری برگزاری دوره‌های جراحی عمومی، جراحی پلاستیک، چاقی، زنان، اندوسکوپی و رباتیک.",
            "en": "Execution of general surgery, plastic surgery, bariatric, gynecology, endoscopy, and robotic surgery courses.",
            "ar": "تنفيذ دورات الجراحة العامة والتجميلية وجراحة السمنة والنساء والتنظير والجراحة الروبوتية.",
        },
        "description_i18n": {
            "fa": "این خدمت روی اجرای عملیاتی دوره‌های تخصصی جراحی تمرکز دارد؛ از آماده‌سازی برنامه آموزشی و هماهنگی مدرسین تا مدیریت اجرا، تجهیزات، سناریوهای آموزشی و تجربه شرکت‌کنندگان.",
            "en": "This service focuses on the operational execution of specialized surgical courses, from preparing the educational plan and coordinating instructors to managing equipment, scenarios, and participant experience.",
            "ar": "تركز هذه الخدمة على التنفيذ العملي للدورات الجراحية المتخصصة، من إعداد البرنامج التعليمي وتنسيق المدربين إلى إدارة التنفيذ والتجهيزات والسيناريوهات التعليمية.",
        },
        "tags": {
            "fa": ["جراحی عمومی", "رباتیک", "اندوسکوپی"],
            "en": ["General surgery", "Robotics", "Endoscopy"],
            "ar": ["الجراحة العامة", "الروبوتية", "التنظير"],
        },
        "sections": {
            "fa": [
                {
                    "title": "حوزه‌های تخصصی",
                    "body": "جراحی عمومی، جراحی پلاستیک، جراحی چاقی، زنان، اندوسکوپی و جراحی رباتیک با توجه به سطح مخاطب و هدف آموزشی برنامه‌ریزی می‌شوند.",
                },
                {
                    "title": "اجرای عملیاتی",
                    "body": "هماهنگی مدرسین، طراحی جدول دوره، آماده‌سازی تجهیزات آموزشی، مدیریت ثبت‌نام، کنترل اجرا و جمع‌آوری بازخورد بخشی از فرایند اجرایی است.",
                },
                {
                    "title": "نتیجه مورد انتظار",
                    "body": "دوره‌ای منظم، قابل سنجش و حرفه‌ای که برای پزشکان و تیم‌های درمانی تجربه آموزشی کاربردی و استاندارد فراهم کند.",
                },
            ],
            "en": [
                {
                    "title": "Specialty areas",
                    "body": "General surgery, plastic surgery, bariatric surgery, gynecology, endoscopy, and robotic surgery are planned based on audience level and educational goals.",
                },
                {
                    "title": "Operational execution",
                    "body": "Instructor coordination, course scheduling, educational equipment preparation, registration management, execution control, and feedback collection are part of the process.",
                },
                {
                    "title": "Expected result",
                    "body": "An organized, measurable, and professional course that gives physicians and clinical teams a practical and standardized learning experience.",
                },
            ],
            "ar": [
                {
                    "title": "المجالات التخصصية",
                    "body": "الجراحة العامة، التجميلية، جراحة السمنة، النساء، التنظير والجراحة الروبوتية تخطط حسب مستوى الجمهور وهدف البرنامج التعليمي.",
                },
                {
                    "title": "التنفيذ العملي",
                    "body": "تنسيق المدربين، تصميم جدول الدورة، تجهيز المعدات التعليمية، إدارة التسجيل، مراقبة التنفيذ وجمع الملاحظات هي جزء من العملية.",
                },
                {
                    "title": "النتيجة المتوقعة",
                    "body": "دورة منظمة وقابلة للقياس واحترافية توفر للأطباء والفرق العلاجية تجربة تعليمية عملية ومعيارية.",
                },
            ],
        },
    },
]

SUBSIDIARIES = [
    {
        "slug": "persia-science",
        "name": "پرسیا ساینس",
        "name_en": "Persia Science",
        "name_i18n": {
            "fa": "پرسیا ساینس",
            "en": "Persia Science",
            "ar": "پرسیا ساينس",
        },
        "monogram": "PS",
        "order": 1,
        "tagline": {
            "fa": "تحقیق و توسعه تجهیزات پزشکی",
            "en": "Medical equipment R&D",
            "ar": "البحث والتطوير للأجهزة الطبية",
        },
        "description_i18n": {
            "fa": "واردات و توزیع تجهیزات پیشرفته پزشکی از برندهای معتبر اروپایی و آمریکایی.",
            "en": "Import and distribution of advanced medical equipment from trusted European and American brands.",
            "ar": "استيراد وتوزيع الأجهزة الطبية المتقدمة من علامات أوروبية وأمريكية موثوقة.",
        },
        "style": {"tone": "blue"},
    },
    {
        "slug": "media-med",
        "name": "مدیا مد",
        "name_en": "Media Med",
        "name_i18n": {
            "fa": "مدیا مد",
            "en": "Media Med",
            "ar": "ميديا مد",
        },
        "monogram": "MM",
        "order": 2,
        "tagline": {
            "fa": "بازاریابی و ارتباطات پزشکی",
            "en": "Medical marketing and communications",
            "ar": "التسويق والاتصال الطبي",
        },
        "description_i18n": {
            "fa": "خدمات بازاریابی تخصصی، تولید محتوای علمی و استراتژی ارتباطات برای شرکت‌های پزشکی.",
            "en": "Specialized marketing, scientific content production, and communication strategy for medical companies.",
            "ar": "خدمات تسويق متخصصة وإنتاج محتوى علمي واستراتيجية اتصال للشركات الطبية.",
        },
        "style": {"tone": "rose"},
    },
    {
        "slug": "persia-advance",
        "name": "پرسیا ادوانس",
        "name_en": "Persia Advance",
        "name_i18n": {
            "fa": "پرسیا ادوانس",
            "en": "Persia Advance",
            "ar": "پرسیا أدفانس",
        },
        "monogram": "PA",
        "order": 3,
        "tagline": {
            "fa": "تکنولوژی و دیجیتال هلث",
            "en": "Technology and digital health",
            "ar": "التقنية والصحة الرقمية",
        },
        "description_i18n": {
            "fa": "توسعه راهکارهای دیجیتال بهداشت و پیاده‌سازی سیستم‌های هوشمند در مراکز درمانی.",
            "en": "Development of digital health solutions and implementation of intelligent systems in care centers.",
            "ar": "تطوير حلول الصحة الرقمية وتنفيذ الأنظمة الذكية في المراكز العلاجية.",
        },
        "style": {"tone": "violet"},
    },
]

SETTINGS = {
    "address": "تهران، خیابان ولیعصر، برج پزشکی ایران، طبقه ۱۲",
    "address_i18n": {
        "fa": "تهران، خیابان ولیعصر، برج پزشکی ایران، طبقه ۱۲",
        "en": "Tehran, Valiasr Street, Iran Medical Tower, 12th floor",
        "ar": "طهران، شارع وليعصر، برج إيران الطبي، الطابق ۱۲",
    },
    "phone": "۰۲۱-۸۸۰۰۱۲۳۴",
    "email": "info@persiamehr.com",
    "footer_about": "هلدینگ تخصصی در حوزه توسعه بازار تجهیزات پزشکی، مشاوره اجرایی و طراحی ساختار سازمانی.",
    "footer_about_i18n": {
        "fa": "هلدینگ تخصصی در حوزه توسعه بازار تجهیزات پزشکی، مشاوره اجرایی و طراحی ساختار سازمانی.",
        "en": "A specialized holding focused on medical equipment market development, executive consulting, and organizational design.",
        "ar": "شركة قابضة متخصصة في تطوير سوق الأجهزة الطبية والاستشارات التنفيذية وتصميم الهياكل التنظيمية.",
    },
    "linkedin": "https://www.linkedin.com/company/persiamehr",
    "instagram": "https://www.instagram.com/persiamehr",
    "telegram": "https://t.me/persiamehr",
    "whatsapp": "+982188001234",
}


class Command(BaseCommand):
    help = "Seed and update static website content."

    def handle(self, *args, **options):
        for item in SERVICES:
            title = item["title_i18n"]["fa"]
            summary = item["summary_i18n"]["fa"]
            description = item["description_i18n"]["fa"]
            Service.objects.update_or_create(
                slug=item["slug"],
                defaults={
                    "title": title,
                    "summary": summary,
                    "description": description,
                    "title_i18n": item["title_i18n"],
                    "summary_i18n": item["summary_i18n"],
                    "description_i18n": item["description_i18n"],
                    "tags": item["tags"],
                    "sections": item["sections"],
                    "icon_key": item["icon_key"],
                    "highlight": item["highlight"],
                    "is_active": True,
                    "order": item["order"],
                },
            )
        Service.objects.exclude(
            slug__in=[item["slug"] for item in SERVICES]
        ).update(is_active=False)

        for item in SUBSIDIARIES:
            description = item["description_i18n"]["fa"]
            Subsidiary.objects.update_or_create(
                slug=item["slug"],
                defaults={
                    "name": item["name"],
                    "name_en": item["name_en"],
                    "name_i18n": item["name_i18n"],
                    "monogram": item["monogram"],
                    "tagline": item["tagline"],
                    "description": description,
                    "description_i18n": item["description_i18n"],
                    "style": item["style"],
                    "is_active": True,
                    "order": item["order"],
                },
            )
        Subsidiary.objects.exclude(
            slug__in=[item["slug"] for item in SUBSIDIARIES]
        ).update(is_active=False)

        settings = SiteSettings.load()
        for field, value in SETTINGS.items():
            if not getattr(settings, field):
                setattr(settings, field, value)
        settings.save()

        self.stdout.write(self.style.SUCCESS("Static site content seeded."))
