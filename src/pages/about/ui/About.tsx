import { type FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
    const { t } = useTranslation("about");

    return (
        <div>{t("О компании")}</div>
    );
};

export default About;
