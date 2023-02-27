import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator";
import { THEME } from "@/app/providers/theme/types";
import Navbar from "./Navbar";

const NavbarStories = {
    title: "widget/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

export default NavbarStories as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {};

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [themeDecorator(THEME.dark)];
