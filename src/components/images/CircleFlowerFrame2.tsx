import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Image from "./Image";

import circle2 from "~/myAssets/frames/circle2.png?preset=circle-flower";

type Props = {
  img: TImagePresetData;
};

export default component$<Props>(({ img }) => {
  const frame = circle2[circle2.length - 1];
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10">
      <div class="rounded-full w-[300px] h-[300px] overflow-hidden drop-shadow-2xl lg:drop-shadow-25px-full">
        <Image
          srcData={img}
          alt={img.src}
          aspectRatio="aspect-[1/1]"
          width={300}
          height={300}
        />
      </div>
      <img
        src={frame.src}
        srcSet={frame.srcset}
        sizes={frame.sizes}
        alt={frame.src}
        loading={frame.loading}
        class="absolute scale-[1.1] md:scale-[1.3] lg:scale-[1.1]"
        width={400}
        height={400}
      />
    </div>
  );
});
