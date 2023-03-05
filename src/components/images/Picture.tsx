import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import type { TImageAspectRatio, TImagePresetData } from "~/stores/images";

type Props = {
  src: TImagePresetData[];
  aspectRatio?: TImageAspectRatio;
  marginBottomClass?: string;
  width?: number;
  height?: number;
  showAnimation?: boolean;
  className?: string;
  classForImgTag?: string;
};

export default component$<Props>(
  ({
    src,
    aspectRatio,
    marginBottomClass,
    width,
    height,
    className,
    classForImgTag,
    showAnimation = true,
  }) => {
    const lastSource = src[src.length - 1];
    const imageRef = useSignal<Element>();

    useBrowserVisibleTask$(
      () => {
        if (!imageRef.value) return;
        if (!showAnimation) return;
        imageRef.value.classList.add("motion-safe:animate-puff-in-center");
      },
      { eagerness: "visible" }
    );
    return (
      <picture class={className || ""}>
        {src.map((s, i) => (
          <source key={i} srcSet={s.srcset} media={s.media} sizes={s.sizes} />
        ))}
        <img
          ref={imageRef}
          src={lastSource.src}
          srcSet={lastSource.srcset}
          sizes={lastSource.sizes}
          loading={lastSource.loading}
          alt={lastSource.src}
          height={height}
          width={width}
          class={[
            "rounded object-cover",
            aspectRatio,
            marginBottomClass,
            classForImgTag || "",
          ].join(" ")}
        />
      </picture>
    );
  }
);
