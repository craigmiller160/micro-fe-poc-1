const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'StoreChildIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'storeChild',
            filename: 'remoteEntry.js',
            exposes: {
                './StoreChildWC': './src/StoreChildIndex'
            },
            shared: {
                vue: {
                    singleton: true,
                    requiredVersion: deps.vue
                }
            }
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3006,
        contentBase: path.join(__dirname, 'src'),
        hot: true
    }
}
