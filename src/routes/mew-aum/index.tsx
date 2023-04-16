import { component$ } from "@builder.io/qwik";
import colors from "tailwindcss/colors";
import Hero1 from "~/components/hero/Hero1";
import Picture from "~/components/images/Picture";
import BubbleBackground from "~/components/background/bubble/BubbleBackground";
import CircleFlowerFrame from "~/components/images/CircleFlowerFrame";
import CircleFlowerFrame2 from "~/components/images/CircleFlowerFrame2";
import CircleFlowerFrame3 from "~/components/images/CircleFlowerFrame3";
import Half from "~/components/sections/Half";
import Text1 from "~/components/texts/Text1";
import HalfWithImageBackground from "~/components/sections/HalfWithImageBackground";
import WeddingTheme from "~/components/blocks/WeddingTheme/WeddingTheme";
import BlessingCard from "~/components/blocks/BlessingCard";
import Schedule1 from "~/components/blocks/Schedule1";
import Firework2 from "~/components/background/firework/Firework2";
import CircleFlowerFrame4 from "~/components/images/CircleFlowerFrame4";
import CircleFlowerFrame5 from "~/components/images/CircleFlowerFrame5";
import Countdown1 from "~/components/sections/Countdown1";
import Gallery1 from "~/components/sections/gallery1";
import QRCode from "~/components/sections/QRCode";
import Text2 from "~/components/texts/Text2";
import Gallery2 from "~/components/sections/gallery2";
import CircleCenter from "~/components/images/CircleCenter";
import Masonry from "~/components/images/Masonry";

import p1GallerySmall from "~/imgs/photo1.jpg?preset=gallery-small";
import p2 from "~/imgs/photo2.jpg?preset=hero";
import p2a2SingleOnHalf from "~/imgs/photo2-2.jpg?preset=single-on-half";
import p2GallerySmall from "~/imgs/photo2.jpg?preset=gallery-small";
import p3Hero from "~/imgs/photo3.jpg?preset=hero";
import p3GalleryBig from "~/imgs/photo3.jpg?preset=gallery-big";
import p4 from "~/imgs/photo4.jpg?preset=hero";
import p9Hero from "~/imgs/photo9.jpg?preset=hero";
import p15SingleOnHalf from "~/imgs/photo15.jpg?preset=single-on-half";
import p18Hero from "~/imgs/photo18.jpg?preset=hero";

import p21 from "~/imgs/photo21.jpg?preset=hero";
import p26GalleryBig from "~/imgs/photo26.jpg?preset=gallery-big";
import p27GallerySmall from "~/imgs/photo27.jpg?preset=gallery-small";
import p28GallerySmall from "~/imgs/photo28.jpg?preset=gallery-small";
import p29GallerySmall from "~/imgs/photo29.jpg?preset=gallery-small";
import p30GallerySmall from "~/imgs/photo30.jpg?preset=gallery-small";
import p31GalleryBig from "~/imgs/photo31.jpg?preset=gallery-big";
import p33SingleOnHalf from "~/imgs/photo33.jpg?preset=single-on-half";
import p34SingleOnHalf from "~/imgs/photo34.jpg?preset=single-on-half";
import p35Hero from "~/imgs/photo35.jpg?preset=hero";
import p37SingleOnHalf from "~/imgs/photo37.jpg?preset=single-on-half";
import { masonryImages } from "~/stores/masonry";

export default component$(() => {
  const brideName = "Piyawan";
  const groomName = "Atiwat";
  return (
    <div class="">
      <Hero1 heroImg={p4} brideName={brideName} groomName={groomName} />
      <BubbleBackground bgImgSrc={p21[p21.length - 1]}>
        <CircleFlowerFrame2 q:slot="left" img={p2[p2.length - 1]} />
        <CircleFlowerFrame3 q:slot="right" img={p4[p2.length - 1]} />
      </BubbleBackground>
      <Half>
        <Text1
          brideName="Piyawan"
          groomName="Atiwat"
          date={new Date("2014.06.17")}
          textColor={colors.yellow[900]}
          q:slot="left"
        />
        <Picture
          q:slot="right"
          src={p3Hero}
          aspectRatio="aspect-[4/5]"
          height={889}
          width={711}
        />
      </Half>
      <HalfWithImageBackground bgImg={p9Hero}>
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
      <HalfWithImageBackground bgImg={p2}>
        <CircleFlowerFrame q:slot="right" img={p2a2SingleOnHalf} />
      </HalfWithImageBackground>
      <Schedule1 />
      <Firework2 bgImg={p35Hero} fireworkCount={30}>
        <CircleFlowerFrame4 q:slot="left" img={p2a2SingleOnHalf} />
        <CircleFlowerFrame5 q:slot="right" img={p2a2SingleOnHalf} />
      </Firework2>
      <Firework2 fireworkCount={20}>
        <Gallery1
          imgTopLeft={p1GallerySmall}
          imgTopRight={p2GallerySmall}
          imgBottom={p3GalleryBig}
          q:slot="left"
        />
        <Countdown1 q:slot="right" weddingDate={new Date("2023-03-28T00:00")} />
      </Firework2>
      <section class="my-20">
        <QRCode
          mapUrl="https://goo.gl/maps/sZQAGgdUQcjYjnrj6"
          address1="ณ หอประชุมโรงเรียนเสนาบดี"
          address2="ถ.ทักษิณเเสนา ต.เสนา อ.เสนา จ.พระนครศรีอยุธยา"
          buttonColor=""
        />
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
        <Picture
          q:slot="right"
          src={p37SingleOnHalf}
          aspectRatio="aspect-[4/5]"
          width={711}
          height={889}
        />
      </Half>
      <Half>
        <Gallery2
          imgTop={p26GalleryBig}
          imgBottomLeft={p27GallerySmall}
          imgBottomRight={p28GallerySmall}
          q:slot="left"
        />
        <Gallery1
          imgTopLeft={p29GallerySmall}
          imgTopRight={p30GallerySmall}
          imgBottom={p31GalleryBig}
          q:slot="right"
        />
      </Half>
      <HalfWithImageBackground bgImg={p18Hero}>
        <Picture
          q:slot="left"
          src={p15SingleOnHalf}
          aspectRatio="aspect-[4/5]"
          width={624}
          height={780}
        />
        <CircleCenter q:slot="right" img={p18Hero} />
      </HalfWithImageBackground>
      <Half>
        <Picture
          q:slot="left"
          src={p33SingleOnHalf}
          width={624}
          height={780}
          aspectRatio="aspect-[4/5]"
        />
        <Picture
          q:slot="right"
          src={p34SingleOnHalf}
          width={624}
          height={780}
          aspectRatio="aspect-[4/5]"
        />
      </Half>
      <Masonry images={masonryImages} />
    </div>
  );
});
