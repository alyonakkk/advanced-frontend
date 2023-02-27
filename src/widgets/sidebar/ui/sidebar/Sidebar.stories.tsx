import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import Sidebar from "./Sidebar";
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator";
import { THEME } from "@/app/providers/theme/types";

const SidebarStories = {
    title: "widget/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

export default SidebarStories as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {};

export const SidebarDark = Template.bind({});
SidebarDark.args = {};
SidebarDark.decorators = [themeDecorator(THEME.dark)];
