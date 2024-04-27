function Parent(){
    this.name="parent",
    this.age=40,
    this.play=[1,2,3]
}

function child1(){
    this.name="child",
    this.age=10
}

//1.原型链继承,所有实例共用一个parent实例
child1.prototype=new parent();
//2.构造函数继承,无法继承父类之前定义方法
Parent.prototype.getName=function(){
    return this.name;
}
function child2(){ 
    Parent.call(this);
    this.type="child";
}
//3.组合继承,父类执行了两次，造成了多构造一次的性能开销
function child3(){ 
    Parent.call(this);
    this.type="child";
}
// 第一次调用 Parent()
Child3.prototype = new Parent();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响

//使用Object.create
//1.原型式继承，create是浅拷贝，相互影响
let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person4 = Object.create(parent4);
  person4.name = "tom";
  person4.friends.push("jerry");

  let person5 = Object.create(parent4);
  person5.friends.push("lucy");

  //2.寄生式继承，就是添加一些方法，缺陷一样，相互影响
  function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

//3.寄生组合式继承
function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}
function Child6() {
    Parent6.call(this);
    this.friends = 'child5';
}

clone(Parent6, Child6);

