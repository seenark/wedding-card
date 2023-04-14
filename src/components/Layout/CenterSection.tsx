import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mx-auto justify-center max-w-[1280px]">
      <Slot />
    </div>
  );
});
