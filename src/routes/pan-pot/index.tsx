import { component$, useBrowserVisibleTask$ } from "@builder.io/qwik";
import SaveTheDate1 from "~/components/blocks/SaveTheDate1";
import Image2 from "~/components/images/Image2";
import Picture2 from "~/components/images/Picture2";
import HalfWithImageBackground from "~/components/sections/HalfWithImageBackground";
import CircleFlowerFrame4 from "~/components/images/CircleFlowerFrame4";
import QRCode from "~/components/sections/QRCode";
import tailwindColor from "tailwindcss/colors";
import BlessingCard2 from "~/components/blocks/BlessingCard2";
import WeddingTheme from "~/components/blocks/WeddingTheme/WeddingTheme";
import Schedule2 from "~/components/blocks/Schedule2";
import Grid1 from "~/components/images/Grid/Grid1";
import Ig1 from "~/components/images/InstagramFrame/Ig1";
import Grid2 from "~/components/images/Grid/Grid2";

// import images
import P8Hero from "~/imgs/pot/photo-08.jpg?preset=hero";
import P10Hero from "~/imgs/pot/photo-10.jpg?preset=hero";
import P12Hero from "~/imgs/pot/photo-12.jpg?preset=hero";
import P13SingleOnHalf from "~/imgs/pot/photo-13.jpg?preset=single-on-half";
import P13_1Hero from "~/imgs/pot/photo-13-1.jpg?preset=hero";
import CircleCenter from "~/components/images/CircleCenter";
import Masonry from "~/components/images/Masonry";
import { masonryImages } from "~/stores/pan-pot-masonry";

export default component$(() => {
  const brideName = "Orasa";
  const groomName = "Worapot";
  const weddingDate = new Date("2023-04-29");
  // section 1
  useBrowserVisibleTask$(() => {
    // Get scroll position
    window.addEventListener("scroll", function () {
      const scrollPosition = window.pageYOffset;
      const brideGroomElement = document.getElementById("bride-groom");

      // Apply transform to bride and groom div
      if (brideGroomElement) {
        brideGroomElement.style.transform = `translateY(${
          scrollPosition * 0.2
        }px)`;
      }
    });
  });

  return (
    <div>
      <section class="relative w-full h-[560px] sm:h-[960px] md:h-[1152px] lg:h-[1536px] p-2 border-gray-300 overflow-hidden">
        <div class="absolute top-0 bottom-0 left-0 right-0 z-0">
          <Picture2 imagePreset={P12Hero}>
            <Image2 imagePreset={P12Hero} class="w-full object-cover" />
          </Picture2>
          <div class="h-[60%] sm:h-[50%] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-200"></div>
          <div
            id="bride-groom"
            class="absolute bottom-12 sm:bottom-14 md:bottom-16 lg:bottom-28 left-0 right-0 p-4 text-center transform transition-transform ease-linear"
          >
            <h1 class="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] font-aniyah text-[#dcaca8] relative right-16">
              {brideName}
            </h1>
            <h1 class="text-2xl sm:text-[2rem] md:text-[3rem] font-aniyah text-[#dcaca8] sm:mb-8">
              and
            </h1>
            <h1 class="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] font-aniyah text-[#dcaca8] relative left-8 sm:left-16">
              {groomName}
            </h1>
          </div>
        </div>
      </section>
      <SaveTheDate1 weddingDate={weddingDate} />
      <HalfWithImageBackground bgImg={P13_1Hero}>
        <CircleFlowerFrame4
          q:slot="right"
          img={P13SingleOnHalf}
        ></CircleFlowerFrame4>
      </HalfWithImageBackground>
      <Schedule2 />
      <Grid1 />
      <section class="my-20">
        <QRCode
          mapUrl="https://goo.gl/maps/CRB2AjU2fzpMJfVq9"
          address1="ณ โรงแรมเกาะหลักรีสอร์ท"
          address2="อ.เมือง จ.ประจวบคีรีขันธ์"
          color="#ec4899bd"
          address1Color={tailwindColor.pink[500]}
          address2Color={tailwindColor.pink[500]}
          buttonColor="#eab5b0"
        />
      </section>
      <section>
        <div class="w-full my-8">
          <WeddingTheme
            textColor="#c0827d"
            colors={["#f7d7dc", "#f6dfe1", "#f2d2c3", "#e8a0a2"]}
          />
        </div>
      </section>
      <BlessingCard2 />
      <Ig1 />
      <Grid2 />
      <HalfWithImageBackground bgImg={P10Hero}>
        <Picture2 q:slot="left" imagePreset={P8Hero}>
          <Image2 imagePreset={P8Hero} />
        </Picture2>
        <CircleCenter q:slot="right" img={P10Hero} />
      </HalfWithImageBackground>
      <Masonry images={masonryImages} />
    </div>
  );
});
