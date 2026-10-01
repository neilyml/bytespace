import Ornament from "@/components/shared/Ornament";

export default function AuthOrnaments() {
  return (
    <>
      <div className="absolute left-[645px] top-[801px] origin-top-left rotate-180">
        <Ornament source="spiral" preset="spiral-auth" tint="neutral-50" />
      </div>
      <div className="absolute left-[151px] top-[320px]">
        <Ornament source="donut" preset="donut-auth" tint="secondary-400" />
      </div>
      <div className="absolute left-[97px] top-[702px]">
        <Ornament source="cone" preset="cone-auth" tint="secondary-400" />
      </div>
    </>
  );
}
