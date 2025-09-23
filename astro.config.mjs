// @ts-check
// Astro configuration: site metadata, i18n, Tailwind + sitemap integration.
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Centralized locale definitions to avoid duplication.
const DEFAULT_LOCALE = "it";
const SUPPORTED_LOCALES = ["it", "en"];
const LOCALE_MAP = { it: "it-IT", en: "en-US" };

export default defineConfig({
  site: "https://davidelamarca.com",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALE_MAP
      }
    })
  ]
});
