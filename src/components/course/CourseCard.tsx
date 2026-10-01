import AvatarStack from "@/components/shared/AvatarStack";
import Rating from "@/components/shared/Rating";
import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
  variant: "catalog" | "auth";
  headingLevel?: "h2" | "h3";
  titleId?: string;
  ariaLabel?: string;
};

const catalogTitleWidths: Record<string, string> = {
  "big-data": "w-[275px] truncate",
  "productivity-self-care": "w-[280px] truncate",
  "money-management": "w-[280px] truncate",
  "startup-success": "w-[280px] truncate",
};

export default function CourseCard({
  course,
  variant,
  headingLevel: Heading = "h2",
  titleId,
  ariaLabel,
}: CourseCardProps) {
  const isAuth = variant === "auth";
  const titleWidth = isAuth
    ? course.id === "big-data" ? "w-[275px] truncate" : ""
    : catalogTitleWidths[course.id] ?? "";
  const title = (
    <>
      <Heading
        id={titleId}
        className={`${titleWidth} font-heading text-heading-xs tracking-[-0.01em] ${isAuth ? "text-black" : "text-[var(--color-neutral-950)]"}`}
      >
        {course.title}
      </Heading>
      <p className="font-body text-body-xs text-[#4F4F4F]">{course.creator}</p>
    </>
  );
  // Keep the source image fill and crop; auth cards render above the fold.
  // eslint-disable-next-line @next/next/no-img-element
  const image = <img className="h-full w-full object-cover object-center" src={course.image.src} alt={course.image.alt} width={course.image.width} height={course.image.height} loading={isAuth ? "eager" : "lazy"} decoding="async" />;

  return (
    <article
      className={`relative h-[var(--size-course-card-height)] w-[var(--size-course-card-width)] ${isAuth ? "" : "shrink-0"} overflow-hidden rounded-[24px] border border-[var(--color-neutral-200)] bg-white`}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className={`absolute left-[15px] top-[15px] h-[195.14px] w-[341px] overflow-hidden rounded-[12px] ${isAuth ? "bg-[#443131]" : ""}`}>
        {image}
        <div className={`absolute ${isAuth ? "left-[12px]" : "left-[13px]"} top-[150px] flex items-start gap-[12px]`}>
          {[course.badges.lessons, course.badges.duration, course.badges.comments].map((badge) => (
            <span key={badge} className={`rounded-[24px] bg-[#F6F6F699] px-[12px] py-[6px] font-body text-label-xs ${isAuth ? "leading-[20px]" : ""} text-[#4F4F4F] backdrop-blur-[4px]`}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className={`absolute left-[15px] top-[231px] flex ${isAuth ? (course.id === "big-data" ? "h-[136px] w-[275px]" : "h-[136px] w-[237px]") : "h-[132px]"} flex-col items-start gap-[16px]`}>
        <div className={isAuth ? "flex flex-col items-start" : "flex h-[44px] w-[341px] items-start justify-between"}>
          {isAuth ? title : <div className={titleWidth ? "min-w-0" : undefined}>{title}</div>}
          {!isAuth && <Rating variant="course" value={course.rating} />}
        </div>

        <div className={`flex h-[32px] ${isAuth ? "w-[237px]" : "w-[240px]"} items-center gap-[12px]`}>
          <span className={`flex h-[32px] ${isAuth ? "w-[97px]" : "w-[100px]"} items-center ${isAuth ? "justify-center" : ""} gap-[4px] rounded-[24px] bg-[var(--color-neutral-50)] px-[12px] py-[6px]`}>
            {/* Preserve the source level icon dimensions. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-[20px] w-[20px]" src={course.level.iconSrc} alt="" width="20" height="20" />
            <span className={`font-body text-label-xs ${isAuth ? "leading-[20px]" : ""} text-[var(--color-neutral-700)]`}>{course.level.label}</span>
          </span>
          <AvatarStack variant={isAuth ? "auth-course" : "course"} photos={course.students} />
        </div>

        <p className={`${isAuth ? "flex h-[24px] items-end" : ""} font-body text-body-xs text-[#4F4F4F]`}>
          <span className={`font-heading text-heading-xs tracking-[-0.01em] ${isAuth ? "text-[#300B6A]" : "text-[var(--color-primary-800)]"}`}>{course.price.amount}</span>{isAuth ? <span>{course.price.period}</span> : course.price.period}
        </p>
      </div>

      {isAuth && (
        <div className="absolute left-[305px] top-[231px]">
          <Rating variant="auth-course" value={course.rating} />
        </div>
      )}
    </article>
  );
}
