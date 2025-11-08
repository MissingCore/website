import Home from "~/screens/Home.astro";
import Music from "~/screens/Music.astro";

import type { ObjectValues } from "~/utils/types";

const Screens = {
  "/": { name: "MissingCore", href: "/", screen: Home },
  "/music": { name: "Music", href: "/music", screen: Music },
  "/music/privacy-policy": {
    name: "Music / Privacy Policy",
    href: "/music/privacy-policy",
    screen: null,
  },
} as const;

export type NonMDXRoute = Exclude<
  ObjectValues<typeof Screens>,
  { screen: null }
>["href"];
export type Route = keyof typeof Screens;

export const NavigationStructure = {
  "/": {
    ...Screens["/"],
    description: "Building open source apps inspired by Nothing design.",
    next: Screens["/music"],
    prev: null,
  },
  "/music": {
    ...Screens["/music"],
    description: "A Nothing inspired local music player.",
    next: null,
    prev: Screens["/"],
  },
  "/music/privacy-policy": {
    ...Screens["/music/privacy-policy"],
    next: null,
    prev: Screens["/music"],
  },
};
