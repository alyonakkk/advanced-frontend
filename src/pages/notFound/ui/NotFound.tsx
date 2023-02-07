import { type FC } from "react";
import classNames from "@/shared/lib/classNames";
import style from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";

interface INotFound {
    className?: string;
}

const NotFound: FC<INotFound> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.NotFound, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};

export default NotFound;
