(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{350:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-可重复读隔离级别-完全解决幻读了吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-可重复读隔离级别-完全解决幻读了吗"}},[s._v("#")]),s._v(" MySQL 可重复读隔离级别，完全解决幻读了吗？")]),s._v(" "),t("p",[s._v("大家好，我是小林。")]),s._v(" "),t("p",[s._v("我在"),t("a",{attrs:{href:"https://xiaolincoding.com/mysql/transaction/mvcc.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("上一篇文章"),t("OutboundLink")],1),s._v("提到，MySQL InnoDB 引擎的默认隔离级别虽然是「可重复读」，但是它很大程度上避免幻读现象（并不是完全解决了），解决的方案有两种：")]),s._v(" "),t("ul",[t("li",[s._v("针对"),t("strong",[s._v("快照读")]),s._v("（普通 select 语句），是"),t("strong",[s._v("通过 MVCC 方式解决了幻读")]),s._v("，因为可重复读隔离级别下，事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，即使中途有其他事务插入了一条数据，是查询不出来这条数据的，所以就很好了避免幻读问题。")]),s._v(" "),t("li",[s._v("针对"),t("strong",[s._v("当前读")]),s._v("（select ... for update 等语句），是"),t("strong",[s._v("通过 next-key lock（记录锁 + 间隙锁）方式解决了幻读")]),s._v("，因为当执行 select ... for update 语句的时候，会加上 next-key lock，如果有其他事务在 next-key lock 锁范围内插入了一条记录，那么这个插入语句就会被阻塞，无法成功插入，所以就很好了避免幻读问题。")])]),s._v(" "),t("p",[s._v("这两个解决方案是很大程度上解决了幻读现象，但是还是有个别的情况造成的幻读现象是无法解决的。")]),s._v(" "),t("p",[s._v("这次，就跟大家好好聊这个问题。")]),s._v(" "),t("h2",{attrs:{id:"什么是幻读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是幻读"}},[s._v("#")]),s._v(" 什么是幻读？")]),s._v(" "),t("p",[s._v("首先来看看 MySQL 文档是怎么定义幻读（Phantom Read）的：")]),s._v(" "),t("p",[t("em",[t("strong",[s._v("The so-called phantom problem occurs within a transaction when the same query produces different sets of rows at different times. For example, if a SELECT is executed twice, but returns a row the second time that was not returned the first time, the row is a “phantom” row.")])])]),s._v(" "),t("p",[s._v("翻译：当同一个查询在不同的时间产生不同的结果集时，事务中就会出现所谓的幻象问题。例如，如果 SELECT 执行了两次，但第二次返回了第一次没有返回的行，则该行是“幻像”行。")]),s._v(" "),t("p",[s._v("举个例子，假设一个事务在 T1 时刻和 T2 时刻分别执行了下面查询语句，途中没有执行其他任何语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("只要 T1 和 T2 时刻执行产生的结果集是不相同的，那就发生了幻读的问题，比如：")]),s._v(" "),t("ul",[t("li",[s._v("T1 时间执行的结果是有 5 条行记录，而 T2 时间执行的结果是有 6 条行记录，那就发生了幻读的问题。")]),s._v(" "),t("li",[s._v("T1 时间执行的结果是有 5 条行记录，而 T2 时间执行的结果是有 4 条行记录，也是发生了幻读的问题。")])]),s._v(" "),t("h2",{attrs:{id:"快照读是如何避免幻读的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快照读是如何避免幻读的"}},[s._v("#")]),s._v(" 快照读是如何避免幻读的？")]),s._v(" "),t("p",[s._v("可重复读隔离级是由 MVCC（多版本并发控制）实现的，实现的方式是启动事务后，在执行第一个查询语句后，会创建一个 Read View，"),t("strong",[s._v("后续的查询语句利用这个 Read View，通过这个  Read View 就可以在 undo log 版本链找到事务开始时的数据，所以事务过程中每次查询的数据都是一样的")]),s._v("，即使中途有其他事务插入了新纪录，是查询不出来这条数据的，所以就很好了避免幻读问题。")]),s._v(" "),t("p",[s._v("做个实验，数据库表 t_stu 如下，其中 id 为主键。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/7f9df142b3594daeaaca495abb7133f5.png",alt:""}})]),s._v(" "),t("p",[s._v("然后在可重复读隔离级别下，有两个事务的执行顺序如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/e576e047dccc47d5a59636ea342750b8.png?",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("从这个实验结果可以看到，即使事务 B 中途插入了一条记录，事务 A 前后两次查询的结果集都是一样的，并没有出现所谓的幻读现象。")]),s._v(" "),t("h2",{attrs:{id:"当前读是如何避免幻读的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前读是如何避免幻读的"}},[s._v("#")]),s._v(" 当前读是如何避免幻读的？")]),s._v(" "),t("p",[s._v("MySQL 里除了普通查询是快照读，其他都是"),t("strong",[s._v("当前读")]),s._v("，比如 update、insert、delete，这些语句执行前都会查询最新版本的数据，然后再做进一步的操作。")]),s._v(" "),t("p",[s._v("这很好理解，假设你要 update 一个记录，另一个事务已经 delete 这条记录并且提交事务了，这样不是会产生冲突吗，所以 update 的时候肯定要知道最新的数据。")]),s._v(" "),t("p",[s._v("另外，"),t("code",[s._v("select ... for update")]),s._v(" 这种查询语句是当前读，每次执行的时候都是读取最新的数据。")]),s._v(" "),t("p",[s._v("接下来，我们假设"),t("code",[s._v("select ... for update")]),s._v("当前读是不会加锁的（实际上是会加锁的），在做一遍实验。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/1f872ff92b644b5f81cee2dd9188b199.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCP5p6XY29kaW5n,size_20,color_FFFFFF,t_70,g_se,x_16",alt:""}})]),s._v(" "),t("p",[s._v("这时候，事务 B 插入的记录，就会被事务 A 的第二条查询语句查询到（因为是当前读），这样就会出现前后两次查询的结果集合不一样，这就出现了幻读。")]),s._v(" "),t("p",[s._v("所以，"),t("strong",[s._v("Innodb 引擎为了解决「可重复读」隔离级别使用「当前读」而造成的幻读问题，就引出了间隙锁")]),s._v("。")]),s._v(" "),t("p",[s._v("假设，表中有一个范围 id 为（3，5）间隙锁，那么其他事务就无法插入 id = 4 这条记录了，这样就有效的防止幻读现象的发生。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E9%94%81/gap%E9%94%81.drawio.png",alt:""}})]),s._v(" "),t("p",[s._v("举个具体例子，场景如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/3af285a8e70f4d4198318057eb955520.png?",alt:""}})]),s._v(" "),t("p",[s._v("事务 A 执行了这面这条锁定读语句后，就在对表中的记录加上 id 范围为 (2, +∞] 的 next-key lock（next-key lock 是间隙锁 + 记录锁的组合）。")]),s._v(" "),t("p",[s._v("然后，事务 B 在执行插入语句的时候，判断到插入的位置被事务 A 加了  next-key lock，于是事物 B 会生成一个插入意向锁，同时进入等待状态，直到事务 A 提交了事务。这就避免了由于事务 B 插入新记录而导致事务 A 发生幻读的现象。")]),s._v(" "),t("h2",{attrs:{id:"幻读被完全解决了吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幻读被完全解决了吗"}},[s._v("#")]),s._v(" 幻读被完全解决了吗？")]),s._v(" "),t("p",[t("strong",[s._v("可重复读隔离级别下虽然很大程度上避免了幻读，但是还是没有能完全解决幻读")]),s._v("。")]),s._v(" "),t("p",[s._v("我举例一个可重复读隔离级别发生幻读现象的场景。")]),s._v(" "),t("h3",{attrs:{id:"第一个发生幻读现象的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一个发生幻读现象的场景"}},[s._v("#")]),s._v(" 第一个发生幻读现象的场景")]),s._v(" "),t("p",[s._v("还是以这张表作为例子：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/7f9df142b3594daeaaca495abb7133f5.png",alt:""}})]),s._v(" "),t("p",[s._v("事务 A 执行查询 id = 5 的记录，此时表中是没有该记录的，所以查询不出来。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 事务 A")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nEmpty "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("然后事务 B 插入一条 id = 5 的记录，并且提交了事务。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 事务 B")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t_stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小美'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("此时，"),t("strong",[s._v("事务 A  更新 id = 5 这条记录，对没错，事务 A 看不到 id = 5 这条记录，但是他去更新了这条记录，这场景确实很违和，然后再次查询 id = 5 的记录，事务 A 就能看到事务 B 插入的纪录了，幻读就是发生在这种违和的场景")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 事务 A")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小林 coding'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("matched")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Changed: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Warnings")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+--------------+------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" age  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+--------------+------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 小林coding   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+--------------+------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("整个发生幻读的时序图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E9%94%81/%E5%B9%BB%E8%AF%BB%E5%8F%91%E7%94%9F.drawio.png",alt:""}})]),s._v(" "),t("p",[s._v("在可重复读隔离级别下，事务 A 第一次执行普通的 select 语句时生成了一个 ReadView，之后事务 B 向表中新插入了一条 id = 5 的记录并提交。接着，事务 A 对 id = 5 这条记录进行了更新操作，在这个时刻，这条新记录的 trx_id 隐藏列的值就变成了事务 A 的事务 id，之后事务 A  再使用普通 select 语句去查询这条记录时就可以看到这条记录了，于是就发生了幻读。")]),s._v(" "),t("p",[s._v("或者事务一添加同样id的记录失败，或者事务一没有查到id=5的记录，但是删除成功和这个例子类似，但是不符合幻读的经典定义。")]),s._v(" "),t("p",[s._v("因为这种特殊现象的存在，所以我们认为 "),t("strong",[s._v("MySQL Innodb 中的 MVCC 并不能完全避免幻读现象")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"第二个发生幻读现象的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二个发生幻读现象的场景"}},[s._v("#")]),s._v(" 第二个发生幻读现象的场景")]),s._v(" "),t("p",[s._v("除了上面这一种场景会发生幻读现象之外，还有下面这个场景也会发生幻读现象。")]),s._v(" "),t("ul",[t("li",[s._v("T1 时刻：事务 A 先执行「快照读语句」：select * from t_test where id > 100 得到了 3 条记录。")]),s._v(" "),t("li",[s._v("T2 时刻：事务 B 往"),t("code",[s._v("t_test")]),s._v("表中插入一个 id= 200 的记录并提交；")]),s._v(" "),t("li",[s._v("T3 时刻：事务 A 再执行「当前读语句」select * from t_test where id > 100 for update 就会得到 4 条记录，此时也发生了幻读现象。")])]),s._v(" "),t("p",[t("strong",[s._v("要避免这类特殊场景下发生幻读的现象的话，就是尽量在开启事务之后，马上执行 select ... for update 这类当前读的语句")]),s._v("，因为它会对记录加 next-key lock，从而避免其他事务插入一条新记录。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("MySQL InnoDB 引擎的可重复读隔离级别（默认隔离级），根据不同的查询方式，分别提出了避免幻读的方案：")]),s._v(" "),t("ul",[t("li",[s._v("针对"),t("strong",[s._v("快照读")]),s._v("（普通 select 语句），是通过 MVCC 方式解决了幻读。")]),s._v(" "),t("li",[s._v("针对"),t("strong",[s._v("当前读")]),s._v("（select ... for update 等语句），是通过 next-key lock（记录锁 + 间隙锁）方式解决了幻读。")])]),s._v(" "),t("p",[s._v("我举例了两个发生幻读场景的例子。")]),s._v(" "),t("p",[s._v("第一个例子：对于快照读，MVCC 并不能完全避免幻读现象。因为当事务 A 更新了一条事务 B 插入的记录，那么事务 A 前后两次查询的记录条目就不一样了，所以就发生幻读。")]),s._v(" "),t("p",[s._v("第二个例子：对于当前读，如果事务开启后，并没有执行当前读，而是先快照读，然后这期间如果其他事务插入了一条记录，那么事务后续使用当前读进行查询的时候，就会发现两次查询的记录条目就不一样了，所以就发生幻读。")]),s._v(" "),t("p",[s._v("所以，"),t("strong",[s._v("MySQL 可重复读隔离级别并没有彻底解决幻读，只是很大程度上避免了幻读现象的发生。")])]),s._v(" "),t("p",[t("code",[s._v("SELECT ... FOR UPDATE")]),s._v(" 提供了一种锁定机制，但它并不改变事务的隔离级别，事务的隔离级别是由你在开始事务时指定的（例如，使用 "),t("code",[s._v("SET TRANSACTION ISOLATION LEVEL")]),s._v(" 命令）或者由MySQL服务器的默认设置决定的。")]),s._v(" "),t("p",[s._v("要避免这类特殊场景下发生幻读的现象的话，就是尽量在开启事务之后，马上执行 select ... for update 这类当前读的语句，因为它会对记录加 next-key lock，从而避免其他事务插入一条新记录。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("最新的图解文章都在公众号首发，别忘记关注哦！！如果你想加入百人技术交流群，扫码下方二维码回复「加群」。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost3@main/%E5%85%B6%E4%BB%96/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BB%8B%E7%BB%8D.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);