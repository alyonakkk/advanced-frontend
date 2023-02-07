import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { type IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function plugins ({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[name].[hash].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ];
}

export default plugins;
