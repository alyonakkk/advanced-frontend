import { type FC, useState } from "react";
import classNames from "@/shared/lib/classNames";
import style from "./Sidebar.module.scss";
import ThemeSwitcher from "@/widgets/themeSwitcher";
import LangSwitcher from "@/widgets/langSwitcher";

interface ISidebar {
    className?: string;
}

const Sidebar: FC<ISidebar> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function onToggleSidebar (): void {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={classNames(style.Sidebar, { [style.collapsed]: isCollapsed }, [className])}>
            <button onClick={onToggleSidebar}>{isCollapsed ? "open" : "close"}</button>
            <LangSwitcher />
            <ThemeSwitcher />
        </div>
    );
};

export default Sidebar;
