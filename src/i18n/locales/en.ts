import type { PageContent } from "@i18n/types";

const en = {
  lang: "en",
  meta: {
    title: "Davide La Marca - Websites and Design",
    description: "I'm Davide La Marca. I design and build bespoke websites that look great and are easy to use."
  },
  skipToContent: "Skip to content",
  socialLinks: [
    { label: "LinkedIn", icon: "social/linkedin", href: "https://linkedin.com/in/davide-la-marca-178241254" },
    { label: "GitHub", icon: "social/github", href: "https://github.com/lama-development" },
    { label: "Discord", icon: "social/discord", href: "https://discord.com/users/546748662361882634" },
    { label: "Hello CV", icon: "social/hello-cv", href: "https://hello.cv/davide-1" },
    { label: "Email", icon: "social/email", href: "mailto:info@davidelamarca.com" }
  ],
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
