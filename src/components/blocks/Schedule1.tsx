import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import colors from "tailwindcss/colors";
import Svg1 from "../AnimateBackground/Svg1";
import Svg2 from "../AnimateBackground/Svg2";
import Svg3 from "../AnimateBackground/Svg3";
import Svg4 from "../AnimateBackground/Svg4";
import Svg5 from "../AnimateBackground/Svg5";
import ScheduleCard from "./ScheduleCard";

import barthIcon from "~/myAssets/icons/barth-icon.png?preset=icon";
import bananaTreeIcon from "~/myAssets/icons/banana-tree-icon.png?preset=icon";
import dualRingIcon from "~/myAssets/icons/dual-ring-icon.png?preset=icon";
import conchIcon from "~/myAssets/icons/conch-icon.png?preset=icon";
import glassIcon from "~/myAssets/icons/glass-icon.png?preset=icon";

type Props = {};

export default component$<Props>(() => {
  const box1 = useSignal<Element>();
  const box2 = useSignal<Element>();
  const box3 = useSignal<Element>();
  const box4 = useSignal<Element>();
  const box5 = useSignal<Element>();
  useBrowserVisibleTask$(
    () => {
      if (box1.value) {
        box1.value.classList.add("animate-slide-in-blurred-left-fast-1");
      }
      if (box2.value) {
        box2.value.classList.add("animate-slide-in-blurred-left-fast-2");
      }
      if (box3.value) {
        box3.value.classList.add("animate-slide-in-blurred-left-fast-3");
      }
      if (box4.value) {
        box4.value.classList.add("animate-slide-in-blurred-left-fast-4");
      }
      if (box5.value) {
        box5.value.classList.add("animate-slide-in-blurred-left-fast-5");
      }
    },
    { eagerness: "visible" }
  );

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4 text-amber-900">
      <div ref={box1} class="">
        <ScheduleCard
          iconSrc={barthIcon[barthIcon.length - 1]}
          text="Buddhist ceremony"
          time="06:30"
        >
          <Svg1 q:slot="bg-animate" bgColor={colors.yellow[100]} />
          <Svg5 q:slot="bg-animate2" bgColor={colors.yellow[100]} />
        </ScheduleCard>
      </div>
      <div ref={box2} class="">
        <ScheduleCard
          iconSrc={bananaTreeIcon[bananaTreeIcon.length - 1]}
          text="Groom's processing"
          time="09:09"
        >
          <Svg2 q:slot="bg-animate" bgColor={colors.yellow[100]} />
          <Svg3 q:slot="bg-animate2" bgColor={colors.yellow[100]} />
        </ScheduleCard>
      </div>
      <div ref={box3}>
        <ScheduleCard
          iconSrc={dualRingIcon[dualRingIcon.length - 1]}
          text="Engagement ceremony"
          time="09:25"
        >
          <Svg3 q:slot="bg-animate" bgColor={colors.yellow[100]} />
          <Svg4 q:slot="bg-animate2" bgColor={colors.yellow[100]} />
        </ScheduleCard>
      </div>
      <div ref={box4}>
        <ScheduleCard
          iconSrc={conchIcon[conchIcon.length - 1]}
          text="Water blessing"
          time="10:10"
        >
          <Svg4 q:slot="bg-animate" bgColor={colors.yellow[100]} />
          <Svg2 q:slot="bg-animate2" bgColor={colors.yellow[100]} />
        </ScheduleCard>
      </div>
      <div ref={box5}>
        <ScheduleCard
          iconSrc={glassIcon[glassIcon.length - 1]}
          text="Wedding celebration"
          time="11:00"
        >
          <Svg5 q:slot="bg-animate" bgColor={colors.yellow[100]} />
          <Svg4 q:slot="bg-animate2" bgColor={colors.yellow[100]} />
        </ScheduleCard>
      </div>
    </div>
  );
});
