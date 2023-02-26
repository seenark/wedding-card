import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "~/components/images/Image";

type Props = {
  imgTop: TImage;
  imgBottomRight: TImage;
  imgBottomLeft: TImage;
};
export default component$<Props>(
  ({ imgTop, imgBottomLeft, imgBottomRight }) => {
    return (
      <>
        <div class="flex flex-wrap w-full py-2">
          <Image src={imgTop.src} alt={imgTop.alt} aspectRatio="aspect-[3/2]" />
        </div>
        <div class="flex flex-wrap w-1/2 pr-1">
          <Image
            src={imgBottomLeft.src}
            alt={imgBottomLeft.alt}
            aspectRatio="aspect-[3/2]"
          />
        </div>
        <div class="flex flex-wrap w-1/2 pl-1">
          <Image
            src={imgBottomRight.src}
            alt={imgBottomRight.alt}
            aspectRatio="aspect-[3/2]"
          />
        </div>
      </>
    );
  }
);
