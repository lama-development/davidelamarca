import type { PageContent } from "@i18n/types";

const en = {
  lang: "en",
  meta: {
    title: "Davide La Marca - Websites and Design",
    description: "I'm Davide La Marca. I design and build bespoke websites that look great and are easy to use."
  },
  skipToContent: "Skip to content",
  preferences: {
    title: "Preferences",
    languageLabel: "Language",
    appearanceLabel: "Appearance",
    themes: [
      {
        value: "light",
        label: "Light"
      },
      {
        value: "dark",
        label: "Dark"
      },
      {
        value: "system",
        label: "System"
      }
    ]
  },
  navigation: {
    menuLabel: "Menu",
    closeLabel: "Close",
    homeHref: "/en/",
    links: [
      {
        label: "Home",
        href: "/en/"
      },
      {
        label: "Projects",
        href: "/projects"
      },
      {
        label: "About",
        href: "/about"
      }
    ],
    aria: {
      home: "Homepage",
      navigation: "Main navigation"
    }
  },
  hero: {
    title: "Your website.",
    titleSecondLine: "Done right.",
    description: "I build digital experiences worth remembering. Fast, intuitive, crafted with care.",
    cta: {
      label: "Explore my projects",
      href: "/projects"
    }
  }
} as const satisfies PageContent;

export default en;
