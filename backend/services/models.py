from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name='عنوان')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='اسلاگ', allow_unicode=True)
    summary = models.TextField(verbose_name='خلاصه', blank=True)
    description = models.TextField(verbose_name='توضیحات')
    title_i18n = models.JSONField(verbose_name='عنوان چندزبانه', default=dict, blank=True)
    summary_i18n = models.JSONField(verbose_name='خلاصه چندزبانه', default=dict, blank=True)
    description_i18n = models.JSONField(verbose_name='توضیحات چندزبانه', default=dict, blank=True)
    tags = models.JSONField(verbose_name='برچسب‌ها', default=list, blank=True)
    sections = models.JSONField(verbose_name='بخش‌های توضیحات', default=list, blank=True)
    icon_key = models.CharField(max_length=80, verbose_name='کلید آیکون', blank=True)
    icon = models.ImageField(upload_to='services/icons/', verbose_name='آیکون', blank=True, null=True)
    image = models.ImageField(upload_to='services/images/', verbose_name='تصویر', blank=True, null=True)
    highlight = models.BooleanField(default=False, verbose_name='نمایش ویژه')
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ ویرایش')

    class Meta:
        verbose_name = 'خدمت'
        verbose_name_plural = 'خدمات'
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title
