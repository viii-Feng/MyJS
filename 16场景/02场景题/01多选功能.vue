<!--
 * @Autor: weifeng68
 * @Email: weifeng68@jd.com
 * @Description: 
 * @CreateDate: Do not edit
 * @LastEditors: weifeng68
 * @LastEditTime: 2025-03-27 12:40:42
-->
<template>
</template>

<script lang="ts" setup>
    // 树形结构
   interface  myDom {
        code: string,
        isChoose: boolean,
        children: myDom[],
        parentCode: string, // root： null || ''
   }
   const divs: myDom = ([
    {
        code: 'div1',
        isChoose: false,
        kind: 0,
        children:[
            {
                code: 'child1',
                isChoose: false,
                kind: 1,
            },
            {
                code: 'child2',
                isChoose: false,
                kind: 1,
            },

        ]
    },
    {
        code: 'div2',
        isChoose: false,
        kind: 0,
        children:[
            {
                code: 'child3',
                isChoose: false,
                kind: 1,
            },
            {
                code: 'child4',
                isChoose: false,
                kind: 1,
            },

        ]
    }
   ])
    // 子节点更新
    const updateChilds = (item: myDom) => {
        item.isChoose = !item.isChoose
        const setChilds = (children: myDom[]) =>{
            if(children?.length){
                children.map((child) => {
                    child.isChoose = item.isChoose
                    if(child.children?.length) setChilds(child.children)
                })
            }
        }
        setChilds(item?.children)
    }
    const findCode = (divs: myDom[], code:string) : myDom | undefined => {
        for(let div of divs){
            if(div.code === code) return div
             if(div.children?.length){
                const  child = findCode(div.children, code)
                if(child) return child
             }
        }
        return undefined
    }
    // 父节点更新
    const updateParent = (parentCode: string, childType = true) => {
       if(!parentCode ) return
        const parent : myDom = findCode(divs, parentCode)
        if(parent){
             if(!childType)  {
                parent.isChoose = false
             }
             else{
                parent.isChoose = parent.children?.every(child => child.isChoose)
             }
             if(parent.parentCode) updateParent(parent.parentCode, parent.isChoose)
        }
    }
   const handleClick = ( item: myDom) => {
       // 子元素全为勾选
       updateChilds(item)
       //  同级子元素勾选，父元素勾选
       updateParent(item.parentCode, item.isChoose)
    }
</script>

<style scoped>

</style>