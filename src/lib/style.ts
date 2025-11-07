import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const sharedColorPalette = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const nColorPalette = [...sharedColorPalette, 0, 15, 95, 100];
const rColorPalette = [...sharedColorPalette, 55];

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        "canvas",
        "surface",
        "content",
        "accent",
        nColorPalette.map((light) => `n-${light}`),
        rColorPalette.map((light) => `r-${light}`),
        "y",
        "b",
        "g",
      ].flat(),
    },
  },
});

/**
 * @description Combines any number of Tailwind classes nicely.
 * @returns A string containing Tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
