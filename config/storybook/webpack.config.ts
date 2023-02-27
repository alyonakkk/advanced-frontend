import type webpack from "webpack";
import type { RuleSetRule } from "webpack";
import path from "path";
import cssLoader from "../build/loaders/cssLoader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface IStoriesWebpackConfig {
    config: webpack.Configuration;
}

function storiesWebpackConfig ({ config }: IStoriesWebpackConfig): webpack.Configuration {
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "..", "..", "src")
    };
    config.resolve.extensions.push(".ts", ".tsx");
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
    });
    config.module.rules.push(cssLoader(config.mode === "development"));

    return config;
}

export default storiesWebpackConfig;
