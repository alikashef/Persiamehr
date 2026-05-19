import { copy } from "@/constants/copy";
import type {
  Department,
  DepartmentCategoryItem,
  SubsidiaryItem,
} from "@/features/subsidiaries/types";

export type DepartmentGroup = Department;

export type NavLink = {
  label: string;
  href: string;
};

export type ProductLink = NavLink & {
  description: string;
};

export type ConsultationFormState = {
  name: string;
  mobile: string;
  subject: string;
  message: string;
};

export type NavbarCopy = typeof copy;

export type SubsidiaryGroup = DepartmentCategoryItem & {
  items: SubsidiaryItem[];
};
