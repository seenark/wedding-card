import { component$ } from "@builder.io/qwik";
type Props = {
  headerText: string;
  subHeaderText?: string;
  brideName: string;
  groomName: string;
  textColor: string;
};

export default component$<Props>(
  ({ headerText, subHeaderText, brideName, groomName, textColor }) => {
    return (
      <div
        style={{ color: textColor, borderColor: textColor }}
        class="w-full h-full flex flex-col justify-center items-center py-20 lg:py-0 mx-2 sm:mx-28 md:mx-0 lg:mx-8 my-8 md:my-0 border-2 rounded-xl"
      >
        <div class="font-theseasons text-center">
          <h4 class="uppercase">{headerText}</h4>
          <h4 class="uppercase">{subHeaderText}</h4>
        </div>
        <div class="flex flex-row items-center gap-4 text-[1.8rem] sm:text-[2.2rem] lg:text-[3rem] my-10 font-bold font-aniyah lg:my-16">
          <h1>{brideName[0]}</h1>
          <div class="h-[64px] w-[1px] bg-white"></div>
          <h1>{groomName[0]}</h1>
        </div>
        <div class="flex flex-col justify-center items-center font-aniyah text-[1.2rem] sm:text-[1.4rem] lg:text-[1.8rem] ">
          <h2 class="lg:mb-8">
            {brideName} & {groomName}
          </h2>
          <h6 class="font-theseasons my-4">12 | 03 | 22</h6>
        </div>
        <div class="uppercase text-[1.2rem] font-theseasons">At 08:00</div>
      </div>
    );
  }
);
