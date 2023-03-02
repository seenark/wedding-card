import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CircleCenter from "~/components/images/CircleCenter";
import CircleFlowerFrame from "~/components/images/CircleFlowerFrame";
import Image from "~/components/images/Image";
import Masonry from "~/components/images/Masonry";
import Countdown1 from "~/components/sections/Countdown1";
import Gallery1 from "~/components/sections/gallery1";
import Gallery2 from "~/components/sections/gallery2";
import Half from "~/components/sections/Half";
import HalfWithImageBackground from "~/components/sections/HalfWithImageBackground";
import Text1 from "~/components/texts/Text1";
import Text2 from "~/components/texts/Text2";
import { configs } from "~/config/settings";
import { images } from "~/stores/images";
// import { Link } from "@builder.io/qwik-city";
import colors from "tailwindcss/colors";
import Hero1 from "~/components/hero/Hero1";
import Schedule1 from "~/components/blocks/Schedule1";
import Firework2 from "~/components/background/firework/Firework2";
import CircleFlowerFrame4 from "~/components/images/CircleFlowerFrame4";
import CircleFlowerFrame5 from "~/components/images/CircleFlowerFrame5";
import QRCode from "~/components/sections/QRCode";
import WeddingTheme from "~/components/blocks/WeddingTheme/WeddingTheme";
import BubbleBackground from "~/components/background/bubble/BubbleBackground";
import CircleFlowerFrame2 from "~/components/images/CircleFlowerFrame2";
import CircleFlowerFrame3 from "~/components/images/CircleFlowerFrame3";
import BlessingCard from "~/components/blocks/BlessingCard";

export default component$(() => {
  const brideName = "Piyawan";
  const groomName = "Atiwat";
  return (
    <div class="">
      <Hero1
        heroImg={images.img4}
        brideName={brideName}
        groomName={groomName}
      />
      <BubbleBackground bgImgSrc="/photos/photo21.jpg">
        <CircleFlowerFrame2 q:slot="left" img={images.img2} />
        <CircleFlowerFrame3 q:slot="right" img={images.img4} />
      </BubbleBackground>
      <Half>
        <Text1
          brideName="Piyawan"
          groomName="Atiwat"
          date={new Date("2014.06.17")}
          textColor={colors.yellow[900]}
          q:slot="left"
        />
        <Image
          q:slot="right"
          src={images.img3.src}
          alt="p1"
          aspectRatio="aspect-[4/5]"
          width={711}
          height={889}
        />
      </Half>
      <HalfWithImageBackground bgImg="/photos/photo9.jpg">
        <div class="p-8 w-full h-[500px]" q:slot="left">
          <WeddingTheme
            colors={[
              colors.blue[500],
              colors.green[900],
              colors.white,
              colors.gray[700],
            ]}
          />
        </div>
        <BlessingCard q:slot="right" />
      </HalfWithImageBackground>
      <HalfWithImageBackground bgImg="/photos/photo2-2.jpg">
        <CircleFlowerFrame q:slot="right" img={images.img2a2} />
      </HalfWithImageBackground>
      <Schedule1 />
      <section class="w-full">
        <Firework2 bgImg="/photos/photo35.jpg" fireworkCount={30}>
          <CircleFlowerFrame4 q:slot="left" img={images.img2a2} />
          <CircleFlowerFrame5 q:slot="right" img={images.img2a2} />
        </Firework2>
      </section>
      <Firework2 fireworkCount={20}>
        <Gallery1
          imgTopLeft={images.img1}
          imgTopRight={images.img2}
          imgBottom={images.img3}
          q:slot="left"
        />
        <Countdown1 q:slot="right" weddingDate={new Date("2023-03-28T00:00")} />
      </Firework2>
      {/* <HalfWithImageBackground bgImg="/photos/photo35.jpg"> */}
      {/*   <Countdown1 q:slot="left" weddingDate={new Date("2023-03-28T00:00")} /> */}
      {/*   <CircleFlowerFrame3 q:slot="right" img={images.img2a2} /> */}
      {/* </HalfWithImageBackground> */}
      <section class="my-20">
        <QRCode mapUrl="https://goo.gl/maps/sZQAGgdUQcjYjnrj6" />
      </section>
      <Half>
        <Text2
          q:slot="left"
          headerText="Welcome to"
          subHeaderText="our wedding"
          brideName="Piyawan"
          groomName="Atiwat"
          textColor={colors.yellow[900]}
        />
        <Image
          q:slot="right"
          src="/photos/photo37.jpg"
          alt="p1"
          aspectRatio="aspect-[4/5]"
          width={711}
          height={889}
        />
      </Half>
      <Half>
        <Gallery2
          imgTop={images.img26}
          imgBottomLeft={images.img27}
          imgBottomRight={images.img28}
          q:slot="left"
        />
        <Gallery1
          imgTopLeft={images.img29}
          imgTopRight={images.img30}
          imgBottom={images.img31}
          q:slot="right"
        />
      </Half>
      <HalfWithImageBackground bgImg="/photos/photo18.JPG">
        <div q:slot="left">
          <Image
            src={images.img15.src}
            alt={images.img15.alt}
            width={624}
            height={780}
            aspectRatio={"aspect-[4/5]"}
          />
        </div>
        <CircleCenter q:slot="right" img={images.img18} />
      </HalfWithImageBackground>
      <Half>
        <div q:slot="left">
          <Image
            src={images.img33.src}
            alt={images.img33.alt}
            width={624}
            height={780}
            aspectRatio={"aspect-[4/5]"}
          />
        </div>
        <div q:slot="right">
          <Image
            src={images.img34.src}
            alt={images.img34.alt}
            width={624}
            height={780}
            aspectRatio={"aspect-[4/5]"}
          />
        </div>
      </Half>
      <Masonry
        images={Array(20)
          .fill(0)
          .map((_, i) => `/photos/photo${i + 1}.jpg`)}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: configs.homePageTitle,
  meta: [
    {
      name: "description",
      content: "My Wedding",
    },
  ],
};
