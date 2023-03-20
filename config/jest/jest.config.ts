export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    rootDir: "../../",
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    modulePaths: [
        "<rootDir>src"
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>src/$1",
        "\\.(s?css)$": "identity-obj-proxy",
        "\\.svg$": "<rootDir>config/jest/__mocks__/svg.js"
    },
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"]
};
