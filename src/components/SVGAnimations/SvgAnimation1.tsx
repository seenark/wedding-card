import {
  component$,
  type Signal,
  Slot,
  useBrowserVisibleTask$,
  useStylesScoped$,
} from "@builder.io/qwik";
import css from "./SvgAnimation1.css?inline";

type Props = {
  colors?: string[];
  containerClass?: string;
  svgRef: Signal<SVGSVGElement | undefined>;
};
export default component$<Props>((props) => {
  useStylesScoped$(css);
  const defaultColors = [
    "#E0C3FC",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
    "#FFFFFF",
  ];

  useBrowserVisibleTask$(() => {
    const colors =
      props.colors && props.colors.length > 0 ? props.colors : defaultColors;
    if (!props.svgRef.value) return;
    const paths = props.svgRef.value.getElementsByTagName("path");
    console.log("paths", paths);
    Array.from(paths).forEach((path, i) => {
      console.log(`path ${i + 1} is ${path.getTotalLength()}`);
      path.style.strokeDasharray = `${path.getTotalLength()}`;
      path.style.strokeDasharray = "300%";
      path.style.strokeDashoffset = "300%";
      path.style.animation = "anim 5s linear forwards 0s";
      colors.forEach((color, j) => {
        if (!props.svgRef.value) return;
        const clone = path.cloneNode() as SVGPathElement;
        clone.setAttribute("stroke", color);

        clone.style.strokeDasharray = "300%";
        clone.style.strokeDashoffset = "300%";
        clone.style.animation = `anim 5s linear forwards ${
          j * 0.25 + Math.random()
        }s`;
        props.svgRef.value.appendChild(clone);
      });
    });
  });

  return (
    <div class={props.containerClass || ""}>
      <Slot />
    </div>
  );
});
