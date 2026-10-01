import Ornament from "@/components/shared/Ornament";

export default function CreatorCTAOrnaments() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2"
      aria-hidden="true"
    >
      <div className="absolute left-[1080px] top-0">
        <Ornament source="cone" preset="cone-large" tint="secondary-400" />
      </div>
      <div className="absolute left-[1110px] top-[289px]">
        <Ornament source="spiral-small" preset="spiral-small-large" tint="secondary-400" />
      </div>
      <div className="absolute left-[-118px] top-[-162px]">
        <Ornament source="spiral" preset="spiral-large" tint="secondary-400" />
      </div>
      <div className="absolute left-[353px] top-[180px] origin-top-left rotate-180">
        <Ornament source="spiral" preset="spiral-compact" tint="neutral-50" />
      </div>
      <div className="absolute left-[-48px] top-[225px]">
        <Ornament source="cone-white" preset="cone-white" tint="neutral-50" />
      </div>
      <div className="absolute left-[20px] top-[299px]">
        <Ornament source="donut" preset="donut-large" tint="secondary-400" />
      </div>
      <div className="absolute left-[1226px] top-[6px]">
        <Ornament source="cylinder" preset="cylinder-large" tint="neutral-50" />
      </div>
    </div>
  );
}
