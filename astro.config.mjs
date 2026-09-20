// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://davidelamarca.com",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
      include: {
        brand: ["*"],
        flags: ["*"],
        ui: ["*"]
      }
    }),
    {
      name: "theme-controls",
      hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript("page", 'import "@scripts/theme"; import "@scripts/menu";');
        }
      }
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
