import Canvas from "@/components/shared/Canvas";
import { learningPaths } from "@/data/learning-paths";

const iconAlignments = {
  center: "left-1/2 top-[36px]",
  "left-half": "left-[calc(50%-0.5px)] top-[36px]",
  "right-half": "left-[calc(50%+0.5px)] top-[35px]",
} as const;

export default function LearningPaths() {
  return (
    <section id="diverse-learning-paths" className="relative h-[544px] w-full bg-white [content-visibility:auto]" aria-labelledby="diverse-learning-paths-title">
      <Canvas>
        <div className="absolute left-[261px] top-[72px] flex w-[917px] flex-col items-center gap-[16px]">
          <h2 id="diverse-learning-paths-title" className="whitespace-nowrap text-center font-heading text-heading-s tracking-[-0.01em] text-[#040819]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="flex w-[917px] flex-wrap justify-center text-center font-body text-body-l text-[var(--color-neutral-400)]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>
        <ul className="absolute left-[119px] top-[257px] flex h-[167px] w-[1202px] items-start gap-[40px]" aria-label="Learning path categories">
          {learningPaths.map((path) => (
            <li key={path.id} className="relative h-[167px] w-[167px] shrink-0 rounded-[24px] [outline:1px_solid_var(--color-neutral-200)] [-outline-offset:1px]">
              <div className={`absolute ${iconAlignments[path.alignment]} flex -translate-x-1/2 flex-col items-center gap-[12px]`}>
                {/* Keep the supplied category SVG dimensions. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-[60px] w-[60px]" src={path.iconSrc} alt="" width="60" height="60" loading="lazy" />
                <span className="whitespace-nowrap font-body text-[20px] font-medium leading-[120%] text-[var(--color-neutral-950)]">{path.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </Canvas>
    </section>
  );
}
