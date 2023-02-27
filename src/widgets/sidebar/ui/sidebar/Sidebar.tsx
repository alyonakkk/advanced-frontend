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
        <div
            data-testid={"sidebar"}
            className={classNames(style.Sidebar, { [style.collapsed]: isCollapsed }, [className])}
        >
            <button
                data-testid={"sidebar-toggle"}
                onClick={onToggleSidebar}
            >
                {isCollapsed ? "open" : "close"}
            </button>
            <LangSwitcher />
            <ThemeSwitcher />
        </div>
    );
};

export default Sidebar;
