import { jsx as _jsx } from "react/jsx-runtime";
import Koa from 'koa';
import Router from '@koa/router';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import App from '@ssr-demo/client/src/App';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = new Koa();
const router = new Router();
// SSR 路由
router.get('*', async (ctx) => {
    // 创建 React 应用的 HTML 字符串
    const appString = ReactDOMServer.renderToString(_jsx(StaticRouter, { location: ctx.url, children: _jsx(App, {}) }));
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
