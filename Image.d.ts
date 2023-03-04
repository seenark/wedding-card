// export type TImagePresetData = {
//   type: string;
//   srcset: string;
//   loading?: "eager" | "lazy";
//   class?: string;
//   src: string;
//   media?: string;
//   sizes?: string;
// };

declare module "*.JPG";

declare module "*?preset=hero" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}
