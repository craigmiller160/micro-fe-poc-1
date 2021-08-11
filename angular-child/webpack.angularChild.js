const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'VueChildIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    }
};
