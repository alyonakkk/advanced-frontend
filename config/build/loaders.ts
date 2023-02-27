import type webpack from "webpack";
import { type IBuildOptions } from "./types/config";
import cssLoader from "./loaders/cssLoader";

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
        cssLoader(isDev)
    ];
}

export default loaders;
