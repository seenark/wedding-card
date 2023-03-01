import { randomMinMax } from "../firework/firework.helper";

export function randomHSLColor() {
  return `hsl(${randomMinMax(0, 359)}, 100%, 69%)`;
}
const bubbleBaseClass = `
@keyframes float-up-down {
  0%, 100% {
    transform: translate(0,0px);
  }
  33% {
    transform: translate(0,-50px);
  }
  66% {
    transform: translate(0, 50px);
  }
}

.bubble::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 45px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  z-index: 10;
  filter: blur(2px);
  
}

.bubble::after {
  content: '';
  position: absolute;
  top: 80px;
  left: 80px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  z-index: 10;
  filter: blur(2px);
}

.bubble {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 25px rgba(240,240,240,0.5);
  animation: float-up-down 8s ease-in-out infinite;
}

`;

function genBubbleClass(n: number) {
  return `
  .bubble${n} {
    position: absolute;
    zoom: ${randomMinMax(30, 100) / 100};
    left: ${randomMinMax(-20, 120)}%;
    top: ${randomMinMax(-20, 120)}%;
    animation-delay: ${randomMinMax(-8, 8)}s;
  }
`;
}

function genBubbleColorClass(n: number) {
  return `
  .bubble-color${n}-1 {
    position: absolute;
    border-radius: 50%;
    inset: 10px;
    border-left: 15px solid ${randomHSLColor()};
    filter: blur(8px);
  }

  .bubble-color${n}-2 {
    position: absolute;
    border-radius: 50%;
    inset: 10px;
    border-right: 15px solid ${randomHSLColor()};
    filter: blur(8px);
  }
  .bubble-color${n}-3 {
    position: absolute;
    border-radius: 50%;
    inset: 20px;
    border-top: 15px solid ${randomHSLColor()};
    filter: blur(8px);
  }
  .bubble-color${n}-4 {
    position: absolute;
    border-radius: 50%;
    inset: 30px;
    border-left: 15px solid ${randomHSLColor()};
    filter: blur(12px);
  }
  .bubble-color${n}-5 {
    position: absolute;
    border-radius: 50%;
    inset: 10px;
    border-bottom: 15px solid #fff;
    filter: blur(8px);
    transform: rotate(330deg);
  }
`;
}

export function generateBubbleClasses(count: number) {
  const clss = Array(count)
    .fill(0)
    .map((_, i) => {
      return `${genBubbleClass(i)}
              ${genBubbleColorClass(i)}`;
    })
    .join("");

  return `${bubbleBaseClass}
          ${clss}`;
}
