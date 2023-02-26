import { component$, Slot } from "@builder.io/qwik";

type Props = {};

export default component$<Props>(() => {
  return (
    <div class="flex flex-wrap mb-8 border-gray-50">
      <div class="flex flex-wrap w-1/2 pr-2">
        <Slot name="left" />
      </div>
      <div class="flex flex-wrap w-1/2">
        <Slot name="right" />
      </div>
    </div>
  );
});
