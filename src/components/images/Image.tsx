import {
  component$,
  useOnWindow,
  useSignal,
  $,
  useBrowserVisibleTask$,
} from "@builder.io/qwik";
import type { TImageAspectRatio } from "~/stores/images";
type Props = {
  src: string | any;
  alt: string;
  aspectRatio?: TImageAspectRatio;
  marginBottomClass?: string;
};
export default component$<Props>(
  ({ src, alt, aspectRatio, marginBottomClass }) => {
    const imageRef = useSignal<Element>();
    const isImageVisible = useSignal(false);
    useBrowserVisibleTask$(() => {
      if (!imageRef.value) {
        isImageVisible.value = false;
        return;
      }

      const rect = imageRef.value.getBoundingClientRect();
      // console.log("rect", rect);
      // console.log("window", window.innerHeight);
      isImageVisible.value = rect.top >= 0 || rect.bottom <= window.innerHeight;
      // console.log("is visible", isImageVisible.value);
    });
    useOnWindow(
      "scroll",
      $(() => {
        if (isImageVisible.value === true) {
          return;
        }
        if (!imageRef.value) {
          return;
        }

        const rect = imageRef.value.getBoundingClientRect();
        // console.log("rect", rect);
        // console.log("window", window.innerHeight);
        isImageVisible.value =
          rect.top >= 0 && rect.bottom <= window.innerHeight;

        console.log("is visible", isImageVisible.value);
      })
    );
    return (
      <div>
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          class={[
            "rounded object-cover",
            isImageVisible.value === true ? "animate-puff-in-center" : "",
            aspectRatio,
            marginBottomClass,
          ].join(" ")}
        />
      </div>
    );
  }
);
