# Codex Working Notes - Persiamehr

این فایل برای خود Codex است تا دفعه های بعد روی این پروژه کمتر دوباره کاری کند.

## پروژه

- مسیر پروژه: `/Users/ali/Documents/GitHub/Persiamehr`
- فرانت: Next.js app router در `src/`
- بک اند: Django + DRF در `backend/`
- دیتابیس فعلی: SQLite در `backend/db.sqlite3`
- زبان ها: فارسی پیش فرض، انگلیسی و عربی با routeهای `/en` و `/ar`
- جهت ها:
  - فارسی و عربی: RTL
  - انگلیسی: LTR، ولی بعضی صفحات قبلا اشتباها `text-right` داشتند. برای انگلیسی باید `text-left` باشد مگر کاربر خلافش را بخواهد.

## اجرا

برای اجرای قابل مشاهده روی شبکه:

```bash
backend/venv/bin/python backend/manage.py runserver 0.0.0.0:8000
npm run dev -- --hostname 0.0.0.0
```

IP فعلی شبکه که قبلا پیدا شد:

```text
192.168.100.198
```

لینک ها:

```text
Frontend: http://192.168.100.198:3000
Admin:    http://192.168.100.198:8000/admin/
API:      http://192.168.100.198:8000/api/
```

اگر admin روی 8000 باز نشد و 404 داد، احتمال دارد `python -m http.server 8000` یا پروسه دیگری روی پورت نشسته باشد. با `lsof -iTCP:8000 -sTCP:LISTEN -n -P` چک کن.

## قوانین Next.js این پروژه

- طبق `AGENTS.md`، قبل از تغییرات مهم Next.js docs داخل `node_modules/next/dist/docs/` را در نظر بگیر.
- برای داده هایی که از ادمین Django تغییر می کنند از کش Next استفاده نکن.
- در `src/lib/api.ts` برای محتوای admin-editable از `cache: "no-store"` استفاده شده:
  - `getServices`
  - `getService`
  - `getSubsidiaries`
  - `getSettings`
- دلیل: قبلا `revalidate` باعث می شد تغییرات admin دیر در فرانت دیده شوند.

## API و داده ها

`NEXT_PUBLIC_API_URL` در `.env.local` باید به Django اشاره کند:

```text
http://localhost:8000/api
```

مدل هایی که به API وصل شدند:

- Services: `/api/services/` و `/api/services/{slug}/`
- Subsidiaries: `/api/subsidiaries/`
- Settings: `/api/settings/`
- Contact/service/product requests: فرم ها به API ارسال می شوند.

فرانت اگر API در دسترس نبود fallback static دارد، اما هدف این است که admin source اصلی باشد.

## چندزبانه ها در admin

کاربر JSON دستی دوست ندارد. برای admin همیشه فرم های جدا بساز:

- فارسی
- English
- العربية

ساختار دیتابیس فعلا JSON i18n را نگه می دارد تا API و فرانت ساده بمانند، ولی در admin با فیلدهای انسانی نمایش داده می شود.

### Services

فایل: `backend/services/admin.py`

فرم `ServiceAdminForm` فیلدهای جدا دارد:

- `title_fa/en/ar`
- `summary_fa/en/ar`
- `description_fa/en/ar`
- `tags_fa/en/ar`
- `sections_fa/en/ar`

راهنما:

- tags: هر خط یک برچسب
- sections: هر خط با فرمت `عنوان | متن`

در save دوباره به این فیلدها تبدیل می شود:

- `title_i18n`
- `summary_i18n`
- `description_i18n`
- `tags`
- `sections`

### Subsidiaries

فایل ها:

- `backend/subsidiaries/models.py`
- `backend/subsidiaries/admin.py`

برای نام سه زبانه، فیلد `name_i18n` اضافه شده و migration دارد:

```text
backend/subsidiaries/migrations/0003_subsidiary_name_i18n.py
```

فرم `SubsidiaryAdminForm` فیلدهای جدا دارد:

- `name_fa/en/ar`
- `tagline_fa/en/ar`
- `description_fa/en/ar`

### SiteSettings

فایل ها:

- `backend/settings_app/models.py`
- `backend/settings_app/admin.py`

برای فوتر و آدرس چندزبانه اضافه شد:

- `address_i18n`
- `footer_about_i18n`

migration:

```text
backend/settings_app/migrations/0002_sitesettings_address_i18n_and_more.py
```

در فرانت، `src/components/footer.tsx` با `pickLocalized` بر اساس locale مقدار مناسب را می خواند.

## Django admin / Unfold

Unfold نصب شده:

```text
django-unfold==0.84.0
Django==4.2.16
```

مهم: آخرین نسخه Unfold در زمان نصب Django را به 6 می برد. این پروژه روی Django 4.2 نگه داشته شد، پس نسخه Unfold pin شده است.

تنظیمات:

- `unfold` باید قبل از `django.contrib.admin` در `INSTALLED_APPS` باشد.
- همه adminها از `unfold.admin.ModelAdmin` ارث بری کنند.
- User و Group در `settings_app/admin.py` با فرم های Unfold دوباره register شده اند.

CSS فارسی admin:

```text
backend/settings_app/static/admin/css/unfold-persian.css
```

این CSS کارهای زیر را انجام می دهد:

- فونت فارسی `IRANYekanXFaNum`
- راست چین کردن admin
- حفظ LTR برای email/url/phone/slug
- اصلاح border/focus input و textarea
- اصلاح action bar پایین جدول در RTL

اگر CSS جدید اضافه شد و 404 داد، Django dev server را restart کن.

## فونت ها

فرانت:

- فارسی/عربی: `IRANYekanXFaNum`
- انگلیسی: `Inter`

فایل ها:

- `src/app/layout.tsx`
- `src/app/[locale]/layout.tsx`
- `src/app/globals.css`

Inter از فایل های static خود Unfold کپی شد به:

```text
public/fonts/Inter-Regular.woff2
public/fonts/Inter-Medium.woff2
public/fonts/Inter-SemiBold.woff2
public/fonts/Inter-Bold.woff2
```

مسیرهای `/en/...` با wrapper کلاس `font-inter-locale` رندر می شوند.

## Navbar

فایل:

```text
src/components/navbar.tsx
```

نکته ها:

- نوبار client component است.
- services داخل نوبار از API fetch می شود و fallback static دارد.
- hover لینک ها برای light/dark جدا تنظیم شده.
- برای انگلیسی باید `dir="ltr"` و متن dropdown زبان انگلیسی left aligned باشد.
- دکمه درخواست مشاوره فرم modal دارد و به `/api/service-requests/` POST می کند.

## Footer

فایل:

```text
src/components/footer.tsx
```

نکته مهم:

- اگر `dir="ltr"` است، نباید `text-right` بگیرد.
- برای انگلیسی `text-left` استفاده شود.
- آدرس و متن درباره فوتر از `settings.address_i18n` و `settings.footer_about_i18n` خوانده می شود.

## Shadcn

کاربر تاکید دارد تا جای ممکن از shadcn/ui استفاده شود و خودمان component نسازیم مگر لازم باشد.

کامپوننت هایی که استفاده شده اند:

- Button
- Card
- Badge
- Dialog
- DropdownMenu
- NavigationMenu
- Sheet
- Input
- Label
- Textarea

## تست های معمول

بعد از تغییرات بک:

```bash
backend/venv/bin/python backend/manage.py check
backend/venv/bin/python backend/manage.py makemigrations
backend/venv/bin/python backend/manage.py migrate
```

بعد از تغییرات فرانت:

```bash
npm run lint
npm run build
```

اگر `npm run build` داخل sandbox با Turbopack و خطای bind/process شکست خورد، خارج از sandbox اجرا کن. قبلا همین اتفاق افتاده بود.

## کارهای قبلی مهم

- حذف مفهوم رویداد از پلتفرم، چون کاربر گفت این پلتفرم رویدادی نیست.
- اضافه شدن محصولات آموزشی و خدمات به navbar.
- dropdown برای خدمات و محصولات:
  - خدمات: مشاوره، طراحی/مدیریت، مجری
  - محصول: ترینر باکس لاپاروسکوپی
- ساخت صفحه خدمات و جزئیات خدمات.
- ساخت صفحه محصول آموزشی.
- dark mode با cookie و animated theme toggler.
- language dropdown کنار آیکن dark mode.
- سه زبانه شدن app با فارسی/انگلیسی/عربی.
- اتصال فرم های تماس/مشاوره/محصول به API.
- seed کردن داده های static داخل دیتابیس با `seed_site`.

## احتیاط ها

- کاربر ممکن است در worktree تغییر داده باشد. هیچ فایل/تغییر نامرتبط را revert نکن.
- برای edit دستی از `apply_patch` استفاده کن.
- اگر پورت ها گیر کردند، اول `lsof` بزن و بفهم چه چیزی روی پورت است.
- اگر قرار است همکار از شبکه ببیند، `127.0.0.1` کافی نیست؛ باید `0.0.0.0` باشد.
- برای admin چندزبانه، JSON خام را دوباره در UI نیاور. فرم جدا بساز.
