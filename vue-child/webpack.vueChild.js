const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'VueChildIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'VueChildIndex.html')
        }),
        new ModuleFederationPlugin({
            name: 'vueChild',
            filename: 'remoteEntry.js',
            exposes: {
                './VueChildWC': './src/VueChildIndex'
            }
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 3003,
        contentBase: path.join(__dirname, 'src'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    'css-loader'
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ]
    }
}