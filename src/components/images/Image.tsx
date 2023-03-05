import {
  component$,
  useSignal,
  useBrowserVisibleTask$,
} from "@builder.io/qwik";
import type { TImageAspectRatio, TImagePresetData } from "~/stores/images";
type Props = {
  srcData: TImagePresetData;
  alt: string;
  aspectRatio?: TImageAspectRatio;
  marginBottomClass?: string;
  width?: number;
  height?: number;
};
export default component$<Props>(
  ({ srcData, alt, aspectRatio, marginBottomClass, width, height }) => {
    const imageRef = useSignal<Element>();

    useBrowserVisibleTask$(
      () => {
        if (!imageRef.value) return;
        imageRef.value.classList.add("motion-safe:animate-puff-in-center");
      },
      { eagerness: "visible" }
    );

    return (
      <div class="relative">
        <img
          ref={imageRef}
          src={srcData.src}
          srcSet={srcData.srcset}
          sizes={srcData.sizes}
          loading={srcData.loading}
          alt={alt}
          class={["rounded object-cover", aspectRatio, marginBottomClass].join(
            " "
          )}
          width={width}
          height={height}
        />
      </div>
    );
  }
);
