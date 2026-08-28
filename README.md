# PCG Astro 7 full-feature example

由官方 `create-astro` minimal 模板创建，固定 Astro 7.1.3 与 `@astrojs/node` 11.0.2。
`astro.config.mjs` 刻意不配置 adapter，用来覆盖 PCG 在构建期注入唯一官方 Node
adapter 的路径；Astro 5/6 示例则覆盖替换已有 Node adapter 的路径。

覆盖 SSG、React Client Island、SSR、Middleware、GET/POST Endpoint、Action、
Session、Runtime Image（含本地图片缩放与 WebP 转换）、Server Island，以及
Astro 7 稳定 Route Cache（含 tag invalidate）。

```sh
npm install
npm run build:pcg
node ../../packages/cli/dist/bin/cli.js serve --dir . --port 6177
```
