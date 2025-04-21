// 实现一个 HardMan:
// HardMan("jack") 输出:
// I am jack

// HardMan("jack").rest(10).learn("computer") 输出
// I am jack
// //等待10秒
// Start learning after 10 seconds
// Learning computer

// HardMan("jack").restFirst(5).learn("chinese") 输出
// //等待5秒
// Start learning after 5 seconds
// I am jack
// Learning chinese

function HardMan(name) {
    setTimeout (() =>console.log('I am', name), 0)
    this.sleep = (time, now) =>{
        while(new Date() - now < time * 1000) continue
    }
    this.rest = (time) =>{
        let now = new Date()
        sleep(time, now)
        setTimeout (() =>console.log('Start learning after ',  time, ' seconds'),0)
        return this
    }
    this.learn = (sub) => {
        setTimeout (() =>console.log('Learning', sub),0)
        return this
    }
    this.restFirst = (time) =>{
        let now = new Date()
        sleep(time, now)
        console.log('Start learning after ',  time, ' seconds')
        return this
    }
    return this
}

HardMan("jack").restFirst(3).learn("computer")

// 第二种方法： 任务队列
function HardMan2 (name) {
    this.name = name
    this.queue = []

    this.next = () =>{
        if(this.queue.length){
            this.queue.shift()()
        }
    }

    const fn = () =>{
        setTimeout(()=>console.log('I am', name), 0)
        this.next();
    }
    this.queue.push(fn);

    this.rest = (time) =>{
        const fn = () => {
            setTimeout(() => {
                console.log(`Wait ${time} seconds.`);
                this.next();
            }, second * 1000);
        };
        this.queue.push(fn);
        return this;
    }
    this.learn = (sub) => {
        const fn = () => {
            console.log(`I'm studying ${sub}`);
            this.next();
        };
        this.queue.push(fn);
        return this;
    }
    this.restFirst = (time) =>{
        const fn = () => {
            setTimeout(() => {
                console.log(`Wait ${time} seconds.`);
                this.next();
            }, second * 1000);
        };
        this.queue.unshift(fn);
        return this;
    }
    setTimeout(() => {
        this.next();
    }, 0);
    return this
   
}