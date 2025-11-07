import Home from "@/components/v2/screens/Home.astro";
import Music from "@/components/v2/screens/Music.astro";

const Screens = {
  "/": { name: "MissingCore", href: "/", screen: Home },
  "/music": { name: "Music", href: "/music", screen: Music },
} as const;

export const NavigationStructure = {
  "/": {
    ...Screens["/"],
    next: Screens["/music"],
    prev: null,
  },
  "/music": {
    ...Screens["/music"],
    next: null,
    prev: Screens["/"],
  },
};

export type Route = keyof typeof NavigationStructure;
