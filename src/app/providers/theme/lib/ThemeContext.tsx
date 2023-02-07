import { createContext } from "react";
import { type IThemeContext, type THEME } from "../types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<IThemeContext>({
    setTheme (theme: THEME): void {
    },
    theme: undefined
});
