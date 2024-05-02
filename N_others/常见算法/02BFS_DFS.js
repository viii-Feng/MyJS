//可以用于查找dom节点
const DFS=function(node){
    if(node){
        //处理逻辑
        for(let child of node.children){
            DFS(child);
        }
    }
   
}

const BFS=function(node){
    let queue=[node];
    while(queue.length>0){
        let tmp=queue.shift();
        for(let child of tmp){
            queue.push(child);
        }
    }

   
}