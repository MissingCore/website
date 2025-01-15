/** Base styling for buttons. */
export const Button = {
  default:
    "rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-content transition-all hover:bg-accent/90",
} as const;

/** Base styling for text. */
export const Text = {
  title: "text-4xl font-bold text-content",
  description: "text-sm text-content/50",
} as const;
