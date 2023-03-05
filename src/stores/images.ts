import { widthPreset } from "vite-plugin-image-presets";
export type TImage = {
  src: string;
  alt: string;
  aspectRatio?: TImageAspectRatio;
};

export type TImageAspectRatio =
  | "aspect-[3/2]"
  | "aspect-[4/5]"
  | "aspect-[2/3]"
  | "aspect-[1/1]";

export type TImagePresetData = {
  type: string;
  srcset: string;
  loading?: HTMLImageElement["loading"];
  class?: string;
  src: string;
  media?: string;
  sizes?: string;
};

// export function isTImagePresetData(
//   src: string | TImagePresetData | any
// ): src is TImagePresetData {
//   return (src as TImagePresetData)[0].srcset !== undefined;
// }

type TWidthPresetParameter = Parameters<typeof widthPreset>[0];
type TPresetSizes = {
  minWidthPerViewport375?: [375, number]; // example 33vw or 50vw
  minWidthPerViewport640?: [640, number];
  minWidthPerViewPort768?: [768, number];
  minWidthPerViewport1024?: [1024, number];
  minWidthPerViewport1280?: [1280, number];
  default: [undefined, number]; // example 100vw
};

function getMinWidthMedia(minWidth: number, size: number): string {
  return `(min-width: ${minWidth}px) ${size}vw`;
}

function generatePresetSizesString(sizes: TPresetSizes): string {
  const str: string[] = [];
  for (const [key, value] of Object.entries(sizes)) {
    if (key != "default") {
      str.push(getMinWidthMedia(value[0]!, value[1]));
    } else {
      str.push("100vw");
    }
  }
  return str.join(", ");
}

export type TPresetOptions = {
  class: TWidthPresetParameter["class"];
  widths: TWidthPresetParameter["widths"];
  sizes: TPresetSizes;
  formats: TWidthPresetParameter["formats"];
  loading?: HTMLImageElement["loading"];
  height?: number;
};

export function genWidthPreset(presetOptions: TPresetOptions) {
  const sizes = generatePresetSizesString(presetOptions.sizes);
  return widthPreset({
    class: presetOptions.class,
    loading: presetOptions.loading || "lazy",
    widths: presetOptions.widths,
    sizes: sizes,
    // sizes: "(min-width: 768px) 50vw, 100vw",
    media: sizes,
    formats: presetOptions.formats,
    height: presetOptions.height,
  });
}

export function getLastImagePreset(
  preset: TImagePresetData[]
): TImagePresetData {
  return preset[preset.length - 1];
}
