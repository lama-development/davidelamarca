// @ts-check
// Astro configuration: site metadata, i18n, Tailwind + sitemap integration.
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// Centralized locale definitions to avoid duplication.
const DEFAULT_LOCALE = "it";
const SUPPORTED_LOCALES = ["it", "en"];
const LOCALE_MAP = { it: "it-IT", en: "en-US" };

export default defineConfig({
  site: "https://davidelamarca.com",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto"
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      cssMinify: true
    }
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    prefetch(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALE_MAP
      }
    })
  ]
});
