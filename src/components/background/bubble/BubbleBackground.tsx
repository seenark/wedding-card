import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { TImagePresetData } from "~/stores/images";
import { generateBubbleClasses } from "./bubble.helper";

type Props = {
  bgImgSrc?: TImagePresetData;
};

const bubbleClass = generateBubbleClasses(15);

export default component$<Props>(({ bgImgSrc }) => {
  useStylesScoped$(bubbleClass);

  return (
    <section class="w-full h-full relative grid grid-cols-1 md:grid-cols-2 justify-between items-center">
      <div class="absolute w-full h-full col-span-2">
        <>
          {bgImgSrc && (
            <img
              src={bgImgSrc.src}
              srcSet={bgImgSrc.srcset}
              sizes={bgImgSrc.sizes}
              class="w-full h-full object-cover py-4 z-0"
            />
          )}
          {Array(15)
            .fill(0)
            .map((_, i) => {
              return (
                <div class={[`bubble`, `bubble${i}`, "z-[30]"].join(" ")}>
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <span class={[`bubble-color${i}-${j + 1}`]}></span>
                    ))}
                </div>
              );
            })}
        </>
      </div>
      <div
        class={[
          "flex w-full relative",
          bgImgSrc ? "bg-white/60 z-20" : "",
        ].join(" ")}
      >
        <Slot name="left" />
      </div>
      <div
        class={[
          "flex w-full relative",
          bgImgSrc ? "bg-white/60 z-20" : "",
        ].join(" ")}
      >
        <Slot name="right" />
      </div>
    </section>
  );
});
