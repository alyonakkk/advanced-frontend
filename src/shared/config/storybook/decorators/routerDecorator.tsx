import "@/app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const routerDecorator = (story: () => any) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
};
