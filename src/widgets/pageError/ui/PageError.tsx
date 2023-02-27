import { type FC } from "react";
import classNames from "@/shared/lib/classNames";
import style from "./PageError.module.scss";
import { useTranslation } from "react-i18next";

interface IPageError {
    className?: string;
}

const PageError: FC<IPageError> = ({ className }) => {
    const { t } = useTranslation();

    function reload (): void {
        window.location.reload();
    }

    return (
        <div className={classNames(style.PageError, {}, [className])}>
            <div>{t("Произошла ошибка")}</div>
            <button onClick={reload}>{t("Перезагрузить страницу")}</button>
        </div>
    );
};

export default PageError;
