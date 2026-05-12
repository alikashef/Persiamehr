// Static slug list kept only for type compatibility.
// All actual data is fetched from the Django API via apiClient.
export const SERVICE_SLUGS = [
  "executive-consulting",
  "medical-education-program-design",
  "surgical-training-execution",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
