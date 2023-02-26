import { component$, Slot } from "@builder.io/qwik";

type Props = {};

export default component$<Props>(() => {
  return (
    <div class="relative flex flex-wrap my-8 border-gray-50 ">
      <div class="w-full h-full absolute bg-center bg-cover bg-[url(/photos/photo2.JPG)] z-0">
        <div class="w-full h-full bg-white/90"></div>
      </div>
      <div class="flex flex-wrap w-1/2 pr-2">
        <Slot name="left" />
      </div>
      <div class="flex flex-wrap w-1/2 z-10">
        <Slot name="right" />
      </div>
    </div>
  );
});
