import {useContext} from "react";
import {THEME} from "@/app/providers/theme/types";
import {ThemeContext} from "@/app/providers/theme";

interface IUseTheme {
    theme: THEME;
    toggleTheme: () => void;
}

const useTheme = (): IUseTheme => {
    const {theme, setTheme} = useContext(ThemeContext);

    function toggleTheme() {
        switch (theme) {
            case THEME.light:
                setTheme(THEME.dark)
                break;
            case THEME.dark:
                setTheme(THEME.light)
                break;
            default:
                break;
        }
    }

    return {theme, toggleTheme}
}

export default useTheme;
