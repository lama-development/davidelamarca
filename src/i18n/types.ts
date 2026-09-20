export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export interface NavigationContent {
  readonly brand: string;
  readonly homeHref: string;
  readonly links: ReadonlyArray<NavigationLink>;
  readonly aria: { readonly home: string; readonly navigation: string };
}

export interface HeroContent {
  readonly title: string;
  readonly titleSecondLine: string;
  readonly description: string;
  readonly descriptionSecondLine: string;
  readonly cta: string;
}

export interface PreferencesContent {
  readonly title: string;
  readonly triggerLabel: string;
  readonly closeLabel: string;
  readonly languageLabel: string;
  readonly appearanceLabel: string;
  readonly languages: ReadonlyArray<{ readonly value: string; readonly label: string; readonly href: string }>;
  readonly themes: ReadonlyArray<{ readonly value: "light" | "dark" | "system"; readonly label: string }>;
}
