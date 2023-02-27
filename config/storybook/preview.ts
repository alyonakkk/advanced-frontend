import { addDecorator } from "@storybook/react";
import { styleDecorator } from "@/shared/config/storybook/decorators/styleDecorator";
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator";
import { THEME } from "@/app/providers/theme/types";
import { routerDecorator } from "@/shared/config/storybook/decorators/routerDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(THEME.light));
addDecorator(routerDecorator);
