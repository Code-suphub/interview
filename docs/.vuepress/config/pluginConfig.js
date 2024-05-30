module.exports={
    '@vuepress/medium-zoom': {
        selector: 'img.zoom-custom-imgs',
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
    "vuepress-plugin-code-copy":
    {
    successText: "代码已复制",
    },
    "img-lazy": true,
}