import Canvas from "@/components/shared/Canvas";

const partners = [
  { number: 1, width: 167, height: 41 },
  { number: 2, width: 168, height: 41 },
  { number: 3, width: 170, height: 41 },
  { number: 4, width: 170, height: 41 },
  { number: 5, width: 169, height: 42 },
] as const;

export default function Partners() {
  return (
    <section id="logo-partners" className="relative h-[202px] w-full bg-[var(--color-neutral-50)]" aria-label="Partner logos">
      <Canvas>
        <div className="absolute left-[154px] top-[80px] flex h-[42px] w-[1132px] items-end justify-between">
          {partners.map((partner) => (
            // Preserve the supplied SVG's intrinsic dimensions.
            // eslint-disable-next-line @next/next/no-img-element
            <img key={partner.number} className={partner.number === 5 ? "h-[42px] w-[169px]" : undefined} src={`/assets/logo-partners/${partner.number}.svg`} alt={`Partner logo ${partner.number}`} width={partner.width} height={partner.height} />
          ))}
        </div>
      </Canvas>
    </section>
  );
}
