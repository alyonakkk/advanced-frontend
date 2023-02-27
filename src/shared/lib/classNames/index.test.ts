import classNames from "@/shared/lib/classNames/index";

describe("classNames", () => {
    test("with first param", () => {
        expect(classNames("class")).toBe("class");
    });

    test("with additional", () => {
        expect(classNames(
            "class",
            {},
            ["class1", "class2"]
        )).toBe("class class1 class2");
    });

    test("with mods", () => {
        expect(classNames(
            "class",
            { hovered: true, scrollable: true },
            ["class1", "class2"]
        )).toBe("class class1 class2 hovered scrollable");
    });

    test("with mods false", () => {
        expect(classNames(
            "class",
            { hovered: true, scrollable: false },
            ["class1", "class2"]
        )).toBe("class class1 class2 hovered");
    });

    test("with mods undefined", () => {
        expect(classNames(
            "class",
            { hovered: true, scrollable: undefined },
            ["class1", "class2"]
        )).toBe("class class1 class2 hovered");
    });
});
