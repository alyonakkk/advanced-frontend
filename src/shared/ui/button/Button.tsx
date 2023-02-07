import { type ButtonHTMLAttributes, type FC } from "react";
import classNames from "@/shared/lib/classNames";
import style from "./Button.module.scss";
import { BUTTON_THEME } from "@/shared/ui/button/types";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: BUTTON_THEME;
}

const Button: FC<IButton> = ({
    className,
    theme = BUTTON_THEME.simple,
    children,
    ...props
}) => {
    return (
        <button
            className={classNames(style.Button, {}, [className, style[theme]])}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
