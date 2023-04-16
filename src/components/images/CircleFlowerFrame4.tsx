import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";

import circle4 from "~/myAssets/frames/circle4.png?preset=circle-flower";
import Picture from "./Picture";

type Props = {
  img: TImagePresetData[];
};

export default component$<Props>(({ img }) => {
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10">
      <div class="rounded-full w-[300px] h-[300px] overflow-hidden lg:drop-shadow-25px-full">
        <Picture
          src={img}
          aspectRatio="aspect-[1/1]"
          width={300}
          height={300}
        />
      </div>
      <Picture
        src={circle4}
        className="absolute scale-[1.2] sm:scale-[1.13] md:scale-[1.5] lg:scale-[1.13] translate-y-[2.6rem]"
        width={400}
        height={400}
      />
    </div>
  );
});
