import { component$ } from "@builder.io/qwik";
// import type { DocumentHead } from "@builder.io/qwik-city";
// import CircleCenter from "~/components/images/CircleCenter";
// import CircleFlowerFrame from "~/components/images/CircleFlowerFrame";
// import Image from "~/components/images/Image";
// import Masonry from "~/components/images/Masonry";
// import Countdown1 from "~/components/sections/Countdown1";
// import Gallery1 from "~/components/sections/gallery1";
// import Gallery2 from "~/components/sections/gallery2";
// import Half from "~/components/sections/Half";
// import HalfWithImageBackground from "~/components/sections/HalfWithImageBackground";
// import Text1 from "~/components/texts/Text1";
// import Text2 from "~/components/texts/Text2";
// import { configs } from "~/config/settings";
// import { images } from "~/stores/images";
// import { Link } from "@builder.io/qwik-city";
// import colors from "tailwindcss/colors";
import Hero1 from "~/components/hero/Hero1";
// import Schedule1 from "~/components/blocks/Schedule1";
// import Firework2 from "~/components/background/firework/Firework2";
// import CircleFlowerFrame4 from "~/components/images/CircleFlowerFrame4";
// import CircleFlowerFrame5 from "~/components/images/CircleFlowerFrame5";
// import QRCode from "~/components/sections/QRCode";
// import WeddingTheme from "~/components/blocks/WeddingTheme/WeddingTheme";
// import BubbleBackground from "~/components/background/bubble/BubbleBackground";
// import CircleFlowerFrame2 from "~/components/images/CircleFlowerFrame2";
// import CircleFlowerFrame3 from "~/components/images/CircleFlowerFrame3";
// import BlessingCard from "~/components/blocks/BlessingCard";
// import p1 from "../../public/photos/photo1.jpg";
// import p2 from "../../public/photos/photo2.jpg";
// import p2a2 from "../../public/photos/photo2-2.jpg";
// import p3 from "../../public/photos/photo3.jpg";
// import p4 from "../../public/photos/photo4.jpg";
// import p9 from "../../public/photos/photo9.jpg";
// import p15 from "../../public/photos/photo15.jpg";
// import p18 from "../../public/photos/photo18.jpg";
// import p21 from "../../public/photos/photo21.jpg";
// import p26 from "../../public/photos/photo26.jpg";
// import p27 from "../../public/photos/photo27.jpg";
// import p28 from "../../public/photos/photo28.jpg";
// import p29 from "../../public/photos/photo29.jpg";
// import p30 from "../../public/photos/photo30.jpg";
// import p31 from "../../public/photos/photo31.jpg";
// import p33 from "../../public/photos/photo33.jpg";
// import p34 from "../../public/photos/photo33.jpg";
// import p35 from "../../public/photos/photo35.jpg";
// import p37 from "../../public/photos/photo37.jpg";

export default component$(() => {
  const brideName = "Piyawan";
  const groomName = "Atiwat";
  return (
    <div class="">
      <Hero1
        heroImg={{
          src: "../../public/photos/photo4.jpg",
          alt: "photo4",
          aspectRatio: "aspect-[3/2]",
        }}
        brideName={brideName}
        groomName={groomName}
      />
      {/* <BubbleBackground bgImgSrc={p21}> */}
      {/*   <CircleFlowerFrame2 */}
      {/*     q:slot="left" */}
      {/*     img={{ */}
      {/*       src: p2, */}
      {/*       alt: "photo2", */}
      {/*     }} */}
      {/*   /> */}
      {/*   <CircleFlowerFrame3 */}
      {/*     q:slot="right" */}
      {/*     img={{ */}
      {/*       src: p4, */}
      {/*       alt: "photo4", */}
      {/*     }} */}
      {/*   /> */}
      {/* </BubbleBackground> */}
      {/* <Half> */}
      {/*   <Text1 */}
      {/*     brideName="Piyawan" */}
      {/*     groomName="Atiwat" */}
      {/*     date={new Date("2014.06.17")} */}
      {/*     textColor={colors.yellow[900]} */}
      {/*     q:slot="left" */}
      {/*   /> */}
      {/*   <Image */}
      {/*     q:slot="right" */}
      {/*     src={p3} */}
      {/*     alt="p1" */}
      {/*     aspectRatio="aspect-[4/5]" */}
      {/*     width={711} */}
      {/*     height={889} */}
      {/*   /> */}
      {/* </Half> */}
      {/* <HalfWithImageBackground bgImg={p9}> */}
      {/*   <div class="p-8 w-full h-[500px]" q:slot="left"> */}
      {/*     <WeddingTheme */}
      {/*       colors={[ */}
      {/*         colors.blue[500], */}
      {/*         colors.green[900], */}
      {/*         colors.white, */}
      {/*         colors.gray[700], */}
      {/*       ]} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <BlessingCard q:slot="right" /> */}
      {/* </HalfWithImageBackground> */}
      {/* <HalfWithImageBackground bgImg={p2a2}> */}
      {/*   <CircleFlowerFrame */}
      {/*     q:slot="right" */}
      {/*     img={{ */}
      {/*       src: p2a2, */}
      {/*       alt: "photo2-2", */}
      {/*       aspectRatio: "aspect-[1/1]", */}
      {/*     }} */}
      {/*   /> */}
      {/* </HalfWithImageBackground> */}
      {/* <Schedule1 /> */}
      {/* <section class="w-full"> */}
      {/*   <Firework2 bgImg={p35} fireworkCount={30}> */}
      {/*     <CircleFlowerFrame4 */}
      {/*       q:slot="left" */}
      {/*       img={{ */}
      {/*         src: p2a2, */}
      {/*         alt: "photo2-2", */}
      {/*         aspectRatio: "aspect-[1/1]", */}
      {/*       }} */}
      {/*     /> */}
      {/*     <CircleFlowerFrame5 */}
      {/*       q:slot="right" */}
      {/*       img={{ */}
      {/*         src: p2a2, */}
      {/*         alt: "photo2-2", */}
      {/*         aspectRatio: "aspect-[1/1]", */}
      {/*       }} */}
      {/*     /> */}
      {/*   </Firework2> */}
      {/* </section> */}
      {/* <Firework2 fireworkCount={20}> */}
      {/*   <Gallery1 */}
      {/*     imgTopLeft={{ */}
      {/*       src: p1, */}
      {/*       alt: "photo1", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgTopRight={{ */}
      {/*       src: p2, */}
      {/*       alt: "photo2", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottom={{ */}
      {/*       src: p3, */}
      {/*       alt: "photo3", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     q:slot="left" */}
      {/*   /> */}
      {/*   <Countdown1 q:slot="right" weddingDate={new Date("2023-03-28T00:00")} /> */}
      {/* </Firework2> */}
      {/* <section class="my-20"> */}
      {/*   <QRCode mapUrl="https://goo.gl/maps/sZQAGgdUQcjYjnrj6" /> */}
      {/* </section> */}
      {/* <Half> */}
      {/*   <Text2 */}
      {/*     q:slot="left" */}
      {/*     headerText="Welcome to" */}
      {/*     subHeaderText="our wedding" */}
      {/*     brideName="Piyawan" */}
      {/*     groomName="Atiwat" */}
      {/*     textColor={colors.yellow[900]} */}
      {/*   /> */}
      {/*   <Image */}
      {/*     q:slot="right" */}
      {/*     src={p37} */}
      {/*     alt="p1" */}
      {/*     aspectRatio="aspect-[4/5]" */}
      {/*     width={711} */}
      {/*     height={889} */}
      {/*   /> */}
      {/* </Half> */}
      {/* <Half> */}
      {/*   <Gallery2 */}
      {/*     imgTop={{ */}
      {/*       src: p26, */}
      {/*       alt: "photo26", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottomLeft={{ */}
      {/*       src: p27, */}
      {/*       alt: "photo27", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottomRight={{ */}
      {/*       src: p28, */}
      {/*       alt: "photo28", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     q:slot="left" */}
      {/*   /> */}
      {/*   <Gallery1 */}
      {/*     imgTopLeft={{ */}
      {/*       src: p29, */}
      {/*       alt: "photo29", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgTopRight={{ */}
      {/*       src: p30, */}
      {/*       alt: "photo30", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottom={{ */}
      {/*       src: p31, */}
      {/*       alt: "photo31", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     q:slot="right" */}
      {/*   /> */}
      {/* </Half> */}
      {/* <HalfWithImageBackground bgImg={p18}> */}
      {/*   <div q:slot="left"> */}
      {/*     <Image */}
      {/*       src={p15} */}
      {/*       alt="photo15" */}
      {/*       width={624} */}
      {/*       height={780} */}
      {/*       aspectRatio={"aspect-[4/5]"} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <CircleCenter */}
      {/*     q:slot="right" */}
      {/*     img={{ */}
      {/*       src: p18, */}
      {/*       alt: "photo18", */}
      {/*     }} */}
      {/*   /> */}
      {/* </HalfWithImageBackground> */}
      {/* <Half> */}
      {/*   <div q:slot="left"> */}
      {/*     <Image */}
      {/*       src={p33} */}
      {/*       alt="photo33" */}
      {/*       width={624} */}
      {/*       height={780} */}
      {/*       aspectRatio={"aspect-[4/5]"} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <div q:slot="right"> */}
      {/*     <Image */}
      {/*       src={p34} */}
      {/*       alt="photo34" */}
      {/*       width={624} */}
      {/*       height={780} */}
      {/*       aspectRatio={"aspect-[4/5]"} */}
      {/*     /> */}
      {/*   </div> */}
      {/* </Half> */}
      {/* <Masonry */}
      {/*   images={Array(20) */}
      {/*     .fill(0) */}
      {/*     .map((_, i) => `/photos/photo${i + 1}.jpg`)} */}
      {/* /> */}
    </div>
  );
});
