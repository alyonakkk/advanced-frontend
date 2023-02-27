import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/theme";
import "shared/config/i18n";
import ErrorBoundary from "@/app/providers/errorBoundary";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
