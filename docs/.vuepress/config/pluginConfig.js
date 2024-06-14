module.exports={
    '@vuepress/medium-zoom': {
      selector: 'img.lazy',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    },
    '@vuepress/back-to-top': true,
    'vuepress-plugin-auto-sidebar': {},
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            '/': {
                message: "New content is available.",
                buttonText: "Refresh"
            },
            '/zh/': {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
    },
    // "vuepress-plugin-code-copy":
    // {
    // successText: "代码已复制",
    // },
    "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
        tip: {
        content: "复制成功"
        }
    },
    "img-lazy": true,
}