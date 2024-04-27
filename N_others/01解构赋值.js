// let [a,b]={a:1,b:2};
//报错：TypeError: {(intermediate value)(intermediate value)} is not iterable

//有默认迭代行为对象：Map、Array
//要成为可迭代对象：[Symbol.iterator]有值，要取到：iterator=array[Symbol.iterator]()，迭代：iterator.next()
const obj={
    a:1,
    b:2,
    [Symbol.iterator](){
        let index=0;
        const keys=Object.keys(this);
        return {
            next(){
                if(index<keys.length){
                    return{
                        done:false,
                        value:obj[keys[index++]],
                    }
                }
                return{
                    done:true,
                    value:undefined,
                }
            }
        }
    }
}
