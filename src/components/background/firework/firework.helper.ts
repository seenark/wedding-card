function ringEffect(n: number, radius: number, bokeh: number, color: string) {
  const value = "0px 0px #ffffff";
  const boxShadow = Array(n)
    .fill(0)
    .map((_, i) => {
      const radian = ((360 / n) * i * Math.PI) / 180;
      const cosValue = Math.cos(radian);
      const sinValue = Math.sin(radian);
      return shadowValue(radius, cosValue, sinValue, bokeh, color);
    });

  return [value, boxShadow].join(" , ");
}

function shadowValue(
  radius: number,
  cosValue: number,
  sinValue: number,
  bokeh: number,
  color: string
) {
  const value1 = concatShadowValue(radius, cosValue, sinValue, bokeh, color);
  const radius2 = radius - 1;
  const value2 = concatShadowValue(radius2, cosValue, sinValue, bokeh, color);
  const radius3 = radius / 1.8;
  const value3 = concatShadowValue(radius3, cosValue, sinValue, bokeh, color);
  const radius4 = radius3 - 1;
  const value4 = concatShadowValue(radius4, cosValue, sinValue, bokeh, color);
  const radius5 = radius3 / 2;
  const value5 = concatShadowValue(radius5, cosValue, sinValue, bokeh, color);
  const radius6 = radius5 / 10;
  const value6 = concatShadowValue(radius6, cosValue, sinValue, bokeh, color);

  return [value1, value2, value3, value4, value5, value6].join(" ,");
}

function concatShadowValue(
  raduis: number,
  cosValue: number,
  sinValue: number,
  bokeh: number,
  color: string
) {
  return `${raduis * cosValue}px ${raduis * sinValue}px ${bokeh}px ${color}`;
}

export function randomMinMax(min: number = 1, max: number = 100) {
  return Math.floor(Math.random() * max) + min;
}

function createFireworkAnimationAndKeyframe(index: number) {
  const patternName = `pattern${index}`;
  const scale = randomMinMax(1, 7);
  return `
        .${patternName} {
            animation: ${patternName} ${randomMinMax(6, 10)}s ease infinite
        }

        @keyframes ${patternName} {
            0% {
                opacity: 0;
              }
              40% {
                opacity: 0;
                transform: scale(0.1);
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: scale(${scale});
                opacity: 0;
              }
        }
        `;
}

function createFireCSSClass(index: number) {
  const top = `${randomMinMax()}%`;
  const left = `${randomMinMax()}%`;

  const color = `hsl(${randomMinMax(0, 360)}, 70%, 50%)`;
  return `
    .fire${index} {
        top: ${top};
        left: ${left};
    }
    .fire${index} .ring_1 {
        box-shadow: ${ringEffect(30, 30, 0, color)};
    }
    .fire${index} .ring_2 {
        box-shadow: ${ringEffect(30, 30, 2, color)};
    }
    `;
}

export function createFireWorkCssClass(n: number) {
  const css = Array(n)
    .fill(0)
    .map((_, i) => {
      return `
        ${createFireCSSClass(i)}
        ${createFireworkAnimationAndKeyframe(i)}

        `;
    })
    .join(" ");
  return css;
}
