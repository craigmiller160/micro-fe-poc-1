const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'ReactChildIndex.js'),
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
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        proxy: {
            '/storeChild': {
                target: 'http://localhost:3006',
                changeOrigin: true,
                pathRewrite: {
                    '^/storeChild': ''
                },
                logLevel: 'debug'
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'ReactChildIndex.html')
        }),
        new ModuleFederationPlugin({
            name: 'reactChild',
            filename: 'remoteEntry.js',
            remotes: {
                storeChild: 'storeChild@/storeChild/remoteEntry.js'
            },
            exposes: {
                './ReactChildWC': './src/ReactChildIndex'
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom']
                }
            }
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        })
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
                    MiniCssExtractPlugin.loader,
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
