import express from 'express';
import 'reflect-metadata';
import connection from './utils/db/db';
import routers from './routes';
import bodyParser from 'body-parser';
import i18n from 'i18n';
import cors from 'cors';
import config from './pm2-web';
import path from 'path';
import history from 'connect-history-api-fallback';
import fs from 'fs-extra';

console.log('svg', process.argv[2]);

const isDev = process.argv[2] === 'dev';

i18n.configure({
  locales: ['en', 'zh-cn'], // 声明包含语言
  directory: __dirname + '/languages', // 设置语言文件目录
  queryParameter: 'lang', // 设置查询参数
  defaultLocale: 'zh-cn', // 设置默认语言
  objectNotation: true,
});

const app = express();

app.use(history());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(i18n.init);

app.use('/', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    next();
  } else {
    let pathName = req.url;
    const url = pathName.split('/');
    if (pathName == '/client') {
      pathName = '/index.html';
    } else if (url.length > 2 && url[1] === 'client') {
      pathName = url.join('/').replace('/client', '');
    }

    const extName = path.extname(pathName);
    fs.readFile(`./static${pathName}`, function (err, data) {
      if (err) {
        console.error(err);
        res.status(400).json(err);
      } else {
        const ext = getExt(extName);
        res.writeHead(200, { 'Content-Type': ext + '; charset=utf-8' });
        res.write(data);
      }
      res.end();
    });
  }
});

app.use('/api', routers);

const getExt = (extName) => {
  switch (extName) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'application/javascript';
    case '.ico':
      return 'image/x-icon';
    case '.png':
      return 'image/png';
    default:
      return 'text/html';
  }
};

connection
  .initialize()
  .then(() => {
    console.log(`typeorm has started `);
  })
  .catch((error) => {
    console.error(`typeorm error:${error}`);
  });

app.listen(6174, () => {
  console.log('Server is running at http://localhost:6174');
});
