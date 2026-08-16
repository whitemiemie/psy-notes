---
title: 写作与发布指南
description: 使用 Obsidian、Quartz 和 GitHub Pages 维护笔记网站
tags: [Quartz, Obsidian, GitHub-Pages]
---

# 写作与发布指南

网站直接把 `content/` 作为 Obsidian vault。日常写作只需要编辑 Markdown；Quartz 原生支持 `[[Wiki Link]]`、反向链接、标签、全文搜索和关系图。

## 新建笔记

在 Obsidian 中打开仓库的 `content/` 目录，然后新建 Markdown 文件。推荐添加 frontmatter：

```yaml
---
title: 操作系统基础
description: 进程、线程与内存管理
date: 2026-08-16
tags: [计算机科学, 操作系统]
---
```

内部链接既可以使用 Obsidian 语法：

```markdown
[[Lec10-Memory-I|记忆笔记]]
```

也可以使用标准 Markdown：

```markdown
[记忆笔记](../notes/Lec10-Memory-I.md)
```

## 本地预览

需要 Node.js 22 或更高版本：

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:8080`。发布前运行：

```bash
npm run check
npm run build
```

构建产物位于 `public/`，无需提交到 Git。

## 发布

提交并推送到 `main` 分支后，GitHub Actions 会自动构建并部署。首次使用时，到仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。

网站地址为 <https://whitemiemie.github.io/psy-notes/>。
