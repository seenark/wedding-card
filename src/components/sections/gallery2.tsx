import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Picture from "../images/Picture";

type Props = {
  imgTop: TImagePresetData[];
  imgBottomRight: TImagePresetData[];
  imgBottomLeft: TImagePresetData[];
};
export default component$<Props>(
  ({ imgTop, imgBottomLeft, imgBottomRight }) => {
    return (
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex w-full py-2">
          <Picture
            src={imgTop}
            aspectRatio="aspect-[3/2]"
            width={703}
            height={469}
          />
        </div>
        <div class="flex pr-1">
          <Picture
            src={imgBottomLeft}
            aspectRatio="aspect-[3/2]"
            width={347}
            height={231}
          />
        </div>
        <div class="flex pl-1">
          <Picture
            src={imgBottomRight}
            aspectRatio="aspect-[3/2]"
            width={347}
            height={231}
          />
        </div>
      </div>
    );
  }
);
