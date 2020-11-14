import Toast from './toast.vue'
const obj = {}
obj.install = (Vue) => {
    // 1.创建容器
    const toasts = Vue.extend(Toast)
    // 2.构造一个对象
    const toast = new toasts()
    // 3.将组件对象挂载到一个DOM实例上
    toast.$mount(document.createElement('div'))
    // 4.toast.$el的对象应该是div
    document.body.appendChild(toast.$el)
    5.
    Vue.prototype.$toast = toast
}
export default obj