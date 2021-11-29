const path = require('path')

const version = '0.0.2' // Версия библиотеки
const filename = 'form-fields-build-' + version + '.min.js' // Наименование библиотеки

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // Говорим серверу, следи за папкой public
            staticOptions: {
                index: 'index.htm' // Указываем индексный файл "index.htm" -> по умолчанию "index.html"
            }
        },
        compress: true, // Сжатие файлов
        port: 9000, // Порт сервера 9000
    },
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