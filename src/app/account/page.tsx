import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import OtpAuthForm from "@/components/account/otp-auth-form";

export const metadata = {
  title: "حساب کاربری | پرشیامهر",
  description: "ورود و ثبت‌نام در حساب کاربری پرشیامهر با شماره موبایل و کد تایید",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgb(148_57_147/0.16),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center">
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
              {["بدون رمز عبور", "تایید پیامکی", "مناسب موبایل"].map((item) => (
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
      <Footer />
    </main>
  );
}
