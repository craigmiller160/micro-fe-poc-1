const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ngw                     = require('@ngtools/webpack');

const devTsLoader = {
    test: /\.ts$/,
    loaders: [
        {
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: helpers.root('tsconfig.json')
            }
        },
        'angular2-template-loader',
        'angular-router-loader'
    ],
    exclude: [/node_modules/]
};

const prodTsLoader = {
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    loader: '@ngtools/webpack'
};

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
        process.env.NODE_ENV === 'production' ? new ngw.AngularCompilerPlugin({
            tsConfigPath: path.join(__dirname, 'tsconfig.json'),
            entryModule: path.join('src', 'app', 'app.module#AppModule')
        }) : new TerserPlugin(),
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
            process.env.NODE_ENV === 'production' ? prodTsLoader : devTsLoader,
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