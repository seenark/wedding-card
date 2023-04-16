import { component$ } from "@builder.io/qwik";
import Image2 from "../Image2";
import Picture2 from "../Picture2";

// import image
import P1GalleryBig from "~/imgs/pot/photo-01.jpg?preset=gallery-big";
import P1_2GalleryBig from "~/imgs/pot/photo-01-2.jpg?preset=gallery-big";

type Props = {};
export default component$<Props>(() => {
  return (
    <section class="relative bg-white sm:my-10 flex justify-center items-center overflow-hidden">
      <div class="absolute z-0 bg-white p-4 pb:8 sm:pb-16 w-[400px] h-[600px] -translate-x-32 -rotate-[6deg] border">
        <div class="absolute top-0 right-0 left-0 bottom-0 bg-white/50"></div>
        <Picture2 imagePreset={P1_2GalleryBig}>
          <Image2 imagePreset={P1_2GalleryBig} class="w-full h-full" />
        </Picture2>
        <div class="text-right font-ttlovelies text-xl sm:text-2xl text-gray-500">
          Orasa & Worapot
        </div>
      </div>
      <div class="bg-white p-4 pb-16 w-[400px] h-[600px] rotate-6 sm:translate-x-16 md:translate-x-32 border">
        <Picture2 imagePreset={P1GalleryBig}>
          <Image2 imagePreset={P1GalleryBig} class="h-full w-full" />
        </Picture2>
        <div class="text-right font-ttlovelies text-xl sm:text-2xl text-gray-500">
          Orasa & Worapot
        </div>
      </div>
    </section>
  );
});
