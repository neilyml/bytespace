import CourseRatingStarIcon from "./CourseRatingStarIcon";
import StudentRatingStarIcon from "./StudentRatingStarIcon";

type RatingProps = {
  variant: "course" | "auth-course" | "hero" | "growth" | "auth";
  value: string;
};

const variants = {
  course: {
    wrapper: "flex items-center gap-[4px]",
    text: "font-body text-body-l text-[#4F4F4F]",
  },
  "auth-course": {
    wrapper: "flex h-[28px] w-[56px] items-center",
    text: "font-body text-label-l leading-[28px] text-[#4F4F4F]",
  },
  hero: {
    wrapper: "flex items-center",
    text: "font-body text-body-xs text-[var(--color-neutral-400)]",
  },
  growth: {
    wrapper: "flex h-[16px] items-center",
    text: "font-body text-[10px] leading-[150%] text-[var(--color-neutral-400)]",
  },
  auth: {
    wrapper: "flex h-[16px] items-center",
    text: "font-body text-[10px] leading-[150%] text-[var(--color-neutral-400)]",
  },
};

export default function Rating({ variant, value }: RatingProps) {
  const styles = variants[variant];

  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{value}</span>
      {variant === "auth-course" ? (
        <CourseRatingStarIcon />
      ) : variant === "auth" ? (
        <StudentRatingStarIcon />
      ) : variant === "course" ? (
        // Preserve the original grey course star asset and dimensions.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="h-[24px] w-[24px]" src="/assets/course-catalog/happy-student-star-grey.svg" alt="" width="24" height="24" />
      ) : (
        // The Home happy-student cards use the supplied star asset.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="h-[16px] w-[16px] shrink-0" src="/assets/happy-students/happy-students-star.svg" alt="" width="16" height="16" />
      )}
    </div>
  );
}
