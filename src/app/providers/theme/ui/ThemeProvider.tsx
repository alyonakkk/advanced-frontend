import { type FC, type ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "@/app/providers/theme/lib/ThemeContext";
import { THEME } from "@/app/providers/theme/types";

interface IThemeProvider {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME ?? THEME.light;

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);
    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
