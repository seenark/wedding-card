import { component$, Slot } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";

type Props = {
  classForContainer: string;
  styleForContainer: Omit<HTMLAttributes<HTMLDivElement>["style"], string>;
};
export default component$<Props>(({ classForContainer, styleForContainer }) => {
  return (
    <div
      style={{ transformStyle: "preserve-3d", ...styleForContainer }}
      class={["absolute", classForContainer].join(" ")}
    >
      <div class="absolute w-full h-full backface-hidden">
        <Slot name="front" />
      </div>
      <div class="absolute w-full h-full backface-hidden rotate-y-180">
        <Slot name="back" />
      </div>
    </div>
  );
});
