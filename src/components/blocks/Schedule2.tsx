import { component$ } from "@builder.io/qwik";

import barthIcon from "~/myAssets/icons/barth-icon.png?preset=icon";
import bananaTreeIcon from "~/myAssets/icons/banana-tree-icon.png?preset=icon";
import dualRingIcon from "~/myAssets/icons/dual-ring-icon.png?preset=icon";
import conchIcon from "~/myAssets/icons/conch-icon.png?preset=icon";
import glassIcon from "~/myAssets/icons/glass-icon.png?preset=icon";
import Picture2 from "../images/Picture2";
import Image2 from "../images/Image2";

type Props = {};
export default component$<Props>(() => {
  return (
    <section class="px-2 my-10">
      <div class="container mx-auto flex flex-col gap-2 overflow-scroll">
        <h1 class="text-4xl sm:text-[3.5rem] sm:mt-4 font-ttlovelies font-bold text-center mb-10 text-[#dcaca8]">
          Wedding Schedule
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-px bg-gray-200">
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 pr-4 py-1 items-center text-gray-600 bg-white">
          <div class="bg-gradient-to-br from-white via-orange-100 to-white animate-bg-gradient bg-200% p-2 mx-4 rounded-xl">
            <Picture2 imagePreset={barthIcon}>
              <Image2 imagePreset={barthIcon} />
            </Picture2>
          </div>
          <div class="col-span-2">
            <h5 class="text-xl font-bold">Buddhist ceremony</h5>
            <h6 class="text-gray-400">06:59</h6>
          </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 pr-4 py-1 items-center text-gray-600 bg-white">
          <div class="bg-gradient-to-br from-white via-[#EDF1D6] to-white animate-bg-gradient bg-200% p-2 mx-4 rounded-xl">
            <Picture2 imagePreset={bananaTreeIcon}>
              <Image2 imagePreset={bananaTreeIcon} />
            </Picture2>
          </div>
          <div class="col-span-2">
            <h5 class="text-xl font-bold">Groom's processing</h5>
            <h6 class="text-gray-400">07:39</h6>
          </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 pr-4 py-1 items-center text-gray-600 bg-white">
          <div class="bg-gradient-to-br from-white via-[#FFD1D1] to-white animate-bg-gradient bg-200%  p-2 mx-4 rounded-xl">
            <Picture2 imagePreset={dualRingIcon}>
              <Image2 imagePreset={dualRingIcon} />
            </Picture2>
          </div>
          <div class="col-span-2">
            <h5 class="text-xl font-bold">Engagement ceremony</h5>
            <h6 class="text-gray-400">08:39</h6>
          </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 pr-4 py-1 items-center text-gray-600 bg-white">
          <div class="bg-gradient-to-br from-white via-yellow-200 to-white animate-bg-gradient bg-200%  p-2 mx-4 rounded-xl">
            <Picture2 imagePreset={conchIcon}>
              <Image2 imagePreset={conchIcon} />
            </Picture2>
          </div>
          <div class="col-span-2">
            <h5 class="text-xl font-bold">Water blessing</h5>
            <h6 class="text-gray-400">09:09</h6>
          </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 pr-4 py-1 items-center text-gray-600 bg-white">
          <div class="bg-gradient-to-br from-white via-blue-200 to-white animate-bg-gradient bg-200%  p-2 mx-4 rounded-xl">
            <Picture2 imagePreset={glassIcon}>
              <Image2 imagePreset={glassIcon} />
            </Picture2>
          </div>
          <div class="col-span-2">
            <h5 class="text-xl font-bold">Wedding celebration</h5>
            <h6 class="text-gray-400">11:29</h6>
          </div>
        </div>
        <div class="bg-white"></div>
      </div>
    </section>
  );
});
