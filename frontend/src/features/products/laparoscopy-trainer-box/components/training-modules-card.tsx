import { IconCheck, IconMicroscope } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { laparoscopyTrainingModules } from "@/features/products/laparoscopy-trainer-box/constants/content";

export function TrainingModulesCard() {
  return (
    <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
      <CardHeader className="p-7 pb-0">
        <CardTitle className="flex items-center gap-2 text-xl font-black text-neutral-900">
          <IconMicroscope size={22} className="text-primary-500" />
          تمرین‌هایی که پوشش می‌دهد
        </CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <div className="grid gap-3 sm:grid-cols-2">
          {laparoscopyTrainingModules.map((module) => (
            <div
              key={module}
              className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <IconCheck className="mt-1 text-primary-500" size={18} />
              <span className="text-sm font-semibold leading-7 text-neutral-700">
                {module}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
