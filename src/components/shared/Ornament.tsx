import type { CSSProperties } from "react";

// Display-sized lossless WebP copies of the source PNGs.
const sources = {
  spiral: { src: "/assets/optimized/card-section/spiral.webp", size: 774 },
  "spiral-small": { src: "/assets/optimized/card-section/spiral-small.webp", size: 664 },
  donut: { src: "/assets/optimized/card-section/donut.webp", size: 688 },
  cylinder: { src: "/assets/optimized/card-section/cylinder.webp", size: 744 },
  cone: { src: "/assets/optimized/card-section/cone.webp", size: 378 },
  "cone-white": { src: "/assets/optimized/card-section/cone-white-source.webp", size: 378 },
};

const presets = {
  "spiral-large": {
    source: "spiral",
    wrapper: "h-[385px] w-[385px]",
    image: "left-[-3.5px] top-0 h-[387px] w-[387px] max-w-none",
    tint: "left-[-3.5px] h-[387px] w-[387px]",
  },
  "spiral-compact": {
    source: "spiral",
    wrapper: "h-[175px] w-[175px]",
    image: "left-[-1.5px] top-0 h-[176px] w-[176px] max-w-none",
    tint: "left-[-1.5px] h-[176px] w-[176px]",
  },
  "spiral-auth": {
    source: "spiral",
    wrapper: "h-[175px] w-[175px]",
    image: "left-[-1.5px] top-0 h-[176px] w-[176px]",
    tint: "left-[-1.5px] h-[176px] w-[176px]",
  },
  "spiral-small-large": {
    source: "spiral-small",
    wrapper: "h-[330px] w-[330px]",
    image: "left-[-3px] top-0 h-[332px] w-[332px] max-w-none",
    tint: "left-[-3px] h-[332px] w-[332px]",
  },
  "spiral-small-growth": {
    source: "spiral-small",
    wrapper: "h-[215px] w-[215px]",
    image: "left-[-2px] top-0 h-[216px] w-[216px] max-w-none",
    tint: "left-[-2px] h-[216px] w-[216px]",
  },
  "donut-large": {
    source: "donut",
    wrapper: "h-[342px] w-[342px]",
    image: "left-[-3.5px] top-[-0.5px] h-[344px] w-[344px] max-w-none",
    tint: "left-[-3.5px] top-[-0.5px] h-[344px] w-[344px]",
  },
  "donut-auth": {
    source: "donut",
    wrapper: "h-[146px] w-[146px]",
    image: "left-[-1.5px] top-[-0.5px] h-[147px] w-[147px]",
    tint: "left-[-1.5px] top-[-0.5px] h-[147px] w-[147px]",
  },
  "cylinder-large": {
    source: "cylinder",
    wrapper: "h-[370px] w-[370px]",
    image: "left-[-4px] top-[-0.5px] h-[372px] w-[372px] max-w-none",
    tint: "left-[-4px] top-[-0.5px] h-[372px] w-[372px]",
  },
  "cone-large": {
    source: "cone",
    wrapper: "h-[188px] w-[188px]",
    image: "left-[-2px] top-[-0.5px] h-[189px] w-[189px] max-w-none",
    tint: "left-[-2px] top-[-0.5px] h-[189px] w-[189px]",
  },
  "cone-auth": {
    source: "cone",
    wrapper: "h-[188px] w-[188px]",
    image: "left-[-2px] top-[-0.5px] h-[189px] w-[189px]",
    tint: "left-[-2px] top-[-0.5px] h-[189px] w-[189px]",
  },
  "cone-white": {
    source: "cone-white",
    wrapper: "h-[188px] w-[188px]",
    image: "left-[-2px] top-[-0.5px] h-[189px] w-[189px] max-w-none",
    tint: "left-[-2px] top-[-0.5px] h-[189px] w-[189px]",
  },
} as const;

type Preset = keyof typeof presets;

type OrnamentProps = {
  tint: "neutral-50" | "secondary-400";
} & {
  [P in Preset]: { preset: P; source: (typeof presets)[P]["source"] };
}[Preset];

type OrnamentStyle = CSSProperties & {
  "--decoration-mask-image": string;
  "--decoration-mask-color": string;
};

export default function Ornament({ source, tint, preset }: OrnamentProps) {
  const { src: asset, size } = sources[source];
  const geometry = presets[preset];
  const style: OrnamentStyle = {
    "--decoration-mask-image": `url('${asset}')`,
    "--decoration-mask-color": `var(--color-${tint})`,
  };

  return (
    <div
      className={`card-section-decoration relative ${geometry.wrapper}`}
      style={style}
      aria-hidden="true"
    >
      {/* Preserve the source PNG compositing and exact image geometry. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`absolute object-cover ${geometry.image}`}
        src={asset}
        alt=""
        width={size}
        height={size}
        decoding="async"
      />
      <span className={`card-section-decoration-mask ${geometry.tint}`} />
    </div>
  );
}
