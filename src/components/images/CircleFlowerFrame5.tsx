import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";

import circle5 from "~/myAssets/frames/circle5.png?preset=circle-flower";
import Picture from "./Picture";

type Props = {
  img: TImagePresetData[];
};

export default component$<Props>(({ img }) => {
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10 ">
      <div class="rounded-full w-[300px] h-[300px] overflow-hidden drop-shadow-2xl -translate-x-[24px] sm:translate-x-0">
        <Picture
          src={img}
          aspectRatio="aspect-[1/1]"
          width={300}
          height={300}
        />
      </div>
      <Picture
        src={circle5}
        width={400}
        height={400}
        className="absolute scale-[1.42] sm:scale-[1.25] md:scale-[1.64] lg:scale-[1.25] -translate-x-[16px] sm:translate-x-[6px]"
      />
    </div>
  );
});
