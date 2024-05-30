// const pre = ['os',"network","mysql","redis","JavaLearning","PythonLearning","JavaInterview"]
const pre = ['os',"network","mysql","redis","JavaLearning"]
// 确保lnk数组中的每个元素都以'/'结尾
for(let i =0;i<pre.length;i++){
    pre[i]="/"+pre[i]+"/"
}
// const name = ['操作系统',"网络","数据库","redis","Java","Python学习","Java学习"]
const name = ['操作系统',"网络","数据库","redis","Java学习"]
const txtLst = [
    ["硬件系统","操作系统结构","内存管理","进程管理","调度算法","文件系统","设备管理","网络系统","Linux命令","学习心得"],
    ["基础篇","HTTP篇","TCP篇","IP篇","学习心得"],
    ["基础篇","索引篇","事务篇","锁篇","日志篇","内存篇"],
    ["面试","数据类型","持久化","功能篇","高可用","缓存"],
    ["Java基础","Java进阶"],
]
let lnk = [
    ["1_hardware","2_os_structure","3_memory","4_process","5_schedule","6_file_system","7_device","8_network_system","9_linux_cmd","10_learn"],
    ["1_base","2_http","3_tcp","4_ip","5_learn"],
    ["base","index","transaction","lock","log","buffer_pool"],
    ["base","data_struct","storage","module","cluster","architecture"],
    ["Java基础","Spring"]
]
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
const nav = name.map((name, i) => ({  
    text: name,  
    ariaLabel: name,  
    items: items[i] // 直接使用items数组中的对应元素，因为items[i]已经是一个数组了  
}));  
  
module.exports = {  
    nav  
};