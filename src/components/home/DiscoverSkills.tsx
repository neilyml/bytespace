import Canvas from "@/components/shared/Canvas";
import { skillRows } from "@/data/skills";

const rowLayouts = [
  { className: "absolute left-[175px] top-[294px] flex h-[44px] w-[1105px] items-start gap-[16px]", label: "Skill categories, row one" },
  { className: "absolute left-[243px] top-[358px] flex h-[44px] w-[972px] items-start gap-[16px]", label: "Skill categories, row two" },
  { className: "absolute left-[407.5px] top-[422px] flex h-[44px] w-[631px] items-center gap-[16px]", label: "Skill categories, row three" },
] as const;

const pillTones = {
  featured: "rounded-[24px] bg-[var(--color-secondary-400)] px-[16px] py-[12px] text-[var(--color-neutral-950)]",
  standard: "rounded-[24px] bg-[var(--color-neutral-50)] px-[16px] py-[12px] text-[var(--color-neutral-700)]",
  more: "text-[var(--color-primary-800)]",
} as const;

export default function DiscoverSkills() {
  return (
    <section id="discover-your-skills" className="relative h-[466px] w-full bg-white [content-visibility:auto]" aria-labelledby="discover-your-skills-title">
      <Canvas>
        <div className="absolute left-[261px] top-[72px] flex w-[917px] flex-col items-center gap-[16px]">
          <h2 id="discover-your-skills-title" className="flex w-[588px] flex-wrap justify-center text-center font-heading text-heading-m tracking-[-0.01em] text-[#040819]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="flex w-[917px] flex-wrap justify-center text-center font-body text-body-l text-[var(--color-neutral-400)]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>
        {skillRows.map((row, index) => (
          <ul key={rowLayouts[index].label} className={rowLayouts[index].className} aria-label={rowLayouts[index].label}>
            {row.map((skill) => (
              <li key={skill.label} className={`flex h-[44px] ${skill.widthClass} items-center justify-center ${skill.nowrap ? "whitespace-nowrap" : ""} ${pillTones[skill.tone]} text-center font-body text-label-m`}>
                {skill.label}
              </li>
            ))}
          </ul>
        ))}
      </Canvas>
    </section>
  );
}
