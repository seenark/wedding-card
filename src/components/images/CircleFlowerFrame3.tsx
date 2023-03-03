import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "./Image";

type Props = {
  img: TImage;
};

export default component$<Props>(({ img }) => {
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10">
      <div class="rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] overflow-hidden">
        <Image
          src={img.src}
          alt={img.src}
          aspectRatio="aspect-[1/1]"
          width={300}
          height={300}
        />
      </div>
      {/* <div class="absolute w-[400px] h-[400px] bg-[url(/frames/flower-circle.png)]"></div> */}
      <img
        src="/frames/circle3resize.png"
        class="absolute scale-[1.1] md:scale-[1.43] lg:scale-[1.1] translate-y-[8px] translate-x-[2px]"
        width={400}
        height={400}
      />
    </div>
  );
});
