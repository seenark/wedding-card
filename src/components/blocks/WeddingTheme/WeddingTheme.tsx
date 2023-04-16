import { component$ } from "@builder.io/qwik";
import HeartIcon from "./HeartIcon";

type Props = {
  colors: string[];
  textColor?: string;
};

export default component$<Props>(({ textColor, colors }) => {
  return (
    <div class="w-full h-full flex flex-col items-center justify-center">
      <h1
        style={{ color: textColor }}
        class="text-[2rem] font-bold sm:text-[2.5rem]  md:text-[2rem] lg:text-[2.8rem] font-aniyah text-amber-900 whitespace-nowrap"
      >
        Wedding theme
      </h1>
      <div class="flex flex-row mt-8">
        {colors.map((c, i) => {
          return <HeartIcon key={i} color={c} />;
        })}
      </div>
    </div>
  );
});
