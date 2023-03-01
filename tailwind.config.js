/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        iphoneXS: "375px",
      },
      fontFamily: {
        aniyah: ["Aniyah", "sans-serif"],
        precious: ["Precious", "sans-serif"],
        ttlovelies: ["TT_Lovelies", "sans-serif"],
        theseasons: ["TheSeasons", "sans-serif"],
        better_saturday: ["BetterSaturday", "sans-serif"],
      },
      keyframes: {
        "tilt-in-bottom-2": {
          "0%": {
            transform: "rotateY(-30deg) translateY(300px) skewY(30deg)",
            opacity: 0,
          },
          "100%": {
            transform: "rotateY(0deg) translateY(0) skewY(0deg)",
            opacity: 1,
          },
        },
        "puff-in-center": {
          "0%": {
            transform: "scale(2)",
            filter: "blur(4px)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: 1,
          },
        },
        "slide-in-top": {
          "0%": {
            transform: "translateY(-1000px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "slide-in-blurred-left": {
          "0%": {
            transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
            "transform-origin": "100% 50%",
            filter: "blur(40px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0) scaleY(1) scaleX(1)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
            opacity: 1,
          },
        },
        "jello-horizontal": {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "wobble-hor-bottom": {
          "0%,100%": {
            transform: "translateX(0%)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateX(-30px) rotate(-6deg)",
          },
          "30%": {
            transform: "translateX(15px) rotate(6deg)",
          },
          "45%": {
            transform: "translateX(-15px) rotate(-3.6deg)",
          },
          "60%": {
            transform: "translateX(9px) rotate(2.4deg)",
          },
          "75%": {
            transform: "translateX(-6px) rotate(-1.2deg)",
          },
        },
        "rotate-center": {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "bounce-top": {
          "0%": {
            transform: "translateY(-45px)",
            "animation-timing-function": "ease-in",
            opacity: 1,
          },
          "24%": {
            opacity: 1,
          },
          "40%": {
            transform: "translateY(-24px)",
            "animation-timing-function": "ease-in",
          },
          "65%": {
            transform: "translateY(-12px)",
            "animation-timing-function": "ease-in",
          },
          "82%": {
            transform: "translateY(-6px)",
            "animation-timing-function": "ease-in",
          },
          "93%": {
            transform: "translateY(-4px)",
            "animation-timing-function": "ease-in",
          },
          "25%, 55%, 75%, 87%": {
            transform: "translateY(0px)",
            "animation-timing-function": "ease-out",
          },
          "100%": {
            transform: "translateY(0px)",
            "animation-timing-function": "ease-out",
            opacity: 1,
          },
        },
      },
      animation: {
        "tilt-in-bottom":
          "tilt-in-bottom-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "puff-in-center":
          "puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
        "slide-in-top":
          "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-blurred-left-fast-1":
          "slide-in-blurred-left 0.6s 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "slide-in-blurred-left-fast-2":
          "slide-in-blurred-left 0.6s 1.0s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "slide-in-blurred-left-fast-3":
          "slide-in-blurred-left 0.6s 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "slide-in-blurred-left-fast-4":
          "slide-in-blurred-left 0.6s 2.0s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "slide-in-blurred-left-fast-5":
          "slide-in-blurred-left 0.6s 2.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "jello-horizontal-infinite":
          "jello-horizontal infinite 0.9s 3.0s both;",
        "wobble-hor-bottom": "wobble-hor-bottom 0.8s 3.0s both;",
        "rotate-center": "rotate-center 5.0s infinite ease-in-out both",
        "rotate-center-fast": "rotate-center 2.0s infinite ease-in-out both",
        "bounce-top": "bounce-top 0.9s both",
      },
      dropShadow: {
        "10px-solid": "12px 12px 0px 0px rgba(0,0,0,0.71)",
        "25px-full": "0px 25px 25px rgba(0,0,0)",
      },
      boxShadow: {
        "4px-solid": "4px 4px 0px 0px rgba(0,0,0,0.51)",
      },
    },
  },
  plugins: [require("daisyui")],
};
