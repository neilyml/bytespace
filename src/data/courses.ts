import { studentPhotoLists, type StudentPhoto } from "./student-photos";

export type Course = {
  readonly id: string;
  readonly title: string;
  readonly creator: string;
  readonly image: {
    readonly src: string;
    readonly alt: "";
    readonly width: number;
    readonly height: number;
  };
  readonly badges: {
    readonly lessons: string;
    readonly duration: string;
    readonly comments: string;
  };
  readonly level: {
    readonly label: string;
    readonly iconSrc: string;
  };
  readonly rating: string;
  readonly price: {
    readonly amount: string;
    readonly period: string;
  };
  readonly students: readonly StudentPhoto[];
  readonly studentCount: string;
};

const sharedContent = {
  creator: "by purepearl studio",
  badges: {
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  level: {
    label: "Beginner",
    iconSrc: "/assets/course-catalog/signal-cellular-alt.svg",
  },
  rating: "4.5",
  price: { amount: "$25", period: "/lifetime" },
  studentCount: "26+",
} as const;

export const catalogCourses = [
  {
    ...sharedContent,
    id: "learn-figma",
    title: "Learn Figma from Basic",
    image: {
      src: "/assets/optimized/course-catalog/cata-1.webp",
      alt: "",
      width: 682,
      height: 455,
    },
    students: studentPhotoLists.catalog[0],
  },
  {
    ...sharedContent,
    id: "digital-asset",
    title: "Build Digital Asset",
    image: {
      src: "/assets/optimized/course-catalog/cata-2.webp",
      alt: "",
      width: 682,
      height: 455,
    },
    students: studentPhotoLists.catalog[1],
  },
  {
    ...sharedContent,
    id: "big-data",
    title: "the Power of Big Data",
    image: {
      src: "/assets/optimized/course-catalog/cata-3.webp",
      alt: "",
      width: 682,
      height: 455,
    },
    students: studentPhotoLists.catalog[2],
  },
  {
    ...sharedContent,
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    image: {
      src: "/assets/optimized/course-catalog/cata-4.webp",
      alt: "",
      width: 682,
      height: 455,
    },
    students: studentPhotoLists.catalog[3],
  },
  {
    ...sharedContent,
    id: "money-management",
    title: "Mastering Money Management",
    image: {
      src: "/assets/optimized/course-catalog/cata-5.webp",
      alt: "",
      width: 682,
      height: 455,
    },
    students: studentPhotoLists.catalog[4],
  },
  {
    ...sharedContent,
    id: "startup-success",
    title: "From Idea to Startup Success",
    image: {
      src: "/assets/optimized/course-catalog/cata-6.webp",
      alt: "",
      width: 695,
      height: 391,
    },
    students: studentPhotoLists.catalog[5],
  },
] as const satisfies readonly Course[];

export const professionalGrowthCourse = catalogCourses[0];

export const authCourses = [
  { ...catalogCourses[1], students: studentPhotoLists.authCourse },
  { ...catalogCourses[2], students: studentPhotoLists.authCourse },
] as const satisfies readonly Course[];
