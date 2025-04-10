## 谷歌 SEO 优化方案
爬虫：Googlebot

### 站内优化
#### TDK
- 确保 Title 正确且不冗长
- Meta 的 name 配置为 description，`<meta name="description" content="..." />`。内容长度不要太长，要包含页面内容核心的关键词。
- name 为 keyword Meta 对 bing 还是会有一定的影响。逗号分隔的关键词列表。建议 1-4 各，避免关键词堆砌，同时建议使用长尾关键词，非专业名词，比如寄xx类型快递之类，作为可能被精准度匹配的关键词，特定搜索条件下可能带来较好的转化效果。

#### Meta 的 name 配置
- Robots：`<Meta name="Robots" Content="Nofollow">`
- Open Graph 协议（OG Tag）
OG 是分享出去的卡片内容，分享出去后也就成为了外链，对 SEO 会有较大的影响，OG 配置一般如下：
```html
<meta property="og:type" content="website">
<meta property="og:title" content="设置Open Graph 标签！社交营销优化！">
<meta property="og:site_name" content="前端阿彬">
<meta property="og:description" content="Open Graph Protocol（开放图谱协议），简称 OG 协议或 OGP。">
```

### 语义化标签
#### h
合理规划网页模块，通过 h 标签分级，非常重要。

#### strong\em
区别与 b 和 i 仅为了样式而加粗和斜体，这两个标签是带有强调性质的，设计上可以考虑对需要强调的内容进行加粗。
对搜索引擎来讲，相当于是一个有快递功能的网站 -> 一个主营快递业务的网站。

#### 列表
罗列关键词信息的时候要注意语义化结构，让搜索引擎获得文本之间的上下文结构信息。

#### 媒体标签 alt 属性

#### 页面结构化
- nav
- aside
- header
- article
- section
- footer
帮助搜索引擎获得文本之间的上下文结构信息，理解网页的重点。

#### a 标签 rel 属性
a 标签注意事项：
- 连接文案要准确，不能太模糊
- 要非 js 生成
- 要非 js 实现跳转
- 要正确配置 rel 属性：sponsored / nofollow 用于广告类链接、付费展示链接，不希望我们页面被认为与他们页面发生什么关联。注意如果被设置了这个属性的链是我们站内的链接，还需要对这个地址做 disallow 处理。

#### overflow text
尽量使用 CSS text overflow，保持内容的完整。

### 站点地图
主要用来覆盖新网页，当网站过大，页面太多，很多页面难以被其他页面链接到的时候就可以用了
- 网站很大
- 有很多图片视频
- 新网站，外部指向这个网站的链接不多

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
调研：是否有本地工具呢？根据前端路由生成站点地图的工具？

### robots.txt
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

#### 页面路由结构（网址设计）
参考[Google 的网址结构最佳实践](https://developers.google.cn/search/docs/crawling-indexing/indexable-file-types?hl=zh-cn)：
- 使用准确易读的字词
- 域名使用地区域名 ✅
- 不推荐 hash 路由
- path 用 - 连接单词，而不是 _
- 尽可能避免在网址中使用会话 ID，而应考虑使用 Cookie
- 避免在网址中使用不易读的、冗长的 ID 编号，比如 /detail/:id，这种地址如果是商品展示页，应该考虑在这种页面加上下面的标签：
```html
<link rel="canonical" href="https://example.com/detail/12345/product-name" />
```
告诉搜索引擎去找一个主版本的详情页，避免重复内容
或者认为这种页面不需要被爬虫爬取，直接在跳转详情的连接添加 `nofollow`，或者 `robots.txt` 文件中 将 `/detail` 目录配置为 disallow

#### 内链
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

Google Search Console 工具
可以查看站点被爬取的情况，并编辑内链

### 外链优化
被链接得越多就意味着权重越高，所以外链自然也是很关键的一部分，**我们需要在其他网站上多发布带有指向 shopee express 链接的内容**。
但是是不是越多越好呢？也不一定。当对方的网站性能很差，或者放出去的链接成了死链，搜索引擎可能会将我们网站的排名降低。因此外链过来的站点不稳定，性能较差时，建议使用 nofollow，当跳转到内链密度比较大，对 SEO 优化可能产生负面效果的页面时，也可以设置为 nofollow；

外链到其他网站
> 使用外部链接可以帮助您建立可信度（例如引用您的内容来源）。

### 性能

### SPA 
参考[了解 JavaScript SEO 基础知识](https://developers.google.cn/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn)
Google 使用 chromium 来运行 js，理论上是可以抓取 SPA 页面的请求的。先看看谷歌爬虫抓取网页的过程：
> Googlebot 会将网页加入队列以进行抓取和呈现。当某个网页正在等待被抓取/被渲染时，这种状态很难直接判断出来。 当 Googlebot 尝试通过发出 HTTP 请求从抓取队列中抓取某个网址时，它首先会检查您是否允许抓取。Googlebot 会读取 robots.txt 文件。如果此文件将该网址标记为“disallowed”，Googlebot 就会跳过向该网址发出 HTTP 请求的操作，然后会跳过该网址。Google 搜索不会渲染来自屏蔽文件或屏蔽网页的 JavaScript。

>接下来，Googlebot 会解析 HTML 链接的 href 属性中其他网址的响应，并将这些网址添加到抓取队列中。若不想让 Googlebot 发现链接，请使用 nofollow机制。

> 网页在此队列中的存在时长可能会是几秒钟，但也可能会是更长时间。一旦 Google 的资源允许，无头 Chromium 便会渲染相应网页并执行 JavaScript。Googlebot 会再次解析所渲染的链接 HTML，并将找到的网址加入抓取队列。Google 还会使用所呈现的 HTML 将网页编入索引。

但是谷歌依然推荐服务端渲染：
> 它可让用户和抓取工具更快速地看到您的网站内容；并非所有漫游器都能运行 JavaScript

### SSG 优化

### 优化时效
> 有些更改可能在几小时后生效，而其他更改可能需要几个月的时间才能生效。一般来说，您可能需要等待几周的时间来评估您的工作是否对 Google 搜索结果产生了有益影响。

