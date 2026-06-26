import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const sharedColorPalette = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const nColorPalette = [...sharedColorPalette, 0, 15, 95, 100];
const rColorPalette = [...sharedColorPalette, 55];
const yColorPalette = [10, 50, 60];

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        nColorPalette.map((light) => `n-${light}`),
        rColorPalette.map((light) => `r-${light}`),
        yColorPalette.map((light) => `y-${light}`),
        "b",
        "g",
        "surface",
        "surfaceContainer",
        "onSurface",
        "onSurfaceVariant",
        "onSurfaceDim",
        "primary",
        "primaryDim",
        "onPrimary",
        "secondary",
        "secondaryDim",
        "onSecondary",
        "outline",
        "outlineVariant",
      ].flat(),
    },
    classGroups: {
      "font-family": ["ntype82", "nynjara", "space-grotesk"],
      "font-size": ["scaling-title", "scaling-subTitle"],
      shadow: ["glow", "glow-lg"],
      "text-shadow": ["glow", "glow-lg"],
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
