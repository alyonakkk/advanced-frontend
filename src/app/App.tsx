import {FC, lazy, Suspense} from "react";
import "@/app/styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "@/app/providers/theme";
import classNames from "@/shared/lib/classNames";

const Main = lazy(() => import("@/pages/main"));
const About = lazy(() => import("@/pages/about"));

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {hovered: true}, [theme])}>
            <div>
                <div>
                    <Link className={"title"} to={"/"}>Главная</Link>
                    <Link className={"title"} to={"/about"}>О компании</Link>
                </div>
                <button onClick={toggleTheme} type={"button"}>Сменить тему</button>
            </div>
            <Suspense fallback={"Loading..."}>
                <Routes>
                        <Route path={"/"} element={<Main />} />
                        <Route path={"/about"} element={<About />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
