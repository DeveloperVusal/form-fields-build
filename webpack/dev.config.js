const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const {CONFIGURATION_MODE, fileNameJs, devServerPort, extensions} = require('./common');

const pathLocationForBundle = path.resolve(__dirname, '../', 'dist/dev');


exports.developmentConfiguration = {
    mode: CONFIGURATION_MODE.DEVELOPMENT,
    resolve: {
        extensions: extensions
    },
    output: {
        filename: fileNameJs,
        path: pathLocationForBundle,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    devServer: {
        liveReload: true,
        port: devServerPort,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.htm',
            inject: false,
        })
    ]
}