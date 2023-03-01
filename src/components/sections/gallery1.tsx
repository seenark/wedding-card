import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "~/components/images/Image";

type Props = {
  imgTopLeft: TImage;
  imgTopRight: TImage;
  imgBottom: TImage;
};

export default component$<Props>(({ imgTopLeft, imgTopRight, imgBottom }) => {
  return (
    <div class="grid grid-cols-2">
      <div class="flex pt-2 pr-1">
        <Image
          src={imgTopLeft.src}
          alt={imgTopLeft.alt}
          aspectRatio="aspect-[3/2]"
          width={347}
          height={231}
        />
      </div>
      <div class="flex pt-2 pl-1">
        <Image
          src={imgTopRight.src}
          alt={imgTopRight.alt}
          aspectRatio="aspect-[3/2]"
          width={347}
          height={231}
        />
      </div>
      <div class="col-span-2 flex w-full py-2">
        <Image
          src={imgBottom.src}
          alt={imgBottom.alt}
          aspectRatio="aspect-[3/2]"
          width={703}
          height={469}
        />
      </div>
    </div>
  );
});
