import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import plugins from "./plugins";
import loaders from "./loaders";
import resolvers from "./resolvers";
import devServer from "./devServer";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = mode === "development";

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[hash].js",
            path: paths.build,
            clean: true,
        },
        plugins: plugins(options),
        module: {
            // в rules описаны лоадеры, которые обрабатывают файлы, которые выходят за рамки js (css, svg, png, ts и т.д.)
            rules: loaders(options),
        },
        resolve: resolvers(options),
        devtool: isDev && "inline-source-map",
        devServer: isDev ? devServer(options) : undefined,
    }
}
