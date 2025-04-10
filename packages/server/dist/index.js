"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const path_1 = __importDefault(require("path"));
const server_1 = __importDefault(require("react-dom/server"));
const server_2 = require("react-router-dom/server");
const types_1 = __importDefault(require("../../client/dist/types"));
const app = new koa_1.default();
const router = new koa_router_1.default();
// 静态文件服务
app.use((0, koa_static_1.default)(path_1.default.join(__dirname, '../public')));
// SSR 路由
router.get('*', async (ctx) => {
    // 创建 React 应用的 HTML 字符串
    const appString = server_1.default.renderToString((0, jsx_runtime_1.jsx)(server_2.StaticRouter, { location: ctx.url, children: (0, jsx_runtime_1.jsx)(types_1.default, {}) }));
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
        <script src="/assets/index.js"></script>
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
