const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'SvelteChildIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'ChildIndex.html')
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin()
    ],
    devSever: {
        port: 3002,
        contentBase: path.join(__dirname, 'src'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: {
                            dev: !isProd
                        },
                        emitCss: isProd,
                        hotReload: !isProd
                    }
                }
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
};