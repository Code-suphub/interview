(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{386:function(t,_,v){"use strict";v.r(_);var e=v(14),s=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_4-13-拔掉网线后-原本的-tcp-连接还存在吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-13-拔掉网线后-原本的-tcp-连接还存在吗"}},[t._v("#")]),t._v(" 4.13 拔掉网线后，原本的 TCP 连接还存在吗？")]),t._v(" "),_("p",[t._v("大家好，我是小林。")]),t._v(" "),_("p",[t._v("今天，聊一个有趣的问题："),_("strong",[t._v("拔掉网线几秒，再插回去，原本的 TCP 连接还存在吗？")])]),t._v(" "),_("p",[t._v("可能有的同学会说，网线都被拔掉了，那说明物理层被断开了，那在上层的传输层理应也会断开，所以原本的 TCP 连接就不会存在的了。就好像，我们拨打有线电话的时候，如果某一方的电话线被拔了，那么本次通话就彻底断了。")]),t._v(" "),_("p",[t._v("真的是这样吗？")]),t._v(" "),_("p",[t._v("上面这个逻辑就有问题。问题在于，错误的认为拔掉网线这个动作会影响传输层，事实上并不会影响。")]),t._v(" "),_("p",[t._v("实际上，TCP 连接在 Linux 内核中是一个名为 "),_("code",[t._v("struct socket")]),t._v(" 的结构体，该结构体的内容包含 TCP 连接的状态等信息。当拔掉网线的时候，操作系统并不会变更该结构体的任何内容，所以 TCP 连接的状态也不会发生改变。")]),t._v(" "),_("p",[t._v("我在我的电脑上做了个小实验，我用 ssh 终端连接了我的云服务器，然后我通过断开 wifi 的方式来模拟拔掉网线的场景，此时查看 TCP 连接的状态没有发生变化，还是处于 ESTABLISHED 状态。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/fff358407ee92aeea1e17386191a5d18.png",alt:"图片"}})]),t._v(" "),_("p",[t._v("通过上面这个实验结果，我们知道了，拔掉网线这个动作并不会影响 TCP 连接的状态。")]),t._v(" "),_("p",[t._v("接下来，要看拔掉网线后，双方做了什么动作。")]),t._v(" "),_("p",[t._v("所以，针对这个问题，要分场景来讨论：")]),t._v(" "),_("ul",[_("li",[t._v("拔掉网线后，有数据传输；")]),t._v(" "),_("li",[t._v("拔掉网线后，没有数据传输；")])]),t._v(" "),_("h2",{attrs:{id:"拔掉网线后-有数据传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拔掉网线后-有数据传输"}},[t._v("#")]),t._v(" 拔掉网线后，有数据传输")]),t._v(" "),_("p",[t._v("在客户端拔掉网线后，服务端向客户端发送的数据报文会得不到任何的响应，在等待一定时长后，服务端就会触发"),_("strong",[t._v("超时重传")]),t._v("机制，重传未得到响应的数据报文。")]),t._v(" "),_("p",[_("strong",[t._v("如果在服务端重传报文的过程中，客户端刚好把网线插回去了")]),t._v("，由于拔掉网线并不会改变客户端的 TCP 连接状态，并且还是处于 ESTABLISHED 状态，所以这时客户端是可以正常接收服务端发来的数据报文的，然后客户端就会回 ACK 响应报文。")]),t._v(" "),_("p",[t._v("此时，客户端和服务端的 TCP 连接依然存在的，就感觉什么事情都没有发生。")]),t._v(" "),_("p",[t._v("但是，"),_("strong",[t._v("如果如果在服务端重传报文的过程中，客户端一直没有将网线插回去")]),t._v("，服务端超时重传报文的次数达到一定阈值后，内核就会判定出该 TCP 有问题，然后通过 Socket 接口告诉应用程序该 TCP 连接出问题了，于是服务端的 TCP 连接就会断开。")]),t._v(" "),_("p",[t._v("而等客户端插回网线后，如果客户端向服务端发送了数据，由于服务端已经没有与客户端相同四元祖的 TCP 连接了，因此服务端内核就会回复 RST 报文，客户端收到后就会释放该 TCP 连接。")]),t._v(" "),_("p",[t._v("此时，客户端和服务端的 TCP 连接都已经断开了。")]),t._v(" "),_("blockquote",[_("p",[t._v("那 TCP 的数据报文具体重传几次呢？")])]),t._v(" "),_("p",[t._v("在 Linux 系统中，提供了一个叫 tcp_retries2 配置项，默认值是 15，如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f92c00c7e9cd01e89326e943232e5f04.png",alt:"图片"}})]),t._v(" "),_("p",[t._v("这个内核参数是控制，在 TCP 连接建立的情况下，超时重传的最大次数。")]),t._v(" "),_("p",[t._v("不过 tcp_retries2 设置了 15 次，并不代表 TCP 超时重传了 15 次才会通知应用程序终止该 TCP 连接，"),_("strong",[t._v("内核会根据 tcp_retries2 设置的值，计算出一个 timeout")]),t._v("（"),_("em",[t._v("如果 tcp_retries2 =15，那么计算得到的 timeout = 924600 ms")]),t._v("），"),_("strong",[t._v("如果重传间隔超过这个 timeout，则认为超过了阈值，就会停止重传，然后就会断开 TCP 连接")]),t._v("。")]),t._v(" "),_("p",[t._v("在发生超时重传的过程中，每一轮的超时时间（RTO）都是"),_("strong",[t._v("倍数增长")]),t._v("的，比如如果第一轮 RTO 是 200 毫秒，那么第二轮 RTO 是 400 毫秒，第三轮 RTO 是 800 毫秒，以此类推。")]),t._v(" "),_("p",[t._v("而 RTO 是基于 RTT（一个包的往返时间）来计算的，如果 RTT 较大，那么计算出来的 RTO 就越大，那么经过几轮重传后，很快就达到了上面的 timeout 值了。")]),t._v(" "),_("p",[t._v("举个例子，如果 tcp_retries2 =15，那么计算得到的 timeout = 924600 ms，如果重传总间隔时长达到了 timeout 就会停止重传，然后就会断开 TCP 连接：")]),t._v(" "),_("ul",[_("li",[t._v("如果 RTT 比较小，那么 RTO 初始值就约等于下限 200ms，也就是第一轮的超时时间是 200 毫秒，由于 timeout 总时长是 924600 ms，表现出来的现象刚好就是重传了 15 次，超过了 timeout 值，从而断开 TCP 连接")]),t._v(" "),_("li",[t._v("如果 RTT 比较大，假设 RTO 初始值计算得到的是 1000 ms，也就是第一轮的超时时间是 1 秒，那么根本不需要重传 15 次，重传总间隔就会超过 924600 ms。")])]),t._v(" "),_("p",[t._v("最小 RTO 和最大 RTO 是在 Linux 内核中定义好了：")]),t._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("TCP_RTO_MAX")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token expression"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HZ"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token macro property"}},[_("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),_("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("TCP_RTO_MIN")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token expression"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HZ"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("Linux 2.6+ 使用 1000 毫秒的 HZ，因此"),_("code",[t._v("TCP_RTO_MIN")]),t._v("约为 200 毫秒，"),_("code",[t._v("TCP_RTO_MAX")]),t._v("约为 120 秒。")]),t._v(" "),_("p",[t._v("如果"),_("code",[t._v("tcp_retries")]),t._v("设置为"),_("code",[t._v("15")]),t._v("，且  RTT 比较小，那么 RTO 初始值就约等于下限 200ms，这意味着"),_("strong",[t._v("它需要 924.6 秒")]),t._v("才能将断开的 TCP 连接通知给上层（即应用程序），每一轮的 RTO 增长关系如下表格：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/10fa6882db83aee68f246c04fcb7d760.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"拔掉网线后-没有数据传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拔掉网线后-没有数据传输"}},[t._v("#")]),t._v(" 拔掉网线后，没有数据传输")]),t._v(" "),_("p",[t._v("针对拔掉网线后，没有数据传输的场景，还得看是否开启了 TCP keepalive 机制（TCP 保活机制）。")]),t._v(" "),_("p",[t._v("如果"),_("strong",[t._v("没有开启")]),t._v(" TCP keepalive 机制，在客户端拔掉网线后，并且双方都没有进行数据传输，那么客户端和服务端的 TCP 连接将会一直保持存在。")]),t._v(" "),_("p",[t._v("而如果"),_("strong",[t._v("开启")]),t._v("了 TCP keepalive 机制，在客户端拔掉网线后，即使双方都没有进行数据传输，在持续一段时间后，TCP 就会发送探测报文：")]),t._v(" "),_("ul",[_("li",[t._v("如果"),_("strong",[t._v("对端是正常工作")]),t._v("的。当 TCP 保活的探测报文发送给对端，对端会正常响应，这样 "),_("strong",[t._v("TCP 保活时间会被重置")]),t._v("，等待下一个 TCP 保活时间的到来。")]),t._v(" "),_("li",[t._v("如果"),_("strong",[t._v("对端主机宕机")]),t._v("（"),_("em",[t._v("注意不是进程崩溃，进程崩溃后操作系统在回收进程资源的时候，会发送 FIN 报文，而主机宕机则是无法感知的，所以需要 TCP 保活机制来探测对方是不是发生了主机宕机")]),t._v("），或对端由于其他原因导致报文不可达。当 TCP 保活的探测报文发送给对端后，石沉大海，没有响应，连续几次，达到保活探测次数后，"),_("strong",[t._v("TCP 会报告该 TCP 连接已经死亡")]),t._v("。")])]),t._v(" "),_("p",[t._v("所以，TCP 保活机制可以在双方没有数据交互的情况，通过探测报文，来确定对方的 TCP 连接是否存活。")]),t._v(" "),_("blockquote",[_("p",[t._v("TCP keepalive 机制具体是怎么样的？")])]),t._v(" "),_("p",[t._v("这个机制的原理是这样的：")]),t._v(" "),_("p",[t._v("定义一个时间段，在这个时间段内，如果没有任何连接相关的活动，TCP 保活机制会开始作用，每隔一个时间间隔，发送一个探测报文，该探测报文包含的数据非常少，如果连续几个探测报文都没有得到响应，则认为当前的 TCP 连接已经死亡，系统内核将错误信息通知给上层应用程序。")]),t._v(" "),_("p",[t._v("在 Linux 内核可以有对应的参数可以设置保活时间、保活探测的次数、保活探测的时间间隔，以下都为默认值：")]),t._v(" "),_("div",{staticClass:"language-plain line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-plain"}},[_("code",[t._v("net.ipv4.tcp_keepalive_time=7200\nnet.ipv4.tcp_keepalive_intvl=75  \nnet.ipv4.tcp_keepalive_probes=9\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("ul",[_("li",[t._v("tcp_keepalive_time=7200：表示保活时间是 7200 秒（2 小时），也就 2 小时内如果没有任何连接相关的活动，则会启动保活机制")]),t._v(" "),_("li",[t._v("tcp_keepalive_intvl=75：表示每次检测间隔 75 秒；")]),t._v(" "),_("li",[t._v("tcp_keepalive_probes=9：表示检测 9 次无响应，认为对方是不可达的，从而中断本次的连接。")])]),t._v(" "),_("p",[t._v("也就是说在 Linux 系统中，最少需要经过 2 小时 11 分 15 秒才可以发现一个「死亡」连接。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/46906e588260607680db43a68fe00278.png",alt:""}})]),t._v(" "),_("p",[t._v("注意，应用程序若想使用 TCP 保活机制需要通过 socket 接口设置 "),_("code",[t._v("SO_KEEPALIVE")]),t._v(" 选项才能够生效，如果没有设置，那么就无法使用 TCP 保活机制。")]),t._v(" "),_("blockquote",[_("p",[t._v("TCP keepalive 机制探测的时间也太长了吧？")])]),t._v(" "),_("p",[t._v("对的，是有点长。")]),t._v(" "),_("p",[t._v("TCP keepalive  是 "),_("strong",[t._v("TCP 层（内核态）")]),t._v(" 实现的，它是给所有基于 TCP 传输协议的程序一个兜底的方案。")]),t._v(" "),_("p",[t._v("实际上，我们应用层可以自己实现一套探测机制，可以在较短的时间内，探测到对方是否存活。")]),t._v(" "),_("p",[t._v("比如，web 服务软件一般都会提供 "),_("code",[t._v("keepalive_timeout")]),t._v(" 参数，用来指定 HTTP 长连接的超时时间。如果设置了 HTTP 长连接的超时时间是 60 秒，web 服务软件就会"),_("strong",[t._v("启动一个定时器")]),t._v("，如果客户端在完后一个 HTTP 请求后，在 60 秒内都没有再发起新的请求，"),_("strong",[t._v("定时器的时间一到，就会触发回调函数来释放该连接。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/c881f163091a4c6427d68b7144c3a980.png",alt:"图片"}})]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("客户端拔掉网线后，并不会直接影响 TCP 连接状态。所以，拔掉网线后，TCP 连接是否还会存在，关键要看拔掉网线之后，有没有进行数据传输。")]),t._v(" "),_("p",[t._v("有数据传输的情况：")]),t._v(" "),_("ul",[_("li",[t._v("在客户端拔掉网线后，如果服务端发送了数据报文，那么在服务端重传次数没有达到最大值之前，客户端就插回了网线，那么双方原本的 TCP 连接还是能正常存在，就好像什么事情都没有发生。")]),t._v(" "),_("li",[t._v("在客户端拔掉网线后，如果服务端发送了数据报文，在客户端插回网线之前，服务端重传次数达到了最大值时，服务端就会断开 TCP 连接。等到客户端插回网线后，向服务端发送了数据，因为服务端已经断开了与客户端相同四元组的 TCP 连接，所以就会回 RST 报文，客户端收到后就会断开 TCP 连接。至此，双方的 TCP 连接都断开了。")])]),t._v(" "),_("p",[t._v("没有数据传输的情况：")]),t._v(" "),_("ul",[_("li",[t._v("如果双方都没有开启 TCP keepalive 机制，那么在客户端拔掉网线后，如果客户端一直不插回网线，那么客户端和服务端的 TCP 连接状态将会一直保持存在。")]),t._v(" "),_("li",[t._v("如果双方都开启了 TCP keepalive 机制，那么在客户端拔掉网线后，如果客户端一直不插回网线，TCP keepalive 机制会探测到对方的 TCP 连接没有存活，于是就会断开 TCP 连接。而如果在 TCP 探测期间，客户端插回了网线，那么双方原本的 TCP 连接还是能正常存在。")])]),t._v(" "),_("p",[t._v("除了客户端拔掉网线的场景，还有客户端「"),_("a",{attrs:{href:"https://xiaolincoding.com/network/3_tcp/tcp_down_and_crash.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("主机宕机和进程崩溃"),_("OutboundLink")],1),t._v("」的两种场景。")]),t._v(" "),_("p",[t._v("第一个场景，客户端宕机这件事跟拔掉网线是一样无法被服务端的感知的，所以如果在没有数据传输，并且没有开启 TCP keepalive 机制时，，"),_("strong",[t._v("服务端的 TCP 连接将会一直处于 ESTABLISHED 连接状态")]),t._v("，直到服务端重启进程。")]),t._v(" "),_("p",[t._v("所以，我们可以得知一个点。在没有使用 TCP 保活机制，且双方不传输数据的情况下，一方的 TCP 连接处在 ESTABLISHED 状态时，并不代表另一方的 TCP 连接还一定是正常的。")]),t._v(" "),_("p",[t._v("第二个场景，客户端的进程崩溃后，客户端的内核就会向服务端发送 FIN 报文，"),_("strong",[t._v("与服务端进行四次挥手")]),t._v("。")]),t._v(" "),_("p",[t._v("所以，即使没有开启 TCP keepalive，且双方也没有数据交互的情况下，如果其中一方的进程发生了崩溃，这个过程操作系统是可以感知的到的，于是就会发送 FIN 报文给对方，然后与对方进行 TCP 四次挥手。")]),t._v(" "),_("p",[t._v("完！")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("最新的图解文章都在公众号首发，别忘记关注哦！！如果你想加入百人技术交流群，扫码下方二维码回复「加群」。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E5%85%B6%E4%BB%96/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BB%8B%E7%BB%8D.png",alt:"img"}})])])}),[],!1,null,null,null);_.default=s.exports}}]);