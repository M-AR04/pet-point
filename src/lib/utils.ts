/**
 * Lightweight, zero-dependency className merging helper
 */
export function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return inputs
    .flatMap((x) => {
      if (typeof x === "object" && x !== null) {
        return Object.entries(x)
          .filter(([_, value]) => !!value)
          .map(([key]) => key);
      }
      return x;
    })
    .filter(Boolean)
    .join(" ");
}
