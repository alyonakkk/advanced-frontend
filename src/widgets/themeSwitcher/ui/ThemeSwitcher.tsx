import { type FC } from "react";
import { useTheme } from "@/app/providers/theme";
import LightIcon from "@/shared/assets/icons/light.svg";
import DarkIcon from "@/shared/assets/icons/dark.svg";
import { THEME } from "@/app/providers/theme/types";
import Button from "@/shared/ui/button/Button";

const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} type={"button"}>
            {theme === THEME.light
                ? <LightIcon width={24} height={24} />
                : <DarkIcon width={24} height={24} />
            }
        </Button>
    );
};

export default ThemeSwitcher;
