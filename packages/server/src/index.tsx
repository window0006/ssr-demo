import Koa from 'koa';
import Router from '@koa/router';
// import path from 'path';
// import { fileURLToPath } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// react-router-dom 的 exports 限制 查看 react-router-dom 的 package.json 文件，发现它的 exports 字段中并未显式声明 ./server
// 因此绕过 exports 限制，直接导入 server.js 文件的完整路径：
import { StaticRouter } from 'react-router-dom/server.js';
import App from '../../client/src/App';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = new Koa();
const router = new Router();

// SSR 路由
router.get('*', async (ctx) => {
  // 创建 React 应用的 HTML 字符串
  const appString = ReactDOMServer.renderToString(
    <StaticRouter location={ctx.url}>
      <App />
    </StaticRouter>
  );

  // 生成完整的 HTML
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Demo</title>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/assets/main.js"></script>
      </body>
    </html>
  `;

  ctx.body = html;
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 