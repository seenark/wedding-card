import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fireworkStyle from "./firework.css?inline";

type Props = {};

export default component$<Props>(() => {
  useStylesScoped$(fireworkStyle);

  return (
    <section class="overflow-hidden relative w-full h-full">
      {Array(20)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              class={["fireworks", `pattern${i} fire${i}`].join(" ")}
            >
              <div class="ring_1"></div>
              <div class="ring_2"></div>
            </div>
          );
        })}
    </section>
  );
});
