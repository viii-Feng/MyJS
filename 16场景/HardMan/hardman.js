/**
 * 
 * 利用宏任务，微任务 
 * 宏任务： settimeout/interval requestAnimationFrame i/o操作 ui渲染 在事件循环中占单独会和
 * 微任务： promise.then/process.nextTick/MutationObserver： 当前宏任务结束后，下次宏任务开始时
 *  执行同步代码
    检查宏任务队列，如果有任务则执行一个
    检查微任务队列，执行所有微任务
    更新渲染（如果在浏览器环境中）
    重复以上步骤
 * @returns 
 */
// function hardMan(name){
//     let awaitTime = 0
//     setTimeout(() => console.log('Hi, I am ', name), 0)
//     function sleep(time){
//         let now = Date.now()
//         while( Date.now() - now < time * 1000) continue
//     }
//     this.study = function( studtName){
//         setTimeout(() => console.log(`I am studying ${studtName}`), 0)
//         return this
//     }
//     this.rest = function(time){
//        sleep(time)
//        console.log(`Wait ${time} seconds.`)
//         return this
//     }
//     this.restFirst = function(time){
//         sleep(time)
//         console.log(`Wait ${time} seconds.`)
//          return this
//      }
//     return this
// }


/**
 * 法2:构建任务队列
 */
function hardMan(name){
    this.name = name
    this.taskQueue = []
    const fn = () => {
        setTimeout(() => {
            console.log('Hi, I am ', this.name)
            this.next();
        }, 0)
    }
    this.taskQueue.push(fn)
    this.study = ( studtName) => {
        const fn = () => {
            setTimeout(() => console.log(`I am studying ${studtName}`), 0)
            this.next()
        }
        this.taskQueue.push(fn)
        return this
    }
    this.rest = (time) => {
        const fn = () => {
            setTimeout(() => {
                sleep(time)
                console.log(`Wait ${time} seconds.`)
                this.next()}, time * 1000)
        }
        this.taskQueue.push(fn)
         return this
     }
     this.restFirst = (time) => {
        const fn = () => {
            setTimeout(() => {
                console.log(`Wait ${time} seconds.`)
                this.next()
            },time * 1000)
        }
        this.taskQueue.unshift(fn)
        return this
     }
     this.next = () => {
        if(this.taskQueue.length){
            this.taskQueue.shift()()
        }
     }
     setTimeout(() => {
        this.next()
    },0)
     return this
}

hardMan('潘潘').restFirst(3).study('敲码')