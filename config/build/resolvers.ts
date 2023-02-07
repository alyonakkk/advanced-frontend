import { type ResolveOptions } from "webpack";
import { type IBuildOptions } from "./types/config";

function resolvers ({ paths }: IBuildOptions): ResolveOptions {
    return {
        // позволяет не указывать расширения в конце файлов при импорте с расширениями .tsx, .ts, .js
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        alias: {
            "@": paths.src
        }
    };
}

export default resolvers;
