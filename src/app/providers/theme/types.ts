export enum THEME {
    light = "light",
    dark = "dark",
}

export interface IThemeContext {
    theme: THEME;
    setTheme: (theme: THEME) => void;
}
