import HeroSearch from "@/components/home/HeroSearch";

type HeroCopyProps = {
  initialQuery: string;
};

export default function HeroCopy({ initialQuery }: HeroCopyProps) {
  return (
    <div className="absolute left-[var(--layout-grid-margin)] top-[169px] flex w-[var(--layout-grid-content-width)] flex-col items-center gap-[60px]">
      <div className="flex flex-col items-center gap-[32px]">
        <h1
          id="hero-title"
          className="flex w-[935px] flex-wrap justify-center text-center font-heading text-heading-l tracking-[-0.01em] text-[var(--color-neutral-50)]"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="whitespace-nowrap text-center font-body text-body-l text-[var(--color-neutral-100)]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
      </div>

      <HeroSearch initialQuery={initialQuery} />
    </div>
  );
}
