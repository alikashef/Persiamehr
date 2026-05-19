import { apiClient } from "@/lib/api";
import {
  getServiceBySlug,
  getServices,
  mapApiService,
  mapApiServices,
  services,
  type ServiceItem,
} from "@/features/services/types";

export function getServiceStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function getDisplayService(
  slug: string
): Promise<ServiceItem | undefined> {
  try {
    return mapApiService(await apiClient.getService(slug));
  } catch {
    return getServiceBySlug(slug);
  }
}

export async function getDisplayServices() {
  try {
    return mapApiServices(await apiClient.getServices());
  } catch {
    return services;
  }
}
