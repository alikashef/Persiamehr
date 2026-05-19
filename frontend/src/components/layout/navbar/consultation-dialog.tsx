import type { FormEvent } from "react";
import { IconCheck, IconSend } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ConsultationFormState, NavbarCopy } from "./types";

type ConsultationDialogProps = {
  error: string;
  form: ConsultationFormState;
  onFormChange: (form: ConsultationFormState) => void;
  onOpenChange: (open: boolean) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  open: boolean;
  submitted: boolean;
  submitting: boolean;
  t: NavbarCopy;
};

export function ConsultationDialog({
  error,
  form,
  onFormChange,
  onOpenChange,
  onSubmit,
  open,
  submitted,
  submitting,
  t,
}: ConsultationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl rounded-2xl bg-white p-0 dark:bg-neutral-950">
        <div className="p-6 sm:p-7">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl font-black text-neutral-900">
              {t.consultation.title}
            </DialogTitle>
            <DialogDescription className="leading-7 text-neutral-500">
              {t.consultation.description}
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                <IconCheck size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-neutral-900">
                {t.consultation.successTitle}
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-7 text-neutral-500">
                {t.consultation.successBody}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                    {t.consultation.name}
                  </Label>
                  <Input
                    required
                    value={form.name}
                    onChange={(event) =>
                      onFormChange({ ...form, name: event.target.value })
                    }
                    placeholder={t.consultation.namePlaceholder}
                    className="h-12 rounded-xl border-neutral-200 bg-neutral-50"
                  />
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                    {t.consultation.phone}
                  </Label>
                  <Input
                    required
                    dir="ltr"
                    inputMode="tel"
                    value={form.mobile}
                    onChange={(event) =>
                      onFormChange({ ...form, mobile: event.target.value })
                    }
                    placeholder="0912 345 6789"
                    className="h-12 rounded-xl border-neutral-200 bg-neutral-50 text-left"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  {t.consultation.subject}
                </Label>
                <Input
                  required
                  value={form.subject}
                  onChange={(event) =>
                    onFormChange({ ...form, subject: event.target.value })
                  }
                  placeholder={t.consultation.subjectPlaceholder}
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50"
                />
              </div>

              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  {t.consultation.message}
                </Label>
                <Textarea
                  value={form.message}
                  onChange={(event) =>
                    onFormChange({ ...form, message: event.target.value })
                  }
                  placeholder={t.consultation.messagePlaceholder}
                  className="min-h-28 resize-none rounded-xl border-neutral-200 bg-neutral-50"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
              >
                <IconSend size={17} />
                {submitting ? t.consultation.submitting : t.consultation.submit}
              </Button>
              {error ? <p className="text-sm font-medium text-red-500">{error}</p> : null}
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
