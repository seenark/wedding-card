import { component$, Slot, useStore, useTask$ } from "@builder.io/qwik";
import PaperFrontAndBack from "../PaperFrontAndBack";
type Props = {
  stateOfOpenCard: number; // full open = 100, full close = 0
};
export default component$<Props>(({ stateOfOpenCard }) => {
  const leftContainerStyle = useStore({
    transform: "rotateY(-180deg)",
    left: "50%",
  });
  const rightContainerStyle = useStore({
    left: "50%",
  });

  useTask$(({ track }) => {
    track(() => stateOfOpenCard);
    rightContainerStyle.left = `${(stateOfOpenCard * 50) / 100 + 50}%`;
    leftContainerStyle.left = `${(stateOfOpenCard * 50) / 100 + 50}%`;
    if (stateOfOpenCard === 0) {
      leftContainerStyle.transform = `rotateY(-0deg)`;
    } else {
      leftContainerStyle.transform = `rotateY(-${
        (stateOfOpenCard * 180) / 100
      }deg)`;
    }
    console.log("right", rightContainerStyle.left);
    console.log("left", leftContainerStyle.left);
  });

  return (
    <div style={{ perspective: "3500px" }} class="w-[50%] h-full transform-gpu">
      {/* cover */}
      <PaperFrontAndBack
        styleForContainer={leftContainerStyle}
        classForContainer="w-full h-full top-0 origin-[0%_50%] z-10"
      >
        <div q:slot="front" class="w-full h-full">
          <Slot name="left-front" />
        </div>
        <div q:slot="back" class="w-full h-full">
          <Slot name="left-back" />
        </div>
      </PaperFrontAndBack>
      {/* inner */}
      <div style={{ ...rightContainerStyle }} class="absolute w-full h-full">
        <Slot name="back" />
      </div>
    </div>
  );
});
