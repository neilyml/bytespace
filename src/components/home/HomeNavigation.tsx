import Link from "next/link";
import BrandLogo from "@/components/shared/BrandLogo";

export default function HomeNavigation() {
  return (
    <header className="absolute left-0 top-0 h-[120px] w-full overflow-hidden">
      <div className="absolute left-[var(--layout-grid-margin)] top-[35px]">
        <BrandLogo variant="hero" />
      </div>

      <nav
        className="absolute left-[calc(50%-0.5px)] top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start gap-[24px]"
        aria-label="Primary navigation"
      >
        <a className="font-body text-label-m text-[var(--color-neutral-50)]" href="#">Home</a>
        <a className="font-body text-label-m text-[var(--color-neutral-50)]" href="#">Courses</a>
        <a className="font-body text-label-m text-[var(--color-neutral-50)]" href="#">Creators</a>
      </nav>

      <nav
        className="absolute right-[var(--layout-grid-margin)] top-[48px] flex items-start justify-end gap-[24px]"
        aria-label="Account navigation"
      >
        <Link className="whitespace-nowrap font-body text-label-m text-[var(--color-neutral-50)]" href="/login">Sign In</Link>
        <a className="whitespace-nowrap font-body text-label-m text-[var(--color-neutral-50)]" href="#">Join Us</a>
        <a className="relative h-[24px] w-[24px] shrink-0 overflow-hidden" href="#" aria-label="Shopping bag">
          <svg
            className="absolute left-[4px] top-[2px] h-[20px] w-[16px]"
            viewBox="0 0 16 20"
            width="16"
            height="20"
            aria-hidden="true"
          >
            <path
              className="fill-[var(--color-neutral-50)]"
              d="M14 4h-2a4 4 0 0 0-8 0H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM8 2c1.1 0 2 .9 2 2H6c0-1.1.9-2 2-2Zm6 16H2V6h2v2a1 1 0 0 0 2 0V6h4v2a1 1 0 0 0 2 0V6h2v12Z"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
}
