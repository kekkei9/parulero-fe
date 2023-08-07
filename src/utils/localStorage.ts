export const isClient = typeof window !== "undefined";

export const getIsVisited = () =>
  isClient && localStorage.getItem("isVisited") === "true";

export const getTheme = () =>
  (isClient && localStorage.getItem("theme")) ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
