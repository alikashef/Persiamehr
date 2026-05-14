from django.db import models


class Subsidiary(models.Model):
    name = models.CharField(max_length=200, verbose_name='نام')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='اسلاگ', allow_unicode=True)
    name_en = models.CharField(max_length=200, verbose_name='نام انگلیسی', blank=True)
    name_i18n = models.JSONField(verbose_name='نام چندزبانه', default=dict, blank=True)
    monogram = models.CharField(max_length=20, verbose_name='مونوگرام', blank=True)
    tagline = models.JSONField(verbose_name='تگ‌لاین چندزبانه', default=dict, blank=True)
    description = models.TextField(verbose_name='توضیحات')
    description_i18n = models.JSONField(verbose_name='توضیحات چندزبانه', default=dict, blank=True)
    logo = models.ImageField(upload_to='subsidiaries/logos/', verbose_name='لوگو', blank=True, null=True)
    website = models.URLField(verbose_name='وبسایت', blank=True)
    style = models.JSONField(verbose_name='تنظیمات ظاهری', default=dict, blank=True)
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ ویرایش')

    class Meta:
        verbose_name = 'زیرمجموعه'
        verbose_name_plural = 'زیرمجموعه‌های هلدینگ'
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.name
