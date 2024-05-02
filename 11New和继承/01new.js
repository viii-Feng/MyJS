myNew=function(func,...args){
    const obj={};
    obj.__proto__=func.prototype;
    let result=func.apply(obj,args);
    return result instanceof Object?result:obj;
}
//为了防止函数被普通调用而不是通过new调用，可以在对象里判断一下this是不是在instanceof 类上，如果不在就报错
//es6里new.target，如果不是new或者Reflect.construct()调用返回undefined
//calss只能new调用，new.target返回当前类（继承中可用来找到子类），还可以用来实现抽象类