import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "./Image";

type Props = {
  img: TImage;
};

export default component$<Props>(({ img }) => {
  return (
    <div class="w-full h-full flex justify-center items-center my-8 md:my-0">
      <div class="rounded-full w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden">
        <Image
          src={img.src}
          alt={img.src}
          width={400}
          height={400}
          aspectRatio="aspect-[1/1]"
        />
      </div>
    </div>
  );
});
