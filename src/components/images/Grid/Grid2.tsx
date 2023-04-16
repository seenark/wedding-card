import { component$ } from "@builder.io/qwik";
import Image2 from "../Image2";
import Picture2 from "../Picture2";

// import image
import P15_1GallerySmall from "~/imgs/pot/photo-15-1.jpg?preset=gallery-small";
import P17GallerySmall from "~/imgs/pot/photo-17.jpg?preset=gallery-small";
import P18GallerySmall from "~/imgs/pot/photo-18.jpg?preset=gallery-small";
import P19GallerySmall from "~/imgs/pot/photo-19.jpg?preset=gallery-small";

type Props = {};
export default component$<Props>(() => {
  return (
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="grid grid-cols-1 grid-rows-[100vw_53vw_150vw] sm:grid-rows-[50vw_25vw_75vw] lg:grid-rows-[640px_256px_768px] overflow-hidden">
          <Picture2 imagePreset={P15_1GallerySmall}>
            <Image2
              imagePreset={P15_1GallerySmall}
              class="w-full h-full object-cover object-top"
            />
          </Picture2>
          <div class="w-full bg-[#ddd6d0] text-[#af7e5f] flex flex-col justify-center items-center font-theseasons">
            <h5 class="text-[2.2rem] font-light">Summer</h5>
            <h4 class="text-[2.8rem] sm:text-[2.4rem] font-bold">
              Orasa & Worapot
            </h4>
            <h5 class="text-[2rem] sm:text-[1.4rem] text-gray-500">
              29 April 2023
            </h5>
          </div>
          <Picture2 imagePreset={P17GallerySmall}>
            <Image2
              imagePreset={P17GallerySmall}
              class="w-full h-[150%] object-cover object-top"
            />
          </Picture2>
        </div>
        <div class="hidden sm:block">
          <Picture2 imagePreset={P19GallerySmall}>
            <Image2
              imagePreset={P19GallerySmall}
              class="w-full h-1/2 object-cover object-top"
            />
          </Picture2>
          <Picture2 imagePreset={P18GallerySmall}>
            <Image2
              imagePreset={P18GallerySmall}
              class="w-full h-1/2 object-cover object-top"
            />
          </Picture2>
        </div>
      </div>
    </section>
  );
});
