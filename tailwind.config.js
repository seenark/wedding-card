/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
      },
      animation: {
        "tilt-in-bottom":
          "tilt-in-bottom-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "puff-in-center":
          "puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
        "slide-in-top":
          "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      dropShadow: {
        "10px-solid": "12px 12px 0px 0px rgba(0,0,0,0.71)",
      },
      boxShadow: {
        "4px-solid": "4px 4px 0px 0px rgba(0,0,0,0.51)",
      },
    },
  },
  plugins: [require("daisyui")],
};
