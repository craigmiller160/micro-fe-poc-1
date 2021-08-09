const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: path.join(__dirname, 'src', 'AngularChildIndex.ts')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.css'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'AngularChildIndex.html')
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        })
    ],
    devServer: {
        port: 3004,
        contentBase: path.join(__dirname, 'src'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
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