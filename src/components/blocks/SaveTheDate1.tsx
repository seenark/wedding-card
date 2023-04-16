import {
  $,
  component$,
  useBrowserVisibleTask$,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { format } from "date-fns";
import P03_1Hero from "~/imgs/pot/photo-03-1.jpg?preset=hero";
import Image2 from "../images/Image2";
import Picture2 from "../images/Picture2";
type Props = {
  weddingDate: Date;
};

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default component$<Props>(({ weddingDate }) => {
  const dateBox = useSignal<HTMLDivElement>();
  useBrowserVisibleTask$(
    () => {
      if (!dateBox.value) return;
      dateBox.value.classList.add("motion-safe:animate-scale-in-ver-center");
    },
    {
      eagerness: "visible",
    }
  );

  const getRemainingTime$ = $((targetDate: Date): TimeRemaining => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  });
  const dayRemaining = useStore<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const hourRef = useSignal<HTMLDivElement>();
  const minRef = useSignal<HTMLDivElement>();
  const secRef = useSignal<HTMLDivElement>();
  // count down to wedding date
  useBrowserVisibleTask$(() => {
    const interval = setInterval(async () => {
      const remaining = await getRemainingTime$(weddingDate);
      if (remaining.days < 0) {
        clearInterval(interval);
      }

      if (hourRef.value && dayRemaining.hours !== remaining.hours) {
        hourRef.value.classList.remove("animate-slide-in-top-short");
        void hourRef.value.offsetWidth;
        hourRef.value.classList.add("animate-slide-in-top-short");
      }
      if (minRef.value && dayRemaining.minutes !== remaining.minutes) {
        minRef.value.classList.remove("animate-slide-in-top-short");
        void minRef.value.offsetWidth;
        minRef.value.classList.add("animate-slide-in-top-short");
      }
      if (secRef.value) {
        secRef.value.classList.remove("animate-slide-in-top-short");
        void secRef.value.offsetWidth;
        secRef.value.classList.add("animate-slide-in-top-short");
      }
      dayRemaining.days = remaining.days;
      dayRemaining.hours = remaining.hours;
      dayRemaining.minutes = remaining.minutes;
      dayRemaining.seconds = remaining.seconds;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section class="">
      <div class="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-white z-0"></div>
        <Picture2 imagePreset={P03_1Hero}>
          <Image2
            imagePreset={P03_1Hero}
            alt="cover image"
            class="absolute w-full h-full z-0 top-0 left-0 right-0 object-cover object-top"
          />
        </Picture2>
        <div class="bg-white/50 w-full h-full absolute z-[1]"></div>
        <div
          ref={dateBox}
          class="relative z-10 flex justify-center items-center h-full"
        >
          <div class="text-center bg-white/50 border-4 border-white p-4 rounded-lg lg:px-16 lg:py-12">
            <h1 class="text-4xl font-semibold mb-4 text-black/50">
              Save the Date
            </h1>
            <p class="text-pink-500 mb-4 text-[1.5rem] font-[500]">
              {format(weddingDate, "dd MMM yyyy")}
            </p>
            <div class="flex items-center justify-center space-x-2">
              <div class="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center flex-col">
                <span class="text-3xl text-gray-600 font-semibold">
                  {dayRemaining.days}
                </span>
                <span class="text-xs text-gray-600 uppercase">Days</span>
              </div>
              <div class="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center flex-col">
                <span
                  ref={hourRef}
                  class="text-3xl  text-gray-600 font-semibold"
                >
                  {dayRemaining.hours}
                </span>
                <span class="text-xs text-gray-600 uppercase">Hours</span>
              </div>
              <div class="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center flex-col">
                <span ref={minRef} class="text-3xl text-gray-600 font-semibold">
                  {dayRemaining.minutes}
                </span>
                <span class="text-xs text-gray-600 uppercase">Minutes</span>
              </div>
              <div class="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center flex-col overflow-hidden">
                <span ref={secRef} class="text-3xl text-gray-600 font-semibold">
                  {dayRemaining.seconds}
                </span>
                <span class="text-xs text-gray-600 uppercase">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
