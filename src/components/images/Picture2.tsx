import {
  component$,
  useBrowserVisibleTask$,
  Slot,
  type QwikIntrinsicElements,
} from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";

type Props = {
  imagePreset: TImagePresetData[];
} & QwikIntrinsicElements["img"];

export default component$<Props>(({ imagePreset, ...props }) => {
  useBrowserVisibleTask$(() => {}, { eagerness: "visible" });
  return (
    <picture {...props}>
      {imagePreset.map((s, i) => (
        <source key={i} srcSet={s.srcset} media={s.media} sizes={s.sizes} />
      ))}
      <Slot />
    </picture>
  );
});
