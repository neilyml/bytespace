type LearningProgressCardProps = {
  variant: "hero" | "growth";
};

const heights = {
  hero: "h-[131px]",
  growth: "h-[138px]",
};

export default function LearningProgressCard({ variant }: LearningProgressCardProps) {
  return (
    <aside
      className={`flex ${heights[variant]} w-[232px] flex-col items-start gap-[8px] rounded-[16px] bg-white p-[16px] antialiased [font-synthesis:none]`}
      aria-label="Learning progress"
    >
      <p className="font-body text-label-s text-[var(--color-neutral-950)]">
        Learning Progress
      </p>
      <p className="font-heading text-[48px] font-semibold leading-[120%] tracking-[-0.01em] text-[var(--color-neutral-950)]">
        55%
      </p>
      <div
        className="relative h-[var(--size-progress-track-height)] w-[var(--size-progress-track-width)] shrink-0 overflow-hidden rounded-[24px] bg-[#F6F6F6]"
        role="progressbar"
        aria-label="Course completion"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={55}
      >
        <div className="absolute inset-y-0 left-0 w-[var(--size-progress-fill-width)] rounded-[24px] bg-[var(--color-secondary-400)]" />
      </div>
    </aside>
  );
}
