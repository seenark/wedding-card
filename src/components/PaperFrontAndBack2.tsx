import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import {
  rotateYClass,
  type KeyRotateYClass,
  calculateRotateYDegFromPercent,
} from "../utils/tailwind-dynamic-class/rotate";

type FlipCardInnterProps = {
  rotateYPercent: number;
  classes?: string;
};
const FlipCardInnter = component$<FlipCardInnterProps>(
  ({ rotateYPercent, classes }) => {
    const deg = useSignal<KeyRotateYClass>(0);
    useBrowserVisibleTask$(({ track }) => {
      track(() => rotateYPercent);
      deg.value = calculateRotateYDegFromPercent(rotateYPercent);
    });

    return (
      <div
        style={{ transformStyle: "preserve-3d" }}
        class={[
          "relative text-center w-full h-full",
          classes || "",
          rotateYClass[deg.value],
        ].join(" ")}
      >
        <Slot />
      </div>
    );
  }
);

type FlibCardFrontProps = {
  classes: string;
};
const FlibCardFront = component$(() => {
  return (
    <div class="absolute w-full h-full backface-hidden bg-white">
      <Slot />
    </div>
  );
});

// TODO: add class to props
type FlibCardBackProps = {
  classes: string;
};
const FlibCardBack = component$(() => {
  return (
    <div class="absolute w-full h-full backface-hidden rotate-y-180">
      <Slot />
    </div>
  );
});

type Props = {
  rotateYPercent: number;
  classes?: string;
};
export default component$<Props>(({ classes, rotateYPercent }) => {
  return (
    <FlipCardInnter classes={classes} rotateYPercent={rotateYPercent}>
      <FlibCardFront>
        <Slot name="front" />
      </FlibCardFront>
      <FlibCardBack>
        <Slot name="back" />
      </FlibCardBack>
    </FlipCardInnter>
  );
});
