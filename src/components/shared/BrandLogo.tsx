type BrandLogoProps = {
  variant: "hero" | "auth" | "footer";
};

const wordmarkClasses = {
  hero: "font-heading text-neutral-50",
  auth: "font-body text-neutral-50",
  footer: "font-body text-neutral-950",
};

export default function BrandLogo({ variant }: BrandLogoProps) {
  return (
    <a
      className="relative block h-[37px] w-[171px] shrink-0"
      href="#"
      aria-label="ByteSpace home"
    >
      <svg
        className="absolute left-0 top-0 h-[31.5px] w-[28.875px]"
        viewBox="0 0 28.875 31.5"
        width="28.875"
        height="31.5"
        aria-hidden="true"
      >
        <path
          className="fill-[var(--color-secondary-400)]"
          d="M10.5 10.5C10.5 4.701 5.799 0 0 0v21c0 5.799 4.701 10.5 10.5 10.5v-21Z"
        />
        <path
          className="fill-[var(--color-secondary-400)]"
          d="M18.375 10.5c5.799 0 10.5 4.701 10.5 10.5H21c-5.799 0-10.5-4.701-10.5-10.5h7.875Z"
        />
        <path
          className="fill-[var(--color-secondary-400)]"
          d="M18.375 31.5c5.799 0 10.5-4.701 10.5-10.5H21c-5.799 0-10.5 4.701-10.5 10.5h7.875Z"
        />
      </svg>
      <span
        className={`absolute left-[37px] top-[7px] whitespace-nowrap text-[24px] font-bold leading-[30px] ${wordmarkClasses[variant]}`}
      >
        ByteSpace
      </span>
    </a>
  );
}
