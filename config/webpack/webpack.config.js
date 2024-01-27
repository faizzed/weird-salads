// config/webpack/webpack.config.js
const { generateWebpackConfig, merge } = require("shakapacker");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const webpackConfig = generateWebpackConfig()

module.exports = merge(webpackConfig, {
    plugins: [new ForkTSCheckerWebpackPlugin()],
});