const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CONFIGURATION_MODE, fileNameJs, extensions, fileNameStyle} = require("./common");


const pathLocationForBundle = path.resolve(__dirname, '../', 'dist/prod');

exports.productionConfiguration = {
    mode: CONFIGURATION_MODE.PRODUCTION,
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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: fileNameStyle,
        })
    ]
}