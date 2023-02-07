import { type IBuildOptions } from "./types/config";
import { type Configuration } from "webpack-dev-server";

function devServer ({ port }: IBuildOptions): Configuration {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    };
}

export default devServer;
