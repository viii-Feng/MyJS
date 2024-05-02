(
    function(){
        var Router=function(){
            this.routers={};
            this.curUrl='' //哈希值
        }
        Router.prototype.init=function(){
            window.addEventListener('hashchange',this.reloadPage.bind(this))
        }
        Router.prototype.reloadPage=function(){
            this.curUrl=loaction.hash.substring(1) || '/'
            this.routers[this.curUrl]()
        }
        Router.prototype.map=function(key,callback){
            this.routers[key]=callback
        }
        window.oRou=Router;
        
    }
)()//立即执行函数,不污染外部环境
//es6用类进行封装
//使用：
var router=oRou();
router.init();
router.map("/",function(){
    var Div=document.querySelector('Main');
    Div.innerHTML="我是home页面"
})

router.map("/usr",function(){
    var Div=document.querySelector('Main');
    Div.innerHTML="我是用户页面"
})