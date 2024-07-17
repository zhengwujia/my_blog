import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my_blog/",

  lang: "zh-CN",

  title: "wujia 的博客",

  description: "wujia 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
