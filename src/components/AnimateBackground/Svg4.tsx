import { component$ } from "@builder.io/qwik";

type Props = {
  bgColor: string;
};

export default component$<Props>(({ bgColor }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={bgColor}
        d="M49,-64.8C64.1,-56.4,77.4,-42.9,80.6,-27.5C83.9,-12,77.2,5.4,70.4,21.8C63.7,38.2,56.9,53.6,45.1,62.1C33.4,70.6,16.7,72.3,0.8,71.1C-15,70,-30,65.9,-41.1,57.2C-52.2,48.5,-59.4,35.1,-63.3,21C-67.2,7,-67.7,-7.6,-63.4,-20.5C-59,-33.3,-49.7,-44.5,-38.3,-54C-27,-63.6,-13.5,-71.5,1.7,-73.9C16.9,-76.2,33.9,-73.1,49,-64.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
});
