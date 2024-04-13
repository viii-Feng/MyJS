<template >
    <div>
        <button @click="sayHello" v-throttle>提交</button>
    </div>
</template>
<script>
Vue.directive('throttle', {
  bind: (el, binding) => {
    let throttleTime = binding.value; // 节流时间
    if (!throttleTime) { // 用户若不设置节流时间，则默认2s
      throttleTime = 2000;
    }
    let cbFun;
    el.addEventListener('click', event => {
      if (!cbFun) { // 第一次执行
        cbFun = setTimeout(() => {
          cbFun = null;
        }, throttleTime);
      } else {
        //如果多个事件监听器被附加到相同元素的相同事件类型上，当此事件触发时，
        //它们会按照它们被添加的顺序被调用。然而，如果在其中一个事件监听器中执行了 
        //stopImmediatePropagation() 方法，那么剩下的事件监听器都不会被调用12。
        event && event.stopImmediatePropagation();
      }
    }, true);
  },
});
</script>
<style >
    
</style>