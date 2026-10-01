import { useId } from "react";

type GridBackdropProps = {
  variant: "hero" | "auth";
};

export default function GridBackdrop({ variant }: GridBackdropProps) {
  const patternId = `grid-${useId()}`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-12"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M120 0H0V120"
            fill="none"
            stroke={variant === "hero" ? "var(--color-neutral-50)" : "#FFFFFF"}
            strokeWidth="2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
