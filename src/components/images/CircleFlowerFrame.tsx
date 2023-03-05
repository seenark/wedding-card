import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";

import circle1 from "~/myAssets/frames/circle1.png?preset=circle-flower";
import Picture from "./Picture";

type Props = {
  img: TImagePresetData[];
};

export default component$<Props>(({ img }) => {
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center my-20 sm:m-10">
      <div class="rounded-full w-[300px] h-[300px] overflow-hidden">
        <Picture src={img} aspectRatio="aspect-[1/1]" />
      </div>
      <div class="absolute scale-[1.3] sm:scale-[1.15] md:scale-[1.5] lg:scale-[1.15] -translate-y-5">
        <Picture src={circle1} width={400} height={400} showAnimation={false} />
      </div>
    </div>
  );
});
