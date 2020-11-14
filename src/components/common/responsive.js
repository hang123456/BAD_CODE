class Vue {
    constructor(options){
        this.$options = options
        this.$data = options.data
        this.$el = options.el
        new Observer(this.$data)
        Object.keys(this.$data).forEach(item => {
            this._proxy(item)
        })
        new Compiler(this.$el,this)
    }
    _proxy(key){
        Object.defineProperty(this,key,{
            enumerable:true,
            configurable:true,
            set(value){
                  this.$data[key] = value
            },
            get(){
                return this.$data[key]
            }
        })
    }
}
class Observer {
    constructor(data){
        this.data = data
        Object.keys(data).forEach(key => {
            this.defineReactive(this.data,key,data[key])
        })
        
    }
    defineReactive(data,key,val){
        const dep = new Dep()  //每个数据都创建一个观察者
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:true,
            set(newValue){
                if(newValue === val){
                    return
                }
                val = newValue
                dep.notify()
            },
            get(){
                if(dep.target){
                    dep.addSub(dep.target)
                }
                return val
            }
        })
    }
}
class Dep {
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach(item => {
            item.update()
        })
    }
}
class Watcher {
    constructor(node,name,vm){
        this.node = node
        this.name = name
        this.vm = vm
        Dep.target = this
        this.update()
        Dep.target = null
    }
    update(){
        this.node.nodeValue = this.vm[this.name]
    }
}
let reg = /\{\{(.*)\}\}/
class Compiler {
    constructor(el,vm){
        this.el = document.querySelector(el)
        this.vm = vm
        this.frag = this._createFragment()
        this.el.appendChild(this.frag)
    }
    _createFragment(){
        const frag = document.createDocumentFragment()
        let child
        while(child = this.el.firstChild){
            this._compile(child)
            frag.appendChild(child)
        }
        return frag
    }
    _compile(node){
        if(node.nodeType === 1){
            const attrs = node.attributes
            if(attrs.hasOwnProperty('v-model')){
                    const name = attrs['v-model'].nodeValue
                    node.addEventListener('input',(e) => {
                        this.vm[name] = e.target.value
                    })
            }
        }
        if(node.nodeType === 3){
            console.log(reg.test(node.nodeValue))
            if(reg.test(node.nodeValue)){
                const name = RegExp.$1.trim()
                console.log(name)
                new Watcher(node,name,this.vm)
            }
        }
    }
}