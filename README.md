# PCG Astro 7 full-feature example

ESA Pages 测试项目，使用 Astro 7.4.0 和 @astrojs/node 11.0.2 standalone。要求 Node.js >=22.22.0。

覆盖 SSG、React Client Island、SSR、Middleware、GET/POST Endpoint、Action、
Session、Runtime Image、Server Island，以及 Astro 7 Route Cache 和标签失效。

```sh
yarn install --frozen-lockfile
yarn run build:pcg
```

ESA Pages 从根目录读取 `esa.jsonc`，安装依赖后使用内置 PCG 构建。
