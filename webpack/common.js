const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

module.exports = {
    entry: path.join(paths.src, 'index.js'),
    output: {
        path: paths.dist,
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.assets,
                    to: 'assets',
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': paths.src,
        },
    },
};