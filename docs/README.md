# 面经
👉 **点击**：[图解计算机基础在线阅读](./)

## :open_book:《图解网络》
- **介绍**:point_down:：
  - [图解网络介绍](./network/)
- **网络基础篇** :point_down:
  - [TCP/IP 网络模型有哪几层？](./network/1_base/tcp_ip_model.html) 
  - [键入网址到网页显示，期间发生了什么？](./network/1_base/what_happen_url.html) 
  - [Linux 系统是如何收发网络包的？](./network/1_base/how_os_deal_network_package.html) 
- **HTTP 篇** :point_down:
  - [HTTP 常见面试题](./network/2_http/http_interview.html) 
  - [HTTP/1.1 如何优化？](./network/2_http/http_optimize.html) 
  - [HTTPS RSA 握手解析](./network/2_http/https_rsa.html) 
  - [HTTPS ECDHE 握手解析](./network/2_http/https_ecdhe.html) 
  - [HTTPS 如何优化？](./network/2_http/https_optimize.html) 
  - [HTTP/2 牛逼在哪？](./network/2_http/http2.html) 
  - [HTTP/3 强势来袭](./network/2_http/http3.html) 
  - [既然有 HTTP 协议，为什么还要有 RPC？](./network/2_http/http_rpc.html) 
  - [既然有 HTTP 协议，为什么还要有 WebSocket？](./network/2_http/http_websocket.html) 
- **TCP 篇** :point_down:
  - [TCP 三次握手与四次挥手面试题](./network/3_tcp/tcp_interview.html) 
  - [TCP 重传、滑动窗口、流量控制、拥塞控制](./network/3_tcp/tcp_feature.html) 
  - [TCP 实战抓包分析](./network/3_tcp/tcp_tcpdump.html) 
  - [TCP 半连接队列和全连接队列](./network/3_tcp/tcp_queue.html) 
  - [如何优化 TCP?](./network/3_tcp/tcp_optimize.html) 
  - [如何理解是 TCP 面向字节流协议？](./network/3_tcp/tcp_stream.html) 
  - [为什么 TCP 每次建立连接时，初始化序列号都要不一样呢？](./network/3_tcp/isn_deff.html) 
  - [SYN 报文什么时候情况下会被丢弃？](./network/3_tcp/syn_drop.html) 
  - [四次挥手中收到乱序的 FIN 包会如何处理？](./network/3_tcp/out_of_order_fin.html) 
  - [在 TIME_WAIT 状态的 TCP 连接，收到 SYN 后会发生什么？](./network/3_tcp/time_wait_recv_syn.html) 
  - [TCP 连接，一端断电和进程崩溃有什么区别？](./network/3_tcp/tcp_down_and_crash.html) 
  - [拔掉网线后，原本的 TCP 连接还存在吗？](./network/3_tcp/tcp_unplug_the_network_cable.html) 
  - [tcp_tw_reuse 为什么默认是关闭的？](./network/3_tcp/tcp_tw_reuse_close.html) 
  - [HTTPS 中 TLS 和 TCP 能同时握手吗？](./network/3_tcp/tcp_tls.html) 
  - [TCP Keepalive 和 HTTP Keep-Alive 是一个东西吗？](./network/3_tcp/tcp_http_keepalive.html) 
  - [TCP 协议有什么缺陷？](./network/3_tcp/tcp_problem.html)
  - [如何基于 UDP 协议实现可靠传输？](./network/3_tcp/quic.html)
  - [TCP 和 UDP 可以使用同一个端口吗？](./network/3_tcp/port.html)
  - [服务端没有 listen，客户端发起连接建立，会发生什么？](./network/3_tcp/tcp_no_listen.html)
  - [没有 accept，可以建立 TCP 连接吗？](./network/3_tcp/tcp_no_accpet.html) 
  - [用了 TCP 协议，数据一定不会丢吗？](./network/3_tcp/tcp_drop.html)
  - [TCP 四次挥手，可以变成三次吗？](./network/3_tcp/tcp_three_fin.html)
  - [TCP 序列号和确认号是如何变化的？](./network/3_tcp/tcp_seq_ack.html)
- **IP 篇** :point_down:
  - [IP 基础知识全家桶](./network/4_ip/ip_base.html) 	
  - [ping 的工作原理](./network/4_ip/ping.html) 	
  - [断网了，还能 ping 通 127.0.0.1 吗？](./network/4_ip/ping_lo.html)
- **学习心得** :point_down:
  - [计算机网络怎么学？](./network/5_learn/learn_network.html) 	
  - [画图经验分享](./network/5_learn/draw.html) 	

## :open_book:《图解系统》
- **介绍**:point_down:：
  - [图解系统介绍](./os/)
- **硬件结构** :point_down:
  - [CPU 是如何执行程序的？](./os/1_hardware/how_cpu_run.html) 
  - [磁盘比内存慢几万倍？](./os/1_hardware/storage.html) 
  - [如何写出让 CPU 跑得更快的代码？](./os/1_hardware/how_to_make_cpu_run_faster.html) 
  - [CPU 缓存一致性](./os/1_hardware/cpu_mesi.html) 
  - [CPU 是如何执行任务的？](./os/1_hardware/how_cpu_deal_task.html) 
  - [什么是软中断？](./os/1_hardware/soft_interrupt.html) 
  - [为什么 0.1 + 0.2 不等于 0.3？](./os/1_hardware/float.html) 
- **操作系统结构** :point_down:
  - [Linux 内核 vs Windows 内核](./os/2_os_structure/linux_vs_windows.html) 
- **内存管理** :point_down:
  - [为什么要有虚拟内存？](./os/3_memory/vmem.html) 
  - [malloc 是如何分配内存的？](./os/3_memory/malloc.html)
  - [内存满了，会发生什么？](./os/3_memory/mem_reclaim.html)
  - [在 4GB 物理内存的机器上，申请 8G 内存会怎么样？](./os/3_memory/alloc_mem.html)
  - [如何避免预读失效和缓存污染的问题？](./os/3_memory/cache_lru.html)
  - [深入理解 Linux 虚拟内存管理](./os/3_memory/linux_mem.html)
  - [深入理解 Linux 物理内存管理](./os/3_memory/linux_mem2.html)
- **进程管理** :point_down:
  - [进程、线程基础知识](./os/4_process/process_base.html) 
  - [进程间有哪些通信方式？](./os/4_process/process_commu.html) 
  - [多线程冲突了怎么办？](./os/4_process/multithread_sync.html) 
  - [怎么避免死锁？](./os/4_process/deadlock.html) 
  - [什么是悲观锁、乐观锁？](./os/4_process/pessim_and_optimi_lock.html) 
  - [一个进程最多可以创建多少个线程？](./os/4_process/create_thread_max.html) 
  - [线程崩溃了，进程也会崩溃吗？](./os/4_process/thread_crash.html)
- **调度算法** :point_down:
  - [进程调度/页面置换/磁盘调度算法](./os/5_schedule/schedule.html)
- **文件系统** :point_down:
  - [文件系统全家桶](./os/6_file_system/file_system.html) 	
  - [进程写文件时，进程发生了崩溃，已写入的数据会丢失吗？](./os/6_file_system/pagecache.html)
- **设备管理** :point_down:
  - [键盘敲入 A 字母时，操作系统期间发生了什么？](./os/7_device/device.html) 
- **网络系统** :point_down:
  - [什么是零拷贝？](./os/8_network_system/zero_copy.html) 
  - [I/O 多路复用：select/poll/epoll](./os/8_network_system/selete_poll_epoll.html) 
  - [高性能网络模式：Reactor 和 Proactor](./os/8_network_system/reactor.html) 
  - [什么是一致性哈希？](./os/8_network_system/hash.html) 
- **学习心得** :point_down:
  - [如何查看网络的性能指标？](./os/9_linux_chtml/linux_network.html) 	
  - [画图经验分享](./os/9_linux_chtml/pv_uv.html) 	
- **学习心得** :point_down:
  - [计算机网络怎么学？](./os/10_learn/learn_os.html) 	
  - [画图经验分享](./os/10_learn/draw.html) 

## :open_book:《图解 MySQL》
- **介绍**:point_down:：
  - [图解 MySQL 介绍](./mysql/)
- **基础篇**:point_down:：
  - [执行一条 select 语句，期间发生了什么？](./mysql/base/how_select.html)
  - [MySQL 一行记录是怎么存储的？](./mysql/base/row_format.html)
- **索引篇** :point_down:
  - [索引常见面试题](./mysql/index/index_interview.html)
  - [从数据页的角度看 B+ 树](./mysql/index/page.html)
  - [为什么 MySQL 采用 B+ 树作为索引？](./mysql/index/why_index_chose_bpuls_tree.html)
  - [MySQL 单表不要超过 2000W 行，靠谱吗？](./mysql/index/2000w.html)
  - [索引失效有哪些？](./mysql/index/index_lose.html)
  - [MySQL 使用 like“%x“，索引一定会失效吗？](./mysql/index/index_issue.html)
  - [count(\*) 和 count(1) 有什么区别？哪个性能最好？](./mysql/index/count.html)
- **事务篇** :point_down:
  - [事务隔离级别是怎么实现的？](./mysql/transaction/mvcc.html)
  - [MySQL 可重复读隔离级别，完全解决幻读了吗？](./mysql/transaction/phantom.html) 		
- **锁篇** :point_down:
  - [MySQL 有哪些锁？](./mysql/lock/mysql_lock.html) 	
  - [MySQL 是怎么加锁的？](./mysql/lock/how_to_lock.html) 	
  - [update 没加索引会锁全表](./mysql/lock/update_index.html) 	
  - [MySQL 死锁了，怎么办？](./mysql/lock/deadlock.html) 
  - [字节面试：加了什么锁，导致死锁的？](./mysql/lock/show_lock.html)
- **日志篇** :point_down:
  - [MySQL 日志：undo log、redo log、binlog 有什么用？](./mysql/log/how_update.html)
- **内存篇** :point_down:
  - [揭开 Buffer Pool 的面纱](./mysql/buffer_pool/buffer_pool.html) 	

##  :open_book: 《图解 Redis》

- **面试篇** :point_down:
   - [Redis 常见面试题](./redis/base/redis_interview.html)
- **数据类型篇** :point_down:
   - [Redis 数据类型和应用场景](./redis/data_struct/command.html)
   - [图解 Redis 数据结构](./redis/data_struct/data_struct.html)
- **持久化篇** :point_down:
  - [AOF 持久化是怎么实现的？](./redis/storage/aof.html) 	
  - [RDB 快照是怎么实现的？](./redis/storage/rdb.html) 
- **功能篇**:point_down:
   - [Redis 过期删除策略和内存淘汰策略有什么区别？](./redis/module/strategy.html) 
- **高可用篇** :point_down:
   - [主从复制是怎么实现的？](./redis/cluster/master_slave_replication.html) 	
   - [为什么要有哨兵？](./redis/cluster/sentinel.html)
- **缓存篇** :point_down:
   - [什么是缓存雪崩、击穿、穿透？](./redis/cluster/cache_problem.html) 	
   - [数据库和缓存如何保证一致性？](./redis/architecture/mysql_redis_consistency.html) 


## :muscle: 学习心得

- [计算机基础学习路线](./cs_learn/) ：计算机基础学习书籍 + 视频推荐，全面且清晰。
- [互联网校招心得](./reader_nb/) ：小林神仙读者们的校招和学习心得，值得学习。

##  :books:  图解系列 PDF 下载

- [图解网络 + 图解系统 PDF 下载](https://mp.weixin.qq.com/s/02036z-FMOCLpZ_otwMwBg)

