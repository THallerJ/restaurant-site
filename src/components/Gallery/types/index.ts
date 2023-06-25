type layoutType =
  | "small" // each image span-1
  | "start" // first image in row span-2
  | "middle" // second image in row span-2
  | "end" // final image in row span-2
  | "diag-start" // images along diagnol span-2
  | "diag-end" // images along reverse diagnol span-2
  | "cross" // images along cross pattern span-2
  | "wide"; // all images span-2

export type { layoutType };
