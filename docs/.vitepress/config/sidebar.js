// 左边侧栏导航
export default {
  "/": [
    {
      text: "🌟学习指南",
      items: [
        { text: "学习指南", link: "/order/study_guide" },
        { text: "markdown图标", link: "/order/markdown图标" },
      ],
    },
    {
      text: "😯Tauri框架",
      collapsible: true, // 可折叠
      collapsed: true, // 初始不折叠
      items: [
        {
          text: "",
          link: "/Document//",
        },
      ]
    },
  ]
}