import CourseCard from "@/components/course/CourseCard";
import AvatarStack from "@/components/shared/AvatarStack";
import Rating from "@/components/shared/Rating";
import { authCourses } from "@/data/courses";
import { studentPhotoLists } from "@/data/student-photos";

type AuthCollageProps = {
  variant: "login" | "register";
};

export default function AuthCollage({ variant }: AuthCollageProps) {
  const titlePrefix = variant === "register" ? "register-" : "";

  return (
    <>
      <div className="absolute left-[122px] top-[394px]">
        <CourseCard course={authCourses[0]} variant="auth" titleId={`${titlePrefix}digital-asset-course-title`} />
      </div>
      <div className="absolute left-[233px] top-[305px]">
        <CourseCard course={authCourses[1]} variant="auth" titleId={`${titlePrefix}big-data-course-title`} />
      </div>
      <aside
        className="absolute left-[348px] top-[740px] flex h-[123px] w-[258px] flex-col items-start justify-center gap-[8px] rounded-[16px] bg-[var(--color-secondary-400)] p-[16px]"
        aria-label="Happy students"
      >
        <div className="flex flex-col items-start">
          <h2 className="font-body text-label-m leading-[24px] text-[var(--color-neutral-950)]">Happy Students</h2>
          <Rating variant="auth" value="4.5 (240)" />
        </div>
        <AvatarStack photos={studentPhotoLists.happyStudents} variant="auth" />
      </aside>
    </>
  );
}
