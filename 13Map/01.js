var obj1={
    name:"obj1",
}

var obj2={
    name:"obj2",
}
//如果key不是字符串，将会隐式调用tostring方法-》 object Object
var obj2={
    [onj1]:"1",
    [onj2]:"2",
}

let map=new Map().set([obj1],"1").set([obj2],"2")
