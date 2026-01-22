// src/components/icons/KodakLogo.tsx
import { cn } from "@/lib/utils";

interface KodakLogoProps {
  className?: string;
  variant?: "full" | "icon";
  color?: "default" | "white" | "black";
}

export function KodakLogo({
  className,
  variant = "full",
  color = "default",
}: KodakLogoProps) {
  const colors = {
    default: {
      primary: "#FFD500",
      text: "#0A0A0A",
    },
    white: {
      primary: "#FFFFFF",
      text: "#FFFFFF",
    },
    black: {
      primary: "#0A0A0A",
      text: "#0A0A0A",
    },
  };

  const { primary, text } = colors[color];

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10 w-10", className)}
        aria-label="Kodak"
      >
        {/* Aperture-inspired icon */}
        <circle cx="24" cy="24" r="22" fill={primary} />
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke={text}
          strokeWidth="2"
        />
        <circle cx="24" cy="24" r="8" fill={text} />
        {/* Aperture blades */}
        <path
          d="M24 6 L28 16 L24 14 L20 16 Z"
          fill={text}
          transform="rotate(0 24 24)"
        />
        <path
          d="M24 6 L28 16 L24 14 L20 16 Z"
          fill={text}
          transform="rotate(60 24 24)"
        />
        <path
          d="M24 6 L28 16 L24 14 L20 16 Z"
          fill={text}
          transform="rotate(120 24 24)"
        />
        <path
          d="M24 6 L28 16 L24 14 L20 16 Z"
          fill={text}
          transform="rotate(180 24 24)"
        />
        <path
          d="M24 6 L28 16 L24 14 L20 16 Z"
          fill={text}
          transform="rotate(240 24 24)"
        />
        <path
          d="M24 6 L28 16 L24 14 L20 16 Z"
          fill={text}
          transform="rotate(300 24 24)"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      aria-label="Kodak"
    >
      {/* Logo mark */}
      <circle cx="24" cy="24" r="22" fill={primary} />
      <circle cx="24" cy="24" r="10" fill={text} />

      {/* KODAK text */}
      <text
        x="56"
        y="32"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        fill={text}
        letterSpacing="0.02em"
      >
        KODAK
      </text>
    </svg>
  );
}
