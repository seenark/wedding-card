import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import Picture from "~/components/images/Picture";
import type { TImagePresetData } from "~/stores/images";
import { createFireWorkCssClass } from "./firework.helper";

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type Props = {
  bgImg?: TImagePresetData[];
  fireworkCount?: IntRange<20, 50>;
};
const fireworkStyle = createFireWorkCssClass(50);

export default component$<Props>(({ bgImg, fireworkCount }) => {
  useStylesScoped$(fireworkStyle);
  return (
    <div class="w-full h-full relative grid grid-cols-1 md:grid-cols-2 justify-between items-center">
      <div class="absolute w-full h-full col-span-2">
        <>
          {bgImg && (
            <div class="w-full h-full overflow-hidden">
              <Picture
                src={bgImg}
                className="py-4 z-0 w-full h-full"
                classForImgTag="w-full h-full"
              />
            </div>
          )}
          {Array(fireworkCount || 50)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                class={[
                  "absolute opacity-100 z-30",
                  `fire${i}`,
                  `pattern${i}`,
                ].join(" ")}
              >
                <div class="w-[1px] h-[1px] ring_1"></div>
                <div class="w-[1px] h-[1px] ring_2"></div>
              </div>
            ))}
        </>
      </div>
      <div class={["flex w-full", bgImg ? "bg-white/90 z-20" : ""].join(" ")}>
        <Slot name="left" />
      </div>
      <div class={["flex w-full", bgImg ? "bg-white/90 z-20" : ""].join(" ")}>
        <Slot name="right" />
      </div>
    </div>
  );
});
