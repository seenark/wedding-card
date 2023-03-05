import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Picture from "./Picture";

type Props = {
  images: TImagePresetData[][];
};

export default component$<Props>(({ images }) => {
  return (
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((img, i) => {
        return (
          <div class="mb-4">
            <Picture key={i} src={img} showAnimation={false} />
          </div>
        );
      })}
    </div>
  );
});
