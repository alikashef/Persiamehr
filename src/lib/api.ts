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
    apiFetch<SiteSettings>("/settings/", { next: { revalidate: 3600 } }),

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
