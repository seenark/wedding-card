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
import { allImagesDynamic } from "~/stores/images";
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
  const masonaryImageUrl: string[] = [];
  for (const [, v] of Object.entries(allImagesDynamic)) {
    masonaryImageUrl.push(v);
  }
  return (
    <div class="">
      <Hero1
        heroImg={{
          src: allImagesDynamic["photo4"],
          alt: "hero1",
          aspectRatio: "aspect-[3/2]",
        }}
        brideName={brideName}
        groomName={groomName}
      />
      <BubbleBackground bgImgSrc={allImagesDynamic["photo21"]}>
        <CircleFlowerFrame2
          q:slot="left"
          img={{
            src: allImagesDynamic["photo2"],
            alt: "photo2",
            aspectRatio: "aspect-[1/1]",
          }}
        />
        <CircleFlowerFrame3
          q:slot="right"
          img={{
            src: allImagesDynamic["photo4"],
            alt: "photo4",
            aspectRatio: "aspect-[1/1]",
          }}
        />
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
          src={allImagesDynamic["photo3"]}
          alt="p1"
          aspectRatio="aspect-[4/5]"
          width={711}
          height={889}
        />
      </Half>
      <HalfWithImageBackground bgImg={allImagesDynamic["photo9"]}>
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
      <HalfWithImageBackground bgImg={allImagesDynamic["photo38"]}>
        <CircleFlowerFrame
          q:slot="right"
          img={{
            src: allImagesDynamic["photo38"],
            alt: "photo38",
            aspectRatio: "aspect-[1/1]",
          }}
        />
      </HalfWithImageBackground>
      <Schedule1 />
      <section class="w-full">
        <Firework2 bgImg={allImagesDynamic["photo35"]} fireworkCount={30}>
          <CircleFlowerFrame4
            q:slot="left"
            img={{
              src: allImagesDynamic["photo38"],
              alt: "photo38",
              aspectRatio: "aspect-[1/1]",
            }}
          />
          <CircleFlowerFrame5
            q:slot="right"
            img={{
              src: allImagesDynamic["photo38"],
              alt: "photo38",
              aspectRatio: "aspect-[1/1]",
            }}
          />
        </Firework2>
      </section>
      <Firework2 fireworkCount={20}>
        <Gallery1
          imgTopLeft={{
            src: allImagesDynamic["photo1"],
            alt: "photo1",
            aspectRatio: "aspect-[3/2]",
          }}
          imgTopRight={{
            src: allImagesDynamic["photo2"],
            alt: "photo2",
            aspectRatio: "aspect-[3/2]",
          }}
          imgBottom={{
            src: allImagesDynamic["photo3"],
            alt: "photo3",
            aspectRatio: "aspect-[3/2]",
          }}
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
          src={allImagesDynamic["photo37"]}
          alt="p1"
          aspectRatio="aspect-[4/5]"
          width={711}
          height={889}
        />
      </Half>
      <Half>
        <Gallery2
          imgTop={{
            src: allImagesDynamic["photo26"],
            alt: "photo26",
            aspectRatio: "aspect-[3/2]",
          }}
          imgBottomLeft={{
            src: allImagesDynamic["photo27"],
            alt: "photo27",
            aspectRatio: "aspect-[3/2]",
          }}
          imgBottomRight={{
            src: allImagesDynamic["photo28"],
            alt: "photo28",
            aspectRatio: "aspect-[3/2]",
          }}
          q:slot="left"
        />
        <Gallery1
          imgTopLeft={{
            src: allImagesDynamic["photo29"],
            alt: "photo29",
            aspectRatio: "aspect-[3/2]",
          }}
          imgTopRight={{
            src: allImagesDynamic["photo30"],
            alt: "photo30",
            aspectRatio: "aspect-[3/2]",
          }}
          imgBottom={{
            src: allImagesDynamic["photo31"],
            alt: "photo31",
            aspectRatio: "aspect-[3/2]",
          }}
          q:slot="right"
        />
      </Half>
      <HalfWithImageBackground bgImg={allImagesDynamic["photo18"]}>
        <div q:slot="left">
          <Image
            src={allImagesDynamic["photo15"]}
            alt="photo15"
            width={624}
            height={780}
            aspectRatio={"aspect-[4/5]"}
          />
        </div>
        <CircleCenter
          q:slot="right"
          img={{
            src: allImagesDynamic["photo18"],
            alt: "photo18",
            aspectRatio: "aspect-[3/2]",
          }}
        />
      </HalfWithImageBackground>
      <Half>
        <div q:slot="left">
          <Image
            src={allImagesDynamic["photo33"]}
            alt="photo33"
            width={624}
            height={780}
            aspectRatio={"aspect-[4/5]"}
          />
        </div>
        <div q:slot="right">
          <Image
            src={allImagesDynamic["photo34"]}
            alt="photo34"
            width={624}
            height={780}
            aspectRatio={"aspect-[4/5]"}
          />
        </div>
      </Half>
      <Masonry images={masonaryImageUrl} />
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
