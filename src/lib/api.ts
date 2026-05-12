const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
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

export type ServiceSection = { title: string; body: string };

export type ApiService = {
  slug: string;
  icon_name: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  sections: ServiceSection[];
  highlight: boolean;
  order: number;
};

export type ApiSubsidiary = {
  slug: string;
  monogram: string;
  theme: "blue" | "rose" | "violet" | "green";
  name: string;
  tagline: string;
  description: string;
  website: string;
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
  getSettings: () =>
    apiFetch<SiteSettings>("/settings/", { next: { revalidate: 3600 } } as RequestInit),

  getServices: (lang = "fa") =>
    apiFetch<ApiService[]>(`/services/?lang=${lang}`, { next: { revalidate: 3600 } } as RequestInit),

  getService: (slug: string, lang = "fa") =>
    apiFetch<ApiService>(`/services/${slug}/?lang=${lang}`, { next: { revalidate: 3600 } } as RequestInit),

  getSubsidiaries: (lang = "fa") =>
    apiFetch<ApiSubsidiary[]>(`/subsidiaries/?lang=${lang}`, { next: { revalidate: 3600 } } as RequestInit),

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
