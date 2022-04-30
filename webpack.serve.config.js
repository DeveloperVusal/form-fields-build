const path = require('path')

const version = '0.0.2' // Версия библиотеки
const filename = 'form-fields-build-' + version + '.min.js' // Наименование библиотеки

module.exports = {
    mode: 'development', // Запускаем в режиме разработки
    devServer: {
        liveReload: true,
        static: [
            {
                directory: path.join(__dirname, 'public'), // Говорим серверу, следи за папкой public
                staticOptions: {
                    index: 'index.htm' // Указываем индексный файл "index.htm" -> по умолчанию "index.html"
                }
            }
        ],
        port: 9000, // Порт сервера 9000
        open: false
    }
}