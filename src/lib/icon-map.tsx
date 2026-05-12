import {
  IconSchool,
  IconSitemap,
  IconUserStar,
  IconStar,
  IconStethoscope,
  IconMicroscope,
  IconHeartRateMonitor,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

type TablerIconProps = { size?: number; className?: string };

const iconMap: Record<string, ComponentType<TablerIconProps>> = {
  IconSchool,
  IconSitemap,
  IconUserStar,
  IconStar,
  IconStethoscope,
  IconMicroscope,
  IconHeartRateMonitor,
};

export function getIcon(name: string): ComponentType<TablerIconProps> {
  return iconMap[name] ?? IconStar;
}
