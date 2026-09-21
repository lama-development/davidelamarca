// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://davidelamarca.com",
  integrations: [icon({ iconDir: "src/assets/icons" })],
  vite: {
    plugins: [tailwindcss()]
  }
});
