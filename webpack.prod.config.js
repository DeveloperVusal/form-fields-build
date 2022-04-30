const path = require('path')
const fs = require('fs')

const rawdata = fs.readFileSync('./package.json')
const version = JSON.parse(rawdata).version // Версия библиотеки
const filename = 'form-fields-build-' + version + '.min.js' // Наименование библиотеки

module.exports = {
    mode: 'production', // Собираем сразу для Продакшн версии
    entry: ["@babel/polyfill", './src/index.js'], // Входный файл для сборки
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка для выгрузки бандла
        filename: filename, // Название собранного бандла
        publicPath: 'public/',
        clean: true, // При каждой сборке очищаем
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
    }
}