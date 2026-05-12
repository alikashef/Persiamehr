from django.db import models


class Service(models.Model):
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True, verbose_name='اسلاگ')
    icon_name = models.CharField(max_length=100, default='IconStar', verbose_name='نام آیکون')

    # Farsi
    title = models.CharField(max_length=200, verbose_name='عنوان (فارسی)')
    summary = models.TextField(verbose_name='خلاصه (فارسی)')
    description = models.TextField(verbose_name='توضیحات (فارسی)')
    tags = models.JSONField(default=list, verbose_name='تگ‌ها (فارسی)')
    sections = models.JSONField(default=list, verbose_name='بخش‌ها (فارسی)', help_text='آرایه‌ای از {title, body}')

    # English
    title_en = models.CharField(max_length=200, blank=True, verbose_name='عنوان (انگلیسی)')
    summary_en = models.TextField(blank=True, verbose_name='خلاصه (انگلیسی)')
    description_en = models.TextField(blank=True, verbose_name='توضیحات (انگلیسی)')
    tags_en = models.JSONField(default=list, verbose_name='تگ‌ها (انگلیسی)')
    sections_en = models.JSONField(default=list, verbose_name='بخش‌ها (انگلیسی)')

    # Arabic
    title_ar = models.CharField(max_length=200, blank=True, verbose_name='عنوان (عربی)')
    summary_ar = models.TextField(blank=True, verbose_name='خلاصه (عربی)')
    description_ar = models.TextField(blank=True, verbose_name='توضیحات (عربی)')
    tags_ar = models.JSONField(default=list, verbose_name='تگ‌ها (عربی)')
    sections_ar = models.JSONField(default=list, verbose_name='بخش‌ها (عربی)')

    highlight = models.BooleanField(default=False, verbose_name='برجسته')
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'خدمت'
        verbose_name_plural = 'خدمات'
        ordering = ['order', 'created_at']

    def __str__(self):
        return self.title
