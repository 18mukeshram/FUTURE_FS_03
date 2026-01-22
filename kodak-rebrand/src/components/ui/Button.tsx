// src/components/ui/Button.tsx
"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-semibold rounded-full
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      transform hover:scale-105 active:scale-95
    `;

    const variants = {
      primary: `
        bg-kodak-gold text-kodak-black
        hover:bg-kodak-gold-dark
        focus:ring-kodak-gold
        shadow-lg hover:shadow-xl
      `,
      secondary: `
        bg-kodak-black text-kodak-white
        hover:bg-gray-800
        focus:ring-kodak-black
      `,
      ghost: `
        bg-transparent text-kodak-black
        hover:bg-kodak-warm-gray
        focus:ring-kodak-gold
      `,
      outline: `
        bg-transparent text-kodak-black
        border-2 border-kodak-black
        hover:bg-kodak-black hover:text-kodak-white
        focus:ring-kodak-black
      `,
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, type ButtonProps };
