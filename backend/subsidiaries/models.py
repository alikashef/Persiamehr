from django.db import models


class DepartmentCategory(models.Model):
    title = models.CharField(max_length=120, verbose_name='عنوان')
    slug = models.SlugField(max_length=120, unique=True, verbose_name='اسلاگ', allow_unicode=True)
    description = models.TextField(verbose_name='توضیحات', blank=True)
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ ویرایش')

    class Meta:
        verbose_name = 'دسته‌بندی دپارتمان'
        verbose_name_plural = 'دسته‌بندی‌های دپارتمان'
        ordering = ['order', 'title']

    def __str__(self):
        return self.title


class Subsidiary(models.Model):
    department_category = models.ForeignKey(
        DepartmentCategory,
        on_delete=models.PROTECT,
        related_name='subsidiaries',
        verbose_name='دسته‌بندی دپارتمان',
        blank=True,
        null=True,
    )
    name = models.CharField(max_length=200, verbose_name='نام')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='اسلاگ', allow_unicode=True)
    monogram = models.CharField(max_length=20, verbose_name='مونوگرام', blank=True)
    tagline = models.CharField(max_length=300, verbose_name='تگ‌لاین', blank=True)
    description = models.TextField(verbose_name='توضیحات')
    logo = models.ImageField(upload_to='subsidiaries/logos/', verbose_name='لوگو', blank=True, null=True)
    header_image = models.ImageField(upload_to='subsidiaries/headers/', verbose_name='تصویر هدر', blank=True, null=True)
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
