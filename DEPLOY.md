# tableorie.com Cloudflare Pages 部署说明

银食记 Astro 站点当前按**纯静态站**部署：不需要国内 VPS、不需要 ICP 备案、不需要 Nginx/Certbot，也不需要 `@astrojs/cloudflare` adapter。

## 1. 本地构建

```bash
cd /home/nightrain/project/yinshiji-site
export PATH=$HOME/.nvm/versions/node/v22.22.3/bin:$PATH
npm run build
```

构建产物目录：

```text
dist/
```

当前验证基线：

```text
20 page(s) built
```

## 2. 本地 HTTP 预览

用于上线前检查图片、路由、移动端和控制台问题。必须用 HTTP，不要用 `file://`。

```bash
cd /home/nightrain/project/yinshiji-site
export PATH=$HOME/.nvm/versions/node/v22.22.3/bin:$PATH
npm run dev -- --host 0.0.0.0 --port 4321
```

可访问地址示例：

```text
http://127.0.0.1:4321/
http://localhost:4321/
http://192.168.0.141:4321/
http://100.64.0.8:4321/
```

如只想预览 `dist/` 静态产物，可用：

```bash
cd /home/nightrain/project/yinshiji-site
export PATH=$HOME/.nvm/versions/node/v22.22.3/bin:$PATH
npx wrangler pages dev dist --ip 0.0.0.0 --port 4321
```

## 3. Cloudflare 登录

首次部署前需要 Wrangler 登录：

```bash
export PATH=$HOME/.nvm/versions/node/v22.22.3/bin:$PATH
npx wrangler login
```

登录完成后检查账号：

```bash
npx wrangler whoami
```

## 4. 首次部署：Pages Direct Upload

```bash
cd /home/nightrain/project/yinshiji-site
export PATH=$HOME/.nvm/versions/node/v22.22.3/bin:$PATH
npm run build
npx wrangler pages deploy dist --project-name tableorie
```

说明：

- `dist`：Astro 静态构建产物
- `--project-name tableorie`：Cloudflare Pages 项目名
- 不需要 Workers 后端
- 不需要 `@astrojs/cloudflare` adapter

如果想明确标记 preview 分支：

```bash
npx wrangler pages deploy dist --project-name tableorie --branch preview
```

生产分支建议：

```bash
npx wrangler pages deploy dist --project-name tableorie --branch main
```

## 5. 绑定自定义域名

首次 Direct Upload 创建项目后，在 Cloudflare Dashboard 操作：

```text
Workers & Pages → tableorie → Custom domains → Set up a custom domain
```

建议绑定：

```text
tableorie.com
www.tableorie.com
```

Cloudflare 会自动处理 SSL/TLS 证书。

如果 `tableorie.com` 的 DNS 已经托管在 Cloudflare，同域绑定通常只需要按 Dashboard 提示添加/确认记录。

## 6. 上线后验证

```bash
curl -I https://tableorie.com/
curl -I https://tableorie.com/products
curl -I https://tableorie.com/products/silver-carved-5-piece-set
curl -I https://tableorie.com/zh/
curl -I https://tableorie.com/llms.txt
```

浏览器重点检查：

- 首页 hero 主视觉是否加载
- Products 页面 6 个产品图是否全部加载
- Silver Carved 5-Piece Set 是否使用 `silver-carved-5-piece-set-final.png`
- Gold Tone 图片是否在 HTTP/HTTPS 下正常显示
- 英文页面是否没有中文图片标注
- 移动端是否无横向滚动、无文字/按钮遮挡

## 7. 当前站点结构

```text
/
├── index.html                          英文首页
├── about/index.html                    英文关于
├── materials-care/index.html           英文材质护理
├── products/                           英文产品列表与 6 个详情页
├── zh/                                 中文版首页、产品、关于、材质护理
├── llms.txt                            AI 索引（英文）
├── llms-full.txt                       AI 完整上下文（英文）
├── zh/llms.txt                         AI 索引（中文）
├── zh/llms-full.txt                    AI 完整上下文（中文）
├── robots.txt
├── images/products/                    产品图与 collection 图
└── _astro/                             CSS/JS 资源
```

## 8. 后续自动部署可选方案

当前推荐先用 Direct Upload，最少依赖、最快上线。

后续如果初始化 Git 仓库，可以改成 Cloudflare Pages Git 集成：

```text
Build command: npm run build
Build output directory: dist
Node version: 22
```

但第一版不需要为了自动部署增加复杂度。
