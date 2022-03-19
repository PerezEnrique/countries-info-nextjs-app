import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getThemeStatus, setThemeStatus } from "../services/themeService";

const useTheme = (
  themeKey: string,
  themeClass: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [theme, setTheme] = useState<boolean>(
    getThemeStatus(themeKey) == "true" ? true : false
  );

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add(themeClass);
    } else {
      document.documentElement.classList.remove(themeClass);
    }
    setThemeStatus(themeKey, theme);
  }, [theme, themeClass, themeKey]);

  return [theme, setTheme];
};

export default useTheme;
