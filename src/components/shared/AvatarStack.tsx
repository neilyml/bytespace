import type { StudentPhoto } from "@/data/student-photos";

type AvatarStackProps = {
  photos: readonly StudentPhoto[];
  variant: "course" | "auth-course" | "hero" | "growth" | "auth";
};

const courseImage = "h-[32px] w-[32px] rounded-full object-cover";
const studentImage = "h-[43px] w-[43px] shrink-0 rounded-full object-cover object-center";

const courseBadgeClasses = {
  course: "-ml-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[var(--color-secondary-400)] font-body text-label-xs text-[var(--color-neutral-950)]",
  "auth-course": "-ml-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-black font-body text-label-xs leading-[20px] text-white",
};

export default function AvatarStack({ photos, variant }: AvatarStackProps) {
  const isCourse = variant === "course" || variant === "auth-course";
  const Wrapper = isCourse ? "span" : "div";
  const StudentBadge = variant === "hero" ? "div" : "span";
  const loading = variant === "course" || variant === "growth" ? "lazy" : "eager";

  return (
    <Wrapper
      className={isCourse ? "flex h-[32px] w-[128px] items-start" : "flex h-[43px] w-[232px] items-start"}
      aria-label={isCourse ? "Enrolled students" : "Student photos"}
    >
      {photos.map((photo, index) => (
        // Keep the source image sizing and crop without an optimized wrapper.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={photo.src}
          className={`${index > 0 ? (isCourse ? "-ml-[8px] " : "-ml-[16px] ") : ""}${isCourse ? courseImage : studentImage}`}
          src={photo.src}
          alt={photo.alt}
          width={isCourse ? 32 : 43}
          height={isCourse ? 32 : 43}
          loading={loading}
          decoding="async"
        />
      ))}
      {isCourse ? (
        <span className={courseBadgeClasses[variant]}>26+</span>
      ) : (
        <StudentBadge
          className={variant === "auth"
            ? "relative -ml-[16px] h-[43px] w-[43px] shrink-0 rounded-full bg-[var(--color-neutral-950)]"
            : "relative -ml-[16px] h-[43px] w-[43px] shrink-0 rounded-full bg-[var(--color-secondary-400)]"}
        >
          <span
            className={variant === "auth"
              ? "absolute left-[9px] top-[13px] whitespace-nowrap font-body text-[12px] font-bold leading-[150%] text-[var(--color-neutral-50)]"
              : "absolute left-[12px] top-[13px] whitespace-nowrap font-body text-[12px] font-bold leading-[150%] text-[var(--color-neutral-950)]"}
          >
            2K+
          </span>
        </StudentBadge>
      )}
    </Wrapper>
  );
}
