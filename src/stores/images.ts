import p1 from "/photos/photo1.jpg";
import p2 from "/photos/photo2.jpg";
import p2a2 from "/photos/photo2-2.jpg";
import p3 from "/photos/photo3.jpg";
import p4 from "/photos/photo4.jpg";
import p5 from "~/photos/photo5.jpg";
import p6 from "~/photos/photo6.jpg";
import p7 from "~/photos/photo7.jpg";
import p8 from "~/photos/photo8.jpg";
import p9 from "~/photos/photo9.jpg";
import p10 from "~/photos/photo10.jpg";
import p15 from "/photos/photo15.jpg";
import p18 from "/photos/photo18.jpg";
import p20 from "~/photos/photo20.jpg";
import p21 from "~/photos/photo21.jpg";
import p26 from "/photos/photo26.jpg";
import p27 from "/photos/photo27.jpg";
import p28 from "/photos/photo28.jpg";
import p29 from "/photos/photo29.jpg";
import p30 from "/photos/photo30.jpg";
import p31 from "/photos/photo31.jpg";
import p33 from "/photos/photo33.jpg";
import p34 from "/photos/photo34.jpg";

export type TImage = {
  src: string | any;
  alt: string;
  aspectRatio?: TImageAspectRatio;
};

export type TImageAspectRatio =
  | "aspect-[3/2]"
  | "aspect-[4/5]"
  | "aspect-[2/3]"
  | "aspect-[1/1]";

const img1: TImage = {
  src: p1,
  alt: "p1",
  aspectRatio: "aspect-[2/3]",
};
const img2: TImage = {
  src: p2,
  alt: "p2",
  aspectRatio: "aspect-[2/3]",
};
const img2a2: TImage = {
  src: p2a2,
  alt: "p2-2",
  aspectRatio: "aspect-[2/3]",
};

const img3: TImage = {
  src: p3,
  alt: "p3",
  aspectRatio: "aspect-[2/3]",
};

const img4: TImage = {
  src: p4,
  alt: "p4",
  aspectRatio: "aspect-[3/2]",
};
const img5: TImage = {
  src: p5,
  alt: "p5",
  aspectRatio: "aspect-[3/2]",
};
const img6: TImage = {
  src: p6,
  alt: "p6",
  aspectRatio: "aspect-[2/3]",
};
const img7: TImage = {
  src: p7,
  alt: "p7",
  aspectRatio: "aspect-[3/2]",
};
const img8: TImage = {
  src: p8,
  alt: "p8",
  aspectRatio: "aspect-[3/2]",
};
const img9: TImage = {
  src: p9,
  alt: "p9",
  aspectRatio: "aspect-[3/2]",
};
const img10: TImage = {
  src: p10,
  alt: "p10",
  aspectRatio: "aspect-[3/2]",
};
const img15: TImage = {
  src: p15,
  alt: "p15",
  aspectRatio: "aspect-[2/3]",
};
const img18: TImage = {
  src: p18,
  alt: "p18",
  aspectRatio: "aspect-[3/2]",
};
const img20: TImage = {
  src: p20,
  alt: "p20",
  aspectRatio: "aspect-[3/2]",
};
const img21: TImage = {
  src: p21,
  alt: "p21",
  aspectRatio: "aspect-[3/2]",
};
const img26: TImage = {
  src: p26,
  alt: "p26",
  aspectRatio: "aspect-[3/2]",
};
const img27: TImage = {
  src: p27,
  alt: "p27",
  aspectRatio: "aspect-[3/2]",
};
const img28: TImage = {
  src: p28,
  alt: "p28",
  aspectRatio: "aspect-[2/3]",
};
const img29: TImage = {
  src: p29,
  alt: "p29",
  aspectRatio: "aspect-[3/2]",
};
const img30: TImage = {
  src: p30,
  alt: "p30",
  aspectRatio: "aspect-[3/2]",
};
const img31: TImage = {
  src: p31,
  alt: "p31",
  aspectRatio: "aspect-[3/2]",
};
const img33: TImage = {
  src: p33,
  alt: "p33",
  aspectRatio: "aspect-[3/2]",
};
const img34: TImage = {
  src: p34,
  alt: "p34",
  aspectRatio: "aspect-[3/2]",
};

export const images = {
  img1,
  img2,
  img2a2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img18,
  img15,
  img20,
  img21,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img33,
  img34,
};
