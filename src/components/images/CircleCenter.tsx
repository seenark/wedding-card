import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";
import Picture from "./Picture";

type Props = {
  img: TImagePresetData[];
};

export default component$<Props>(({ img }) => {
  return (
    <div class="w-full h-full flex justify-center items-center my-8 md:my-0">
      <div class="rounded-full w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden">
        <Picture
          src={img}
          width={400}
          height={400}
          aspectRatio="aspect-[1/1]"
        />
      </div>
    </div>
  );
});
