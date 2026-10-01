import Ornament from "@/components/shared/Ornament";

export default function HeroOrnaments() {
  return (
    <>
      <div className="absolute left-[1127px] top-[672px]">
        <Ornament source="spiral-small" preset="spiral-small-large" tint="neutral-50" />
      </div>
      <div className="absolute left-[-118px] top-[221px]">
        <Ornament source="spiral" preset="spiral-large" tint="secondary-400" />
      </div>
      <div className="absolute left-[358px] top-[652px] origin-top-left rotate-180">
        <Ornament source="spiral" preset="spiral-compact" tint="neutral-50" />
      </div>
      <div className="absolute left-[18px] top-[682px]">
        <Ornament source="donut" preset="donut-large" tint="neutral-50" />
      </div>
      <div className="absolute left-[1231px] top-[221px]">
        <Ornament source="cylinder" preset="cylinder-large" tint="secondary-400" />
      </div>
      <div className="absolute left-[1106px] top-[464px]">
        <Ornament source="cone" preset="cone-large" tint="neutral-50" />
      </div>
    </>
  );
}
