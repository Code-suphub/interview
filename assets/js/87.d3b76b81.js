(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{365:function(_,t,v){"use strict";v.r(t);var s=v(14),n=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_4-18-tcp-和-udp-可以使用同一个端口吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-18-tcp-和-udp-可以使用同一个端口吗"}},[_._v("#")]),_._v(" 4.18 TCP 和 UDP 可以使用同一个端口吗？")]),_._v(" "),t("p",[_._v("大家好，我是小林。")]),_._v(" "),t("p",[_._v("之前有读者在字节面试的时候，被问到："),t("strong",[_._v("TCP 和 UDP 可以同时监听相同的端口吗？")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/%E6%8F%90%E9%97%AE.png",alt:""}})]),_._v(" "),t("p",[_._v("关于端口的知识点，还是挺多可以讲的，比如还可以牵扯到这几个问题：")]),_._v(" "),t("ul",[t("li",[_._v("多个 TCP 服务进程可以同时绑定同一个端口吗？")]),_._v(" "),t("li",[_._v("重启 TCP 服务进程时，为什么会出现“Address in use”的报错信息？又该怎么避免？")]),_._v(" "),t("li",[_._v("客户端的端口可以重复使用吗？")]),_._v(" "),t("li",[_._v("客户端 TCP 连接 TIME_WAIT 状态过多，会导致端口资源耗尽而无法建立新的连接吗？")])]),_._v(" "),t("p",[_._v("所以，这次就跟大家盘一盘这些问题。")]),_._v(" "),t("h2",{attrs:{id:"tcp-和-udp-可以同时绑定相同的端口吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和-udp-可以同时绑定相同的端口吗"}},[_._v("#")]),_._v(" TCP 和 UDP 可以同时绑定相同的端口吗？")]),_._v(" "),t("p",[_._v("其实我感觉这个问题「TCP 和 UDP 可以同时监听相同的端口吗？」表述有问题，这个问题应该表述成「"),t("strong",[_._v("TCP 和 UDP 可以同时绑定相同的端口吗？")]),_._v("」")]),_._v(" "),t("p",[_._v("因为「监听」这个动作是在 TCP 服务端网络编程中才具有的，而 UDP 服务端网络编程中是没有「监听」这个动作的。")]),_._v(" "),t("p",[_._v("TCP 和 UDP 服务端网络相似的一个地方，就是会调用 bind 绑定端口。")]),_._v(" "),t("p",[_._v("给大家贴一下  TCP 和 UDP 网络编程的区别就知道了。")]),_._v(" "),t("p",[_._v("TCP 网络编程如下，服务端执行 listen() 系统调用就是监听端口的动作。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/tcp%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B.png",alt:""}})]),_._v(" "),t("p",[_._v("UDP 网络编程如下，服务端是没有监听这个动作的，只有执行  bind()  系统调用来绑定端口的动作。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/udp%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B.png",alt:""}})]),_._v(" "),t("blockquote",[t("p",[_._v("TCP 和 UDP 可以同时绑定相同的端口吗？")])]),_._v(" "),t("p",[_._v("答案："),t("strong",[_._v("可以的")]),_._v("。")]),_._v(" "),t("p",[_._v("在数据链路层中，通过 MAC 地址来寻找局域网中的主机。在网际层中，通过 IP 地址来寻找网络中互连的主机或路由器。在传输层中，需要通过端口进行寻址，来识别同一计算机中同时通信的不同应用程序。")]),_._v(" "),t("p",[_._v("所以，传输层的「端口号」的作用，是为了区分同一个主机上不同应用程序的数据包。")]),_._v(" "),t("p",[_._v("传输层有两个传输协议分别是 TCP 和 UDP，在内核中是两个完全独立的软件模块。")]),_._v(" "),t("p",[_._v("当主机收到数据包后，可以在 IP 包头的「协议号」字段知道该数据包是 TCP/UDP，所以可以根据这个信息确定送给哪个模块（TCP/UDP）处理，送给 TCP/UDP 模块的报文根据「端口号」确定送给哪个应用程序处理。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/tcp%E5%92%8Cudp%E6%A8%A1%E5%9D%97.jpeg",alt:""}})]),_._v(" "),t("p",[_._v("因此，TCP/UDP 各自的端口号也相互独立，如 TCP 有一个 80 号端口，UDP 也可以有一个 80 号端口，二者并不冲突。")]),_._v(" "),t("blockquote",[t("p",[_._v("验证结果")])]),_._v(" "),t("p",[_._v("我简单写了 TCP 和 UDP 服务端的程序，它们都绑定同一个端口号 8888。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/tcp%E5%92%8Cudp%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%A8%8B%E5%BA%8F.png",alt:""}})]),_._v(" "),t("p",[_._v("运行这两个程序后，通过 netstat 命令可以看到，TCP 和 UDP 是可以同时绑定同一个端口号的。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/1.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"多个-tcp-服务进程可以绑定同一个端口吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多个-tcp-服务进程可以绑定同一个端口吗"}},[_._v("#")]),_._v(" 多个 TCP 服务进程可以绑定同一个端口吗？")]),_._v(" "),t("p",[_._v("还是以前面的 TCP 服务端程序作为例子，启动两个同时绑定同一个端口的 TCP 服务进程。")]),_._v(" "),t("p",[_._v("运行第一个  TCP 服务进程之后，netstat 命令可以查看，8888 端口已经被一个 TCP 服务进程绑定并监听了，如下图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/2.png",alt:""}})]),_._v(" "),t("p",[_._v("接着，运行第二个 TCP 服务进程的时候，就报错了“Address already in use”，如下图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/3.png",alt:""}})]),_._v(" "),t("p",[_._v("我上面的测试案例是两个 TCP 服务进程同时绑定地址和端口是：0.0.0.0 地址和 8888 端口，所以才出现的错误。")]),_._v(" "),t("p",[_._v("如果两个 TCP 服务进程绑定的 IP 地址不同，而端口相同的话，也是可以绑定成功的，如下图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/4.png",alt:""}})]),_._v(" "),t("p",[_._v("所以，默认情况下，针对「多个 TCP 服务进程可以绑定同一个端口吗？」这个问题的答案是："),t("strong",[_._v("如果两个 TCP 服务进程同时绑定的 IP 地址和端口都相同，那么执行 bind() 时候就会出错，错误是“Address already in use”")]),_._v("。")]),_._v(" "),t("p",[_._v("注意，如果 TCP 服务进程 A 绑定的地址是  0.0.0.0 和端口 8888，而如果 TCP 服务进程 B 绑定的地址是 192.168.1.100 地址（或者其他地址）和端口 8888，那么执行 bind() 时候也会出错。")]),_._v(" "),t("p",[_._v("这是因为 0.0.0.0  地址比较特殊，代表任意地址，意味着绑定了 0.0.0.0  地址，相当于把主机上的所有 IP 地址都绑定了。")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("如果想多个进程绑定相同的 IP 地址和端口，也是有办法的，就是对 socket 设置 SO_REUSEPORT 属性（内核 3.9 版本提供的新特性），本文不对 SO_REUSEPORT 做具体介绍，感兴趣的同学自行去学习。")])]),_._v(" "),t("blockquote",[t("p",[_._v("重启 TCP 服务进程时，为什么会有“Address in use”的报错信息？")])]),_._v(" "),t("p",[_._v("TCP 服务进程需要绑定一个 IP 地址和一个端口，然后就监听在这个地址和端口上，等待客户端连接的到来。")]),_._v(" "),t("p",[_._v("然后在实践中，我们可能会经常碰到一个问题，当 TCP 服务进程重启之后，总是碰到“Address in use”的报错信息，TCP 服务进程不能很快地重启，而是要过一会才能重启成功。")]),_._v(" "),t("p",[_._v("这是为什么呢？")]),_._v(" "),t("p",[_._v("当我们重启 TCP 服务进程的时候，意味着通过服务器端发起了关闭连接操作，于是就会经过四次挥手，而对于主动关闭方，会在 TIME_WAIT 这个状态里停留一段时间，这个时间大约为 2MSL。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.png",alt:""}})]),_._v(" "),t("p",[t("strong",[_._v("当 TCP 服务进程重启时，服务端会出现 TIME_WAIT 状态的连接，TIME_WAIT 状态的连接使用的 IP+PORT 仍然被认为是一个有效的 IP+PORT 组合，相同机器上不能够在该 IP+PORT 组合上进行绑定，那么执行 bind() 函数的时候，就会返回了 Address already in use 的错误")]),_._v("。")]),_._v(" "),t("p",[_._v("而等 TIME_WAIT 状态的连接结束后，重启 TCP 服务进程就能成功。")]),_._v(" "),t("blockquote",[t("p",[_._v("重启 TCP 服务进程时，如何避免“Address in use”的报错信息？")])]),_._v(" "),t("p",[_._v("我们可以在调用 bind 前，对 socket 设置 SO_REUSEADDR 属性，可以解决这个问题。")]),_._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("int")]),_._v(" on "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("setsockopt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("listenfd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" SOL_SOCKET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" SO_REUSEADDR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("&")]),_._v("on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("sizeof")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br")])]),t("p",[_._v("因为 SO_REUSEADDR 作用是："),t("strong",[_._v("如果当前启动进程绑定的 IP+PORT 与处于 TIME_WAIT 状态的连接占用的 IP+PORT 存在冲突，但是新启动的进程使用了 SO_REUSEADDR 选项，那么该进程就可以绑定成功")]),_._v("。")]),_._v(" "),t("p",[_._v("举个例子，服务端有个监听 0.0.0.0 地址和 8888 端口的 TCP 服务进程。‍")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/5.png",alt:""}})]),_._v(" "),t("p",[_._v("有个客户端（IP 地址：192.168.1.100）已经和服务端（IP 地址：172.19.11.200）建立了 TCP 连接，那么在 TCP 服务进程重启时，服务端会与客户端经历四次挥手，服务端的 TCP 连接会短暂处于 TIME_WAIT 状态：")]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("客户端地址:端口           服务端地址:端口        TCP 连接状态\n"),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("192.168")]),_._v(".1.100:37272     "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("172.19")]),_._v(".11.200:8888    TIME_WAI\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br")])]),t("p",[_._v("如果 TCP 服务进程没有对 socket 设置 SO_REUSEADDR 属性，那么在重启时，由于存在一个和绑定 IP+PORT 一样的 TIME_WAIT 状态的连接，那么在执行 bind() 函数的时候，就会返回了 Address already in use 的错误。")]),_._v(" "),t("p",[_._v("如果 TCP 服务进程对 socket 设置 SO_REUSEADDR 属性了，那么在重启时，即使存在一个和绑定 IP+PORT 一样的 TIME_WAIT 状态的连接，依然可以正常绑定成功，因此可以正常重启成功。")]),_._v(" "),t("p",[_._v("因此，在所有 TCP 服务器程序中，调用 bind 之前最好对 socket 设置 SO_REUSEADDR 属性，这不会产生危害，相反，它会帮助我们在很快时间内重启服务端程序。‍")]),_._v(" "),t("p",[t("strong",[_._v("前面我提到过这个问题")]),_._v("：如果 TCP 服务进程 A 绑定的地址是  0.0.0.0 和端口 8888，而如果 TCP 服务进程 B 绑定的地址是 192.168.1.100 地址（或者其他地址）和端口 8888，那么执行 bind() 时候也会出错。")]),_._v(" "),t("p",[_._v("这个问题也可以由 SO_REUSEADDR 解决，因为它的"),t("strong",[_._v("另外一个作用")]),_._v("：绑定的 IP 地址 + 端口时，只要 IP 地址不是正好 (exactly) 相同，那么允许绑定。")]),_._v(" "),t("p",[_._v("比如，0.0.0.0:8888 和 192.168.1.100:8888，虽然逻辑意义上前者包含了后者，但是 0.0.0.0 泛指所有本地 IP，而 192.168.1.100 特指某一 IP，两者并不是完全相同，所以在对 socket 设置 SO_REUSEADDR 属性后，那么执行 bind() 时候就会绑定成功。")]),_._v(" "),t("h2",{attrs:{id:"客户端的端口可以重复使用吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端的端口可以重复使用吗"}},[_._v("#")]),_._v(" 客户端的端口可以重复使用吗？")]),_._v(" "),t("p",[_._v("客户端在执行 connect 函数的时候，会在内核里随机选择一个端口，然后向服务端发起 SYN 报文，然后与服务端进行三次握手。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/tcp%E7%BC%96%E7%A8%8B.png",alt:""}})]),_._v(" "),t("p",[_._v("所以，客户端的端口选择的发生在 connect 函数，内核在选择端口的时候，会从 "),t("code",[_._v("net.ipv4.ip_local_port_range")]),_._v(" 这个内核参数指定的范围来选取一个端口作为客户端端口。")]),_._v(" "),t("p",[_._v("该参数的默认值是 32768 61000，意味着端口总可用的数量是 61000 - 32768 = 28232 个。")]),_._v(" "),t("p",[_._v("当客户端与服务端完成 TCP 连接建立后，我们可以通过 netstat 命令查看 TCP 连接。")]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("netstat")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[_._v("-napt")]),_._v("\n协议  源ip地址:端口            目的ip地址：端口         状态\ntcp  "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("192.168")]),_._v(".110.182.64992   "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("117.147")]),_._v(".199.51.443     ESTABLISHED\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("blockquote",[t("p",[_._v("那问题来了，上面客户端已经用了 64992 端口，那么还可以继续使用该端口发起连接吗？")])]),_._v(" "),t("p",[_._v("这个问题，很多同学都会说不可以继续使用该端口了，如果按这个理解的话，默认情况下客户端可以选择的端口是 28232 个，那么意味着客户端只能最多建立  28232 个 TCP 连接，如果真是这样的话，那么这个客户端并发连接也太少了吧，所以这是错误理解。")]),_._v(" "),t("p",[_._v("正确的理解是，"),t("strong",[_._v("TCP 连接是由四元组（源 IP 地址，源端口，目的 IP 地址，目的端口）唯一确认的，那么只要四元组中其中一个元素发生了变化，那么就表示不同的 TCP 连接的。所以如果客户端已使用端口 64992 与服务端 A 建立了连接，那么客户端要与服务端 B 建立连接，还是可以使用端口 64992 的，因为内核是通过四元组信息来定位一个 TCP 连接的，并不会因为客户端的端口号相同，而导致连接冲突的问题。")])]),_._v(" "),t("p",[_._v("比如下面这张图，有 2 个 TCP 连接，左边是客户端，右边是服务端，客户端使用了相同的端口 50004 与两个服务端建立了 TCP 连接。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/6.jpeg",alt:""}})]),_._v(" "),t("p",[_._v("仔细看，上面这两条 TCP 连接的四元组信息中的「目的 IP 地址」是不同的，一个是 180.101.49.12，另外一个是 180.101.49.11。")]),_._v(" "),t("blockquote",[t("p",[_._v("多个客户端可以 bind 同一个端口吗？")])]),_._v(" "),t("p",[_._v("bind 函数虽然常用于服务端网络编程中，但是它也是用于客户端的。")]),_._v(" "),t("p",[_._v("前面我们知道，客户端是在调用 connect 函数的时候，由内核随机选取一个端口作为连接的端口。")]),_._v(" "),t("p",[_._v("而如果我们想自己指定连接的端口，就可以用 bind 函数来实现：客户端先通过 bind 函数绑定一个端口，然后调用 connect 函数就会跳过端口选择的过程了，转而使用 bind 时确定的端口。")]),_._v(" "),t("p",[_._v("针对这个问题：多个客户端可以 bind 同一个端口吗？")]),_._v(" "),t("p",[_._v("要看多个客户端绑定的 IP + PORT 是否都相同，如果都是相同的，那么在执行 bind() 时候就会出错，错误是“Address already in use”。")]),_._v(" "),t("p",[_._v("如果一个绑定在 192.168.1.100:6666，一个绑定在 192.168.1.200:6666，因为 IP 不相同，所以执行 bind() 的时候，能正常绑定。")]),_._v(" "),t("p",[_._v("所以，如果多个客户端同时绑定的 IP 地址和端口都是相同的，那么执行 bind() 时候就会出错，错误是“Address already in use”。")]),_._v(" "),t("p",[_._v("一般而言，客户端不建议使用 bind 函数，应该交由 connect 函数来选择端口会比较好，因为客户端的端口通常都没什么意义。")]),_._v(" "),t("blockquote",[t("p",[_._v("客户端 TCP 连接 TIME_WAIT 状态过多，会导致端口资源耗尽而无法建立新的连接吗？")])]),_._v(" "),t("p",[_._v("针对这个问题要看，客户端是否都是与同一个服务器（目标地址和目标端口一样）建立连接。")]),_._v(" "),t("p",[_._v("如果客户端都是与同一个服务器（目标地址和目标端口一样）建立连接，那么如果客户端 TIME_WAIT 状态的连接过多，当端口资源被耗尽，就无法与这个服务器再建立连接了。")]),_._v(" "),t("p",[_._v("但是，"),t("strong",[_._v("因为只要客户端连接的服务器不同，端口资源可以重复使用的")]),_._v("。")]),_._v(" "),t("p",[_._v("所以，如果客户端都是与不同的服务器建立连接，即使客户端端口资源只有几万个，客户端发起百万级连接也是没问题的（当然这个过程还会受限于其他资源，比如文件描述符、内存、CPU 等）。")]),_._v(" "),t("blockquote",[t("p",[_._v("如何解决客户端 TCP 连接 TIME_WAIT 过多，导致无法与同一个服务器建立连接的问题？")])]),_._v(" "),t("p",[_._v("前面我们提到，如果客户端都是与同一个服务器（目标地址和目标端口一样）建立连接，那么如果客户端 TIME_WAIT 状态的连接过多，当端口资源被耗尽，就无法与这个服务器再建立连接了。")]),_._v(" "),t("p",[_._v("针对这个问题，也是有解决办法的，那就是打开 "),t("code",[_._v("net.ipv4.tcp_tw_reuse")]),_._v(" 这个内核参数。")]),_._v(" "),t("p",[t("strong",[_._v("因为开启了这个内核参数后，客户端调用 connect  函数时，如果选择到的端口，已经被相同四元组的连接占用的时候，就会判断该连接是否处于  TIME_WAIT 状态，如果该连接处于 TIME_WAIT 状态并且 TIME_WAIT 状态持续的时间超过了 1 秒，那么就会重用这个连接，然后就可以正常使用该端口了。")])]),_._v(" "),t("p",[_._v("举个例子，假设客户端已经与服务器建立了一个 TCP 连接，并且这个状态处于  TIME_WAIT 状态：")]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("客户端地址:端口           服务端地址:端口         TCP 连接状态\n"),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("192.168")]),_._v(".1.100:2222      "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("172.19")]),_._v(".11.21:8888     TIME_WAIT\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br")])]),t("p",[_._v("然后客户端又与该服务器（172.19.11.21:8888）发起了连接，"),t("strong",[_._v("在调用 connect 函数时，内核刚好选择了 2222 端口，接着发现已经被相同四元组的连接占用了：")])]),_._v(" "),t("ul",[t("li",[_._v("如果"),t("strong",[_._v("没有开启")]),_._v(" net.ipv4.tcp_tw_reuse  内核参数，那么内核就会选择下一个端口，然后继续判断，直到找到一个没有被相同四元组的连接使用的端口，如果端口资源耗尽还是没找到，那么 connect 函数就会返回错误。")]),_._v(" "),t("li",[_._v("如果"),t("strong",[_._v("开启")]),_._v("了 net.ipv4.tcp_tw_reuse  内核参数，就会判断该四元组的连接状态是否处于 TIME_WAIT 状态，"),t("strong",[_._v("如果连接处于 TIME_WAIT 状态并且该状态持续的时间超过了 1 秒，那么就会重用该连接")]),_._v("，于是就可以使用 2222 端口了，这时 connect 就会返回成功。")])]),_._v(" "),t("p",[_._v("再次提醒一次，开启了 net.ipv4.tcp_tw_reuse  内核参数，是客户端（连接发起方）在调用 connect() 函数时才起作用，所以在服务端开启这个参数是没有效果的。")]),_._v(" "),t("blockquote",[t("p",[_._v("客户端端口选择的流程总结")])]),_._v(" "),t("p",[_._v("至此，我们已经把客户端在执行 connect 函数时，内核选择端口的情况大致说了一遍，为了让大家更明白客户端端口的选择过程，我画了一流程图。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/network/port/%E7%AB%AF%E5%8F%A3%E9%80%89%E6%8B%A9.jpg",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" "),t("strong",[_._v("总结")])]),_._v(" "),t("blockquote",[t("p",[_._v("TCP 和 UDP 可以同时绑定相同的端口吗？")])]),_._v(" "),t("p",[_._v("可以的。")]),_._v(" "),t("p",[_._v("TCP 和 UDP 传输协议，在内核中是由两个完全独立的软件模块实现的。")]),_._v(" "),t("p",[_._v("当主机收到数据包后，可以在 IP 包头的「协议号」字段知道该数据包是 TCP/UDP，所以可以根据这个信息确定送给哪个模块（TCP/UDP）处理，送给 TCP/UDP 模块的报文根据「端口号」确定送给哪个应用程序处理。")]),_._v(" "),t("p",[_._v("因此，TCP/UDP 各自的端口号也相互独立，互不影响。")]),_._v(" "),t("blockquote",[t("p",[_._v("多个 TCP 服务进程可以同时绑定同一个端口吗？")])]),_._v(" "),t("p",[_._v("如果两个 TCP 服务进程同时绑定的 IP 地址和端口都相同，那么执行 bind() 时候就会出错，错误是“Address already in use”。")]),_._v(" "),t("p",[_._v("如果两个 TCP 服务进程绑定的端口都相同，而 IP 地址不同，那么执行 bind() 不会出错。")]),_._v(" "),t("blockquote",[t("p",[_._v("如何解决服务端重启时，报错“Address already in use”的问题？")])]),_._v(" "),t("p",[_._v("当我们重启 TCP 服务进程的时候，意味着通过服务器端发起了关闭连接操作，于是就会经过四次挥手，而对于主动关闭方，会在 TIME_WAIT 这个状态里停留一段时间，这个时间大约为 2MSL。")]),_._v(" "),t("p",[_._v("当 TCP 服务进程重启时，服务端会出现 TIME_WAIT 状态的连接，TIME_WAIT 状态的连接使用的 IP+PORT 仍然被认为是一个有效的 IP+PORT 组合，相同机器上不能够在该 IP+PORT 组合上进行绑定，那么执行 bind() 函数的时候，就会返回了 Address already in use 的错误。")]),_._v(" "),t("p",[_._v("要解决这个问题，我们可以对 socket 设置 SO_REUSEADDR 属性。")]),_._v(" "),t("p",[_._v("这样即使存在一个和绑定 IP+PORT 一样的 TIME_WAIT 状态的连接，依然可以正常绑定成功，因此可以正常重启成功。")]),_._v(" "),t("blockquote",[t("p",[_._v("客户端的端口可以重复使用吗？")])]),_._v(" "),t("p",[_._v("在客户端执行 connect 函数的时候，只要客户端连接的服务器不是同一个，内核允许端口重复使用。")]),_._v(" "),t("p",[_._v("TCP 连接是由四元组（源 IP 地址，源端口，目的 IP 地址，目的端口）唯一确认的，那么只要四元组中其中一个元素发生了变化，那么就表示不同的 TCP 连接的。")]),_._v(" "),t("p",[_._v("所以，如果客户端已使用端口 64992 与服务端 A 建立了连接，那么客户端要与服务端 B 建立连接，还是可以使用端口 64992 的，因为内核是通过四元祖信息来定位一个 TCP 连接的，并不会因为客户端的端口号相同，而导致连接冲突的问题。")]),_._v(" "),t("blockquote",[t("p",[_._v("客户端 TCP 连接 TIME_WAIT 状态过多，会导致端口资源耗尽而无法建立新的连接吗？")])]),_._v(" "),t("p",[_._v("要看客户端是否都是与同一个服务器（目标地址和目标端口一样）建立连接。")]),_._v(" "),t("p",[_._v("如果客户端都是与同一个服务器（目标地址和目标端口一样）建立连接，那么如果客户端 TIME_WAIT 状态的连接过多，当端口资源被耗尽，就无法与这个服务器再建立连接了。即使在这种状态下，还是可以与其他服务器建立连接的，只要客户端连接的服务器不是同一个，那么端口是重复使用的。")]),_._v(" "),t("blockquote",[t("p",[_._v("如何解决客户端 TCP 连接 TIME_WAIT 过多，导致无法与同一个服务器建立连接的问题？")])]),_._v(" "),t("p",[_._v("打开 net.ipv4.tcp_tw_reuse  这个内核参数。")]),_._v(" "),t("p",[_._v("因为开启了这个内核参数后，客户端调用 connect  函数时，如果选择到的端口，已经被相同四元组的连接占用的时候，就会判断该连接是否处于  TIME_WAIT 状态。")]),_._v(" "),t("p",[_._v("如果该连接处于 TIME_WAIT 状态并且 TIME_WAIT 状态持续的时间超过了 1 秒，那么就会重用这个连接，然后就可以正常使用该端口了。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("最新的图解文章都在公众号首发，别忘记关注哦！！如果你想加入百人技术交流群，扫码下方二维码回复「加群」。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E5%85%B6%E4%BB%96/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BB%8B%E7%BB%8D.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);