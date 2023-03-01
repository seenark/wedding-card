import { component$ } from "@builder.io/qwik";

type Props = {
  bgColor: string;
};

export default component$<Props>(({ bgColor }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={bgColor}
        d="M35.2,-49.1C45.3,-41.2,52.8,-30.4,58.7,-17.8C64.5,-5.2,68.7,9.3,67,24C65.2,38.7,57.6,53.7,45.4,60.8C33.3,67.9,16.6,67.1,-0.9,68.4C-18.5,69.6,-36.9,72.9,-51.6,66.6C-66.4,60.4,-77.4,44.6,-83.7,26.8C-89.9,9.1,-91.3,-10.5,-84.7,-26.4C-78,-42.3,-63.2,-54.5,-47.7,-60.6C-32.3,-66.8,-16.1,-66.9,-1.8,-64.4C12.6,-62,25.2,-57,35.2,-49.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
});
