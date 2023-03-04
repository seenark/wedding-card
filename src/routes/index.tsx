import { component$ } from "@builder.io/qwik";
import Hero1 from "~/components/hero/Hero1";
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
// import colors from "tailwindcss/colors";
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
// import { TImagePresetData } from "~/stores/images";

import p4 from "~/imgs/photo4.jpg?preset=hero";

export default component$(() => {
  const brideName = "Piyawan";
  const groomName = "Atiwat";
  return (
    <div class="">
      <Hero1 heroImg={p4} brideName={brideName} groomName={groomName} />
      {/* <BubbleBackground bgImgSrc="/my-images/photo21.jpg"> */}
      {/*   <CircleFlowerFrame2 */}
      {/*     q:slot="left" */}
      {/*     img={{ */}
      {/*       src: "/my-images/photo2.jpg", */}
      {/*       alt: "photo2", */}
      {/*     }} */}
      {/*   /> */}
      {/*   <CircleFlowerFrame3 */}
      {/*     q:slot="right" */}
      {/*     img={{ */}
      {/*       src: "/my-images/photo4.jpg", */}
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
      {/*     src="/my-images/photo3.jpg" */}
      {/*     alt="p1" */}
      {/*     aspectRatio="aspect-[4/5]" */}
      {/*     width={711} */}
      {/*     height={889} */}
      {/*   /> */}
      {/* </Half> */}
      {/* <HalfWithImageBackground bgImg="/my-images/photo9.jpg"> */}
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
      {/* <HalfWithImageBackground bgImg="/my-images/photo2-2.jpg"> */}
      {/*   <CircleFlowerFrame */}
      {/*     q:slot="right" */}
      {/*     img={{ */}
      {/*       src: "/my-images/photo2-2.jpg", */}
      {/*       alt: "photo2-2", */}
      {/*       aspectRatio: "aspect-[1/1]", */}
      {/*     }} */}
      {/*   /> */}
      {/* </HalfWithImageBackground> */}
      {/* <Schedule1 /> */}
      {/* <section class="w-full"> */}
      {/*   <Firework2 bgImg="/my-images/photo35.jpg" fireworkCount={30}> */}
      {/*     <CircleFlowerFrame4 */}
      {/*       q:slot="left" */}
      {/*       img={{ */}
      {/*         src: "/my-images/photo2-2.jpg", */}
      {/*         alt: "photo2-2", */}
      {/*         aspectRatio: "aspect-[1/1]", */}
      {/*       }} */}
      {/*     /> */}
      {/*     <CircleFlowerFrame5 */}
      {/*       q:slot="right" */}
      {/*       img={{ */}
      {/*         src: "/my-images/photo2-2.jpg", */}
      {/*         alt: "photo2-2", */}
      {/*         aspectRatio: "aspect-[1/1]", */}
      {/*       }} */}
      {/*     /> */}
      {/*   </Firework2> */}
      {/* </section> */}
      {/* <Firework2 fireworkCount={20}> */}
      {/*   <Gallery1 */}
      {/*     imgTopLeft={{ */}
      {/*       src: "/my-images/photo1.jpg", */}
      {/*       alt: "photo1", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgTopRight={{ */}
      {/*       src: "/my-images/photo2.jpg", */}
      {/*       alt: "photo2", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottom={{ */}
      {/*       src: "/my-images/photo3.jpg", */}
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
      {/*     src="/my-images/photo37.jpg" */}
      {/*     alt="p1" */}
      {/*     aspectRatio="aspect-[4/5]" */}
      {/*     width={711} */}
      {/*     height={889} */}
      {/*   /> */}
      {/* </Half> */}
      {/* <Half> */}
      {/*   <Gallery2 */}
      {/*     imgTop={{ */}
      {/*       src: "/my-images/photo26.jpg", */}
      {/*       alt: "photo26", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottomLeft={{ */}
      {/*       src: "/my-images/photo27.jpg", */}
      {/*       alt: "photo27", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottomRight={{ */}
      {/*       src: "/my-images/photo28.jpg", */}
      {/*       alt: "photo28", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     q:slot="left" */}
      {/*   /> */}
      {/*   <Gallery1 */}
      {/*     imgTopLeft={{ */}
      {/*       src: "/my-images/photo29.jpg", */}
      {/*       alt: "photo29", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgTopRight={{ */}
      {/*       src: "/my-images/photo30.jpg", */}
      {/*       alt: "photo30", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     imgBottom={{ */}
      {/*       src: "/my-images/photo31.jpg", */}
      {/*       alt: "photo31", */}
      {/*       aspectRatio: "aspect-[3/2]", */}
      {/*     }} */}
      {/*     q:slot="right" */}
      {/*   /> */}
      {/* </Half> */}
      {/* <HalfWithImageBackground bgImg="/my-images/photo18.jpg"> */}
      {/*   <div q:slot="left"> */}
      {/*     <Image */}
      {/*       src="/my-images/photo15.jpg" */}
      {/*       alt="photo15" */}
      {/*       width={624} */}
      {/*       height={780} */}
      {/*       aspectRatio={"aspect-[4/5]"} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <CircleCenter */}
      {/*     q:slot="right" */}
      {/*     img={{ */}
      {/*       src: "/my-images/photo18.jpg", */}
      {/*       alt: "photo18", */}
      {/*     }} */}
      {/*   /> */}
      {/* </HalfWithImageBackground> */}
      {/* <Half> */}
      {/*   <div q:slot="left"> */}
      {/*     <Image */}
      {/*       src="/my-images/photo33.jpg" */}
      {/*       alt="photo33" */}
      {/*       width={624} */}
      {/*       height={780} */}
      {/*       aspectRatio={"aspect-[4/5]"} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <div q:slot="right"> */}
      {/*     <Image */}
      {/*       src="/my-images/photo34.jpg" */}
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
      {/*     .map((_, i) => `/my-images/photo${i + 1}.jpg`)} */}
      {/* /> */}
    </div>
  );
});
