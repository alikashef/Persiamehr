"use client";

import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  IconArrowLeft,
  IconAlertCircle,
  IconCheck,
  IconDeviceMobile,
  IconEdit,
  IconLock,
  IconRefresh,
  IconUserPlus,
} from "@tabler/icons-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AuthMode = "login" | "register";
type AuthStep = "mobile" | "otp" | "done";

const otpLength = 5;
const resendSeconds = 60;

function normalizeDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function onlyDigits(value: string) {
  return normalizeDigits(value).replace(/\D/g, "");
}

function formatMobile(value: string) {
  const digits = onlyDigits(value).slice(0, 11);
  return digits.replace(/(\d{4})(\d{3})(\d{0,4})/, (_, p1, p2, p3) =>
    [p1, p2, p3].filter(Boolean).join(" ")
  );
}

function isValidIranMobile(value: string) {
  return /^09\d{9}$/.test(onlyDigits(value));
}

export default function OtpAuthForm() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [step, setStep] = useState<AuthStep>("mobile");
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(resendSeconds);
  const [error, setError] = useState("");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const cleanMobile = useMemo(() => onlyDigits(mobile), [mobile]);
  const otpValue = otp.join("");
  const canSubmitMobile =
    isValidIranMobile(mobile) && (mode === "login" || fullName.trim().length >= 3);
  const canVerifyOtp = otpValue.length === otpLength;

  useEffect(() => {
    if (step !== "otp" || secondsLeft <= 0) return;

    const interval = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [secondsLeft, step]);

  useEffect(() => {
    if (step === "otp") {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  const resetForMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setStep("mobile");
    setError("");
    setOtp(Array(otpLength).fill(""));
  };

  const submitMobile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidIranMobile(mobile)) {
      setError("شماره موبایل را با فرمت ۰۹xxxxxxxxx وارد کنید.");
      return;
    }
    if (mode === "register" && fullName.trim().length < 3) {
      setError("برای ثبت‌نام، نام و نام خانوادگی را وارد کنید.");
      return;
    }

    setError("");
    setOtp(Array(otpLength).fill(""));
    setSecondsLeft(resendSeconds);
    setStep("otp");
  };

  const verifyOtp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canVerifyOtp) {
      setError("کد تایید را کامل وارد کنید.");
      return;
    }

    setError("");
    setStep("done");
  };

  const updateOtp = (index: number, value: string) => {
    const digit = onlyDigits(value).slice(-1);
    setOtp((current) => {
      const next = [...current];
      next[index] = digit;
      return next;
    });

    if (digit && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (value: string) => {
    const digits = onlyDigits(value).slice(0, otpLength).split("");
    if (!digits.length) return;

    setOtp(Array.from({ length: otpLength }, (_, index) => digits[index] ?? ""));
    inputRefs.current[Math.min(digits.length, otpLength) - 1]?.focus();
  };

  const resendOtp = () => {
    if (secondsLeft > 0) return;
    setOtp(Array(otpLength).fill(""));
    setSecondsLeft(resendSeconds);
    setError("");
    inputRefs.current[0]?.focus();
  };

  if (step === "done") {
    return (
      <Card className="rounded-2xl border-emerald-100 bg-white p-0 text-center shadow-sm">
        <CardContent className="p-7 sm:p-8">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
          <IconCheck size={30} />
        </div>
        <h1 className="mb-3 text-2xl font-bold text-neutral-900">
          {mode === "login" ? "ورود موفق بود" : "ثبت‌نام شما انجام شد"}
        </h1>
        <p className="mx-auto mb-7 max-w-sm text-sm leading-7 text-neutral-500">
          حساب کاربری با شماره {formatMobile(cleanMobile)} فعال شد. در نسخه
          نهایی، این مرحله به پنل کاربری متصل می‌شود.
        </p>
        <Button
          type="button"
          onClick={() => {
            setStep("mobile");
            setOtp(Array(otpLength).fill(""));
          }}
          variant="outline"
          size="lg"
          className="h-12 rounded-xl border-primary-200 px-6 font-semibold text-primary-600 hover:bg-primary-50"
        >
          بازگشت به فرم
        </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border-neutral-100 bg-white p-0 shadow-sm">
      <CardContent className="p-6 sm:p-8">
      <Tabs
        value={mode}
        onValueChange={(value) => resetForMode(value as AuthMode)}
        className="mb-7"
      >
        <TabsList className="grid h-auto w-full grid-cols-2 rounded-xl bg-neutral-50 p-1">
          <TabsTrigger
            value="login"
            className="min-h-11 rounded-lg text-sm font-bold data-active:text-primary-600"
          >
            ورود
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className="min-h-11 rounded-lg text-sm font-bold data-active:text-primary-600"
          >
            ثبت‌نام
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mb-7">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500">
          {mode === "login" ? <IconLock size={24} /> : <IconUserPlus size={24} />}
        </div>
        <h1 className="mb-2 text-2xl font-black text-neutral-900">
          {mode === "login" ? "ورود به حساب کاربری" : "ساخت حساب کاربری"}
        </h1>
        <p className="text-sm leading-7 text-neutral-500">
          {step === "mobile"
            ? "شماره موبایل خود را وارد کنید تا کد تایید برای شما ارسال شود."
            : `کد تایید ارسال شده به ${formatMobile(cleanMobile)} را وارد کنید.`}
        </p>
      </div>

      {step === "mobile" ? (
        <form onSubmit={submitMobile} className="space-y-5">
          {mode === "register" && (
            <>
              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  نام و نام خانوادگی
                </Label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="مثلا علی رضایی"
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  شرکت یا سازمان
                </Label>
                <Input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="اختیاری"
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
                />
              </div>
            </>
          )}

          <div>
            <Label className="mb-2 block text-sm font-semibold text-neutral-700">
              شماره موبایل
            </Label>
            <div className="relative">
              <IconDeviceMobile
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <Input
                type="tel"
                inputMode="numeric"
                dir="ltr"
                value={formatMobile(mobile)}
                onChange={(event) => {
                  setMobile(onlyDigits(event.target.value));
                  setError("");
                }}
                placeholder="0912 345 6789"
                className="h-12 rounded-xl border-neutral-200 bg-neutral-50 py-3 pl-4 pr-11 text-left text-sm font-semibold text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
              />
            </div>
          </div>

          {error && (
            <Alert className="rounded-xl border-rose-100 bg-rose-50 text-rose-600">
              <IconAlertCircle size={16} />
              <AlertDescription className="font-medium">{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={!canSubmitMobile}
            size="lg"
            className="h-12 w-full rounded-xl bg-primary-500 text-sm font-bold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none"
          >
            ارسال کد تایید
            <IconArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5 rtl:rotate-180"
            />
          </Button>
        </form>
      ) : (
        <form onSubmit={verifyOtp} className="space-y-6">
          <div className="flex flex-row-reverse justify-center gap-2 sm:gap-3" dir="ltr">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(node) => {
                  inputRefs.current[index] = node;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(event) => updateOtp(index, event.target.value)}
                onKeyDown={(event) => handleOtpKeyDown(index, event)}
                onPaste={(event) => {
                  event.preventDefault();
                  handleOtpPaste(event.clipboardData.getData("text"));
                }}
                className="h-12 w-11 rounded-xl border-neutral-200 bg-neutral-50 text-center text-lg font-black text-neutral-900 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100 sm:h-14 sm:w-12"
                aria-label={`رقم ${index + 1} کد تایید`}
              />
            ))}
          </div>

          {error && (
            <Alert className="rounded-xl border-rose-100 bg-rose-50 text-rose-600">
              <IconAlertCircle size={16} />
              <AlertDescription className="font-medium">{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={!canVerifyOtp}
            size="lg"
            className="h-12 w-full rounded-xl bg-primary-500 text-sm font-bold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none"
          >
            تایید و ادامه
          </Button>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setStep("mobile");
                setError("");
              }}
              className="font-semibold text-neutral-500 hover:text-primary-600"
            >
              <IconEdit size={16} />
              ویرایش شماره
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={resendOtp}
              disabled={secondsLeft > 0}
              className="font-semibold text-primary-600 disabled:cursor-not-allowed disabled:text-neutral-400"
            >
              <IconRefresh size={16} />
              {secondsLeft > 0
                ? `ارسال مجدد تا ${secondsLeft} ثانیه`
                : "ارسال مجدد کد"}
            </Button>
          </div>
        </form>
      )}
      </CardContent>
    </Card>
  );
}
