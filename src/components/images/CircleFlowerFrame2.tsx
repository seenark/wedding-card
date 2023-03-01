import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "./Image";

type Props = {
  img: TImage;
};

export default component$<Props>(({ img }) => {
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10">
      <div class="rounded-full w-[300px] h-[300px] overflow-hidden drop-shadow-2xl lg:drop-shadow-25px-full">
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
        src="/frames/circle2.png"
        class="absolute scale-[1.1] md:scale-[1.3] lg:scale-[1.1]"
        width={400}
        height={400}
      />
    </div>
  );
});
