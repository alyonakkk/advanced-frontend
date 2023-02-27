import MiniCssExtractPlugin from "mini-css-extract-plugin";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function cssLoader (isDev: boolean) {
    return {
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
    };
}

export default cssLoader;
