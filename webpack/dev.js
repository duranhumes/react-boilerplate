const { normalize, resolve, join } = require('path')

const { smart } = require('webpack-merge')
const { NamedModulesPlugin } = require('webpack')

const webpackBase = require('./base')

const basePath = normalize(resolve(__dirname, '..'))
const buildPath = normalize(join(basePath, 'public'))
const entryPath = normalize(join(basePath, 'src', 'root.tsx'))

const devPort = 3000

module.exports = smart(webpackBase, {
    mode: 'development',
    output: {
        path: buildPath,
    },
    devtool: undefined,
    devServer: {
        hot: false,
        open: true,
        inline: true,
        port: devPort,
        compress: true,
        publicPath: '/',
        historyApiFallback: true,
    },
    entry: [`webpack-dev-server/client?http://localhost:${devPort}`, entryPath],
    plugins: [new NamedModulesPlugin()],
})
