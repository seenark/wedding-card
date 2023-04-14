import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import {
  type KeyLeftPercent,
  LeftPercent,
} from "~/utils/tailwind-dynamic-class/left";
import PaperFrontAndBack2 from "../PaperFrontAndBack2";

type Props = {
  scrollPercent: number;
};
export default component$<Props>(({ scrollPercent }) => {
  const shiftLeftPercent = useSignal<KeyLeftPercent>(0);

  useBrowserVisibleTask$(({ track }) => {
    track(() => scrollPercent);
    shiftLeftPercent.value = Math.floor(
      (scrollPercent * 50) / 100
    ) as KeyLeftPercent;
  });

  return (
    <div class="flex justify-center h-860">
      <div style={{ perspective: "3500px" }} class="w-[50%] h-full relative">
        <PaperFrontAndBack2
          classes={[
            "origin-[0_50%] h-full z-10",
            LeftPercent[shiftLeftPercent.value],
          ].join(" ")}
          rotateYPercent={-scrollPercent}
        >
          <div q:slot="front" class="w-full h-full">
            <Slot name="cover" />
          </div>
          <div
            q:slot="back"
            class="w-full h-full flex justify-center items-center"
          >
            <Slot name="l" />
          </div>
        </PaperFrontAndBack2>
        <div
          class={[
            "h-full w-full absolute left-0 top-0 flex justify-center items-center",
            LeftPercent[shiftLeftPercent.value],
          ].join(" ")}
        >
          <Slot name="r" />
        </div>
      </div>
    </div>
  );
});
