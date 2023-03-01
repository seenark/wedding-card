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
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex w-full py-2">
          <Image
            src={imgTop.src}
            alt={imgTop.alt}
            aspectRatio="aspect-[3/2]"
            width={703}
            height={469}
          />
        </div>
        <div class="flex pr-1">
          <Image
            src={imgBottomLeft.src}
            alt={imgBottomLeft.alt}
            aspectRatio="aspect-[3/2]"
            width={347}
            height={231}
          />
        </div>
        <div class="flex pl-1">
          <Image
            src={imgBottomRight.src}
            alt={imgBottomRight.alt}
            aspectRatio="aspect-[3/2]"
            width={347}
            height={231}
          />
        </div>
      </div>
    );
  }
);
