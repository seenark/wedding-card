import { component$, Slot } from "@builder.io/qwik";
import PaperFrontAndBack2 from "../PaperFrontAndBack2";

const Container = component$(() => {
  return (
    <div class="bg-transparent perspective-1000 h-430 sm:h-760 mb-[8px] w-full overflow-hidden">
      <Slot />
    </div>
  );
});

type Props = {
  rotateYPercent: number;
};
export default component$<Props>(({ rotateYPercent }) => {
  return (
    <Container>
      <PaperFrontAndBack2 rotateYPercent={rotateYPercent}>
        <div q:slot="front">
          <Slot name="front" />
        </div>
        <div q:slot="back">
          <Slot name="back" />
        </div>
      </PaperFrontAndBack2>
    </Container>
  );
});
