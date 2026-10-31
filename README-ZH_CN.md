# Nuxt Base

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

[English](./README.md)

基于 Nuxt 4、Vue 3 和 TypeScript 的启动模板，集成 Tailwind CSS 4 及常用 Nuxt 模块，提供示例首页和明暗主题切换。

## 环境要求

- Node.js：`^22.22.3 || ^24.15.0 || >=26.0.0`，与 `package.json` 的 `engines` 一致。
- pnpm：`11.28.8`，与 `package.json` 的 `packageManager` 一致。

## 快速开始

使用 GitHub 的 **Use this template** 创建自己的仓库，将新仓库克隆到本地，然后在项目目录运行：

```bash
pnpm install
pnpm dev
```

开发服务默认地址为 `http://localhost:3000`，实际地址以终端输出为准。安装依赖时会自动执行 `nuxt prepare` 并配置 Git 提交钩子。

## 已集成的功能

| 功能             | 实现                                                                |
| ---------------- | ------------------------------------------------------------------- |
| 样式             | Tailwind CSS 4，通过 Vite 插件集成                                  |
| 代码检查与格式化 | ESLint、`@nuxt/eslint`、`@antfu/eslint-config`                      |
| 提交前检查       | `simple-git-hooks` 和 `nano-staged`，对暂存文件执行 ESLint 自动修复 |
| 图标             | `@nuxt/icon`                                                        |
| 图片处理         | `@nuxt/image`                                                       |
| 状态管理         | Pinia、`@pinia/nuxt`                                                |
| 组合式工具       | VueUse、`@vueuse/nuxt`                                              |
| 明暗主题         | `@nuxtjs/color-mode`，默认跟随系统                                  |
| SEO              | `@nuxtjs/seo`                                                       |
| 开发辅助         | Nuxt DevTools、`@nuxt/hints`                                        |

## 常用命令

| 命令            | 用途                                |
| --------------- | ----------------------------------- |
| `pnpm dev`      | 启动开发服务                        |
| `pnpm lint`     | 检查代码和格式                      |
| `pnpm lint:fix` | 自动修复可修复的 ESLint 问题        |
| `pnpm build`    | 构建生产版本，默认输出 Node.js 服务 |
| `pnpm preview`  | 在本地预览已构建的生产版本          |
| `pnpm generate` | 预渲染并生成静态站点                |

## 项目结构

```text
app/
  assets/css/     # 全局样式和 Tailwind 入口
  components/    # 公共组件
  layouts/       # 页面布局
  lib/           # 工具函数
  pages/         # 文件路由
  plugins/       # Nuxt 插件
  app.vue        # 应用入口
public/          # 静态资源
nuxt.config.ts   # Nuxt 和模块配置
```

`pages` 下的 `components`、`data`、`validators` 目录已排除在页面路由之外；其中 `components` 下的 Vue 组件会自动注册。

## 创建项目后需要调整

1. 修改 `package.json` 中的项目名称、作者和仓库地址。
2. 将 `nuxt.config.ts` 中的 `site.url` 改为实际部署域名（例如 `https://example.com`）。当前值是模板仓库地址，不适合作为正式站点地址。
3. 替换示例首页、页脚中的仓库链接以及 `public/favicon.ico`。
4. 根据项目需要调整 `routeRules`：当前首页预渲染，`/admin/**` 使用客户端渲染。
5. 将 `.github/ISSUE_TEMPLATE/config.yml` 中的讨论链接改为新仓库地址，并按需调整 Issue、PR 模板和 Release 工作流。

环境变量文件已被 Git 忽略，`.env.example` 除外。新增环境变量时，可提供不含密钥的 `.env.example` 供协作者参考。

## 构建与部署

### Node.js 服务

```bash
pnpm build
node .output/server/index.mjs
```

在目标部署环境构建并部署 `.output` 目录。图片处理涉及原生依赖，构建环境应与运行环境的平台和架构一致。

### 静态站点

```bash
pnpm generate
```

将 `.output/public` 部署到静态托管平台。静态部署不提供 Nitro 服务端接口；添加依赖服务端运行的功能时，应选择服务端部署或提供独立服务。

## 许可证

[MIT](./LICENSE)
