import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import {
  add,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

type Props = {
  weddingDate: Date;
};

export default component$<Props>(({ weddingDate }) => {
  const diffDay = useSignal(0);
  const diffHour = useSignal(0);
  const diffMin = useSignal(0);
  const diffSec = useSignal(0);
  useBrowserVisibleTask$(() => {
    const interval = setInterval(() => {
      const now = new Date();
      diffDay.value = differenceInDays(weddingDate, now);
      const nowAndDiffDay = add(now, {
        days: diffDay.value,
      });
      diffHour.value = differenceInHours(weddingDate, nowAndDiffDay);
      const nowAndDayAndHour = add(now, {
        days: diffDay.value,
        hours: diffHour.value,
      });
      diffMin.value = differenceInMinutes(weddingDate, nowAndDayAndHour);
      const nowAndDayAndHourAndMin = add(now, {
        days: diffDay.value,
        hours: diffHour.value,
        minutes: diffMin.value,
      });
      diffSec.value = differenceInSeconds(weddingDate, nowAndDayAndHourAndMin);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div class="text-amber-900 flex justify-center items-center w-full h-full">
      <div class="w-[300px] shadow-yellow-900/50 shadow-2xl bg-transparent border-2 border-amber-900 rounded-xl drop-shadow-10px-solid flex flex-col justify-center items-center p-4">
        <h2 class="uppercase font-theseasons font-bold text-[24px]">
          count down to
        </h2>
        <h2 class="uppercase font-theseasons font-bold text-[24px]">
          the wedding day
        </h2>
        <div class="p-4 flex flex-col gap-4 text-[70px] font-black">
          <div class="py-2 px-4 bg-teal-900 shadow-4px-solid flex flex-col items-center justify-center text-white">
            <span class="font-mono">
              {diffDay.value < 10 && <span>0</span>}
              {diffDay.value}
            </span>
            <p class="text-[24px]">Days</p>
          </div>
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-col justify-center items-center p-2 bg-teal-900 shadow-4px-solid text-white">
            <span class="countdown font-mono text-2xl ">
              <span style={{ "--value": diffHour.value }}></span>
            </span>
            <span>hours</span>
          </div>
          <div class="flex flex-col justify-center items-center p-2 bg-teal-900 shadow-4px-solid text-white">
            <span class="countdown font-mono text-2xl ">
              <span style={{ "--value": diffMin.value }}></span>
            </span>
            <span>mins</span>
          </div>
          <div class="flex flex-col justify-center items-center p-2 bg-teal-900 shadow-4px-solid text-white">
            <span class="countdown font-mono text-2xl">
              <span style={{ "--value": diffSec.value }}></span>
            </span>
            <span>secs</span>
          </div>
        </div>
      </div>
    </div>
  );
});
