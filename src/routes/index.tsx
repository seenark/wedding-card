import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
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

export default component$(() => {
  return (
    <div class="">
      <Half>
        <Text1
          brideName="Piyawan"
          groomName="Atiwat"
          date={new Date("2014.06.17")}
          q:slot="left"
        />
        <Image
          q:slot="right"
          src={images.img3.src}
          alt="p1"
          aspectRatio="aspect-[4/5]"
        />
      </Half>
      <HalfWithImageBackground>
        <Gallery1
          imgTopLeft={images.img1}
          imgTopRight={images.img2}
          imgBottom={images.img3}
          q:slot="left"
        />
        <Countdown1 q:slot="right" weddingDate={new Date("2023-02-27T00:00")} />
      </HalfWithImageBackground>
      <Half>
        <Gallery1
          imgTopLeft={images.img1}
          imgTopRight={images.img2}
          imgBottom={images.img3}
          q:slot="left"
        />
        <Countdown1 q:slot="right" weddingDate={new Date("2023-02-27T00:00")} />
      </Half>
      <Half>
        <Text2
          q:slot="left"
          headerText="Welcome to"
          subHeaderText="our wedding"
          brideName="Piyawan"
          groomName="Atiwat"
        />
        <Image
          q:slot="right"
          src={images.img3.src}
          alt="p1"
          aspectRatio="aspect-[4/5]"
        />
      </Half>
      <Half>
        <Gallery1
          imgTopLeft={images.img1}
          imgTopRight={images.img2}
          imgBottom={images.img3}
          q:slot="right"
        />
        <Gallery2
          imgTop={images.img1}
          imgBottomLeft={images.img2}
          imgBottomRight={images.img3}
          q:slot="left"
        />
      </Half>
      <Masonry images={[images.img1, images.img2, images.img3]} />
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
