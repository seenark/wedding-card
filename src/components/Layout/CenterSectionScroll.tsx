import {
  $,
  component$,
  type Signal,
  type QRL,
  Slot,
  useSignal,
} from "@builder.io/qwik";
import {
  type KeyStickyContainerHeightClass,
  stickyContainerHeightClass,
} from "~/utils/tailwind-dynamic-class/height";

type ScrollViewProps = {
  ref: Signal<HTMLDivElement | undefined>;
  onScroll: QRL<() => void>;
};
const ScrollView = component$<ScrollViewProps>(({ ref, onScroll }) => {
  return (
    <div ref={ref} onScroll$={onScroll} class="overflow-y-scroll w-full">
      <Slot />
    </div>
  );
});

type StickyContainerProps = {
  ref: Signal<HTMLDivElement | undefined>;
  stickyContainerHeight: KeyStickyContainerHeightClass;
};
const StickyContainer = component$<StickyContainerProps>(
  ({ ref, stickyContainerHeight }) => {
    return (
      <div
        ref={ref}
        class={[
          "relative mx-auto justify-center max-w-[1280px]",
          stickyContainerHeightClass[stickyContainerHeight],
        ].join(" ")}
      >
        <Slot />
      </div>
    );
  }
);

const StickyView = component$(() => {
  return (
    <div class="h-430 sm:h-[860px] md:h-430 sticky top-0 left-0">
      <Slot />
    </div>
  );
});

type Props = {
  scrollPercent: Signal<number>;
  stickyContainerHeight: KeyStickyContainerHeightClass;
  classes?: string;
};
export default component$<Props>(
  ({ scrollPercent, stickyContainerHeight, classes }) => {
    const scrollViewRef = useSignal<HTMLDivElement>();
    const stickyContainerRef = useSignal<HTMLDivElement>();
    const onScroll = $(() => {
      if (!scrollViewRef.value || !stickyContainerRef.value) {
        return;
      }
      const scrollViewRect = scrollViewRef.value.getBoundingClientRect();
      const stickyContainerRect =
        stickyContainerRef.value.getBoundingClientRect();
      const offTop = scrollViewRect.y - stickyContainerRect.y;
      const percent =
        (offTop * 100) / (stickyContainerHeight - scrollViewRect.height);
      scrollPercent.value = percent;
    });
    return (
      <section
        class={[
          "flex flex-col h-860 sm:h-1520 md:h-430 lg:h-615 xl:h-780 md:mb-4 lg:mb-0 w-full",
          classes || "",
        ].join(" ")}
      >
        <ScrollView ref={scrollViewRef} onScroll={onScroll}>
          <StickyContainer
            ref={stickyContainerRef}
            stickyContainerHeight={stickyContainerHeight}
          >
            <StickyView>
              <Slot />
            </StickyView>
          </StickyContainer>
        </ScrollView>
      </section>
    );
  }
);
