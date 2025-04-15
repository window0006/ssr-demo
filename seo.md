# SEO 优化方案

## 1 SEO 基础概念
SEO（Search Engine Optimization，搜索引擎优化）是通过优化网站内容、结构和外部链接等方式，提高网站在搜索引擎中的排名，从而增加自然流量的一种技术手段。

### 1.1 Google 搜索引擎的工作原理
搜索引擎的工作主要分为以下三个阶段：
1. **抓取（Crawling）**：
   - 搜索引擎通过爬虫程序（如 Googlebot）抓取网页内容。
   - 爬虫会从已知的网页链接出发，沿着链接抓取更多页面。
   - Robots.txt 文件可以限制爬虫抓取某些页面。

2. **索引（Indexing）**：
   - 搜索引擎将抓取到的网页内容进行分析和存储，建立索引数据库。
   - 索引的内容包括网页的文本、标题、图片的 `alt` 属性等。

3. **呈现（Rendering）**：
   - 当用户输入搜索关键词时，搜索引擎会根据索引内容和算法，呈现最相关的搜索结果。
   - 搜索结果的排名由多种因素决定，包括页面内容的相关性、加载速度、外链质量等。

## 1.2 优化目标
1. 模拟自然用户可能会如何使用关键词搜索我们业务相关的服务，查看现状。
2. 分析竞争对手的 SEO 热词，评估我们是否能通过这些热词被搜索到。
   - **竞对分析**：
     - 有哪些竞争对手？
     - 通过 SEM Query 查看他们的核心关键词。
3. 制定优化内容的方向：
   - 对自然流量的品牌心智建设。
   - 避免刻意蹭流量的行为导致负面效果。

## 2. 站内优化

### 2.1 TDK 优化
关键词要注意**各市场本地化**。

- 确保 Title 正确且不冗长
- Meta 的 name 配置为 description，`<meta name="description" content="..." />`。内容长度不要太长，要包含页面内容核心的关键词。
- name 为 keyword Meta 对 bing 还是会有一定的影响。逗号分隔的关键词列表。建议 1-4 各，避免关键词堆砌，同时建议使用长尾关键词，非专业名词，比如寄xx类型快递之类，作为可能被精准度匹配的关键词，特定搜索条件下可能带来较好的转化效果。

#### 2.1.1 Meta 的 name 配置
- Rotots
   - `<meta name="robots" content="nofollow">`，注意这个配置可能会导致页面上的所有链接都被标记为 nofollow，从而阻止搜索引擎跟踪这些链接。
   - `<meta name="robots" content="noindex">` ，告诉搜索引擎不要编入索引，使用后就搜索不到这个网页了。

- Open Graph 协议（OG Tag）
OG 是分享出去的卡片内容，分享出去后也就成为了外链，对 SEO 会有一定的影响，直接影响是有限的，OG 配置一般如下：
```html
<meta property="og:type" content="website">
<meta property="og:title" content="设置Open Graph 标签！社交营销优化！">
<meta property="og:site_name" content="Shopee Express">
<meta property="og:description" content="Shopee Express in Vietnam">
```

### 2.2 语义化标签
#### 2.2.1 h
合理规划网页模块，通过 h 标签分级，非常重要。页面确保每个页面只有一个 `<h1>` 标签，并且 `<h2>`、`<h3>` 等标签按照层级结构使用，避免滥用或跳级。

#### 2.2.2 strong\em
区别与 `<b>` 和 `<i>` 仅为了样式而加粗和斜体，这两个标签是带有强调性质的，设计上可以考虑对需要强调的内容进行加粗。
对搜索引擎来讲，相当于是一个有快递功能的网站 -> 一个主营快递业务的网站。

#### 2.2.3 列表
罗列关键词信息的时候要注意语义化结构，让搜索引擎获得文本之间的上下文结构信息。

#### 2.2.4 媒体标签 alt 属性

#### 2.2.5 页面结构化
- nav
- aside
- header
- article
- section
- footer
帮助搜索引擎获得文本之间的上下文结构信息，理解网页的重点。

#### 2.2.6 a 标签 rel 属性
a 标签注意事项：
- 连接文案要准确，不能太模糊
- 要非 js 生成
- 要非 js 实现跳转
- 要正确配置 rel 属性：sponsored / nofollow 用于广告类链接、付费展示链接，不希望我们页面被认为与他们页面发生什么关联。注意如果被设置了这个属性的链是我们站内的链接，还需要对这个地址做 disallow 处理。

#### 2.2.7 overflow text
尽量使用 CSS text overflow，保持内容的完整。

### 2.3 站点地图
主要用来覆盖新网页，当网站过大，页面太多，很多页面难以被其他页面链接到的时候就可以用了
- 网站可能给很大，页面很多，爬虫不一定能爬取网站全貌
- 一个新网站，外部指向这个网站的链接还不多

[站点地图协议](https://www.sitemaps.org/protocol.html)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
```

有一些[在线站点地图生成工具](https://www.xml-sitemaps.com/)可用，生成结果示例（https://spx.vn）：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
   <url>
      <loc>https://spx.vn/</loc>
      <lastmod>2025-04-02T06:53:50+00:00</lastmod>
   </url>
</urlset>
```
如果网站内容更新频繁，建议使用动态生成的站点地图（例如通过后端脚本生成），并确保站点地图的 lastmod 字段准确反映页面的最后更新时间。
调研：是否有本地工具呢？根据前端路由生成站点地图的工具？

### 2.4 robots.txt
放在根目录下，指定爬虫的爬取范围。比如 juejin 的 [robos.txt](https://juejin.cn/robots.txt)。
```
# 指定爬虫的名字
User-agent: *

# 针对该爬虫的禁止爬取目录。除了敏感、可能造成运营资损的内容要禁止，还可以防止爬虫将依赖一些前置交互的页面直接暴露，比如直接进入了需要登录的地址选择页面等。另外也能防止一些动态页面被抓取，导致被判定为重复内容过多。
Disallow: /subscribe/subscribed
Disallow: /user/settings
Disallow: /drafts
Disallow: /news-drafts
Disallow: /editor
Disallow: /oauth-result
Disallow: /search
Disallow: /s
Disallow: /equation
Disallow: /book/order
Disallow: /books/payment
Disallow: /appview
Disallow: /creator
Disallow: /notification
Disallow: /translate
Disallow: /zhuanlan
Disallow: /spost

# juejin 将 sitemap 配在 robots 文件中，这样就不需要在每个搜索引擎的站长平台提交网站的 sitemap 文件，搜索引擎会读取其中的 sitemap 路径。目前国内的搜索引擎基本都不支持此配置，不过 google 和 bing 是支持的。
Sitemap: https://juejin.cn/sitemap/posts/index.xml
Sitemap: https://juejin.cn/sitemap/user/index.xml
Sitemap: https://juejin.cn/sitemap/news/index.xml
Sitemap: https://juejin.cn/sitemap/columns/index.xml
Sitemap: https://juejin.cn/sitemap/tag/index.xml
Sitemap: https://juejin.cn/sitemap/pin/index.xml
Sitemap: https://juejin.cn/sitemap/collections/index.xml
Sitemap: https://juejin.cn/sitemap/user_posts/index.xml
Sitemap: https://juejin.cn/sitemap/user_pins/index.xml
```
需要注意的是，robots.txt 只能阻止爬虫抓取页面，但不能阻止页面被索引（如果页面已经被其他链接引用）。如果需要完全阻止页面被索引，可以结合 noindex 元标签使用。

### 2.5 页面路由结构（网址设计）
参考[Google 的网址结构最佳实践](https://developers.google.cn/search/docs/crawling-indexing/indexable-file-types?hl=zh-cn)：
- 使用准确易读的字词
- 域名使用地区域名 ✅ 注意语言
- 不推荐 hash 路由，hash 路由的内容不会被发送到服务器，搜索引擎可能无法正确抓取页面内容，因此推荐使用 history route
- path 用 - 连接单词，而不是 _
- 尽可能避免在网址中使用会话 ID，而应考虑使用 Cookie

#### 2.5.1 新旧版本共存
新网站可能带有新的路由设计，但是某些新路由可能和旧路由的页面是一样的，这时候可以通过在旧地址页面中加入 `<link rel="canonical" href="{new_url}" />` 告诉搜索引擎，这个页面是某个页面的复制，不需要收录，以免影响新页面的权重。

当然，也可以技术手段 301 或者直接 redirect 到新路由（推荐，之前觉得旧地址可以不管，没人访问到了可没关系，但是没想到会有 SEO 的影响）。

对于 `/doc-deital/:id` 这样的详情页面，是不能使用 `canonical` tag 的，他们的内容也应该被搜索引擎收录。

#### 2.5.2 多语言路径
所有语言版本共享主域名权重，有利于整体排名，Googlebot可快速发现和索引所有语言版本，此时可以通过 `herflang` 将不同语言版本关联起来，告诉搜索引擎这些页面是同一内容的不同语言版本。示例：
```html
<link rel="alternate" hreflang="vi-VN" href="https://spx.vn/vi/" />
<link rel="alternate" hreflang="en-US" href="https://spx.vn/en/" />
```

#### 2.5.3 多市场域名
可以强地域信号：ccTLD（如.vn）或子域名能明确告知搜索引擎目标市场
但是需为每个域名单独做 SEO 优化

#### 2.5.4 多端处理
建议使用响应式设计，分域名设计可能导致权重分散。图片资源可以考虑 srcset 分端加载：
```html
<img src="product.jpg" 
     srcset="product-small.jpg 480w, product-large.jpg 1024w"
     sizes="(max-width: 600px) 480px, 800px">
```

### 2.6 结构标记（Schema Markup）
暂略。

### 2.7 内链
> Google 主要通过已抓取的其他网页中的链接来查找网页。
>如果能加大对用于内部链接的定位文字的关注，则可帮助用户和 Google 更轻松地了解您的网站并找到您网站上的其他网页。对于您重视的每个网页，您都应在您网站上至少 1 个其他网页中提供相应的引荐链接
- 爬虫会根据页面内的链接继续往下走，内链越多，就能更好地帮助搜索引擎爬虫快速发现网站页面，并更好地理解网站的内容；
- 内链可以在不同页面之间传递权重，当你设置链接指向你网站某个页面的时候，也就相当于你给那个页面传递权重，会让那个页面在谷歌有更好的排名。这可能也能解释为什么首页总是更容易被搜出来，因为所有页面都有返回首页的链接；
- 足够多的内链可以增加页面的权威性和信任度，进而有利于提升整个网站的排名；
- 引导爬虫将新内容更快曝光；
- 降低用户使用网站时的跳出率，跳出率越低，浏览器就会认为用户越喜欢这个页面，搜索结果中的排名也会上升；
- 更好地引导用户浏览：通过在相关网页之间建立链接，可以帮助用户更好地理解和浏览网站内容，提高用户留存率和页面浏览量；

优化策略：
我们可以使用优化工具分析网站权威度高的页面(Best-performing pages)，然后链接到那些想排名提升的页面，让高权威度的网站页面给目标页面传递权重。
1. 每个页面可以做 2~4 个内链；
2. 不同的页面不要用相同的链接文案；

每个页面的内链数量应适量，避免过多的内链稀释权重。一般建议每个页面的内链数量控制在 100 个以内。

### 2.8 外链与被外链
外链是指我们网站内跳转到别人网站的链接。

被链接得越多就意味着权重越高，所以被外链自然也是很关键的一部分，**我们需要在其他网站上多发布带有指向 shopee express 链接的内容**。
但是是不是越多越好呢？也不一定。当对方的网站性能很差，或者放出去的链接成了死链，搜索引擎可能会将我们网站的排名降低。因此外链过来的站点不稳定，性能较差时，建议使用 nofollow，当跳转到内链密度比较大，对 SEO 优化可能产生负面效果的页面时，也可以设置为 nofollow；

外链到其他网站
> 使用外部链接可以帮助您建立可信度（例如引用您的内容来源）。

注意低质量外链，外链的质量比数量更重要。低质量的外链（如垃圾站点的链接）可能会对 SEO 产生负面影响。

### 2.9 性能
Web 指标（Core Web Vitals），包括：
- LCP（Largest Contentful Paint）：页面主要内容的加载时间，2.5 秒以内。
- FID（First Input Delay）：首次交互的响应时间，建议在 100 毫秒以内。
- CLS（Cumulative Layout Shift）：页面布局的稳定性，需要避免出现宽高不确定的 `<img />` 标签导致渲染抖动。

### 2.10 SPA 
参考[了解 JavaScript SEO 基础知识](https://developers.google.cn/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn)
Google 使用 chromium 来运行 js，理论上是可以抓取 SPA 页面的请求的。先看看谷歌爬虫抓取网页的过程：
> Googlebot 会将网页加入队列以进行抓取和呈现。当某个网页正在等待被抓取/被渲染时，这种状态很难直接判断出来。 当 Googlebot 尝试通过发出 HTTP 请求从抓取队列中抓取某个网址时，它首先会检查您是否允许抓取。Googlebot 会读取 robots.txt 文件。如果此文件将该网址标记为“disallowed”，Googlebot 就会跳过向该网址发出 HTTP 请求的操作，然后会跳过该网址。Google 搜索不会渲染来自屏蔽文件或屏蔽网页的 JavaScript。

>接下来，Googlebot 会解析 HTML 链接的 href 属性中其他网址的响应，并将这些网址添加到抓取队列中。若不想让 Googlebot 发现链接，请使用 nofollow机制。

> 网页在此队列中的存在时长可能会是几秒钟，但也可能会是更长时间。一旦 Google 的资源允许，无头 Chromium 便会渲染相应网页并执行 JavaScript。Googlebot 会再次解析所渲染的链接 HTML，并将找到的网址加入抓取队列。Google 还会使用所呈现的 HTML 将网页编入索引。

但是谷歌依然推荐服务端渲染：
> 它可让用户和抓取工具更快速地看到您的网站内容；并非所有漫游器都能运行 JavaScript

还要考虑对其他搜索引擎的兼容性的问题，如果需要兼容更多搜索引擎，建议优先使用 SSR 或 SSG，而不是完全依赖 Google 对 SPA 的支持。

### 2.11 优化时效
> 有些更改可能在几小时后生效，而其他更改可能需要几个月的时间才能生效。一般来说，您可能需要等待几周的时间来评估您的工作是否对 Google 搜索结果产生了有益影响。


## 3. SEO 分析工具

可以在这些工具里上传网站地图，当让更便捷的做法还是在 robot.txt 中配好 sitemap
工具中还可以看到网站的点击、展示和点击率等数据，也有 SEO 优化建议

### 3.1 Google
[Google Search Console](https://search.google.com/search-console/welcome?action=inspect&utm_medium=referral&utm_campaign=9012289&sjid=15237214050967251681-NC)
进入控制台之前要经过认证，会有一点点麻烦，但是有多种[认证方案](https://www.weixiuzhinan.com/8932.html)，推荐使用 URL Prefix 认证。

### 3.2 Bing
[Bing Webmaster Tools](https://www.bing.com/webmasters/)。

### 3.3 SEMrush
SEMrush 整合了搜索引擎数据、广告数据、爬虫数据及第三方合作数据，覆盖全球多个搜索引擎，被众多SEO专业人士、营销机构和企业广泛使用，数据质量经过长期验证。

而且有配套浏览器插件（SEMrush Query），简单易用，不过 7 天免费期过后要付费，并且费用不低。

#### 3.3.1 数据准确性
它的数据是通过技术手段估算的，并非直接来源于各搜索引擎的官方数据。

比如统计我们网站的 google index 数量的时候，他会通过抓取 google site:spx.vn 返回的页面数量作为估算值。另外它本身也有爬虫，会爬取我们的网站，然后将爬取到的结果与谷歌搜索结果作对比，以此来推测哪些页面被放到了 google index 中。

所以 SEMrush 的统计数据只是基于技术估算的参考值，非绝对真实数据。并且 SEMrush 无法完全区分自然搜索与付费流量。

### 3.4 小结
鉴于我们的 SEO 优化主要是希望针对谷歌搜索，因此建议主要参考 Google Search Console 的数据，但是对竞对的数据，则只能依赖 SEMrush 工具了。

## 4. SSR 基础
参考 SSR demo 项目，这是一个极简的 SSR MVP 示例，前端项目是一个带有路由的 SPA，后端则是一个简单的 node server，我们可以在 build 的时候通过这个 node 服务生成一个 SSG 页面，替换前端的 index.html 模板。

存在如下待调研的问题：
1. 组件是在 client 和 server 端可以直接复用的吗？node 程序运行 ts + es 模块会有一定的配置修改，会有一定成本
2. 如果组件需要经过打包后才能被 server 引用，该如何构建？页面的入口通常是 index.tsx，但是被 react-router 使用的组件通常是 App.tsx，这个 App.tsx 是否也要被单独打包？是否应该抽离到 components 目录中，将这个 package 的 page 都打包？
3. 路由对应的 page 组件是异步加载的，内部还有异步的接口请求，SSR 生成页面的时候该如何将数据喂进去？

## 5. SSG
webpack prerender-spa-plugin，可以尝试一下每次首页有内容发布时用这个插件

## 6. 参考资料
Google SEO 指南 https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn
csdn SEO 专栏 https://blog.csdn.net/weixin_44869002/category_12352793.html
其他文章
https://web.developers.google.cn/articles/rendering-on-the-web?hl=zh-cn
https://docs.ffffee.com/frontend/230110-1-frontend-seo.html
