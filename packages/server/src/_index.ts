import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = new Koa();
const router = new Router();

// 静态文件服务
app.use(serve(path.join(__dirname, '../public')));

// SSR 路由
router.get('(.*)', async (ctx) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Demo</title>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="root"></div>
        <script src="/assets/main.js"></script>
      </body>
    </html>
  `;
  ctx.body = html;
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 