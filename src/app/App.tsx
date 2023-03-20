import { type FC, Suspense } from "react";
import "@/app/styles/index.scss";
import { useTheme } from "@/app/providers/theme";
import classNames from "@/shared/lib/classNames";
import Navbar from "@/widgets/navbar";
import { Sidebar } from "@/widgets/sidebar";
import AppRoute from "@/app/providers/router";

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", { hovered: true }, [theme])}>
            <Suspense fallback={"loading..."}>
                <Navbar className={"container"} />
                <div className={"content"}>
                    <Sidebar className={"container"} />
                    <div className={"main container"}>
                        <AppRoute />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
