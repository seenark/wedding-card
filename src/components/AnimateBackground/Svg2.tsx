import { component$ } from "@builder.io/qwik";

type Props = {
  bgColor: string;
};

export default component$<Props>(({ bgColor }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={bgColor}
        d="M69.7,-23.8C78.3,3.8,64.9,37.4,43.2,51.2C21.5,65,-8.5,59,-32.9,42C-57.3,25.1,-76.1,-2.9,-69.6,-27.5C-63.2,-52.1,-31.6,-73.4,-0.5,-73.2C30.5,-73,61.1,-51.4,69.7,-23.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
});
