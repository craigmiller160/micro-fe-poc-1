const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const dependencies = require('./package.json').dependencies;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'ChildIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },
    devServer: {
        port: 3001,
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'ChildIndex.html')
        }),
        new ModuleFederationPlugin({
            name: 'reactChild',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactChildWC': './src/ChildIndex'
            }
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ],
    },
};