import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator";
import { THEME } from "@/app/providers/theme/types";
import ThemeSwitcher from "./ThemeSwitcher";

const ThemeSwitcherStories = {
    title: "widget/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

export default ThemeSwitcherStories as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {};

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [themeDecorator(THEME.dark)];
