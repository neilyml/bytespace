import CourseCard from "@/components/course/CourseCard";
import AvatarStack from "@/components/shared/AvatarStack";
import Canvas from "@/components/shared/Canvas";
import LearningProgressCard from "@/components/shared/LearningProgressCard";
import Ornament from "@/components/shared/Ornament";
import Rating from "@/components/shared/Rating";
import { professionalGrowthCourse } from "@/data/courses";
import { studentPhotoLists } from "@/data/student-photos";

const growthMetrics = [
  { label: "Students", value: "12K" },
  { label: "Courses", value: "70+" },
  { label: "Creators", value: "16" },
] as const;

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

export default function ProfessionalGrowth() {
  return (
    <section
      id="professional-growth"
      className="relative h-[1460px] w-full overflow-hidden bg-[#FAFAFA] [content-visibility:auto]"
      aria-labelledby="professional-growth-title"
    >
      <Canvas>
        <div className="testimonial-glow testimonial-glow-blue absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full"></div>
        <div className="testimonial-glow testimonial-glow-lime-large absolute left-[-152px] top-[-466px] h-[1137px] w-[1137px] rounded-full"></div>
        <div className="testimonial-glow professional-glow-blue-medium absolute left-[-508px] top-[183px] h-[1137px] w-[1137px] rounded-full"></div>
        <div className="testimonial-glow professional-glow-blue-light absolute left-[811px] top-[-458px] h-[1137px] w-[1137px] rounded-full"></div>
        <div className="testimonial-glow testimonial-glow-lime-small absolute left-[-287px] top-[946px] h-[672px] w-[672px] rounded-full"></div>

        <div className="absolute left-[121px] top-[120px] flex w-[1258px] flex-col items-start gap-[72px]">
          <div className="relative h-[552px] w-[1258px] shrink-0">
            <div className="flex h-[404px] w-[574px] flex-col items-start gap-[40px]">
              <h2
                id="professional-growth-title"
                className="w-[577px] font-heading text-heading-m tracking-[-0.01em] text-[var(--color-neutral-950)]"
              >
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="w-[477px] font-body text-body-l text-[var(--color-neutral-700)]">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
              <dl className="flex h-[73px] items-end gap-[56px]">
                {growthMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col items-start">
                    <dt className="order-2 font-body text-body-l text-[var(--color-neutral-700)]">{metric.label}</dt>
                    <dd className="order-1 font-heading text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-[var(--color-primary-800)]">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="absolute left-[637px] top-0">
              <CourseCard course={professionalGrowthCourse} variant="catalog" headingLevel="h3" ariaLabel="Learn Figma from Basic course" />
            </div>

            {/* The 577x540 portrait frame and its overflow, with the source shadows baked in. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="absolute left-[683px] top-[49px] h-[679px] w-[701px] max-w-none"
              src="/assets/optimized/growth-portrait.webp"
              alt=""
              width="701"
              height="679"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />

            <div className="absolute left-[982px] top-[213px]">
              <LearningProgressCard variant="growth" />
            </div>

            <div className="absolute left-[1043px] top-[67px]">
              <Ornament source="spiral-small" preset="spiral-small-growth" tint="secondary-400" />
            </div>
          </div>

          <div className="flex h-[596px] w-[1200px] items-center gap-[79px]">
            <div className="relative h-[596px] w-[541px] shrink-0" aria-label="Creator revenue summary">
              <div className="absolute left-0 top-[44px] flex h-[120px] w-[232px] flex-col items-start gap-[8px] rounded-[16px] bg-[var(--color-primary-800)] p-[16px] text-[var(--color-neutral-50)]">
                <div className="flex flex-col items-start">
                  <p className="font-body text-label-m">Total Revenue</p>
                  <p className="font-body text-[10px] leading-[12px]">July 1-28</p>
                </div>
                <div className="flex w-[200px] items-center justify-between">
                  <p className="font-heading text-[24px] font-semibold leading-[32px] tracking-[-0.01em]">$120.29</p>
                  <span className="flex items-center justify-center rounded-[24px] bg-[var(--color-secondary-500)] px-[8px] py-[2px] font-body text-[10px] font-medium leading-[20px] text-[var(--color-neutral-950)]">+12$</span>
                </div>
                <div className="relative h-[var(--size-progress-track-height)] w-[var(--size-progress-track-width)] overflow-hidden rounded-[24px] bg-white" aria-hidden="true">
                  <div className="absolute inset-y-0 left-0 w-[var(--size-progress-fill-width)] rounded-[24px] bg-[var(--color-secondary-400)]"></div>
                </div>
              </div>

              <div className="absolute left-0 top-[194px] flex h-[136px] w-[134px] flex-col items-start gap-[8px] rounded-[16px] bg-[var(--color-primary-800)] p-[16px] text-[var(--color-neutral-50)]">
                <div className="flex flex-col items-start">
                  <p className="whitespace-nowrap font-body text-label-m">Year to Date</p>
                  <p className="font-body text-[10px] leading-[12px]">2023</p>
                </div>
                <p className="whitespace-nowrap font-heading text-[24px] font-semibold leading-[32px] tracking-[-0.01em]">$1,200.38</p>
                <span className="flex items-center justify-center rounded-[24px] bg-[var(--color-secondary-500)] px-[8px] py-[2px] font-body text-[10px] font-medium leading-[20px] text-[var(--color-neutral-950)]">+12$</span>
              </div>

              {/* The 435x744 portrait frame and its overflow, with the source shadows baked in. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute left-[47px] top-[43px] h-[776px] w-[567px] max-w-none"
                src="/assets/optimized/lady-portrait.webp"
                alt=""
                width="567"
                height="776"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />

              <aside
                className="absolute left-[283px] top-[413px] h-[115px] w-[258px] rounded-[16px] bg-white p-[16px]"
                aria-label="Happy students"
              >
                <div className="flex h-[40px] flex-col items-start">
                  <h3 className="font-body text-label-m leading-[24px] text-[var(--color-neutral-950)]">Happy Students</h3>
                  <Rating variant="growth" value="4.5 (240)" />
                </div>

                <AvatarStack variant="growth" photos={studentPhotoLists.happyStudents} />
              </aside>
            </div>

            <div className="flex w-[580px] shrink-0 flex-col items-start gap-[40px]">
              <h2 className="w-[391px] font-heading text-heading-m tracking-[-0.01em] text-[var(--color-neutral-950)]">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="w-[574px] font-body text-[18px] leading-[28px] text-[var(--color-neutral-700)]">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="flex flex-col items-start gap-[16px]" aria-label="Creator benefits">
                {creatorBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-end gap-[8px]">
                    {/* Preserve the source check asset and dimensions. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-[24px] w-[24px]" src="/assets/blue-check.svg" alt="" width="24" height="24" loading="lazy" />
                    <span className="font-body text-label-l text-[var(--color-neutral-950)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Canvas>
    </section>
  );
}
