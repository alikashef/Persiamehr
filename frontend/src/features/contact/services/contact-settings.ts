import { apiClient, type SiteSettings } from "@/lib/api";

export async function getContactSettings(): Promise<SiteSettings | undefined> {
  try {
    return await apiClient.getSettings();
  } catch {
    return undefined;
  }
}
