class MVVM {
    // 接参数 用constructor 相当于以前的function mvvm(params){}里的params
    constructor(options) {
        // 一上来先把默认可用的东西挂载在实例上
        this.$el = options.el;
        this.$data = options.data;
        // 如果有需要编译的就开始编译
        if(this.$el) {
            // 用元素和数据进行编译
            new Compile(this.$el, this) // 这里“数据”可直接传this,方便以后取别的属性
        }
    }
}