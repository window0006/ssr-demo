# ssr-demo
一个极简的 React SSR 练习项目。使用 monorepo 的形式组织 client、server 代码，共享模块为 components。

## monorepo
使用 pnpm-workspace 简单管理：
```yaml
packages:
  - 'packages/*'
```
* client：前端代码，将构建出可以给 server 引用的模块
* server：服务端代码，将引用 client 构建后的包，实现同构渲染

## 整体流程
1. FE 开发
2. FE build-tsx：tsx 编译成 js，node 不能直接运行 tsx 代码

## Attentions

### node 使用 TS
node 不支持直接使用 TS，因此要用到 `ts-node`：
```json
{
  ...
  "scripts": {
    "dev": "node --loader ts-node/esm src/index.ts",
    "build": "tsc",
    "start": "node dist/server/src/index.js"
  },
  ...
}
```
还要注意 tsconfig 的配置，关键是这几个字段：
```json
{
  "compilerOptions": {
    // 指定编译后的 JS 版本
    "target": "ESNext",
    // 设置为 "ESNext"，以支持 ESM 模式（import/export）
    "module": "ESNext",
    // 指定以使用 Node.js 的模块解析方式
    "moduleResolution": "node10",
```

### node 使用 ES module
node 其实是支持使用 ECMAScript 模块的，也就是通过 import 语法使用模块。
> Node.js 有两个模块系统：CommonJS 模块和 ECMAScript 模块。
> 作者可以通过 .mjs 文件扩展名、值为 "module" 的 package.json "type" 字段或值为 "module" 的 --input-type 标志告诉 Node.js 将 JavaScript 解释为 ES 模块。这些是打算作为 ES 模块运行的代码的显式标记。
> 当使用 import 关键字解析相对或绝对的说明符时，必须提供文件扩展名。还必须完全指定目录索引（例如 './startup/index.js'）。

官方给出了 3 种使用方法，无选择了将package.json `"type"` 字段设置为 `"module"`。

#### 引用路径问题
server 端使用 `react-router-dom/server` 模块时需要使用 `.js` 后缀，这是因为 `react-router-dom` 的 `exports` 字段中并未显式声明 `./server`，因此 import 语法不能直接从这个 `node_modules` 模块中使用 `/server` 子模块。使用 `.js` 后缀可以绕过 `exports` 限制，直接导入 `server.js` 文件的完整路径。

```js
import { StaticRouter } from 'react-router-dom/server.js';
```
同理，import client 中的组件也是一样的
```js
import App from '../../client/src/App.js';

// 构建后的 App.js 内容
import ErrorBoundary from './components/ErrorBoundary.js';
const Home = React.lazy(() => import('./pages/Home.js'));
const About = React.lazy(() => import('./pages/About.js'));
const Contact = React.lazy(() => import('./pages/Contact.js'));
```
但是这样写着实有点难顶，前端开发的时候岂不是都要带文件后缀，而且我们源码是 `.ts` 文件。

可以考虑构建出来一个 `exports` 字段配置完备的 client 子模块，或者在 client 子模块通过 `imports` 字段指定路径接续规则，固定添加 .js 后缀：
```json
{
  "imports": {
    "client": {
      "./src/*.js"
    }
  }
}
```
这样 server 目录中就可以直接使用 `client/App` 路径了。但是 client 内的引用依然需要添加 `.js` 后缀。

可以考虑使用 `tsc-alias` 这个库：
```json
{
  "scripts": {
    "build": "tsc && tsc-alias"
  }
}
```

## 小结
没想到一个小小的 demo 就暗含如此多的坑。
