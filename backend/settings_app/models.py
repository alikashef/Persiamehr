from django.db import models


class SiteSettings(models.Model):
    # Contact info
    address = models.TextField(verbose_name='آدرس', blank=True)
    phone = models.CharField(max_length=50, verbose_name='شماره تماس', blank=True)
    email = models.EmailField(verbose_name='ایمیل', blank=True)

    # About footer
    footer_about = models.TextField(verbose_name='متن درباره ما (فوتر)', blank=True)

    # Social media
    instagram = models.URLField(verbose_name='اینستاگرام', blank=True)
    telegram = models.URLField(verbose_name='تلگرام', blank=True)
    linkedin = models.URLField(verbose_name='لینکدین', blank=True)
    twitter = models.URLField(verbose_name='توییتر/ایکس', blank=True)
    youtube = models.URLField(verbose_name='یوتیوب', blank=True)
    whatsapp = models.CharField(max_length=30, verbose_name='واتساپ', blank=True)

    class Meta:
        verbose_name = 'تنظیمات سایت'
        verbose_name_plural = 'تنظیمات سایت'

    def __str__(self):
        return 'تنظیمات سایت'

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj
