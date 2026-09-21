import type { PageContent } from "@i18n/types";

const it = {
  lang: "it",
  meta: {
    title: "Davide La Marca - Siti web e design",
    description: "Sono Davide La Marca. Progetto e realizzo siti web su misura, curati nel design e semplici da usare."
  },
  skipToContent: "Vai al contenuto",
  preferences: {
    title: "Preferenze",
    languageLabel: "Lingua",
    appearanceLabel: "Aspetto",
    themes: [
      {
        value: "light",
        label: "Chiaro"
      },
      {
        value: "dark",
        label: "Scuro"
      },
      {
        value: "system",
        label: "Sistema"
      }
    ]
  },
  navigation: {
    menuLabel: "Menu",
    closeLabel: "Chiudi",
    homeHref: "/",
    links: [
      {
        label: "Home",
        href: "/"
      },
      {
        label: "Progetti",
        href: "/progetti"
      },
      {
        label: "Chi sono",
        href: "/chi-sono"
      }
    ],
    aria: {
      home: "Pagina iniziale",
      navigation: "Navigazione principale"
    }
  },
  hero: {
    title: "Il tuo sito.",
    titleSecondLine: "Fatto bene.",
    description: "Creo esperienze digitali che lasciano il segno. Veloci, intuitive e curate in ogni dettaglio.",
    cta: {
      label: "Scopri i progetti",
      href: "/progetti"
    }
  }
} as const satisfies PageContent;

export default it;
