import type { languages } from "@i18n/shared";

export type Language = (typeof languages)[number]["value"];
export type Theme = "light" | "dark" | "system";

export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink extends NavigationLink {
  readonly icon: `social/${string}`;
}

export interface NavigationContent {
  readonly menuLabel: string;
  readonly closeLabel: string;
  readonly homeHref: string;
  readonly links: ReadonlyArray<NavigationLink>;
  readonly aria: { readonly home: string; readonly navigation: string };
}

export interface HeroContent {
  readonly title: string;
  readonly titleSecondLine: string;
  readonly description: string;
  readonly cta: NavigationLink;
}

export interface PreferencesContent {
  readonly title: string;
  readonly languageLabel: string;
  readonly appearanceLabel: string;
  readonly themes: ReadonlyArray<{ readonly value: Theme; readonly label: string }>;
}

export interface PageContent {
  readonly lang: Language;
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly skipToContent: string;
  readonly socialLinks: ReadonlyArray<SocialLink>;
  readonly navigation: NavigationContent;
  readonly hero: HeroContent;
  readonly preferences: PreferencesContent;
}
