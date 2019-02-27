const { normalize, resolve, join } = require('path')

const { smart } = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const webpackBase = require('./base')

const basePath = normalize(resolve(__dirname, '..'))
const buildPath = normalize(join(basePath, 'public'))
const entryPath = normalize(join(basePath, 'src', 'root.tsx'))

module.exports = smart(webpackBase, {
    mode: 'production',
    devtool: 'source-map',
    entry: entryPath,
    output: {
        path: buildPath,
        filename: 'bundle.[hash].min.js',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            }),
        ],
    },
    plugins: [new OptimizeCssAssetsPlugin()],
})
