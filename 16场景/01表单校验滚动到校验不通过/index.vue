<template>
 <form id = 'myForm'>
    <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" name="name">
        <span class="error-message" id="nameMessage"></span>
    </div>
    <div class="form-group">
        <label for="email">email</label>
        <input id="email" type="text" name="email">
        <span class="error-message" id="emailMessage"></span>
    </div>
    <button type="submit">submit</button>
 </form>
</template>

<script>
  const getValidate = (e) => {
    // 阻止默认事件
    e.preventDefault();
    // 清空原来的错误信息
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent ='')
    // 拿到所有form表单的字段
    const name = document.getElementById('name')
    const  email = document.getElementById('email')

    //验证是否为空
    let isValid = true
    let fragment = null
    if(name.value.trim() === ''){
        isValid  = false
        document.getElementById('nameMessage').textContent = 'name is required'
        fragment = fragment || name
    }
    if(email.value.trim() === ''){
        isValid  = false
        document.getElementById('emailMessage').textContent = 'email is required'
        fragment = fragment || email
    }
    if(!isValid && fragment){
        fragment.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    return isValid

  }
  const myForm = document.getElementById('myForm')
  myForm.addEventListener('submit', getValidate)

</script>