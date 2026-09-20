import it from "@i18n/locales/it";

const en = {
  ...it,
  lang: "en",
  meta: {
    appName: "Davide La Marca",
    title: "Davide La Marca - Websites and design",
    description: "I'm Davide La Marca. I design and build bespoke websites that look great and are easy to use."
  },
  preferences: {
    title: "Preferences",
    triggerLabel: "Preferences",
    closeLabel: "Close",
    languageLabel: "Language",
    appearanceLabel: "Appearance",
    languages: [
      { value: "it", label: "Italiano", href: "/" },
      { value: "en", label: "English", href: "/en/" }
    ],
    themes: [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "system", label: "System" }
    ]
  },
  navbar: {
    ...it.navbar,
    homeHref: "/en/",
    links: [
      { label: "Home", href: "/en/" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" }
    ],
    aria: { home: "Homepage", navigation: "Main navigation" }
  },
  hero: {
    ...it.hero,
    cta: "Explore my projects",
    title: "Your website.",
    titleSecondLine: "Done right.",
    description: "I create thoughtful, fast, easy-to-use websites.",
    descriptionSecondLine: "Made for your business and the people who choose you."
  }
} as const;
export default en;
