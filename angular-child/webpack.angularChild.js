const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'AngularChildIndex.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.html'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'AngularChildIndex.html')
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3005,
        contentBase: path.join(__dirname, 'src'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    }
};
