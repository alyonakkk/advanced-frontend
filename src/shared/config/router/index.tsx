import { type RouteProps } from "react-router-dom";
import Main from "@/pages/main";
import About from "@/pages/about";
import NotFound from "@/pages/notFound";

export enum ROUTES {
    main = "/",
    about = "/about",
    notFound = "*"
}

export const ROUTER_COMPONENTS: Record<ROUTES, RouteProps> = {
    [ROUTES.main]: {
        path: ROUTES.main,
        element: <Main />
    },
    [ROUTES.about]: {
        path: ROUTES.about,
        element: <About />
    },
    [ROUTES.notFound]: {
        path: ROUTES.notFound,
        element: <NotFound />
    }
};
