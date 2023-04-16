import { component$, Slot } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Image2 from "../images/Image2";
import Picture2 from "../images/Picture2";

type Props = {
  bgImg: TImagePresetData[];
};

export default component$<Props>(({ bgImg }) => {
  return (
    <>
      <div class="relative flex flex-col md:flex-row flex-wrap border-gray-50 overflow-hidden">
        <div class="absolute w-full h-full z-0">
          <Picture2 imagePreset={bgImg}>
            <Image2
              imagePreset={bgImg}
              class="w-full h-full object-cover object-top"
            />
          </Picture2>
          {/* <Picture */}
          {/*   src={bgImg} */}
          {/*   className="w-full h-full object-cover" */}
          {/*   classForImgTag="h-full w-full" */}
          {/* /> */}
        </div>
        <div class="absolute w-full h-full z-10 bg-white/90"></div>
        <div class="flex flex-wrap w-full md:w-1/2 pr-2 z-10">
          <Slot name="left" />
        </div>
        <div class="flex flex-wrap w-full md:w-1/2 z-10">
          <Slot name="right" />
        </div>
      </div>
    </>
  );
});
