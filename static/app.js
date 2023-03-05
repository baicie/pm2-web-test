"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var db_1 = __importDefault(require("./utils/db/db"));
var routes_1 = __importDefault(require("./routes"));
var body_parser_1 = __importDefault(require("body-parser"));
var i18n_1 = __importDefault(require("i18n"));
var cors_1 = __importDefault(require("cors"));
var pm2_web_1 = __importDefault(require("./pm2-web"));
// import moduleName from '';
console.log('svg', process.argv[2]);
var isDev = process.argv[2] === 'dev';
i18n_1.default.configure({
    locales: ['en', 'zh-cn'],
    directory: __dirname + '/languages',
    queryParameter: 'lang',
    defaultLocale: 'zh-cn',
    objectNotation: true,
});
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(i18n_1.default.init);
// test
app.get('/', function (req, res) {
    res.send(res.__('hello'));
});
// server
app.use('/api', routes_1.default);
// static client
if (!isDev) {
    app.get('/client', function (req, res) {
        res.sendFile(pm2_web_1.default.WEBROOT_STATIC + 'index.html');
    });
    app.use('/client', express_1.default.static('../static', { index: 'index.html' }));
}
db_1.default
    .initialize()
    .then(function () {
    console.log("typeorm has started ");
})
    .catch(function (error) {
    console.error("typeorm error:".concat(error));
});
app.listen(6174, function () {
    console.log('Server is running at http://localhost:6174');
});
