import { component$, Slot } from "@builder.io/qwik";

type Props = {
  bgImg: string;
};

export default component$<Props>(({ bgImg }) => {
  return (
    <>
      <div class="relative flex flex-col md:flex-row flex-wrap my-8 border-gray-50 overflow-hidden">
        <div class="absolute w-full h-full z-0">
          <img src={bgImg} class="w-full h-full object-cover" />
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
