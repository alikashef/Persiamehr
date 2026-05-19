const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";
const INTERNAL_API_ORIGIN =
  process.env.NEXT_INTERNAL_API_ORIGIN ?? "http://127.0.0.1:8000";

function apiUrl(path: string) {
  if (API_BASE.startsWith("http://") || API_BASE.startsWith("https://")) {
    return `${API_BASE}${path}`;
  }

  if (typeof window === "undefined") {
    return `${INTERNAL_API_ORIGIN}${API_BASE}${path}`;
  }

  return `${API_BASE}${path}`;
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(apiUrl(path), {
    headers: { "Content-Type": "application/json", ...init?.headers },
    ...init,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

export type SiteSettings = {
  address: string;
  phone: string;
  email: string;
  footer_about: string;
  instagram: string;
  telegram: string;
  linkedin: string;
  twitter: string;
  youtube: string;
  whatsapp: string;
};

export type ApiService = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  sections: Array<{ title: string; body: string }>;
  icon_key: string;
  highlight: boolean;
  is_active: boolean;
  order: number;
};

export type ApiSubsidiary = {
  id: number;
  department_category: ApiDepartmentCategory | null;
  name: string;
  slug: string;
  monogram: string;
  tagline: string;
  description: string;
  logo: string | null;
  website: string;
  style: Record<string, string>;
  is_active: boolean;
  order: number;
};

export type ApiDepartmentCategory = {
  id: number;
  title: string;
  slug: string;
  description: string;
  is_active: boolean;
  order: number;
};

export type ContactPayload = {
  full_name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type ServiceRequestPayload = {
  full_name: string;
  company?: string;
  email: string;
  phone: string;
  service_type: string;
  description: string;
};

export type ProductRequestPayload = {
  full_name: string;
  company?: string;
  email: string;
  phone: string;
  product_name: string;
  quantity?: string;
  description: string;
};

export const apiClient = {
  getServices: () => apiFetch<ApiService[]>("/services/", { cache: "no-store" }),

  getService: (slug: string) =>
    apiFetch<ApiService>(`/services/${slug}/`, { cache: "no-store" }),

  getSubsidiaries: () =>
    apiFetch<ApiSubsidiary[]>("/subsidiaries/", {
      cache: "no-store",
    }),

  getDepartmentCategories: () =>
    apiFetch<ApiDepartmentCategory[]>("/department-categories/", {
      cache: "no-store",
    }),

  getSettings: () => apiFetch<SiteSettings>("/settings/", { cache: "no-store" }),

  sendContact: (data: ContactPayload) =>
    apiFetch<{ id: number }>("/contact/", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  sendServiceRequest: (data: ServiceRequestPayload) =>
    apiFetch<{ id: number }>("/service-requests/", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  sendProductRequest: (data: ProductRequestPayload) =>
    apiFetch<{ id: number }>("/product-requests/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
