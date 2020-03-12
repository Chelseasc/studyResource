// class Compile{
//     constructor(el, vm) {
//         // 构造函数里其他地方要用，就放实例上
//         this.el = this.isElementNode(el) ? el : document.querySelector(el); // el的传值可能有两种： #app / document.que
//         this.vm = vm;
//         if(this.el) {
//             // 编译
//             // 1.若直接查找dom太耗性能，所以先把真实dom移入到内存中 fragment
//             let fragment = this.node2fregment(this.el);
//             // 2.编译：获取需要编译的元素节点 如v-model和文本节点{{}}
//             this.compile(fragment);
//             // 3.把编译好的fragment塞回页面
//         }
//     }
//     // 辅助方法
//     isElementNode(node) {
//         return node.nodeType === 1;
//     }
//     // 核心方法
//     node2fregment(el) {
//         // 取文档碎片（一层层循环取dom）
//         // createdocumentfragment()方法创建了一虚拟的节点对象，节点对象包含所有属性和方法
//         let fragment = document.createDocumentFragment();
//         let firstChild;
//         while(firstChild = el.firstChild) {
//             fragment.appendChild(firstChild);
//         } //    此时页面中就空了
//         return fragment;
//     }
//     isDirective(attrname) {
//         return attrname.includes('v-');
//     }
//     compileEle(node) { // 即编译v-的
//         let attrs = node.attributes;
//         Array.from(attrs).forEach(attr => {
//             // 判断属性名是不是包含v-
//             let attrname = attr.name;
//             if(this.isDirective(attrname)) {
//                 // 取到对应的值放到节点中
//                 let express = attr.value;
//             }
//         })
//     }
//     compileText(node) { // 即编译{{}}的
//         let text = node.textContent; // .textContent取文本中的内容
//         let reg = /\{\{([^}]+)\}\}/g;
//     }
//     compile(fragment) {
//         let childNodes = fragment.childNodes; // .childNodes只取第一层
//         console.log(childNodes);
//         Array.from(childNodes).forEach(node => {
//             if(this.isElementNode(node)) {
//                 console.log('ele',node);
//                 // 编译元素
//                 this.compileEle(node);
//                 this.compile(node); // 是元素就递归取子节点
//             } else {
//                 console.log('text',node);
//                 // 编译文本
//                 this.compileText(node);
//             }
//         })
        
//     }
// }

function success () {console.log('提交成功')}
const debouce = (cb, delay) => {
    console.log('执行了防抖');
    
    return () => {
    console.log('return');

        setTimeout(() => {
            cb();
        }, delay)
    }
}
const doDeb = debouce(success, 2000);
let btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', doDeb)