import { component$ } from "@builder.io/qwik";

type Props = {
  images: string[];
};

export default component$<Props>(({ images }) => {
  return (
    <div class="col-end-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((img, i) => {
        return (
          // <Image
          //   key={i}
          //   src={img}
          //   alt={img}
          //   aspectRatio={img.aspectRatio}
          //   marginBottomClass="mb-4"
          // />
          <img key={i} src={img} class="mb-4" />
        );
      })}
    </div>
  );
});
