module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      // 'transform-inline-environment-variables', ["module:react-native-dotenv"],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      ["module-resolver",
        {
          root: ["./app"],
          alias: {
            "@components": "./app/components",
            "@pages": "./app/pages",
            "@assets": "./assets",
            "@context": "./app/context",
            "@lib": "./lib",
          },
        }]
    ],
  };
};