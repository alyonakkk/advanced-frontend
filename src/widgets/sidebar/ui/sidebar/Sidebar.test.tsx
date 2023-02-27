import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "@/widgets/sidebar";
import renderWithTranslations from "@/shared/lib/tests/renderWithTranslations";

describe("Sidebar", () => {
    test("test sidebar", () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test sidebar toggle button", () => {
        renderWithTranslations(<Sidebar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
