import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "我的学习笔记",
    pageTitleSuffix: " · 心理学与知识整理",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "whitemiemie.github.io/psy-notes",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "9.00sc-fall-2011/**",
      "CLAUDE.md",
      "NOTE_TEMPLATE.md",
      "**/_STYLE.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: { header: "Noto Sans SC", body: "Noto Sans SC", code: "IBM Plex Mono" },
      colors: {
        lightMode: {
          light: "#faf8f6",
          lightgray: "#e8e2dc",
          gray: "#b5aaa1",
          darkgray: "#4b4540",
          dark: "#272320",
          secondary: "#5b6ee1",
          tertiary: "#8a65b5",
          highlight: "rgba(91, 110, 225, 0.14)",
          textHighlight: "#ffe06688",
        },
        darkMode: {
          light: "#171619",
          lightgray: "#363238",
          gray: "#716a74",
          darkgray: "#d5cfd7",
          dark: "#f0ebf1",
          secondary: "#9aa7ff",
          tertiary: "#c09ee7",
          highlight: "rgba(154, 167, 255, 0.16)",
          textHighlight: "#b39b2388",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
