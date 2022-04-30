const path = require('path')
const fs = require('fs')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const rawdata = fs.readFileSync('./package.json') // Извлекаем данные из package.json
const version = JSON.parse(rawdata).version // Версия библиотеки
const filename = 'form-fields-build-' + version + '.min.js' // Наименование библиотеки

module.exports = {
    mode: 'development', // Собираем для ДЕВ версии
    entry: ["@babel/polyfill", './src/index.js'], // Входный файл для сборки
    output: {
        path: path.resolve(__dirname, 'public'), // Папка для выгрузки бандла
        filename: filename, // Название собранного бандла
        publicPath: './',
        clean: {
            keep: 'temp.index.htm'
        }, // При каждой сборке очищаем
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.htm',
            template: 'temps/temp.index.htm',
            inject: 'head',
            scriptLoading: ''
        })
    ]
}