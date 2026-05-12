from django.db import models

THEME_CHOICES = [
    ('blue', 'آبی'),
    ('rose', 'گلبهی'),
    ('violet', 'بنفش'),
    ('green', 'سبز'),
]


class Subsidiary(models.Model):
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True, verbose_name='اسلاگ')
    monogram = models.CharField(max_length=10, verbose_name='مونوگرام')
    theme = models.CharField(max_length=20, choices=THEME_CHOICES, default='blue', verbose_name='تم رنگی')

    # Farsi
    name = models.CharField(max_length=200, verbose_name='نام (فارسی)')
    tagline = models.CharField(max_length=300, blank=True, verbose_name='شعار (فارسی)')
    description = models.TextField(blank=True, verbose_name='توضیحات (فارسی)')

    # English
    name_en = models.CharField(max_length=200, blank=True, verbose_name='نام (انگلیسی)')
    tagline_en = models.CharField(max_length=300, blank=True, verbose_name='شعار (انگلیسی)')
    description_en = models.TextField(blank=True, verbose_name='توضیحات (انگلیسی)')

    # Arabic
    name_ar = models.CharField(max_length=200, blank=True, verbose_name='نام (عربی)')
    tagline_ar = models.CharField(max_length=300, blank=True, verbose_name='شعار (عربی)')
    description_ar = models.TextField(blank=True, verbose_name='توضیحات (عربی)')

    website = models.URLField(verbose_name='وبسایت', blank=True)
    logo = models.ImageField(upload_to='subsidiaries/logos/', verbose_name='لوگو', blank=True, null=True)
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ ویرایش')

    class Meta:
        verbose_name = 'زیرمجموعه'
        verbose_name_plural = 'زیرمجموعه‌های هلدینگ'
        ordering = ['order', 'created_at']

    def __str__(self):
        return self.name
