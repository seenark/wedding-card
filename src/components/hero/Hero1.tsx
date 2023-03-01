import { component$ } from "@builder.io/qwik";
import type { TImage } from "~/stores/images";
import Image from "../images/Image";

type Props = {
  heroImg: TImage;
  brideName: string;
  groomName: string;
};

export default component$<Props>(({ heroImg, brideName, groomName }) => {
  return (
    <div class="relative overflow-hidden text-amber-900 pb-20 aspect-[78/67]">
      <div class="relative z-10">
        <Image
          src={heroImg.src}
          alt={heroImg.alt}
          aspectRatio={heroImg.aspectRatio}
          width={1423}
          height={948}
        />
      </div>
      <div class="relative z-20">
        <img
          src="/paper/paper2.webp"
          class="absolute w-full scale-[1.5] lg:scale-[1.5] xl:-translate-y-[150px] lg:-translate-y-[150px] md:-translate-y-[100px] sm:-translate-y-[100px] -translate-y-[50px]"
        />
        <div class="relative flex flex-col items-center justify-center font-aniyah xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2rem] text-[2rem] z-30 xl:-translate-y-[130px] lg:-translate-y-[150px] md:-translate-y-[90px] sm:-translate-y-[70px] -translate-y-[40px] ">
          <div class="flex flex-row">
            <h1>{brideName}</h1>
            <h1 class="xl:text-[8rem] lg:text-[6rem] md:text-[4rem] sm:text-[3rem] text-[2rem]">
              &
            </h1>
          </div>
          <h1>{groomName}</h1>
        </div>
      </div>
      {/* <div class="font-[Aniyah] text-[90px] z-20"> */}
      {/*   <h1>{brideName}</h1> */}
      {/*   <h1>&</h1> */}
      {/*   <h1>{brideName}</h1> */}
      {/* </div> */}
    </div>
  );
});
