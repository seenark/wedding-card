import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Image from "./Image";

import circle3 from "~/myAssets/frames/circle3.png?preset=circle-flower";

type Props = {
  img: TImagePresetData;
};

export default component$<Props>(({ img }) => {
  const frame = circle3[circle3.length - 1];
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10">
      <div class="rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] overflow-hidden">
        <Image
          srcData={img}
          alt={img.src}
          aspectRatio="aspect-[1/1]"
          width={300}
          height={300}
        />
      </div>
      {/* <div class="absolute w-[400px] h-[400px] bg-[url(/frames/flower-circle.png)]"></div> */}
      <img
        src={frame.src}
        srcSet={frame.srcset}
        sizes={frame.sizes}
        loading={frame.loading}
        alt={frame.src}
        class="absolute scale-[1.1] md:scale-[1.43] lg:scale-[1.1] translate-y-[8px] translate-x-[2px]"
        width={400}
        height={400}
      />
    </div>
  );
});
