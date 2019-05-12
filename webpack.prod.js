const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all",
            maxSize: 80000,
            cacheGroups: {
                vendor: {
                    // 抽取第三方依赖
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                    minSize: 20000
                },
            }
        }
    },
    // plugins: [
    //     new UglifyJSPlugin()
    // ]
});