import { $, component$, Slot, useSignal } from "@builder.io/qwik";
import CardFlip1 from "../CardFlip/CardFlip1";

type Props = {
  sectionHeightInPx: number;
  stickyContainerHeightInPx: number;
};
export default component$<Props>(
  ({ sectionHeightInPx, stickyContainerHeightInPx }) => {
    const sectionRef = useSignal<HTMLDivElement>();
    const contentRef = useSignal<HTMLDivElement>();
    const scrollPercent = useSignal(0);
    const onScroll = $(() => {
      if (!sectionRef.value || !contentRef.value) {
        return;
      }
      const containerRect = sectionRef.value.getBoundingClientRect();
      const contentRect = contentRef.value.getBoundingClientRect();
      const offTop = containerRect.y - contentRect.y;
      const percent =
        (offTop * 100) / (sectionHeightInPx - containerRect.height);
      scrollPercent.value = percent;
    });
    return (
      // outer container to fixed h = 100vh
      <section
        style={{ height: `${stickyContainerHeightInPx}px` }}
        class="flex flex-col rounded-xl "
      >
        {/* scroll view */}
        <div
          ref={sectionRef}
          onScroll$={onScroll}
          class="w-full overflow-y-scroll "
        >
          {/* sticky container */}
          <div
            ref={contentRef}
            style={{ height: `${sectionHeightInPx}px` }}
            class="relative mx-auto justify-center max-w-[1280px]"
          >
            {/* sticky view */}
            <div
              style={{ height: `${stickyContainerHeightInPx}px` }}
              class="sticky top-0 left-0"
            >
              {/* sticky content */}
              <div class="h-full xl:py-12 lg:py-8">
                <CardFlip1 stateOfOpenCard={scrollPercent.value}>
                  <div q:slot="left-front" class="h-full">
                    <Slot name="left-front" />
                  </div>
                  <div q:slot="left-back" class="h-full overflow-hidden">
                    <Slot name="left-back" />
                  </div>
                  <div q:slot="back" class="h-full overflow-hidden">
                    <Slot name="back" />
                  </div>
                </CardFlip1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
