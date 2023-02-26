import { component$ } from "@builder.io/qwik";
import Image from "./Image";
import p1 from "~/photos/photo1.JPG";
import type { TImage } from "~/stores/images";

type Props = {
  images: TImage[];
};

export default component$<Props>(({ images }) => {
  return (
    <div class="columns-4 gap-4">
      {images.map((img, i) => {
        return (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            aspectRatio={img.aspectRatio}
            marginBottomClass="mb-4"
          />
        );
      })}
    </div>
  );
});
