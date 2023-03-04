import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";
import imagePresets, { widthPreset } from "vite-plugin-image-presets"
import { resolve } from "path";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "~/imgs": resolve(__dirname, "./my-images")
      }
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), vanillaExtractPlugin(), 
      imagePresets({
        hero: widthPreset({
          class: "img block-hero",
          loading: "lazy",
          widths: [350, 700, 1050, 1400, 1750, 2100],
          sizes: '100vw',
          media: '100vw',
          formats: {
            webp: {
               quality: 100
            },
          },
        })
      })

    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    assetsInclude: ["**/*.JPG"],
  };
});
