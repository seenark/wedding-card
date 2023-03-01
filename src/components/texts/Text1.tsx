import { component$ } from "@builder.io/qwik";
import { format } from "date-fns";
type Props = {
  brideName: string;
  groomName: string;
  date: Date;
  textColor: string;
};
export default component$<Props>(
  ({ brideName, groomName, date, textColor }) => {
    const day = format(date, "EEEE");
    const month = format(date, "MMMM");
    const d = format(date, "dd");
    const year = format(date, "yyyy");
    return (
      <div
        style={{ color: textColor }}
        class="w-full h-full flex flex-col justify-center items-center md:my-0 my-16"
      >
        <div class="uppercase drop-shadow md:text-[14px]">Save the date</div>
        <div class="flex flex-col font-ttlovelies items-center sm:mt-8 mt-2 xl:text-[64px] lg:text-[64px] md:text-[44px] sm:text-[44px] text-[3rem]">
          <h1 class=" font-extrabold  drop-shadow">{brideName}</h1>
          <h4 class="font-bold text-[30px] iphoneXS:text-[2rem] drop-shadow">
            and
          </h4>
          <h1 class="font-extrabold drop-shadow">{groomName}</h1>
        </div>
        <div class="uppercase sm:mt-8 mt-2 md:text-[14px] drop-shadow">
          we invite you to our wedding
        </div>
        <div class="sm:mt-8 mt-2 flex flex-col items-center xl:text-[24px] md:text-[16px] sm:text-[24px] text-[1rem]">
          <h3 class="drop-shadow">{day.toUpperCase()}</h3>
          <div class="flex flex-row gap-2">
            <div class="flex items-center">
              <div
                style={{ borderColor: textColor }}
                class="xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[150px] w-[100px] xl:px-8 md:px-2 sm:px-2 px-0 border-t-2 border-b-2 text-center"
              >
                <span class="drop-shadow">{month.toUpperCase()}</span>
              </div>
            </div>
            <p class="text-[50px] md:text-[32px] text-center drop-shadow">
              {d}
            </p>
            <div class="flex items-center">
              <div
                style={{ borderColor: textColor }}
                class="xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[150px] w-[100px] xl:px-8 md:px-2 sm:px-2 px-0 border-t-2 border-b-2 text-center"
              >
                <span class="drop-shadow">{year}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="uppercase xl:text-[24px] lg:text-[24px] md:text-[14px] sm:text-[20px] text-[20px] drop-shadow">
          At 08:00
        </div>
      </div>
    );
  }
);
