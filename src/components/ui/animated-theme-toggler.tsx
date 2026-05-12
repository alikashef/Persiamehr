"use client";

import { Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TransitionVariant =
  | "circle"
  | "square"
  | "rectangle"
  | "diamond"
  | "triangle"
  | "hexagon"
  | "star";

type ViewTransition = {
  ready: Promise<void>;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

type AnimatedThemeTogglerProps = {
  className?: string;
  duration?: number;
  variant?: TransitionVariant;
  fromCenter?: boolean;
};

const polygonShapes: Record<Exclude<TransitionVariant, "circle">, string[]> = {
  square: ["inset(50% 50% 50% 50%)", "inset(0 0 0 0)"],
  rectangle: ["inset(50% 0 50% 0)", "inset(0 0 0 0)"],
  diamond: [
    "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    "polygon(50% -25%, 125% 50%, 50% 125%, -25% 50%)",
  ],
  triangle: [
    "polygon(50% 50%, 50% 50%, 50% 50%)",
    "polygon(50% -30%, 130% 130%, -30% 130%)",
  ],
  hexagon: [
    "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    "polygon(25% 0, 75% 0, 110% 50%, 75% 100%, 25% 100%, -10% 50%)",
  ],
  star: [
    "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    "polygon(50% -20%, 62% 32%, 118% 32%, 73% 62%, 90% 115%, 50% 82%, 10% 115%, 27% 62%, -18% 32%, 38% 32%)",
  ],
};

function getThemeCookie() {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("theme="))
    ?.split("=")[1];
}

function setThemeCookie(theme: "dark" | "light") {
  document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = getThemeCookie();
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  const legacyTheme = window.localStorage.getItem("theme");
  if (legacyTheme === "dark" || legacyTheme === "light") {
    setThemeCookie(legacyTheme);
    window.localStorage.removeItem("theme");
    return legacyTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: "dark" | "light") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  setThemeCookie(theme);
}

function getCircleClipPath(
  button: HTMLButtonElement,
  fromCenter: boolean
) {
  const { top, left, width, height } = button.getBoundingClientRect();
  const x = fromCenter ? window.innerWidth / 2 : left + width / 2;
  const y = fromCenter ? window.innerHeight / 2 : top + height / 2;
  const right = window.innerWidth - x;
  const bottom = window.innerHeight - y;
  const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));
  return [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`];
}

function getClipPath(
  variant: TransitionVariant,
  button: HTMLButtonElement,
  fromCenter: boolean
) {
  if (variant === "circle") {
    return getCircleClipPath(button, fromCenter);
  }

  return polygonShapes[variant];
}

export function AnimatedThemeToggler({
  className,
  duration = 400,
  variant = "circle",
  fromCenter = false,
}: AnimatedThemeTogglerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">(() => getInitialTheme());
  const isDark = theme === "dark";

  const toggleTheme = async () => {
    const button = buttonRef.current;
    const nextTheme = isDark ? "light" : "dark";
    const documentWithTransition = document as DocumentWithViewTransition;

    const updateTheme = () => {
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    if (!button || !documentWithTransition.startViewTransition) {
      updateTheme();
      return;
    }

    const transition = documentWithTransition.startViewTransition(() => {
      flushSync(updateTheme);
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: getClipPath(variant, button, fromCenter),
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <Button
      ref={buttonRef}
      type="button"
      variant="ghost"
      size="icon-lg"
      onClick={toggleTheme}
      className={cn(
        "relative grid size-10 place-items-center rounded-xl p-0",
        className
      )}
      aria-label={isDark ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک"}
      title={isDark ? "حالت روشن" : "حالت تاریک"}
    >
      <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{isDark ? "حالت روشن" : "حالت تاریک"}</span>
    </Button>
  );
}
