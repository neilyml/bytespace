export type LearningPath = {
  readonly id: string;
  readonly label: string;
  readonly iconSrc: string;
  readonly alignment: "center" | "left-half" | "right-half";
};

export const learningPaths = [
  { id: "design", label: "Design", iconSrc: "/assets/learning-path-categories/design.svg", alignment: "center" },
  { id: "development", label: "Development", iconSrc: "/assets/learning-path-categories/development.svg", alignment: "left-half" },
  { id: "it-and-software", label: "IT & Software", iconSrc: "/assets/learning-path-categories/it-and-software.svg", alignment: "right-half" },
  { id: "business", label: "Business", iconSrc: "/assets/learning-path-categories/business.svg", alignment: "right-half" },
  { id: "marketing", label: "Marketing", iconSrc: "/assets/learning-path-categories/marketing.svg", alignment: "right-half" },
  { id: "photography", label: "Photography", iconSrc: "/assets/learning-path-categories/photography.svg", alignment: "right-half" },
] as const satisfies readonly LearningPath[];
