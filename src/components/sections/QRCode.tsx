import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import QRCode from "qrcode";
import colors from "tailwindcss/colors";
import classnames from "classnames";

type Props = {
  mapUrl?: string;
  color?: string;
  address1: string;
  address1Color?: string;
  address2: string;
  address2Color?: string;
  buttonColor: string;
};

export default component$<Props>(
  ({
    mapUrl,
    color,
    buttonColor,
    address1,
    address2,
    address1Color,
    address2Color,
  }) => {
    const displayColor = color || colors.yellow[900];
    const displayAddress1Color = address1Color || colors.yellow[900];
    const displayAddress2Color = address2Color || colors.yellow[900];

    useStylesScoped$(`
.qr-outer {
  background:
    linear-gradient(to right, black 4px, transparent 4px) 0 0,
    linear-gradient(to right, black 4px, transparent 4px) 0 100%,
    linear-gradient(to left, black 4px, transparent 4px) 100% 0,
    linear-gradient(to left, black 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, black 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,
    linear-gradient(to top, black 4px, transparent 4px) 0 100%,
    linear-gradient(to top, black 4px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 50px 50px;
}

`);

    const qrcodeDataUrl = useSignal<string>();
    useBrowserVisibleTask$(
      () => {
        if (!mapUrl) {
          return;
        }
        QRCode.toDataURL(
          mapUrl,
          { errorCorrectionLevel: "high" },
          (err, url) => {
            if (err) {
              console.log("generate qrcode error:", err);
              return;
            }
            qrcodeDataUrl.value = url;
          }
        );
      },
      { eagerness: "load" }
    );

    return (
      <div class="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8 lg:gap-2">
        <div class="lg:col-span-2 flex flex-col lg:flex-row items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="url(#myGradient)"
            class="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[150px] lg:h-[150px] animate-bounce"
          >
            <linearGradient
              id="myGradient"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="white" />
              <stop offset="10%" stop-color={colors.blue["600"]} />
              <stop offset="60%" stop-color={displayColor} />
              <stop offset="100%" stop-color={displayColor} />
            </linearGradient>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <div class="flex flex-col text-center">
            <h1
              // style={{ color: displayAddress1Color }}
              class={classnames(
                "bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text text-[28px] sm:text-[32px] lg:text-[54px]"
              )}
            >
              {address1}
            </h1>
            <p
              style={{ color: displayAddress2Color }}
              class="text-amber-900 text-[16px] sm:text-[18px] lg:text-[24px]"
            >
              {address2}
            </p>
            <a
              href={mapUrl}
              target="_blank"
              style={{
                backgroundColor: buttonColor,
                borderColor: buttonColor,
              }}
              class="btn btn-sm sm:btn-md lg:btn-md  mt-4 rounded-3xl bg-amber-900 border-amber-900 hover:bg-amber-800"
            >
              Pin on Google Map
            </a>
          </div>
        </div>
        <div class="w-full h-full flex justify-center">
          <div class="qr-outer w-[150px] h-auto sm:w-[200px] lg:w-[300px] p-1">
            <img src={qrcodeDataUrl.value} width={295} height={295} />
          </div>
        </div>
      </div>
    );
  }
);
