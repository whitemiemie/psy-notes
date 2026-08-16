# psy-notes

使用 [Quartz](https://quartz.jzhao.xyz/) 将 Obsidian vault 发布为数字花园，并由 GitHub Actions 自动部署到 GitHub Pages。

## 本地运行

需要 Node.js 22 或更高版本。

```bash
npm install
npm run dev
```

构建并检查：

```bash
npm run check
npm run build
```

笔记和 Obsidian vault 配置位于 `content/`；构建产物位于 `public/`。

## 发布到 GitHub Pages

1. 在 GitHub 仓库中打开 **Settings → Pages**。
2. 将 **Build and deployment → Source** 设为 **GitHub Actions**。
3. 向 `main` 分支推送提交。

工作流会自动安装依赖、构建 Quartz，并发布到：

<https://whitemiemie.github.io/psy-notes/>

Quartz 的站点地址在 `quartz.config.ts` 的 `baseUrl` 中配置。如果仓库名或自定义域名改变，需要同步修改该字段。

## 内容边界

`content/9.00sc-fall-2011/` 是约 300 MB 的课程原始镜像，已同时从 Git 和 Quartz 构建中排除；公开站点只发布整理后的 Markdown 笔记。
