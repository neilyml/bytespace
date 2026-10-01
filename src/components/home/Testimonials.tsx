import Canvas from "@/components/shared/Canvas";
import { testimonials } from "@/data/testimonials";

const cardHeights = {
  sarah: "h-[432px]",
  james: "h-[436px]",
  alex: "h-[407px]",
} as const;

const nameTypography = {
  sarah: "text-heading-xs",
  james: "text-[20px] font-semibold leading-[28px]",
  alex: "text-[20px] font-semibold leading-[28px]",
} as const;

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative h-[784px] w-full overflow-hidden bg-[#FAFAFA]" aria-labelledby="testimonials-title">
      <Canvas>
        <div className="testimonial-glow testimonial-glow-lime-large absolute left-[842px] top-[-241px] h-[1137px] w-[1137px] rounded-full" />
        <div className="testimonial-glow testimonial-glow-lime-small absolute left-[395px] top-[-138px] h-[672px] w-[672px] rounded-full" />
        <div className="testimonial-glow testimonial-glow-blue absolute left-[-442px] top-[149px] h-[1137px] w-[1137px] rounded-full" />

        <div className="absolute left-[118px] top-[74px] flex w-[1204px] flex-col items-start gap-[72px]">
          <div className="flex h-[145px] w-[1200px] items-end gap-[43px]">
            <h2 id="testimonials-title" className="w-[577px] shrink-0 font-heading text-heading-m tracking-[-0.01em] text-black">
              Discover What Our Community Is Saying
            </h2>
            <p className="w-[580px] shrink-0 font-body text-body-l text-[#4F4F4F]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="flex w-[1204px] items-start gap-[41px]">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className={`flex ${cardHeights[testimonial.id]} w-[374px] shrink-0 flex-col items-start gap-[24px] rounded-[24px] bg-white p-[24px]`}>
                {/* Preserve the source's centered 80px portrait crop. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-[80px] w-[80px] shrink-0 rounded-full object-cover object-center" src={testimonial.portraitSrc} alt="" width="80" height="80" />
                <div className="flex flex-col items-start">
                  <h3 className={`font-heading ${nameTypography[testimonial.id]} tracking-[-0.01em] text-black`}>{testimonial.name}</h3>
                  <p className="font-body text-body-l text-[var(--color-primary-800)]">{testimonial.role}</p>
                </div>
                <blockquote className="w-[326px] font-body text-body-l text-[#4F4F4F]">{testimonial.quote}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </Canvas>
    </section>
  );
}
