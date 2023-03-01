import { component$, Slot } from "@builder.io/qwik";

type Props = {};

export default component$<Props>(() => {
  return (
    <div class="flex flex-wrap md:flex-row flex-col mb-8 border-gray-50">
      <div class="flex flex-wrap md:w-1/2 w-full md:pr-1">
        <Slot name="left" />
      </div>
      <div class="flex flex-wrap md:w-1/2 w-full md:pl-1">
        <Slot name="right" />
      </div>
    </div>
  );
});
