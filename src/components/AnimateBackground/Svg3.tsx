import { component$ } from "@builder.io/qwik";

type Props = {
  bgColor: string;
};

export default component$<Props>(({ bgColor }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={bgColor}
        d="M48.8,-68.6C60.9,-58.3,66.8,-41,72.9,-23.4C78.9,-5.9,85.2,11.9,82.7,29.2C80.3,46.4,69.1,63.1,53.9,70.8C38.7,78.4,19.3,77,0.1,76.9C-19.2,76.8,-38.4,78,-53.3,70.3C-68.1,62.5,-78.7,45.8,-83,28C-87.2,10.3,-85.2,-8.4,-77.9,-23.6C-70.6,-38.9,-58.1,-50.8,-44.2,-60.5C-30.3,-70.2,-15.2,-77.8,1.6,-80C18.3,-82.2,36.6,-78.9,48.8,-68.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
});
