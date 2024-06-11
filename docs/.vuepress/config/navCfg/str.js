const xiaolinPre = ['os',"network","mysql","redis"]
const guidePre = ["java","cs-basics","database","tools","system-design","distributed-system","high-performance","high-availability"]
const pre = [...xiaolinPre,...guidePre]
// 确保lnk数组中的每个元素都以'/'结尾
for(let i =0;i<pre.length;i++){
    pre[i]="/"+pre[i]+"/"
}

const xiaolinName = ['操作系统',"网络","数据库","redis"]
const guideName = ["Java","计算机基础","数据库","开发工具","系统设计","分布式","高性能","高可用"]
const name = [...xiaolinName,...guideName]
const xiaolinTxt = [
    ["硬件系统","操作系统结构","内存管理","进程管理","调度算法","文件系统","设备管理","网络系统","Linux命令","学习心得"],
    ["基础篇","HTTP篇","TCP篇","IP篇","学习心得"],
    ["基础篇","索引篇","事务篇","锁篇","日志篇","内存篇"],
    ["面试","数据类型","持久化","功能篇","高可用","缓存"],
]
const guideTxt = [
    ["基础","集合","并发编程","IO","JVM","新特性"],
    ["网络","操作系统","数据结构","算法"],
    ["基础","MySQL","Redis","Elasticsearch","MongoDB"],
    ["Docker","git","gradle","maven"],
    ["基础设计","常用框架","认证授权,数据安全","系统设计常见面试题","设计模式常见面试题","Java定时任务","Web实时消息推送"],
    ["协议","RPC","ZooKeeper"],
    ["CDN","负载均衡","数据库优化","消息队列"],
    ["高可用指南","冗余设计","服务限流","降级&熔断","超时&重试","性能测试"],
]
const txtLst = [...xiaolinTxt,...guideTxt]
let xiaolinLnk = [
    ["1_hardware","2_os_structure","3_memory","4_process","5_schedule","6_file_system","7_device","8_network_system","9_linux_cmd","10_learn"],
    ["1_base","2_http","3_tcp","4_ip","5_learn"],
    ["base","index","transaction","lock","log","buffer_pool"],
    ["base","data_struct","storage","module","cluster","architecture"],
]
const guideLnk = [
    ["basis","collection","concurrent","io","jvm","new-features"],
    ["network","operating-system","data-structure","algorithms"],
    ["base","mysql","redis","elasticsearch","mongodb"],
    ["docker","git","gradle","maven"],
    ["basis","framework","security"],
    ["protocol","rpc","zookeeper"],
    ["cdn","load-balance","sql-optim","message-queue"],
    ["base","design","constrain","down","retry","test"],
]
const lnk = [...xiaolinLnk,...guideLnk]
for(let i =0;i<lnk.length;i++){
    for (let j = 0; j < lnk[i].length; j++){
        lnk[i][j]=lnk[i][j]+"/"
    }
}

// 构建 txt-lnk 列表 ， 即item
const items = txtLst.map((texts, i) => (
    texts.map((txt, j) => ({
        text: txt, // 使用txt数组中的元素作为text
        link: pre[i] + lnk[i][j] // 拼接链接前缀、基本路径和lnk数组中的元素（确保以'/'结尾）
    }))
));

// 构建 text - items 列表
const nav = name.map((nm, i) => ({
    text: nm,
    ariaLabel: nm,
    items: items[i] // 直接使用items数组中的对应元素，因为items[i]已经是一个数组了
}));
  
module.exports = {  
    nav  
};