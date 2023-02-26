import p1 from "~/photos/photo1.JPG";
import p2 from "~/photos/photo2.JPG";
import p3 from "~/photos/photo3.JPG";

export type TImage = {
  src: string | any;
  alt: string;
  aspectRatio?: TImageAspectRatio;
};

export type TImageAspectRatio =
  | "aspect-[3/2]"
  | "aspect-[4/5]"
  | "aspect-[2/3]";

const img1: TImage = {
  src: p1,
  alt: "p1",
  aspectRatio: "aspect-[3/2]",
};
const img2: TImage = {
  src: p2,
  alt: "p2",
  aspectRatio: "aspect-[3/2]",
};

const img3: TImage = {
  src: p3,
  alt: "p3",
  aspectRatio: "aspect-[4/5]",
};

export const images = {
  img1,
  img2,
  img3,
};
