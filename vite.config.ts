import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";
import imagePresets, { widthPreset } from "vite-plugin-image-presets"
import { resolve } from "path";
import { genWidthPreset } from "./src/stores/images"

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "~/imgs": resolve(__dirname, "./my-images"),
        "~/myAssets": resolve(__dirname, "./my-assets")
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
      }),
      "circle-flower": widthPreset({
        class: "img circle-flower",
        loading: "lazy",
        widths: [200, 400, 600, 800, 1000, 1200, 1400, 1600],
        sizes: "(min-width: 768px) 50vw, 100vw",
        media: "(min-width: 768px) 50vw, 100vw",
        formats: {
          webp: {
            quality: 100
          }
        }
      }),
      "single-on-half": genWidthPreset({
        class: "img single-on-half",
        widths: [350, 700, 1050, 1400, 1750, 2100],
        sizes: {
          minWidthPerViewPort768: [768, 50],
          default: [undefined, 100]
        },
        formats: {
          webp: {
            quality: 100,
          }
        },
      }),
      icon: genWidthPreset({
        class: "img icon",
        widths: [100, 200, 300],
        sizes: {
          minWidthPerViewport375: [375, 50],
          minWidthPerViewport640: [640, 33],
          minWidthPerViewPort768: [768, 33],
          minWidthPerViewport1024: [1024, 25],
          default: [undefined, 50],
        },
        formats: {
          webp: {
            quality: 100
          }
        }
      }),
      "gallery-small": genWidthPreset({
        class: "img gallery-small",
        widths: [168, 336, 504, 672, 840, 1008, 1176, 1334],
        sizes: {
          minWidthPerViewport375: [375, 50],
          minWidthPerViewport640: [640, 50],
          minWidthPerViewPort768: [768, 25],
          default: [undefined, 50]
        },
        formats: {
          webp: {
            quality: 100
          }
        },
      }),
      "gallery-big": genWidthPreset({
        class: "img gallery-big",
        widths: [343, 686, 1029, 1372, 1715, 2058],
        sizes: {
          default: [undefined, 100],
          minWidthPerViewPort768: [768, 50],
        },
        formats: {
          webp: {
            quality: 100
          }
        },
      }),
        "masonry": genWidthPreset({
          class: "img masonry",
          widths: [300, 600, 900, 1200, 1500, 1800, 2100],
          sizes: {
            default: [undefined, 100],
            minWidthPerViewport375: [375, 100],
            minWidthPerViewport640: [640, 50],
            minWidthPerViewPort768: [768, 33],
            minWidthPerViewport1024: [1024, 25]
          },
          loading: "lazy",
          formats: {
            webp: {
              quality: 100
            }
          },
          height: 450
        })
    }),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    assetsInclude: ["**/*.JPG"],
  };
});
