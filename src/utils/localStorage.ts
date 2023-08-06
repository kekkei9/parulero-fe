export const isClient = typeof window !== "undefined";

export const isVisited = isClient && localStorage.getItem("isVisited");

export const isDarkMode =
  isClient &&
  (localStorage.getItem("isDarkMode") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches);

export const toogleKey = (key: string, value: boolean) =>
  isClient && value
    ? localStorage.setItem(key, "true")
    : localStorage.removeItem(key);
