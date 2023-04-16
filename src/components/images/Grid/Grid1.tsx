import { component$ } from "@builder.io/qwik";
import Image2 from "../Image2";
import Picture2 from "../Picture2";

// import images
import P4GallerySmall from "~/imgs/pot/photo-04.jpg?preset=gallery-small";
import P4_1GallerySmall from "~/imgs/pot/photo-04-1.jpg?preset=gallery-small";
import P4_2GallerySmall from "~/imgs/pot/photo-04-2.jpg?preset=gallery-small";

export default component$(() => {
  return (
    <section>
      <div class="grid grid-cols-2 md:grid-cols-3">
        <div class="h-[184px] sm:h-[316px] md:h-[184px] lg:h-[341px] md:col-span-2">
          <Picture2 imagePreset={P4_1GallerySmall}>
            <Image2
              imagePreset={P4_1GallerySmall}
              class="w-full h-full object-cover"
            />
          </Picture2>
        </div>
        <div class="h-[184px] sm:h-[316px] md:h-[184px] lg:h-[341px] rounded-l-lg">
          <Picture2 imagePreset={P4GallerySmall}>
            <Image2
              imagePreset={P4GallerySmall}
              class="w-full h-full object-cover"
            />
          </Picture2>
        </div>
        <div class="h-[184px] sm:h-[316px] md:h-[184px] lg:h-[341px] rounded-l-lg">
          <Picture2 imagePreset={P4GallerySmall}>
            <Image2
              imagePreset={P4GallerySmall}
              class="w-full h-full object-cover"
            />
          </Picture2>
        </div>
        <div class="h-[184px] sm:h-[316px] md:h-[184px] lg:h-[341px] md:col-span-2">
          <Picture2 imagePreset={P4_2GallerySmall}>
            <Image2
              imagePreset={P4_2GallerySmall}
              class="w-full h-full object-cover object-left md:object-center"
            />
          </Picture2>
        </div>
      </div>
    </section>
  );
});
