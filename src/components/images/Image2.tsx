import {
  component$,
  type QwikIntrinsicElements,
  useSignal,
  // QwikJSX,
} from "@builder.io/qwik";
import { type TImagePresetData } from "~/stores/images";

type Props = {
  imagePreset: TImagePresetData[];
} & QwikIntrinsicElements["img"];

export default component$<Props>(({ imagePreset, ...props }) => {
  const lastSource = imagePreset.last();
  const imageRef = useSignal<Element>();
  return (
    <img
      ref={imageRef}
      src={lastSource.src}
      srcSet={lastSource.srcset}
      sizes={lastSource.sizes}
      loading={lastSource.loading}
      alt={lastSource.src}
      {...props}
    ></img>
  );
});
