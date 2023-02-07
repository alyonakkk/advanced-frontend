import type webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type IBuildOptions } from "./types/config";

function loaders ({ mode }: IBuildOptions): webpack.RuleSetRule[] {
    const isDev = mode === "development";

    return [
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: "file-loader"
                }
            ]
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        },
        // если не используем ts, то нужен лоадер babel-loader
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        },
        // позволяет использовать стили
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: /\b(module)\b/,
                            localIdentName: isDev
                                ? "[path][name]__[local]--[hash:base64:8]"
                                : "[hash:base64:8]"
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader"
            ]
        }
    ];
}

export default loaders;
