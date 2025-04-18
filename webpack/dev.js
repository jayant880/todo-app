const { merge } = require('webpack-merge');
const common = require('./common');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'main.js',
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: paths.dist,
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
});