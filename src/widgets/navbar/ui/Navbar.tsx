import { type FC } from "react";
import { Link } from "react-router-dom";
import classNames from "@/shared/lib/classNames";
import style from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface INavbar {
    className?: string;
}

const Navbar: FC<INavbar> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div className={style.links}>
                <Link className={"title"} to={"/"}>{t("Главная")}</Link>
                <Link className={"title"} to={"/about"}>{t("О компании")}</Link>
            </div>
        </div>
    );
};

export default Navbar;
