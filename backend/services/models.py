from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name='عنوان')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='اسلاگ', allow_unicode=True)
    description = models.TextField(verbose_name='توضیحات')
    icon = models.ImageField(upload_to='services/icons/', verbose_name='آیکون', blank=True, null=True)
    image = models.ImageField(upload_to='services/images/', verbose_name='تصویر', blank=True, null=True)
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
