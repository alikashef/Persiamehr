import OtpAuthForm from "@/components/account/otp-auth-form";
import { PageLayout } from "@/components/layout/page-layout";
import { narrowPageContainer } from "@/constants/layout";
import { cn } from "@/lib/utils";

const accountHighlights = ["بدون رمز عبور", "تایید پیامکی", "مناسب موبایل"];

export function AccountPageView() {
  return (
    <PageLayout className="bg-neutral-50">
      <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgb(148_57_147/0.16),transparent_62%)]" />
        <div
          className={cn(
            narrowPageContainer,
            "relative grid gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center"
          )}
        >
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-xs font-bold text-primary-600">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              حساب کاربری پرشیامهر
            </div>
            <h1 className="mb-5 text-3xl font-black leading-tight text-neutral-900 sm:text-4xl">
              ورود و ثبت‌نام سریع با شماره موبایل
            </h1>
            <p className="text-base leading-8 text-neutral-500">
              برای پیگیری درخواست‌ها، دریافت مشاوره و مدیریت ارتباط با تیم
              پرشیامهر، با کد تایید یک‌بارمصرف وارد حساب خود شوید.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {accountHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-100 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <OtpAuthForm />
        </div>
      </section>
    </PageLayout>
  );
}
