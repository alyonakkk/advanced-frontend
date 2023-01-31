export type TMode = "development" | "production";

export interface IBuildEnv {
    MODE: TMode;
    PORT: number;
}

export interface IPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TMode;
    paths: IPaths;
    port: number;
}
