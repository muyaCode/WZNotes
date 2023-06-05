import socialLinks from "./config/socialLinks";
import nav from "./config/nav";
import algolia from "./config/algolia";
import sidebar from "./config/sidebar";

// 配置文档：https://vitepress.vuejs.org/config/introduction
export default {
  lang: "zh", // 中文，英文设置en-US
  title: "牡涯网赚笔记", // 浏览器标签标题
  description: "网赚笔记",
  base: '/WZNotes/', // url默认前缀
  appearance: true, // 暗黑模式
  ignoreDeadLinks: true, // 不会因死链接而使构建失败
  lastUpdated: true, // 使用 git 提交获取时间戳，使默认主题能够显示页面的上次更新时间
  // markdown主题
  markdown: {
    // 主题选择：https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    // 主题预览：https://vscodethemes.com/
    // 添加自定义的主题(加载主题)：https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
    theme: "one-dark-pro",
    lineNumbers: true, // 显示代码行数
  },
  // outDir: "../dist", // 打包输出的目录
  // titleTemplate: '牧涯前端学习笔记', // 标题后缀
  cleanUrls: "without-subfolders", // url设置
  // 浏览器标签图标设置
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://avatars.githubusercontent.com/u/48587992?v=4'
      }
    ]
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  // ***** 主题设置 *****
  // 文档：https://vitepress.vuejs.org/config/theme-configs
  themeConfig: {
    logo: "/img/buding.svg",
    siteTitle: "牧涯网赚笔记", // 网站左上角标题
    outlineTitle: '⚡️文档内容大纲', // 大纲标题
    outline: 'deep', // 大纲显示层级：number：只显示 | [number, number]：指定层级范围显示 | 'deep'：全部显示 | false：不显示


    // 右上角导航
    nav,
    // 右上角导航中显示带有图标的社交帐户链接
    socialLinks,
    // 展示 algolia 搜索框
    algolia,
    // *****左边侧栏导航*****
    sidebar,


    // 编辑
    editLink: {
      pattern: 'https://github.com/muyaCode/WZNotes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdateText: '上次更新时间：',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 右边文档大纲下面的-卡片广告
    // carbonAds: {
    //   code: '卡片广告 code',
    //   placement: '卡片广告布置'
    // },
    
    // 首页页脚配置。您可以添加消息和版权。仅当页面由于设计原因不包含边栏时，才会显示页脚。
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-2023  MuYa'
    },
  },
};
