from django.db import models


class ContactMessage(models.Model):
    full_name = models.CharField(max_length=150, verbose_name='نام و نام خانوادگی')
    email = models.EmailField(verbose_name='ایمیل')
    phone = models.CharField(max_length=20, verbose_name='شماره تماس', blank=True)
    subject = models.CharField(max_length=200, verbose_name='موضوع')
    message = models.TextField(verbose_name='پیام')
    is_read = models.BooleanField(default=False, verbose_name='خوانده شده')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ارسال')

    class Meta:
        verbose_name = 'پیام تماس'
        verbose_name_plural = 'فرم تماس با ما'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} - {self.subject}'


class ServiceRequest(models.Model):
    full_name = models.CharField(max_length=150, verbose_name='نام و نام خانوادگی')
    company = models.CharField(max_length=200, verbose_name='نام شرکت/سازمان', blank=True)
    email = models.EmailField(verbose_name='ایمیل', blank=True)
    phone = models.CharField(max_length=20, verbose_name='شماره تماس')
    service_type = models.CharField(max_length=200, verbose_name='نوع خدمت مورد نظر')
    description = models.TextField(verbose_name='توضیحات و جزئیات درخواست')
    is_read = models.BooleanField(default=False, verbose_name='خوانده شده')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ارسال')

    class Meta:
        verbose_name = 'درخواست خدمت'
        verbose_name_plural = 'فرم درخواست خدمات'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} - {self.service_type}'


class ProductRequest(models.Model):
    full_name = models.CharField(max_length=150, verbose_name='نام و نام خانوادگی')
    company = models.CharField(max_length=200, verbose_name='نام شرکت/سازمان', blank=True)
    email = models.EmailField(verbose_name='ایمیل', blank=True)
    phone = models.CharField(max_length=20, verbose_name='شماره تماس')
    product_name = models.CharField(max_length=200, verbose_name='نام محصول مورد نظر')
    quantity = models.CharField(max_length=100, verbose_name='تعداد/مقدار', blank=True)
    description = models.TextField(verbose_name='توضیحات و مشخصات محصول')
    is_read = models.BooleanField(default=False, verbose_name='خوانده شده')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ارسال')

    class Meta:
        verbose_name = 'درخواست محصول'
        verbose_name_plural = 'فرم درخواست محصول'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} - {self.product_name}'
