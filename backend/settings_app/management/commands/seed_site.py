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
        "title": "مشاوره اجرایی",
        "summary": "مشاوره اجرایی با هدف توسعه بازار شرکت‌های تجهیزات پزشکی داخلی و خارجی.",
        "description": "در این خدمت، وضعیت فعلی شرکت، ظرفیت‌های فروش، مسیرهای ورود به بازار، شبکه ارتباطی و مزیت رقابتی بررسی می‌شود تا یک نقشه عملیاتی برای رشد پایدار طراحی شود.",
        "tags": ["توسعه بازار", "استراتژی", "شرکت‌های داخلی و خارجی"],
        "sections": [
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
    },
    {
        "slug": "medical-education-program-design",
        "order": 2,
        "icon_key": "sitemap",
        "highlight": False,
        "title": "طراحی و مدیریت برنامه‌های پزشکی",
        "summary": "طراحی و مدیریت برگزاری سمینار، کنگره پزشکی، دوره‌های آموزشی و کارگاه‌های تخصصی حضوری و آنلاین.",
        "description": "پرشیامهر ساختار علمی، اجرایی و ارتباطی برنامه‌های تخصصی پزشکی را طراحی و مدیریت می‌کند؛ از تعریف هدف و مخاطب تا برنامه‌ریزی محتوایی، هماهنگی ارائه‌دهندگان و اجرای حضوری یا آنلاین.",
        "tags": ["طراحی برنامه", "مدیریت اجرا", "حضوری و آنلاین"],
        "sections": [
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
    },
    {
        "slug": "surgical-training-execution",
        "order": 3,
        "icon_key": "school",
        "highlight": False,
        "title": "مجری برگزاری دوره‌های جراحی",
        "summary": "مجری برگزاری دوره‌های جراحی عمومی، جراحی پلاستیک، چاقی، زنان، اندوسکوپی و رباتیک.",
        "description": "این خدمت روی اجرای عملیاتی دوره‌های تخصصی جراحی تمرکز دارد؛ از آماده‌سازی برنامه آموزشی و هماهنگی مدرسین تا مدیریت اجرا، تجهیزات، سناریوهای آموزشی و تجربه شرکت‌کنندگان.",
        "tags": ["جراحی عمومی", "رباتیک", "اندوسکوپی"],
        "sections": [
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
    },
]

SUBSIDIARIES = [
    {
        "slug": "persia-science",
        "name": "پرسیا ساینس",
        "monogram": "PS",
        "order": 1,
        "tagline": "تحقیق و توسعه تجهیزات پزشکی",
        "description": "واردات و توزیع تجهیزات پیشرفته پزشکی از برندهای معتبر اروپایی و آمریکایی.",
        "style": {"tone": "blue"},
    },
    {
        "slug": "media-med",
        "name": "مدیا مد",
        "monogram": "MM",
        "order": 2,
        "tagline": "بازاریابی و ارتباطات پزشکی",
        "description": "خدمات بازاریابی تخصصی، تولید محتوای علمی و استراتژی ارتباطات برای شرکت‌های پزشکی.",
        "style": {"tone": "rose", "department": "education"},
    },
    {
        "slug": "persia-advance",
        "name": "پرسیا ادوانس",
        "monogram": "PA",
        "order": 3,
        "tagline": "تکنولوژی و دیجیتال هلث",
        "description": "توسعه راهکارهای دیجیتال بهداشت و پیاده‌سازی سیستم‌های هوشمند در مراکز درمانی.",
        "style": {"tone": "violet"},
    },
]

SETTINGS = {
    "address": "تهران، خیابان ولیعصر، برج پزشکی ایران، طبقه ۱۲",
    "phone": "۰۲۱-۸۸۰۰۱۲۳۴",
    "email": "info@persiamehr.com",
    "footer_about": "هلدینگ تخصصی در حوزه توسعه بازار تجهیزات پزشکی، مشاوره اجرایی و طراحی ساختار سازمانی.",
    "linkedin": "https://www.linkedin.com/company/persiamehr",
    "instagram": "https://www.instagram.com/persiamehr",
    "telegram": "https://t.me/persiamehr",
    "whatsapp": "+982188001234",
}


class Command(BaseCommand):
    help = "Seed and update static website content."

    def handle(self, *args, **options):
        for item in SERVICES:
            Service.objects.update_or_create(
                slug=item["slug"],
                defaults={
                    "title": item["title"],
                    "summary": item["summary"],
                    "description": item["description"],
                    "tags": item["tags"],
                    "sections": item["sections"],
                    "icon_key": item["icon_key"],
                    "highlight": item["highlight"],
                    "is_active": True,
                    "order": item["order"],
                },
            )
        Service.objects.exclude(slug__in=[item["slug"] for item in SERVICES]).update(
            is_active=False
        )

        for item in SUBSIDIARIES:
            Subsidiary.objects.update_or_create(
                slug=item["slug"],
                defaults={
                    "name": item["name"],
                    "monogram": item["monogram"],
                    "tagline": item["tagline"],
                    "description": item["description"],
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
