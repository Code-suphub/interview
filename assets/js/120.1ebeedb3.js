(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{435:function(_,v,o){"use strict";o.r(v);var E=o(14),t=Object(E.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_2-7-为什么-0-1-0-2-不等于-0-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-为什么-0-1-0-2-不等于-0-3"}},[_._v("#")]),_._v(" 2.7  为什么 0.1 + 0.2 不等于 0.3？")]),_._v(" "),v("p",[_._v("我们来思考几个问题：")]),_._v(" "),v("ul",[v("li",[_._v("为什么负数要用补码表示？")]),_._v(" "),v("li",[_._v("十进制小数怎么转成二进制？")]),_._v(" "),v("li",[_._v("计算机是怎么存小数的？")]),_._v(" "),v("li",[_._v("0.1 + 0.2 == 0.3 吗？")]),_._v(" "),v("li",[_._v("...")])]),_._v(" "),v("p",[_._v("别看这些问题都看似简单，但是其实还是有点东西的这些问题。")]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"为什么负数要用补码表示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么负数要用补码表示"}},[_._v("#")]),_._v(" 为什么负数要用补码表示？")]),_._v(" "),v("p",[_._v("十进制转换二进制的方法相信大家都熟能生巧了，如果你说你还不知道，我觉得你还是太谦虚，可能你只是忘记了，即使你真的忘记了，不怕，贴心的小林在和你一起回忆一下。")]),_._v(" "),v("p",[_._v("十进制数转二进制采用的是"),v("strong",[_._v("除 2 取余法")]),_._v("，比如数字 8 转二进制的过程如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6.png",alt:""}})]),_._v(" "),v("p",[_._v("接着，我们看看「整数类型」的数字在计算机的存储方式，这其实很简单，也很直观，就是将十进制的数字转换成二进制即可。")]),_._v(" "),v("p",[_._v("我们以 "),v("code",[_._v("int")]),_._v(" 类型的数字作为例子，int 类型是 "),v("code",[_._v("32")]),_._v(" 位的，其中"),v("strong",[_._v("最高位是作为「符号标志位」")]),_._v("，正数的符号位是 "),v("code",[_._v("0")]),_._v("，负数的符号位是 "),v("code",[_._v("1")]),_._v("，"),v("strong",[_._v("剩余的 31 位则表示二进制数据")]),_._v("。")]),_._v(" "),v("p",[_._v("那么，对于 int 类型的数字 1 的二进制数表示如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/int1.png",alt:""}})]),_._v(" "),v("p",[_._v("而负数就比较特殊了点，负数在计算机中是以「补码」表示的，"),v("strong",[_._v("所谓的补码就是把正数的二进制全部取反再加 1")]),_._v("，比如 -1 的二进制是把数字 1 的二进制取反后再加 1，如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E5%8F%8D%E7%A0%81.png",alt:""}})]),_._v(" "),v("p",[_._v("不知道你有没有想过，为什么计算机要用补码的方式来表示负数？在回答这个问题前，我们假设不用补码的方式来表示负数，而只是把最高位的符号标志位变为 1 表示负数，如下图过程：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E9%9D%9E%E5%8F%8D%E7%A0%81.png",alt:""}})]),_._v(" "),v("p",[_._v("如果采用这种方式来表示负数的二进制的话，试想一下 "),v("code",[_._v("-2 + 1")]),_._v(" 的运算过程，如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E9%9D%9E%E5%8F%8D%E7%A0%81%E8%BF%90%E7%AE%97.png",alt:""}})]),_._v(" "),v("p",[_._v("按道理，"),v("code",[_._v("-2 + 1 = -1")]),_._v("，但是上面的运算过程中得到结果却是 "),v("code",[_._v("-3")]),_._v("，所可以发现，这种负数的表示方式是不能用常规的加法来计算了，就需要特殊处理，要先判断数字是否为负数，如果是负数就要把加法操作变成减法操作才可以得到正确对结果。")]),_._v(" "),v("p",[_._v("到这里，我们就可以回答前面提到的「负数为什么要用补码方式来表示」的问题了。")]),_._v(" "),v("p",[_._v("如果负数不是使用补码的方式表示，则在做基本对加减法运算的时候，"),v("strong",[_._v("还需要多一步操作来判断是否为负数，如果为负数，还得把加法反转成减法，或者把减法反转成加法")]),_._v("，这就非常不好了，毕竟加减法运算在计算机里是很常使用的，所以为了性能考虑，应该要尽量简化这个运算过程。")]),_._v(" "),v("p",[v("strong",[_._v("而用了补码的表示方式，对于负数的加减法操作，实际上是和正数加减法操作一样的")]),_._v("。你可以看到下图，用补码表示的负数在运算 "),v("code",[_._v("-2 + 1")]),_._v(" 过程的时候，其结果是正确的：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E8%A1%A5%E7%A0%81%E8%BF%90%E7%AE%97%E8%BF%87%E7%A8%8B.png",alt:""}})]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"十进制小数与二进制的转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十进制小数与二进制的转换"}},[_._v("#")]),_._v(" 十进制小数与二进制的转换")]),_._v(" "),v("p",[_._v("好了，整数十进制转二进制我们知道了，接下来看看小数是怎么转二进制的，小数部分的转换不同于整数部分，它采用的是"),v("strong",[_._v("乘 2 取整法")]),_._v("，将十进制中的小数部分乘以 2 作为二进制的一位，然后继续取小数部分乘以 2 作为下一位，直到不存在小数为止。")]),_._v(" "),v("p",[_._v("话不多说，我们就以 "),v("code",[_._v("8.625")]),_._v(" 转二进制作为例子，直接上图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E5%8D%81%E8%BF%9B%E5%88%B6%E5%B0%8F%E6%95%B0%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6.png",alt:""}})]),_._v(" "),v("p",[_._v("最后把「整数部分 + 小数部分」结合在一起后，其结果就是 "),v("code",[_._v("1000.101")]),_._v("。")]),_._v(" "),v("p",[_._v("但是，并不是所有小数都可以用二进制表示，前面提到的 0.625 小数是一个特例，刚好通过乘 2 取整法的方式完整的转换成二进制。")]),_._v(" "),v("p",[_._v("如果我们用相同的方式，来把 "),v("code",[_._v("0.1")]),_._v(" 转换成二进制，过程如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E6%97%A0%E9%99%90%E5%B0%8F%E6%95%B0.png",alt:""}})]),_._v(" "),v("p",[_._v("可以发现，"),v("code",[_._v("0.1")]),_._v(" 的二进制表示是无限循环的。")]),_._v(" "),v("p",[v("strong",[_._v("由于计算机的资源是有限的，所以是没办法用二进制精确的表示 0.1，只能用「近似值」来表示，就是在有限的精度情况下，最大化接近 0.1 的二进制数，于是就会造成精度缺失的情况")]),_._v("。")]),_._v(" "),v("p",[_._v("对于二进制小数转十进制时，需要注意一点，小数点后面的指数幂是"),v("strong",[_._v("负数")]),_._v("。")]),_._v(" "),v("p",[_._v("比如，二进制 "),v("code",[_._v("0.1")]),_._v(" 转成十进制就是 "),v("code",[_._v("2^(-1)")]),_._v("，也就是十进制 "),v("code",[_._v("0.5")]),_._v("，二进制 "),v("code",[_._v("0.01")]),_._v(" 转成十进制就是 "),v("code",[_._v("2^-2")]),_._v("，也就是十进制 "),v("code",[_._v("0.25")]),_._v("，以此类推。")]),_._v(" "),v("p",[_._v("举个例子，二进制 "),v("code",[_._v("1010.101")]),_._v(" 转十进制的过程，如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/%E5%B0%8F%E6%95%B0%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B62.png",alt:""}})]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"计算机是怎么存小数的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机是怎么存小数的"}},[_._v("#")]),_._v(" 计算机是怎么存小数的？")]),_._v(" "),v("p",[v("code",[_._v("1000.101")]),_._v(" 这种二进制小数是「定点数」形式，代表着小数点是定死的，不能移动，如果你移动了它的小数点，这个数就变了，就不再是它原来的值了。")]),_._v(" "),v("p",[_._v("然而，计算机并不是这样存储的小数的，计算机存储小数的采用的是"),v("strong",[_._v("浮点数")]),_._v("，名字里的「浮点」表示小数点是可以浮动的。")]),_._v(" "),v("p",[_._v("比如 "),v("code",[_._v("1000.101")]),_._v(" 这个二进制数，可以表示成 "),v("code",[_._v("1.000101 x 2^3")]),_._v("，类似于数学上的科学记数法。")]),_._v(" "),v("p",[_._v("既然提到了科学计数法，我再帮大家复习一下。")]),_._v(" "),v("p",[_._v("比如有个很大的十进制数 1230000，我们可以也可以表示成 "),v("code",[_._v("1.23 x 10^6")]),_._v("，这种方式就称为科学记数法。")]),_._v(" "),v("p",[_._v("该方法在小数点左边只有一个数字，而且把这种整数部分没有前导 0 的数字称为"),v("strong",[_._v("规格化")]),_._v("，比如 "),v("code",[_._v("1.0 x 10^(-9)")]),_._v(" 是规格化的科学记数法，而 "),v("code",[_._v("0.1 x 10^(-9)")]),_._v(" 和 "),v("code",[_._v("10.0 x 10^(-9)")]),_._v(" 就不是了。")]),_._v(" "),v("p",[_._v("因此，如果二进制要用到科学记数法，同时要规范化，那么不仅要保证基数为 2，还要保证小数点左侧只有 1 位，而且必须为 1。")]),_._v(" "),v("p",[_._v("所以通常将 "),v("code",[_._v("1000.101")]),_._v(" 这种二进制数，规格化表示成 "),v("code",[_._v("1.000101 x 2^3")]),_._v("，其中，最为关键的是 000101 和 3 这两个东西，它就可以包含了这个二进制小数的所有信息：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("000101")]),_._v(" 称为"),v("strong",[_._v("尾数")]),_._v("，即小数点后面的数字；")]),_._v(" "),v("li",[v("code",[_._v("3")]),_._v(" 称为"),v("strong",[_._v("指数")]),_._v("，指定了小数点在数据中的位置；")])]),_._v(" "),v("p",[_._v("现在绝大多数计算机使用的浮点数，一般采用的是 IEEE 制定的国际标准，这种标准形式如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/IEEE%E6%A0%87%E5%87%86.png",alt:""}})]),_._v(" "),v("p",[_._v("这三个重要部分的意义如下：")]),_._v(" "),v("ul",[v("li",[v("em",[_._v("符号位")]),_._v("：表示数字是正数还是负数，为 0 表示正数，为 1 表示负数；")]),_._v(" "),v("li",[v("em",[_._v("指数位")]),_._v("：指定了小数点在数据中的位置，指数可以是负数，也可以是正数，"),v("strong",[_._v("指数位的长度越长则数值的表达范围就越大")]),_._v("；")]),_._v(" "),v("li",[v("em",[_._v("尾数位")]),_._v("：小数点右侧的数字，也就是小数部分，比如二进制 1.0011 x 2^(-2)，尾数部分就是 0011，而且"),v("strong",[_._v("尾数的长度决定了这个数的精度")]),_._v("，因此如果要表示精度更高的小数，则就要提高尾数位的长度；")])]),_._v(" "),v("p",[_._v("用 "),v("code",[_._v("32")]),_._v(" 位来表示的浮点数，则称为"),v("strong",[_._v("单精度浮点数")]),_._v("，也就是我们编程语言中的 "),v("code",[_._v("float")]),_._v(" 变量，而用 "),v("code",[_._v("64")]),_._v(" 位来表示的浮点数，称为"),v("strong",[_._v("双精度浮点数")]),_._v("，也就是 "),v("code",[_._v("double")]),_._v("  变量，它们的结构如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/float.png",alt:""}})]),_._v(" "),v("p",[_._v("可以看到：")]),_._v(" "),v("ul",[v("li",[_._v("double 的尾数部分是 52 位，float 的尾数部分是 23 位，由于同时都带有一个固定隐含位（这个后面会说），所以 double 有 53 个二进制有效位，float 有 24 个二进制有效位，所以所以它们的精度在十进制中分别是 "),v("code",[_._v("log10(2^53)")]),_._v(" 约等于 "),v("code",[_._v("15.95")]),_._v(" 和 "),v("code",[_._v("log10(2^24)")]),_._v(" 约等于 "),v("code",[_._v("7.22")]),_._v("  位，因此 double 的有效数字是 "),v("code",[_._v("15~16")]),_._v(" 位，float 的有效数字是 "),v("code",[_._v("7~8")]),_._v(" 位，这些有效位是包含整数部分和小数部分；")]),_._v(" "),v("li",[_._v("double 的指数部分是 11 位，而 float 的指数位是 8 位，意味着 double 相比 float 能表示更大的数值范围；")])]),_._v(" "),v("p",[_._v("那二进制小数，是如何转换成二进制浮点数的呢？")]),_._v(" "),v("p",[_._v("我们就以 "),v("code",[_._v("10.625")]),_._v(" 作为例子，看看这个数字在 float 里是如何存储的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/float%E5%AD%98%E5%82%A8.png",alt:""}})]),_._v(" "),v("p",[_._v("首先，我们计算出 10.625 的二进制小数为 1010.101。")]),_._v(" "),v("p",[_._v("然后"),v("strong",[_._v("把小数点，移动到第一个有效数字后面")]),_._v("，即将 1010.101 右移 "),v("code",[_._v("3")]),_._v(" 位成 "),v("code",[_._v("1.010101")]),_._v("，右移 3 位就代表 +3，左移 3 位就是 -3。")]),_._v(" "),v("p",[v("strong",[_._v("float 中的「指数位」就跟这里移动的位数有关系，把移动的位数再加上「偏移量」，float 的话偏移量是 127，相加后就是指数位的值了")]),_._v("，即指数位这 8 位存的是 "),v("code",[_._v("10000010")]),_._v("（十进制 130），因此你可以认为「指数位」相当于指明了小数点在数据中的位置。")]),_._v(" "),v("p",[v("code",[_._v("1.010101")]),_._v(" 这个数的"),v("strong",[_._v("小数点右侧的数字就是 float 里的「尾数位」")]),_._v("，由于尾数位是 23 位，则后面要补充 0，所以最终尾数位存储的数字是 "),v("code",[_._v("01010100000000000000000")]),_._v("。")]),_._v(" "),v("p",[_._v("在算指数的时候，你可能会有疑问为什么要加上偏移量呢？")]),_._v(" "),v("p",[_._v("前面也提到，指数可能是正数，也可能是负数，即指数是有符号的整数，而有符号整数的计算是比无符号整数麻烦的，所以为了减少不必要的麻烦，在实际存储指数的时候，需要把指数转换成"),v("strong",[_._v("无符号整数")]),_._v("。")]),_._v(" "),v("p",[_._v("float 的指数部分是 8 位，IEEE 标准规定单精度浮点的指数取值范围是 "),v("code",[_._v("-126 ~ +127")]),_._v("，于是为了把指数转换成无符号整数，就要加个"),v("strong",[_._v("偏移量")]),_._v("，比如 float 的指数偏移量是 "),v("code",[_._v("127")]),_._v("，这样指数就不会出现负数了。")]),_._v(" "),v("p",[_._v("比如，指数如果是 8，则实际存储的指数是 8 + 127（偏移量）= 135，即把 135 转换为二进制之后再存储，而当我们需要计算实际的十进制数的时候，再把指数减去「偏移量」即可。")]),_._v(" "),v("p",[_._v("细心的朋友肯定发现，移动后的小数点左侧的有效位（即 1）消失了，它并没有存储到 float 里。")]),_._v(" "),v("p",[_._v("这是因为 IEEE 标准规定，二进制浮点数的小数点左侧只能有 1 位，并且还只能是 1，"),v("strong",[_._v("既然这一位永远都是 1，那就可以不用存起来了")]),_._v("。")]),_._v(" "),v("p",[_._v("于是就让 23 位尾数只存储小数部分，然后在计算时会"),v("strong",[_._v("自动把这个 1 加上，这样就可以节约 1 位的空间，尾数就能多存一位小数，相应的精度就更高了一点")]),_._v("。")]),_._v(" "),v("p",[_._v("那么，对于我们在从 float 的二进制浮点数转换成十进制时，要考虑到这个隐含的 1，转换公式如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/float%E5%85%AC%E5%BC%8F.png",alt:""}})]),_._v(" "),v("p",[_._v("举个例子，我们把下图这个 float 的数据转换成十进制，过程如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/float%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BE%8B%E5%AD%90.png",alt:""}})]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"_0-1-0-2-0-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-0-2-0-3"}},[_._v("#")]),_._v(" 0.1 + 0.2 == 0.3 ?")]),_._v(" "),v("p",[_._v("前面提到过，并不是所有小数都可以用「完整」的二进制来表示的，比如十进制 0.1 在转换成二进制小数的时候，是一串无限循环的二进制数，计算机是无法表达无限循环的二进制数的，毕竟计算机的资源是有限。")]),_._v(" "),v("p",[_._v("因此，计算机只能用「近似值」来表示该二进制，那么意味着计算机存放的小数可能不是一个真实值。")]),_._v(" "),v("p",[_._v("现在基本都是用  IEEE 754 规范的「单精度浮点类型」或「双精度浮点类型」来存储小数的，根据精度的不同，近似值也会不同。")]),_._v(" "),v("p",[_._v("那计算机是存储 0.1 是一个怎么样的二进制浮点数呢？")]),_._v(" "),v("p",[_._v("偷个懒，我就不自己手动算了，可以使用 binaryconvert 这个工具，将十进制 0.1 小数转换成 float 浮点数：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/0.1%E5%B7%A5%E5%85%B7.png",alt:""}})]),_._v(" "),v("p",[_._v("可以看到，8 位指数部分是 "),v("code",[_._v("01111011")]),_._v("，23 位的尾数部分是 "),v("code",[_._v("10011001100110011001101")]),_._v("，可以看到尾数部分是 "),v("code",[_._v("0011")]),_._v(" 是一直循环的，只不过尾数是有长度限制的，所以只会显示一部分，所以是一个近似值，精度十分有限。")]),_._v(" "),v("p",[_._v("接下来，我们看看 0.2 的 float 浮点数：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/0.2%E5%B7%A5%E5%85%B7.png",alt:""}})]),_._v(" "),v("p",[_._v("可以看到，8 位指数部分是 "),v("code",[_._v("01111100")]),_._v("，稍微和 0.1 的指数不同，23 位的尾数部分是 "),v("code",[_._v("10011001100110011001101")]),_._v(" 和 0.1 的尾数部分是相同的，也是一个近似值。")]),_._v(" "),v("p",[_._v("0.1 的二进制浮点数转换成十进制的结果是 "),v("code",[_._v("0.100000001490116119384765625")]),_._v("：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/0.1%E6%B5%AE%E7%82%B9%E6%95%B0%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%B0%8F%E6%95%B0.png",alt:""}})]),_._v(" "),v("p",[_._v("0.2 的二进制浮点数转换成十进制的结果是 "),v("code",[_._v("0.20000000298023223876953125")]),_._v("：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/0.2%E6%B5%AE%E7%82%B9%E6%95%B0%E8%BD%AC%E6%8D%A2.png",alt:""}})]),_._v(" "),v("p",[_._v("这两个结果相加就是 "),v("code",[_._v("0.300000004470348358154296875")]),_._v("：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/0.1%2B0.2.png",alt:""}})]),_._v(" "),v("p",[_._v("所以，你会看到"),v("strong",[_._v("在计算机中 0.1 + 0.2 并不等于完整的 0.3")]),_._v("。")]),_._v(" "),v("p",[_._v("这主要是"),v("strong",[_._v("因为有的小数无法可以用「完整」的二进制来表示，所以计算机里只能采用近似数的方式来保存，那两个近似数相加，得到的必然也是一个近似数")]),_._v("。")]),_._v(" "),v("p",[_._v("我们在 JavaScript 里执行 0.1 + 0.2，你会得到下面这个结果：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%B5%AE%E7%82%B9/js0.1%2B0.2.png",alt:""}})]),_._v(" "),v("p",[_._v("结果和我们前面推到的类似，因为 JavaScript 对于数字都是使用 IEEE 754 标准下的双精度浮点类型来存储的。")]),_._v(" "),v("p",[_._v("而我们二进制只能精准表达 2 除尽的数字 1/2, 1/4, 1/8，但是对于 0.1(1/10) 和 0.2(1/5)，在二进制中都无法精准表示时，需要根据精度舍入。")]),_._v(" "),v("p",[_._v("我们人类熟悉的十进制运算系统，可以精准表达 2 和 5 除尽的数字，例如 1/2, 1/4, 1/5(0.2), 1/8, 1/10(0.1)。")]),_._v(" "),v("p",[_._v("当然，十进制也有无法除尽的地方，例如 1/3, 1/7，也需要根据精度舍入。")]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("最后，再来回答开头的问题。")]),_._v(" "),v("blockquote",[v("p",[_._v("为什么负数要用补码表示？")])]),_._v(" "),v("p",[_._v("负数之所以用补码的方式来表示，主要是为了统一和正数的加减法操作一样，毕竟数字的加减法是很常用的一个操作，就不要搞特殊化，尽量以统一的方式来运算。")]),_._v(" "),v("blockquote",[v("p",[_._v("十进制小数怎么转成二进制？")])]),_._v(" "),v("p",[_._v("十进制整数转二进制使用的是「除 2 取余法」，十进制小数使用的是「乘 2 取整法」。")]),_._v(" "),v("blockquote",[v("p",[_._v("计算机是怎么存小数的？")])]),_._v(" "),v("p",[_._v("计算机是以浮点数的形式存储小数的，大多数计算机都是 IEEE 754 标准定义的浮点数格式，包含三个部分：")]),_._v(" "),v("ul",[v("li",[_._v("符号位：表示数字是正数还是负数，为 0 表示正数，为 1 表示负数；")]),_._v(" "),v("li",[_._v("指数位：指定了小数点在数据中的位置，指数可以是负数，也可以是正数，指数位的长度越长则数值的表达范围就越大；")]),_._v(" "),v("li",[_._v("尾数位：小数点右侧的数字，也就是小数部分，比如二进制 1.0011 x 2^(-2)，尾数部分就是 0011，而且尾数的长度决定了这个数的精度，因此如果要表示精度更高的小数，则就要提高尾数位的长度；")])]),_._v(" "),v("p",[_._v("用 32 位来表示的浮点数，则称为单精度浮点数，也就是我们编程语言中的 float 变量，而用 64 位来表示的浮点数，称为双精度浮点数，也就是 double 变量。")]),_._v(" "),v("blockquote",[v("p",[_._v("0.1 + 0.2 == 0.3 吗？")])]),_._v(" "),v("p",[_._v("不是的，0.1 和 0.2 这两个数字用二进制表达会是一个一直循环的二进制数，比如 0.1 的二进制表示为 0.0 0011 0011 0011…… （0011 无限循环)，对于计算机而言，0.1 无法精确表达，这是浮点数计算造成精度损失的根源。")]),_._v(" "),v("p",[_._v("因此，IEEE 754 标准定义的浮点数只能根据精度舍入，然后用「近似值」来表示该二进制，那么意味着计算机存放的小数可能不是一个真实值。")]),_._v(" "),v("p",[_._v("0.1 + 0.2 并不等于完整的 0.3，这主要是因为这两个小数无法用「完整」的二进制来表示，只能根据精度舍入，所以计算机里只能采用近似数的方式来保存，那两个近似数相加，得到的必然也是一个近似数。")])])}),[],!1,null,null,null);v.default=t.exports}}]);