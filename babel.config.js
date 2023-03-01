module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
            require.resolve("expo-router/babel"),
            ["module-resolver",
                {
                    alias: {
                        "@components": "./app/components",
                        "@pages": "./app/pages",
                        "@assets": "./assets",
                        "@hooks": "./app/hooks",
                        "@context": "./app/context",
                        "@api": "./app/api",
                    },
                }]
        ],
    };
};