import "@/app/styles/index.scss";
import { type Story } from "@storybook/react";
import { type THEME } from "@/app/providers/theme/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const themeDecorator = (theme: THEME) => {
    return (StoryComponent: Story) => {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
    };
};
