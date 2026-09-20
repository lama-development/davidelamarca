const it = {
  lang: "it",
  meta: {
    appName: "Davide La Marca",
    title: "Davide La Marca - Siti web e design",
    description: "Sono Davide La Marca. Progetto e realizzo siti web su misura, curati nel design e semplici da usare."
  },
  preferences: {
    title: "Preferenze",
    triggerLabel: "Preferenze",
    closeLabel: "Chiudi",
    languageLabel: "Lingua",
    appearanceLabel: "Aspetto",
    languages: [
      { value: "it", label: "Italiano", href: "/" },
      { value: "en", label: "English", href: "/en/" }
    ],
    themes: [
      { value: "light", label: "Chiaro" },
      { value: "dark", label: "Scuro" },
      { value: "system", label: "Sistema" }
    ]
  },
  navbar: {
    brand: "davidelamarca",
    homeHref: "/",
    links: [
      { label: "Home", href: "/" },
      { label: "Progetti", href: "/progetti" },
      { label: "Chi sono", href: "/chi-sono" }
    ],
    aria: {
      home: "Pagina iniziale",
      navigation: "Navigazione principale"
    }
  },
  hero: {
    title: "Il tuo sito.",
    titleSecondLine: "Fatto bene.",
    description: "Creo siti curati, veloci e semplici da usare.",
    descriptionSecondLine: "Pensati per la tua attività e per chi ti sceglie.",
    cta: "Scopri i progetti"
  }
} as const;

export default it;
