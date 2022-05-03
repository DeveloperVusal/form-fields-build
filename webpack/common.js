const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());
const versionProject = packageJson.version;
const nameProject = packageJson.name;

//============ Имена бандлов ================
exports.fileNameJs = `${nameProject}-${versionProject}.min.js`;
;
exports.fileNameStyle = `${nameProject}-[hash].min.css`;
//=============== Расширения =================
exports.extensions = ['.js', '.ts'];

//=============== Дев сервер =================
exports.devServerPort = 9000;

//=============== Режимы =====================
exports.CONFIGURATION_MODE = {
    DEVELOPMENT: "development",
    PRODUCTION: 'production',
}
