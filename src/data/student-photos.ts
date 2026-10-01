export type StudentPhoto = {
  readonly src: string;
  readonly alt: "";
};

const photos = [
  { src: "/assets/optimized/happy-students/happy-student-1.webp", alt: "" },
  { src: "/assets/optimized/happy-students/happy-student-2.webp", alt: "" },
  { src: "/assets/optimized/happy-students/happy-student-3.webp", alt: "" },
  { src: "/assets/optimized/happy-students/happy-student-4.webp", alt: "" },
  { src: "/assets/optimized/happy-students/happy-student-5.webp", alt: "" },
  { src: "/assets/optimized/happy-students/happy-student-6.webp", alt: "" },
  { src: "/assets/optimized/happy-students/happy-student-7.webp", alt: "" },
] as const satisfies readonly StudentPhoto[];

const catalogPhotos = [
  [photos[1], photos[2], photos[3], photos[4]],
  [photos[2], photos[3], photos[4], photos[5]],
  [photos[1], photos[3], photos[4], photos[5]],
  [photos[1], photos[2], photos[4], photos[5]],
  [photos[1], photos[2], photos[3], photos[5]],
  [photos[2], photos[3], photos[4], photos[5]],
] as const satisfies readonly (readonly StudentPhoto[])[];

export const studentPhotoLists = {
  happyStudents: photos,
  catalog: catalogPhotos,
  growthCourse: catalogPhotos[0],
  authCourse: catalogPhotos[1],
} as const;
