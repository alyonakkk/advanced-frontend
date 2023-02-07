import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type IBuildEnv } from "./config/build/types/config";
import { type Configuration } from "webpack";

export default function (env: IBuildEnv): Configuration {
    return buildWebpackConfig({
        mode: env.MODE ?? "development",
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            build: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src")
        },
        port: env.PORT ?? 3000
    });
}
