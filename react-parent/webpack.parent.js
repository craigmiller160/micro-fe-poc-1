const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'ParentIndex.js'),
    output: {
        path: path.join(__dirname, 'build')
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'src'),
        proxy: {
            '/reactChild': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^/reactChild': ''
                },
                logLevel: 'debug'
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'ParentIndex.html')
        }),
        new ModuleFederationPlugin({
            name: 'reactParent',
            filename: 'remoteEntry.js',
            remotes: {
                reactChild: 'reactChild@/reactChild/remoteEntry.js'
            }
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