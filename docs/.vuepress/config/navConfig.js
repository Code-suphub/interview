const mysql = require("./navCfg/mysql")
const os = require("./navCfg/os")
const {nav} = require("./navCfg/str");
module.exports = nav
//     [
//     { text: '主页', link: '/' },
//     { text: 'Java学习',
//         ariaLabel: 'Java学习',
//         items:[
//             {
//                 text:'Java基础',items:[
//                     {
//                         text:"Java基础语法",link : jav+'Java基础/'
//                     },
//
//                 ]
//             },
//             {
//                 text:'框架学习', items:[
//                     {
//                         text:"Spring学习",link : jav+'Spring/'
//                     }
//                 ]
//             }
//         ]
//     },
//     { text: 'Python学习',
//         ariaLabel: 'Python学习',
//         items:[
//             {
//                 text:'Python基础',items:[
//                     {
//                         text:"Python基础语法",link : python+'Python基础/'
//                     },
//
//                 ]
//             },
//             {
//                 text:'框架学习', items:[
//                     {
//                         text:"Spring学习",link : python+'Spring学习/'
//                     }
//                 ]
//             }
//         ]
//     },
//     { text: 'Java面经',
//         ariaLabel: 'Java面经',
//         items:[
//             {
//                 text:'基础语法',items:[
//                     {
//                         text:"基础语法",link : python+'基础语法/'
//                     },
//
//                 ]
//             },
//             {
//                 text:'Spring', items:[
//                     {
//                         text:"Spring",link : python+'Spring/'
//                     }
//                 ]
//             }
//         ]
//     },
//     mysql,
//     os,
// ]