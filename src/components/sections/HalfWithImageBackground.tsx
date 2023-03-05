import { component$, Slot } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Picture from "../images/Picture";

type Props = {
  bgImg: TImagePresetData[];
};

export default component$<Props>(({ bgImg }) => {
  return (
    <>
      <div class="relative flex flex-col md:flex-row flex-wrap my-8 border-gray-50 overflow-hidden">
        <div class="absolute w-full h-full z-0">
          <Picture src={bgImg} className="w-full h-full object-cover" />
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
