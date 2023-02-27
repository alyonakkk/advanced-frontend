import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator";
import { THEME } from "@/app/providers/theme/types";
import PageError from "./PageError";

const PageErrorStories = {
    title: "widget/PageError",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

export default PageErrorStories as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {};

export const PageErrorDark = Template.bind({});
PageErrorDark.args = {};
PageErrorDark.decorators = [themeDecorator(THEME.dark)];
