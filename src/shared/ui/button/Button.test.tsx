import { render, screen } from "@testing-library/react";
import Button from "@/shared/ui/button/Button";
import { BUTTON_THEME } from "@/shared/ui/button/types";

describe("Button", () => {
    test("test button without props", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("test button with theme = dark", () => {
        render(<Button theme={BUTTON_THEME.dark}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass(BUTTON_THEME.dark);
        screen.debug();
    });

    test("test button with theme = light", () => {
        render(<Button theme={BUTTON_THEME.light}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass(BUTTON_THEME.light);
        screen.debug();
    });

    test("test button with theme = simple", () => {
        render(<Button theme={BUTTON_THEME.simple}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass(BUTTON_THEME.simple);
        screen.debug();
    });
});
