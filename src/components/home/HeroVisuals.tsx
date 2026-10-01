import AvatarStack from "@/components/shared/AvatarStack";
import LearningProgressCard from "@/components/shared/LearningProgressCard";
import Rating from "@/components/shared/Rating";
import { studentPhotoLists } from "@/data/student-photos";

export default function HeroVisuals() {
  return (
    <>
      {/* The clipped 578x541 portrait frame with its source shadows baked in. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute left-[453px] top-[552px] h-[680px] w-[690px] max-w-none"
        src="/assets/optimized/hero-portrait.webp"
        alt="Person wearing a headset and holding a laptop"
        width="690"
        height="680"
        fetchPriority="high"
      />

      <div className="absolute left-[842px] top-[651px]">
        <LearningProgressCard variant="hero" />
      </div>

      <aside
        className="absolute left-[404px] top-[639px] flex h-[72px] w-[216px] flex-col items-start justify-center gap-[8px] rounded-[16px] bg-white p-[16px] antialiased [font-synthesis:none]"
        aria-label="UI/UX Design course category"
      >
        <div className="flex flex-col items-start">
          <p className="font-body text-label-m text-[var(--color-neutral-950)]">
            UI/UX Design
          </p>
          <div className="flex items-start gap-[8px] text-[var(--color-neutral-400)]">
            <span className="font-body text-body-xs">200 Courses</span>
            <span className="font-body text-[10px] leading-[150%]">•</span>
            <span className="font-body text-body-xs">1000+ Students</span>
          </div>
        </div>
      </aside>

      <aside
        className="absolute left-[328px] top-[837px] flex h-[143px] w-[258px] flex-col items-start justify-center gap-[8px] rounded-[16px] bg-white p-[16px] antialiased [font-synthesis:none]"
        aria-label="Happy students"
      >
        <div className="flex flex-col items-start">
          <h2 className="w-[115px] font-body text-label-m text-[var(--color-neutral-950)]">
            Happy<br />Students
          </h2>
          <Rating variant="hero" value="4.5 (240)" />
        </div>
        <AvatarStack variant="hero" photos={studentPhotoLists.happyStudents} />
      </aside>
    </>
  );
}
