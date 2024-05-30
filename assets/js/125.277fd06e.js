(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{406:function(v,_,a){"use strict";a.r(_);var s=a(14),t=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"_2-2-磁盘比内存慢几万倍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-磁盘比内存慢几万倍"}},[v._v("#")]),v._v(" 2.2 磁盘比内存慢几万倍？")]),v._v(" "),_("p",[v._v("大家如果想自己组装电脑的话，肯定需要购买一个 CPU，但是存储器方面的设备，分类比较多，那我们肯定不能只买一种存储器，比如你除了要买内存，还要买硬盘，而针对硬盘我们还可以选择是固态硬盘还是机械硬盘。")]),v._v(" "),_("p",[v._v("相信大家都知道内存和硬盘都属于计算机的存储设备，断电后内存的数据是会丢失的，而硬盘则不会，因为硬盘是持久化存储设备，同时也是一个 I/O 设备。")]),v._v(" "),_("p",[v._v("但其实 CPU 内部也有存储数据的组件，这个应该比较少人注意到，比如"),_("strong",[v._v("寄存器、CPU L1/L2/L3 Cache")]),v._v(" 也都是属于存储设备，只不过它们能存储的数据非常小，但是它们因为靠近 CPU 核心，所以访问速度都非常快，快过硬盘好几个数量级别。")]),v._v(" "),_("p",[v._v("问题来了，"),_("strong",[v._v("那机械硬盘、固态硬盘、内存这三个存储器，到底和 CPU L1 Cache 相比速度差多少倍呢？")])]),v._v(" "),_("p",[v._v("在回答这个问题之前，我们先来看看「"),_("strong",[v._v("存储器的层次结构")]),v._v("」，好让我们对存储器设备有一个整体的认识。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/xiaolincoder/ImageHost3/main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E5%99%A8/%E5%AD%98%E5%82%A8%E5%99%A8%E6%8F%90%E7%BA%B2.png",alt:""}})]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"存储器的层次结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器的层次结构"}},[v._v("#")]),v._v(" 存储器的层次结构")]),v._v(" "),_("p",[v._v("我们想象中一个场景，大学期末准备考试了，你前去图书馆临时抱佛脚。那么，在看书的时候，我们的大脑会思考问题，也会记忆知识点，另外我们通常也会把常用的书放在自己的桌子上，当我们要找一本不常用的书，则会去图书馆的书架找。")]),v._v(" "),_("p",[v._v("就是这么一个小小的场景，已经把计算机的存储结构基本都涵盖了。")]),v._v(" "),_("p",[v._v("我们可以把 CPU 比喻成我们的大脑，大脑正在思考的东西，就好比 CPU 中的"),_("strong",[v._v("寄存器")]),v._v("，处理速度是最快的，但是能存储的数据也是最少的，毕竟我们也不能一下同时思考太多的事情，除非你练过。")]),v._v(" "),_("p",[v._v("我们大脑中的记忆，就好比 "),_("strong",[v._v("CPU Cache")]),v._v("，中文称为 CPU 高速缓存，处理速度相比寄存器慢了一点，但是能存储的数据也稍微多了一些。")]),v._v(" "),_("p",[v._v("CPU Cache 通常会分为 "),_("strong",[v._v("L1、L2、L3 三层")]),v._v("，其中 L1 Cache 通常分成「数据缓存」和「指令缓存」，L1 是距离 CPU 最近的，因此它比 L2、L3 的读写速度都快、存储空间都小。我们大脑中短期记忆，就好比 L1 Cache，而长期记忆就好比 L2/L3 Cache。")]),v._v(" "),_("p",[v._v("寄存器和 CPU Cache 都是在 CPU 内部，跟 CPU 挨着很近，因此它们的读写速度都相当的快，但是能存储的数据很少，毕竟 CPU 就这么丁点大。")]),v._v(" "),_("p",[v._v("知道 CPU 内部的存储器的层次分布，我们放眼看看 CPU 外部的存储器。")]),v._v(" "),_("p",[v._v("当我们大脑记忆中没有资料的时候，可以从书桌或书架上拿书来阅读，那我们桌子上的书，就好比"),_("strong",[v._v("内存")]),v._v("，我们虽然可以一伸手就可以拿到，但读写速度肯定远慢于寄存器，那图书馆书架上的书，就好比"),_("strong",[v._v("硬盘")]),v._v("，能存储的数据非常大，但是读写速度相比内存差好几个数量级，更别说跟寄存器的差距了。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/%E5%AD%A6%E4%B9%A0%E4%B8%8E%E5%AD%98%E5%82%A8%E5%B1%82%E6%AC%A1%E5%85%B3%E7%B3%BB.png",alt:""}})]),v._v(" "),_("p",[v._v("我们从图书馆书架取书，把书放到桌子上，再阅读书，我们大脑就会记忆知识点，然后再经过大脑思考，这一系列过程相当于，数据从硬盘加载到内存，再从内存加载到 CPU 的寄存器和 Cache 中，然后再通过 CPU 进行处理和计算。")]),v._v(" "),_("p",[_("strong",[v._v("对于存储器，它的速度越快、能耗会越高、而且材料的成本也是越贵的，以至于速度快的存储器的容量都比较小。")])]),v._v(" "),_("p",[v._v("CPU 里的寄存器和 Cache，是整个计算机存储器中价格最贵的，虽然存储空间很小，但是读写速度是极快的，而相对比较便宜的内存和硬盘，速度肯定比不上 CPU 内部的存储器，但是能弥补存储空间的不足。")]),v._v(" "),_("p",[v._v("存储器通常可以分为这么几个级别：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/%E5%AD%98%E5%82%A8%E5%8C%BA%E5%88%86%E7%BA%A7.png",alt:""}})]),v._v(" "),_("ul",[_("li",[v._v("寄存器；")]),v._v(" "),_("li",[v._v("CPU Cache；\n"),_("ol",[_("li",[v._v("L1-Cache；")]),v._v(" "),_("li",[v._v("L2-Cache；")]),v._v(" "),_("li",[v._v("L3-Cahce；")])])]),v._v(" "),_("li",[v._v("内存；")]),v._v(" "),_("li",[v._v("SSD/HDD 硬盘")])]),v._v(" "),_("h3",{attrs:{id:"寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#寄存器"}},[v._v("#")]),v._v(" 寄存器")]),v._v(" "),_("p",[v._v("最靠近 CPU 的控制单元和逻辑计算单元的存储器，就是寄存器了，它使用的材料速度也是最快的，因此价格也是最贵的，那么数量不能很多。")]),v._v(" "),_("p",[v._v("存储器的数量通常在几十到几百之间，每个寄存器可以用来存储一定的字节（byte）的数据。比如：")]),v._v(" "),_("ul",[_("li",[v._v("32 位 CPU 中大多数寄存器可以存储 "),_("code",[v._v("4")]),v._v(" 个字节；")]),v._v(" "),_("li",[v._v("64 位 CPU 中大多数寄存器可以存储 "),_("code",[v._v("8")]),v._v(" 个字节。")])]),v._v(" "),_("p",[v._v("寄存器的访问速度非常快，一般要求在半个 CPU 时钟周期内完成读写，CPU 时钟周期跟 CPU 主频息息相关，比如 2 GHz 主频的 CPU，那么它的时钟周期就是 1/2G，也就是 0.5ns（纳秒）。")]),v._v(" "),_("p",[v._v("CPU 处理一条指令的时候，除了读写寄存器，还需要解码指令、控制指令执行和计算。如果寄存器的速度太慢，则会拉长指令的处理周期，从而给用户的感觉，就是电脑「很慢」。")]),v._v(" "),_("h3",{attrs:{id:"cpu-cache"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-cache"}},[v._v("#")]),v._v(" CPU Cache")]),v._v(" "),_("p",[v._v("CPU Cache 用的是一种叫 "),_("strong",[v._v("SRAM（"),_("em",[v._v("Static Random-Access")]),v._v(" Memory，静态随机存储器）")]),v._v(" 的芯片。")]),v._v(" "),_("p",[v._v("SRAM 之所以叫「静态」存储器，是因为只要有电，数据就可以保持存在，而一旦断电，数据就会丢失了。")]),v._v(" "),_("p",[v._v("在 SRAM 里面，一个 bit 的数据，通常需要 6 个晶体管，所以 SRAM 的存储密度不高，同样的物理空间下，能存储的数据是有限的，不过也因为 SRAM 的电路简单，所以访问速度非常快。")]),v._v(" "),_("p",[v._v("CPU 的高速缓存，通常可以分为 L1、L2、L3 这样的三层高速缓存，也称为一级缓存、二级缓存、三级缓存。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/CPU-Cache.png",alt:""}})]),v._v(" "),_("h4",{attrs:{id:"l1-高速缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#l1-高速缓存"}},[v._v("#")]),v._v(" L1 高速缓存")]),v._v(" "),_("p",[v._v("L1 高速缓存的访问速度几乎和寄存器一样快，通常只需要 "),_("code",[v._v("2~4")]),v._v(" 个时钟周期，而大小在几十 KB 到几百 KB 不等。")]),v._v(" "),_("p",[v._v("每个 CPU 核心都有一块属于自己的 L1 高速缓存，指令和数据在 L1 是分开存放的，所以 L1 高速缓存通常分成"),_("strong",[v._v("指令缓存")]),v._v("和"),_("strong",[v._v("数据缓存")]),v._v("。")]),v._v(" "),_("p",[v._v("在 Linux 系统，我们可以通过这条命令，查看 CPU 里的 L1 Cache「数据」缓存的容量大小：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("cat")]),v._v(" /sys/devices/system/cpu/cpu0/cache/index0/size\n32K\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("而查看 L1 Cache「指令」缓存的容量大小，则是：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("cat")]),v._v(" /sys/devices/system/cpu/cpu0/cache/index1/size\n32K\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("h4",{attrs:{id:"l2-高速缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#l2-高速缓存"}},[v._v("#")]),v._v(" L2 高速缓存")]),v._v(" "),_("p",[v._v("L2 高速缓存同样每个 CPU 核心都有，但是 L2 高速缓存位置比 L1 高速缓存距离 CPU 核心 更远，它大小比 L1 高速缓存更大，CPU 型号不同大小也就不同，通常大小在几百 KB 到几 MB 不等，访问速度则更慢，速度在 "),_("code",[v._v("10~20")]),v._v(" 个时钟周期。")]),v._v(" "),_("p",[v._v("在 Linux 系统，我们可以通过这条命令，查看 CPU 里的 L2 Cache 的容量大小：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("cat")]),v._v(" /sys/devices/system/cpu/cpu0/cache/index2/size\n256K\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("h4",{attrs:{id:"l3-高速缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#l3-高速缓存"}},[v._v("#")]),v._v(" L3 高速缓存")]),v._v(" "),_("p",[v._v("L3 高速缓存通常是多个 CPU 核心共用的，位置比 L2 高速缓存距离 CPU 核心 更远，大小也会更大些，通常大小在几 MB 到几十 MB 不等，具体值根据 CPU 型号而定。")]),v._v(" "),_("p",[v._v("访问速度相对也比较慢一些，访问速度在 "),_("code",[v._v("20~60")]),v._v("个时钟周期。")]),v._v(" "),_("p",[v._v("在 Linux 系统，我们可以通过这条命令，查看 CPU 里的 L3 Cache 的容量大小：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("cat")]),v._v(" /sys/devices/system/cpu/cpu0/cache/index3/size \n3072K\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("h3",{attrs:{id:"内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[v._v("#")]),v._v(" 内存")]),v._v(" "),_("p",[v._v("内存用的芯片和 CPU Cache 有所不同，它使用的是一种叫作 "),_("strong",[v._v("DRAM （"),_("em",[v._v("Dynamic Random Access Memory")]),v._v("，动态随机存取存储器）")]),v._v(" 的芯片。")]),v._v(" "),_("p",[v._v("相比 SRAM，DRAM 的密度更高，功耗更低，有更大的容量，而且造价比 SRAM 芯片便宜很多。")]),v._v(" "),_("p",[v._v("DRAM 存储一个 bit 数据，只需要一个晶体管和一个电容就能存储，但是因为数据会被存储在电容里，电容会不断漏电，所以需要「定时刷新」电容，才能保证数据不会被丢失，这就是 DRAM 之所以被称为「动态」存储器的原因，只有不断刷新，数据才能被存储起来。")]),v._v(" "),_("p",[v._v("DRAM 的数据访问电路和刷新电路都比 SRAM 更复杂，所以访问的速度会更慢，内存速度大概在 "),_("code",[v._v("200~300")]),v._v(" 个 时钟周期之间。")]),v._v(" "),_("h3",{attrs:{id:"ssd-hdd-硬盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssd-hdd-硬盘"}},[v._v("#")]),v._v(" SSD/HDD 硬盘")]),v._v(" "),_("p",[v._v("SSD（"),_("em",[v._v("Solid-state disk")]),v._v("）就是我们常说的固体硬盘，结构和内存类似，但是它相比内存的优点是断电后数据还是存在的，而内存、寄存器、高速缓存断电后数据都会丢失。内存的读写速度比 SSD 大概快 "),_("code",[v._v("10~1000")]),v._v(" 倍。")]),v._v(" "),_("p",[v._v("当然，还有一款传统的硬盘，也就是机械硬盘（"),_("em",[v._v("Hard Disk Drive, HDD")]),v._v("），它是通过物理读写的方式来访问数据的，因此它访问速度是非常慢的，它的速度比内存慢 "),_("code",[v._v("10W")]),v._v(" 倍左右。")]),v._v(" "),_("p",[v._v("由于 SSD 的价格快接近机械硬盘了，因此机械硬盘已经逐渐被 SSD 替代了。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"存储器的层次关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器的层次关系"}},[v._v("#")]),v._v(" 存储器的层次关系")]),v._v(" "),_("p",[v._v("现代的一台计算机，都用上了 CPU Cahce、内存、到 SSD 或 HDD 硬盘这些存储器设备了。")]),v._v(" "),_("p",[v._v("其中，存储空间越大的存储器设备，其访问速度越慢，所需成本也相对越少。")]),v._v(" "),_("p",[v._v("CPU 并不会直接和每一种存储器设备直接打交道，而是每一种存储器设备只和它相邻的存储器设备打交道。")]),v._v(" "),_("p",[v._v("比如，CPU Cache 的数据是从内存加载过来的，写回数据的时候也只写回到内存，CPU Cache 不会直接把数据写到硬盘，也不会直接从硬盘加载数据，而是先加载到内存，再从内存加载到 CPU Cache 中。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/%E5%AD%98%E5%82%A8%E5%99%A8%E7%9A%84%E5%B1%82%E6%AC%A1%E5%85%B3%E7%B3%BB%E5%9B%BE.png",alt:""}})]),v._v(" "),_("p",[v._v("所以，"),_("strong",[v._v("每个存储器只和相邻的一层存储器设备打交道，并且存储设备为了追求更快的速度，所需的材料成本必然也是更高，也正因为成本太高，所以 CPU 内部的寄存器、L1\\L2\\L3 Cache 只好用较小的容量，相反内存、硬盘则可用更大的容量，这就我们今天所说的存储器层次结构")]),v._v("。")]),v._v(" "),_("p",[v._v("另外，当 CPU 需要访问内存中某个数据的时候，如果寄存器有这个数据，CPU 就直接从寄存器取数据即可，如果寄存器没有这个数据，CPU 就会查询 L1 高速缓存，如果 L1 没有，则查询 L2 高速缓存，L2 还是没有的话就查询 L3 高速缓存，L3 依然没有的话，才去内存中取数据。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/%E7%BC%93%E5%AD%98%E4%BD%93%E7%B3%BB1.png",alt:""}})]),v._v(" "),_("p",[v._v("所以，存储层次结构也形成了"),_("strong",[v._v("缓存")]),v._v("的体系。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"存储器之间的实际价格和性能差距"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器之间的实际价格和性能差距"}},[v._v("#")]),v._v(" 存储器之间的实际价格和性能差距")]),v._v(" "),_("p",[v._v("前面我们知道了，速度越快的存储器，造价成本往往也越高，那我们就以实际的数据来看看，不同层级的存储器之间的性能和价格差异。")]),v._v(" "),_("p",[v._v("下面这张表格是不同层级的存储器之间的成本对比图：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/%E5%AD%98%E5%82%A8%E5%99%A8%E6%88%90%E6%9C%AC%E7%9A%84%E5%AF%B9%E6%AF%94.png",alt:""}})]),v._v(" "),_("p",[v._v("你可以看到 L1 Cache 的访问延时是 1 纳秒，而内存已经是 100 纳秒了，相比 L1 Cache 速度慢了 "),_("code",[v._v("100")]),v._v(" 倍。另外，机械硬盘的访问延时更是高达 10 毫秒，相比 L1 Cache 速度慢了 "),_("code",[v._v("10000000")]),v._v(" 倍，差了好几个数量级别。")]),v._v(" "),_("p",[v._v("在价格上，每生成 MB 大小的 L1 Cache 相比内存贵了 "),_("code",[v._v("466")]),v._v(" 倍，相比机械硬盘那更是贵了 "),_("code",[v._v("175000")]),v._v(" 倍。")]),v._v(" "),_("p",[v._v("我在某东逛了下各个存储器设备的零售价，8G 内存 + 1T 机械硬盘 + 256G 固态硬盘的总价格，都不及一块 Intle i5-10400 的 CPU 的价格，这款 CPU 的高速缓存的总大小也就十多 MB。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("各种存储器之间的关系，可以用我们在图书馆学习这个场景来理解。")]),v._v(" "),_("p",[v._v("CPU 可以比喻成我们的大脑，我们当前正在思考和处理的知识的过程，就好比 CPU 中的"),_("strong",[v._v("寄存器")]),v._v("处理数据的过程，速度极快，但是容量很小。而 CPU 中的 "),_("strong",[v._v("L1-L3 Cache")]),v._v(" 好比我们大脑中的短期记忆和长期记忆，需要小小花费点时间来调取数据并处理。")]),v._v(" "),_("p",[v._v("我们面前的桌子就相当于"),_("strong",[v._v("内存")]),v._v("，能放下更多的书（数据），但是找起来和看起来就要花费一些时间，相比 CPU Cache 慢不少。而图书馆的书架相当于"),_("strong",[v._v("硬盘")]),v._v("，能放下比内存更多的数据，但找起来就更费时间了，可以说是最慢的存储器设备了。")]),v._v(" "),_("p",[v._v("从 寄存器、CPU Cache，到内存、硬盘，这样一层层下来的存储器，访问速度越来越慢，存储容量越来越大，价格也越来越便宜，而且每个存储器只和相邻的一层存储器设备打交道，于是这样就形成了存储器的层次结构。")]),v._v(" "),_("p",[v._v("再来回答，开头的问题：那机械硬盘、固态硬盘、内存这三个存储器，到底和 "),_("code",[v._v("CPU L1 Cache")]),v._v(" 相比速度差多少倍呢？")]),v._v(" "),_("p",[v._v("CPU L1 Cache 随机访问延时是 1 纳秒，内存则是 100 纳秒，所以 "),_("strong",[v._v("CPU L1 Cache 比内存快 "),_("code",[v._v("100")]),v._v(" 倍左右")]),v._v("。")]),v._v(" "),_("p",[v._v("SSD 随机访问延时是 150 微秒，所以 "),_("strong",[v._v("CPU L1 Cache 比 SSD 快 "),_("code",[v._v("150000")]),v._v(" 倍左右")]),v._v("。")]),v._v(" "),_("p",[v._v("最慢的机械硬盘随机访问延时已经高达 10 毫秒，我们来看看机械硬盘到底有多「龟速」：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("SSD 比机械硬盘快 70 倍左右；")])]),v._v(" "),_("li",[_("strong",[v._v("内存比机械硬盘快 100000 倍左右；")])]),v._v(" "),_("li",[_("strong",[v._v("CPU L1 Cache 比机械硬盘快 10000000 倍左右；")])])]),v._v(" "),_("p",[v._v("我们把上述的时间比例差异放大后，就能非常直观感受到它们的性能差异了。如果 CPU 访问 L1 Cache 的缓存时间是 1 秒，那访问内存则需要大约 2 分钟，随机访问 SSD 里的数据则需要 1.7 天，访问机械硬盘那更久，长达近 4 个月。")]),v._v(" "),_("p",[v._v("可以发现，不同的存储器之间性能差距很大，构造存储器分级很有意义，分级的目的是要构造"),_("strong",[v._v("缓存")]),v._v("体系。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"关注作者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关注作者"}},[v._v("#")]),v._v(" 关注作者")]),v._v(" "),_("p",[v._v("新的"),_("strong",[v._v("技术交流群")]),v._v("已经慢慢人多起来了，群里的大牛真的多，大家交流都很踊跃，也有很多热心分享和回答问题的小伙伴，是你交朋友好地方，更是你上班划水的好入口。")]),v._v(" "),_("p",[v._v("准备入冬了，一起来抱团取暖吧，加群方式很简单，只需要加我的微信二维码，备注「"),_("strong",[v._v("加群")]),v._v("」即可。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E5%85%B6%E4%BB%96/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BB%8B%E7%BB%8D.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("哈喽，我是小林，就爱图解计算机基础，如果觉得文章对你有帮助，欢迎微信搜索「小林 coding」，关注后，回复「网络」再送你图解网络 PDF")])])])}),[],!1,null,null,null);_.default=t.exports}}]);