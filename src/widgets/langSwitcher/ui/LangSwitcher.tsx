import { type FC, useState } from "react";
import classNames from "@/shared/lib/classNames";
import style from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

interface ILangSwitcher {
    className?: string;
}

const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
    const [activeLang, setActiveLang] = useState("ru");
    const { t, i18n } = useTranslation();

    function onChangeLang (e: any): void {
        setActiveLang(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className={classNames(style.LangSwitcher, {}, [className])}>
            <p>{t("Язык")}</p>
            <select defaultValue={activeLang} onChange={onChangeLang}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
};

export default LangSwitcher;
