let arr=[[1,2,3],[2,3,4],[3,4,5]]
//二维
//多维变一维
const newArr1=function(arr){
    return arr.reduce((pre,cur)=>{
        return pre.concat(cur);
    },[])
}
//多维变一维
const newArr=function(arr){
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?newArr(cur):cur);
    },[])
}