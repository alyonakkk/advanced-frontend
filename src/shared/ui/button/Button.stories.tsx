import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import Button from "./Button";
import { BUTTON_THEME } from "@/shared/ui/button/types";
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator";
import { THEME } from "@/app/providers/theme/types";

const ButtonStories = {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

export default ButtonStories as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    children: "Text",
    theme: BUTTON_THEME.simple
};

export const Dark = Template.bind({});
Dark.args = {
    children: "Text",
    theme: BUTTON_THEME.dark
};

export const Light = Template.bind({});
Light.args = {
    children: "Text",
    theme: BUTTON_THEME.light
};
Light.decorators = [themeDecorator(THEME.dark)];
