import { component$, Slot } from "@builder.io/qwik";

type Props = {
  iconSrc: string;
  text: string;
  time: string;
};

export default component$<Props>(({ iconSrc, text, time }) => {
  return (
    <div class="border-2 border-amber-900/50 rounded-xl py-2 sm:p-4 md:p-8 lg:p-4 xl:p-8 flex flex-col justify-between items-center gap-4">
      <div class="relative p-4 bg-yellow-100 rounded-full flex justify-center items-center">
        <div class="absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] animate-rotate-center z-20">
          <Slot name="bg-animate" />
        </div>
        <div class="absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] animate-rotate-center-fast scale-[2.0] z-10">
          <Slot name="bg-animate2" />
        </div>
        <img
          src={iconSrc}
          width="100"
          height="100"
          class="animate-wobble-hor-bottom relative z-20"
        />
      </div>
      <div class="relative text-[0.9rem] sm:text-[1.1rem] flex flex-col items-center justify-center whitespace-nowrap z-30">
        <span>{text}</span>
        <span class="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {time}
        </span>
      </div>
    </div>
  );
});
