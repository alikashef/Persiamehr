"use server";

import { apiClient } from "@/lib/api";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const full_name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!full_name || !email || !message) {
    return { success: false, error: "لطفاً تمام فیلدهای ضروری را پر کنید." };
  }

  try {
    await apiClient.sendContact({
      full_name,
      email,
      subject: company ? `درخواست از ${company}` : "تماس از سایت",
      message,
    });
    return { success: true };
  } catch {
    return { success: false, error: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید." };
  }
}
