const path = require('path')

module.exports = {
    mode: 'production', // Собираем сразу для Продакшн версии
    entry: './src/index.js', // Входный файл для сборки
    output: {
        path: path.resolve(__dirname, 'public/dist'), // Папка для выгрузки бандла
        filename: 'form-fields-build-0.0.1.min.js', // Название собранного бандла
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