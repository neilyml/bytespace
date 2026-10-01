import { useId } from "react";
import CreatorCTAOrnaments from "./CreatorCTAOrnaments";

export default function CreatorCTA() {
  const patternId = `creator-cta-grid-${useId()}`;

  return (
    <section
      id="creator-cta"
      className="relative h-[488px] w-full overflow-hidden bg-[var(--color-primary-800)]"
      aria-labelledby="creator-cta-title"
    >
      <svg
        className="pointer-events-none absolute left-0 top-0 h-[1024px] w-full opacity-12"
        width="100%"
        height="1024"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id={patternId} width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M120 0H0V120" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="1024" fill={`url(#${patternId})`} />
      </svg>

      <div className="absolute left-1/2 top-[calc(50%+0.5px)] flex w-[964px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[40px]">
        <h2
          id="creator-cta-title"
          className="flex w-[710px] flex-wrap justify-center text-center font-heading text-heading-m tracking-[-0.01em] text-[var(--color-neutral-50)]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="flex w-[964px] flex-wrap justify-center text-center font-body text-body-l text-[var(--color-neutral-50)]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a
          className="flex items-center justify-center rounded-[24px] bg-[var(--color-secondary-400)] px-[24px] py-[12px] font-body text-label-l text-[var(--color-neutral-950)]"
          href="#"
        >
          Join as Creator
        </a>
      </div>

      <CreatorCTAOrnaments />
    </section>
  );
}
