export const getThemeStatus = (themeKey: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(themeKey);
  }
};

export const setThemeStatus = (themeKey: string, status: boolean) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(themeKey, status.toString());
  }
};
