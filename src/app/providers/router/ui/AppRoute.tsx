import { type FC, type ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTER_COMPONENTS } from "@/shared/config/router";

const AppRoute: FC = () => {
    function renderRoutes (): ReactNode {
        return Object.values(ROUTER_COMPONENTS).map((route, index) => {
            return <Route key={index} {...route} />;
        });
    }

    return (
        <Suspense fallback={"Loading..."}>
            <Routes>{renderRoutes()}</Routes>
        </Suspense>
    );
};

export default AppRoute;
