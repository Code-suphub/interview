const nav =require('./config/navConfig')
// const siderbar =require('./config/siderbarConfig')
const plugin = require('./config/pluginConfig')
const head = require("./config/head")
const extraSideBar = require("./config/extraSideBar")
const footer = require("./config/footer")
// .vuepress/config.js
module.exports = {
    base: "/interview/",
    port: '10010',
    head: head,
    themeConfig: {
        logo: '/assets/img/jinx.png',
        lastUpdated: '最后一次更新', // string | boolean
        nav: nav,
        // siderbar:siderbar,
        // GitHub 仓库位置
        repo: "Code-suphub/interview",
        docsBranch: "master",
    
        // 编辑链接
        editLinks: true,
        editLinkText: "完善页面",
    
        // @ts-ignore
        // 底部版权信息
        footer: footer,
        // 额外右侧边栏
        extraSideBar: extraSideBar,
    },
    plugins: plugin,
    // 监听文件变化，热更新 ，通过参数匹配范围
  extraWatchFiles: [".vuepress/*.js", ".vuepress/sidebars/*.ts"],
    markdown: {
        // 开启代码块的行号
        lineNumbers: true,
        // 支持 4 级以上的标题渲染
        extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    },
    
}