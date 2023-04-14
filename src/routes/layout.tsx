import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import Picture from "~/components/images/Picture";

import lineIcon from "~/myAssets/icons/LINE_Brand_icon.png?preset=icon";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <div class="relative bg-white p-4  mx-auto overflow-hidden">
            {/* <div class="bg-[url('/paper-bg.jpeg')] fixed bg-cover bg-no-repeat w-[98vw] h-[100vh] "></div> */}
            {/* <div class="bg-[url('/paper-bg.jpeg')] backdrop-blur-sm backdrop-brightness-95 w-[98vw]"> */}
            <div>
              <Slot />
            </div>
          </div>
        </section>
      </main>
      <footer class="flex flex-wrap flex-row justify-center gap-4 max-w-[1280px] mx-auto p-4 bg-slate-100">
        <a
          href="https://www.facebook.com/profile.php?id=100063558213084"
          target="_blank"
          class="flex flex-flow gap-2"
        >
          Made with
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              class="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </span>
          by
          <span>
            <img src="/icons/facebook.svg" width="24" height="24" />
          </span>
          อุ้ม อุ้ม studio
        </a>
        <a
          href="https://line.me/ti/p/~aum_kuiburi"
          target="_blank"
          class="flex flex-row gap-2"
        >
          <Picture
            src={lineIcon}
            aspectRatio="aspect-[1/1]"
            width={24}
            height={24}
          />
          Line id: aum_kuiburi
        </a>
        <a href="tel:0822528586" class="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffbb00"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd"
            />
          </svg>
          <div>0822528586</div>
        </a>
      </footer>
    </>
  );
});
