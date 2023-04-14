import { component$ } from "@builder.io/qwik";
import Image2 from "~/components/images/Image2";
import Picture2 from "~/components/images/Picture2";
import P20_1Hero from "~/imgs/pod/photo20-1.jpg?preset=hero";
import P20Hero from "~/imgs/pod/photo20.jpg?preset=hero";

export default component$(() => {
  const brideName = "Piyawan";
  const groomName = "Atiwat";
  return (
    <section class="relative w-full h-[600px] p-2 border-gray-300">
      <div class="absolute top-0 bottom-0 left-0 right-0 z-0">
        <Picture2 imagePreset={P20Hero}>
          <Image2 imagePreset={P20Hero} class="object-cover" />
        </Picture2>
      </div>
      <div class="absolute border-4 border-white z-10"></div>
    </section>
  );
});
