import { type FC } from "react";
import classNames from "@/shared/lib/classNames";
import style from "./Loader.module.scss";

interface ILoader {
    className?: string;
}

const Loader: FC<ILoader> = ({ className }) => {
    return (
        <div className={classNames(style.Loader, {}, [className])}>

        </div>
    );
};

export default Loader;
