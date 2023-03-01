import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

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
          <div class="relative bg-white p-4 max-w-[1280px] mx-auto overflow-hidden">
            {/* <div class="bg-[url('/paper-bg.jpeg')] fixed bg-cover bg-no-repeat w-[98vw] h-[100vh] "></div> */}
            {/* <div class="bg-[url('/paper-bg.jpeg')] backdrop-blur-sm backdrop-brightness-95 w-[98vw]"> */}
            <div>
              <Slot />
            </div>
          </div>
        </section>
      </main>
      <footer class="flex flex-wrap flex-row gap-4">
        <div>Made with ♡ by อุ้ม อุ้ม studio</div>
        <div>Line id: aum_kuiburi</div>
        <div>Tel: 0822528586</div>
      </footer>
    </>
  );
});
