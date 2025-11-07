import Home from "@/components/screens/Home.astro";
import Music from "@/components/screens/Music.astro";

const Screens = {
  "/": { name: "MissingCore", href: "/", screen: Home },
  "/music": { name: "Music", href: "/music", screen: Music },
  "/music/privacy-policy": {
    name: "Music / Privacy Policy",
    href: "/music/privacy-policy",
    screen: null,
  },
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
  "/music/privacy-policy": {
    ...Screens["/music/privacy-policy"],
    next: null,
    prev: Screens["/music"],
  },
};

export type Route = keyof typeof NavigationStructure;
