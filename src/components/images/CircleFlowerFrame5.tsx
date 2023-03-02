import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "./Image";
import FlowerCircle5 from "~/frames/circle5.png";

type Props = {
  img: TImage;
};

export default component$<Props>(({ img }) => {
  return (
    <div class="relative w-full min-h-[400px] flex justify-center items-center sm:m-10 ">
      <div class="rounded-full w-[300px] h-[300px] overflow-hidden drop-shadow-2xl -translate-x-[24px] sm:translate-x-0">
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
        src={FlowerCircle5}
        class="absolute scale-[1.42] sm:scale-[1.25] md:scale-[1.64] lg:scale-[1.25] -translate-x-[16px] sm:translate-x-[6px]"
        width={400}
        height={400}
      />
    </div>
  );
});
