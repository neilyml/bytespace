import Canvas from "@/components/shared/Canvas";
import GridBackdrop from "@/components/shared/GridBackdrop";
import HeroCopy from "./HeroCopy";
import HeroOrnaments from "./HeroOrnaments";
import HeroVisuals from "./HeroVisuals";
import HomeNavigation from "./HomeNavigation";

type HeroProps = {
  initialQuery: string;
};

export default function Hero({ initialQuery }: HeroProps) {
  return (
    <section
      className="relative h-[var(--size-page-hero-height)] w-full overflow-hidden bg-[var(--color-primary-800)]"
      aria-labelledby="hero-title"
    >
      <GridBackdrop variant="hero" />
      <Canvas>
        <svg
          className="pointer-events-none absolute left-[145px] top-[582px] h-[1149px] w-[1149px]"
          viewBox="0 0 1149 1149"
          width="1149"
          height="1149"
          aria-hidden="true"
        >
          <circle
            className="stroke-[var(--color-secondary-500)]"
            cx="574.5"
            cy="574.5"
            r="414.5"
            fill="none"
            strokeWidth="320"
          />
        </svg>
        <HomeNavigation />
        <HeroCopy initialQuery={initialQuery} />
        <HeroVisuals />
        <HeroOrnaments />
      </Canvas>
    </section>
  );
}
