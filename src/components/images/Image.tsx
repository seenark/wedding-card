import {
  component$,
  useSignal,
  useBrowserVisibleTask$,
} from "@builder.io/qwik";
import type { TImageAspectRatio } from "~/stores/images";
type Props = {
  src: string | any;
  alt: string;
  aspectRatio?: TImageAspectRatio;
  marginBottomClass?: string;
  width?: number;
  height?: number;
};
export default component$<Props>(
  ({ src, alt, aspectRatio, marginBottomClass, width, height }) => {
    const imageRef = useSignal<Element>();
    // const box1 = useSignal<Element>();

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
          src={src}
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
