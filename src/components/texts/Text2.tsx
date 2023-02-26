import { component$ } from "@builder.io/qwik";
type Props = {
  headerText: string;
  subHeaderText?: string;
  brideName: string;
  groomName: string;
};

export default component$<Props>(
  ({ headerText, subHeaderText, brideName, groomName }) => {
    return (
      <div class="w-full h-full flex flex-col justify-center items-center mx-8 my-0 border-2 rounded-xl">
        <div class="text-white font-[Precious] text-center">
          <h4 class="uppercase">{headerText}</h4>
          <h4 class="uppercase">{subHeaderText}</h4>
        </div>
        <div class="flex flex-row items-center gap-4 text-[80px] font-bold font-[Precious] text-white">
          <h1>{brideName[0]}</h1>
          <div class="h-[64px] w-[1px] bg-white"></div>
          <h1>{groomName[0]}</h1>
        </div>
        <div class="flex flex-col justify-center items-center font-[Precious] text-white text-[38px]">
          <h2>
            {brideName} & {groomName}
          </h2>
          <h6>12 | 03 | 22</h6>
        </div>
        <div class="uppercase text-white text-[24px]">At 08:00</div>
      </div>
    );
  }
);
