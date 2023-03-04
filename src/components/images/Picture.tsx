import { component$ } from "@builder.io/qwik";
import type { TImagePresetData } from "~/stores/images";

type Props = {
  src: TImagePresetData[];
};

export default component$<Props>(({ src }) => {
  const lastSource = src[src.length - 1];
  return (
    <picture>
      {src.map((s, i) => (
        <source key={i} srcSet={s.srcset} media={s.media} sizes={s.sizes} />
      ))}
      <img
        src={lastSource.src}
        srcSet={lastSource.srcset}
        sizes={lastSource.sizes}
      />
    </picture>
  );
});
