import CourseCard from "@/components/course/CourseCard";
import Canvas from "@/components/shared/Canvas";
import { catalogCourses } from "@/data/courses";

export default function QuickCatalog() {
  return (
    <section id="quick-course-catalog" className="relative h-[884px] w-full bg-white [content-visibility:auto]" aria-label="Quick course catalog">
      <Canvas>
        <div className="absolute left-[var(--layout-grid-margin)] top-[76px] flex h-[808px] w-[1199px] flex-wrap content-start items-start gap-[40px]">
          {catalogCourses.map((course) => (
            <CourseCard key={course.id} course={course} variant="catalog" />
          ))}
        </div>
      </Canvas>
    </section>
  );
}
