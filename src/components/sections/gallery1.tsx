import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Picture from "../images/Picture";

type Props = {
  imgTopLeft: TImagePresetData[];
  imgTopRight: TImagePresetData[];
  imgBottom: TImagePresetData[];
};

export default component$<Props>(({ imgTopLeft, imgTopRight, imgBottom }) => {
  return (
    <div class="grid grid-cols-2">
      <div class="flex pt-2 pr-1">
        <Picture
          src={imgTopLeft}
          aspectRatio="aspect-[3/2]"
          width={347}
          height={231}
        />
      </div>
      <div class="flex pt-2 pl-1">
        <Picture
          src={imgTopRight}
          aspectRatio="aspect-[3/2]"
          width={347}
          height={231}
        />
      </div>
      <div class="col-span-2 flex w-full py-2">
        <Picture
          src={imgBottom}
          aspectRatio="aspect-[3/2]"
          width={703}
          height={469}
        />
      </div>
    </div>
  );
});
