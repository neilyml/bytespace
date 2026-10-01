export type Skill = {
  readonly label: string;
  readonly widthClass: string;
  readonly nowrap: boolean;
  readonly tone: "featured" | "standard" | "more";
};

export const skillRows = [
  [
    { label: "Featured", widthClass: "w-[99px]", nowrap: false, tone: "featured" },
    { label: "Music", widthClass: "w-[77px]", nowrap: false, tone: "standard" },
    { label: "Drawing & Painting", widthClass: "w-[173px]", nowrap: true, tone: "standard" },
    { label: "Marketing", widthClass: "w-[107px]", nowrap: false, tone: "standard" },
    { label: "Animation", widthClass: "w-[107px]", nowrap: false, tone: "standard" },
    { label: "Social Media", widthClass: "w-[126px]", nowrap: true, tone: "standard" },
    { label: "UI/UX Design", widthClass: "w-[131px]", nowrap: true, tone: "standard" },
    { label: "Creative Marketing", widthClass: "w-[173px]", nowrap: true, tone: "standard" },
  ],
  [
    { label: "Digital Illustration", widthClass: "w-[162px]", nowrap: true, tone: "standard" },
    { label: "Film & Video", widthClass: "w-[125px]", nowrap: true, tone: "standard" },
    { label: "Crafts", widthClass: "w-[78px]", nowrap: false, tone: "standard" },
    { label: "Freelance & Entrepreneurship", widthClass: "w-[253px]", nowrap: true, tone: "standard" },
    { label: "Graphic Design", widthClass: "w-[146px]", nowrap: true, tone: "standard" },
    { label: "Photography", widthClass: "w-[128px]", nowrap: false, tone: "standard" },
  ],
  [
    { label: "Productivity", widthClass: "w-[122px]", nowrap: false, tone: "standard" },
    { label: "Web Development", widthClass: "w-[168px]", nowrap: true, tone: "standard" },
    { label: "Data Science", widthClass: "w-[130px]", nowrap: true, tone: "standard" },
    { label: "Cooking", widthClass: "w-[94px]", nowrap: false, tone: "standard" },
    { label: "+ More", widthClass: "w-[53px]", nowrap: true, tone: "more" },
  ],
] as const satisfies readonly (readonly Skill[])[];
