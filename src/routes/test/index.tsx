import { component$, useSignal } from "@builder.io/qwik";
import Atiwat from "~/components/Name/Atiwat";
import Atiwat2 from "~/components/Name/Atiwat2";
import Atiwat3 from "~/components/Name/Atiwat3";
import SvgAnimation1 from "~/components/SVGAnimations/SvgAnimation1";

export default component$(() => {
  const svg1Ref = useSignal<SVGSVGElement>();
  const svg2Ref = useSignal<SVGSVGElement>();
  const svg3Ref = useSignal<SVGSVGElement>();
  return (
    <>
      <SvgAnimation1 svgRef={svg1Ref} containerClass="bg-gray-200">
        <Atiwat svgRef={svg1Ref} />
      </SvgAnimation1>
      <SvgAnimation1
        svgRef={svg2Ref}
        colors={["red", "green", "blue", "white"]}
        containerClass="bg-gray-200"
      >
        <Atiwat2 svgRef={svg2Ref} />
      </SvgAnimation1>
      <SvgAnimation1 svgRef={svg3Ref} containerClass="bg-gray-200">
        <Atiwat3 svgRef={svg3Ref} />
      </SvgAnimation1>
    </>
  );
});
