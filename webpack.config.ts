import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildEnv} from "./config/build/types/config";

export default function(env: IBuildEnv) {
	return buildWebpackConfig({
		mode: env.MODE ?? "development",
		paths: {
			entry: path.resolve(__dirname, "src", "index.tsx"),
			build: path.resolve(__dirname, "build"),
			html: path.resolve(__dirname, "public", "index.html"),
			src: path.resolve(__dirname, "src"),
		},
		port: env.PORT ?? 3000,
	});
}
