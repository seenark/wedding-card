import { component$ } from "@builder.io/qwik";
import { format } from "date-fns";
type Props = {
  brideName: string;
  groomName: string;
  date: Date;
};
export default component$<Props>(({ brideName, groomName, date }) => {
  const day = format(date, "EEEE");
  const month = format(date, "MMMM");
  const d = format(date, "dd");
  const year = format(date, "yyyy");
  return (
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="uppercase text-white drop-shadow">Save the date</div>
      <div class="flex flex-col items-center mt-8">
        <h1 class="font-[Precious] font-extrabold text-[64px] text-white drop-shadow">
          {brideName}
        </h1>
        <h4 class="font-[Precious] font-bold text-[30px] text-white drop-shadow">
          and
        </h4>
        <h1 class="font-[Precious] font-extrabold text-[64px] text-white drop-shadow">
          {groomName}
        </h1>
      </div>
      <div class="uppercase text-white mt-8 drop-shadow">
        we invite you to our wedding
      </div>
      <div class="mt-8 flex flex-col items-center">
        <h3 class="text-[24px] text-white drop-shadow">{day.toUpperCase()}</h3>
        <div class="flex flex-row gap-2 text-white text-[24px]">
          <div class="flex items-center">
            <div class="w-[150px] border-t-2 border-b-2 px-8 text-center">
              <span class="drop-shadow">{month.toUpperCase()}</span>
            </div>
          </div>
          <p class="text-[50px] text-center drop-shadow">{d}</p>
          <div class="flex items-center">
            <div class="w-[150px] border-t-2 border-b-2 px-8 text-center">
              <span class="drop-shadow">{year}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="uppercase text-white text-[24px] drop-shadow">At 08:00</div>
    </div>
  );
});
