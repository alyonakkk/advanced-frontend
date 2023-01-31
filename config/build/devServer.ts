import {IBuildOptions} from "./types/config";
import {Configuration} from "webpack-dev-server";

function devServer({port}: IBuildOptions): Configuration {
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}

export default devServer;
