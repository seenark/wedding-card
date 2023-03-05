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
declare module "*?preset=circle-flower" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}

declare module "*?preset=single-on-half" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}
declare module "*?preset=icon" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}
declare module "*?preset=gallery-small" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}
declare module "*?preset=gallery-big" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}
declare module "*?preset=masonry" {
  import type { TImagePresetData } from "~/stores/images";
  const image: TImagePresetData[];
  export default image;
}
