import { apiClient } from "@/lib/api";
import {
  getSubsidiaries,
  getSubsidiaryBySlug,
  mapApiSubsidiaries,
  mapApiSubsidiary,
  type SubsidiaryItem,
} from "@/features/subsidiaries/types";

export function getSubsidiaryStaticParams() {
  return getSubsidiaries().map((item) => ({ slug: item.slug }));
}

export async function getDisplaySubsidiary(
  slug: string
): Promise<SubsidiaryItem | undefined> {
  try {
    const all = await apiClient.getSubsidiaries();
    const found = all.find((item) => item.slug === slug);
    return found ? mapApiSubsidiary(found) : getSubsidiaryBySlug(slug);
  } catch {
    return getSubsidiaryBySlug(slug);
  }
}

export async function getDisplaySubsidiaries() {
  try {
    return mapApiSubsidiaries(await apiClient.getSubsidiaries());
  } catch {
    return getSubsidiaries();
  }
}
