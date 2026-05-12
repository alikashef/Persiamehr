from django.db import models


class Subsidiary(models.Model):
    name = models.CharField(max_length=200, verbose_name='نام')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='اسلاگ', allow_unicode=True)
    description = models.TextField(verbose_name='توضیحات')
    logo = models.ImageField(upload_to='subsidiaries/logos/', verbose_name='لوگو', blank=True, null=True)
    website = models.URLField(verbose_name='وبسایت', blank=True)
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
