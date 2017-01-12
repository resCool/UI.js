UI.config({
    //配置路径
    baseUrl:"",
    //注入模块
    container:{
        //布局模板名称：模板地址+是否装载(PS:如果都为true只会选择第一个模板容器)
        "layout1":["app/demoPage1.tpl",true],
        "layout2":["app/demoPage2.tpl",false]
    },
    //注入接口
    interface:{
        "interface1":"www.123.com/interface1",
        "interface2":"www.123.com/interface2",
        "interface3":"www.123.com/interface3",
        "interface4":"www.123.com/interface4",
        "interface5":"www.123.com/interface5",
    },
    //注入组件
    component:{
        //组件名：组件地址+组件是否装载+接口注入
        "menu":["module/header.mold",true,["interface1","interface2"]],
        "header":["module/body.mold",true,["interface1","interface2"]]
    },
    //容器组件映射关系   选择的容器名称:{"页面容器":"所加载的组件"}
    con_com:{
        layout1:{
            con1:"test",
            con2:"test",
            con3:"test",
            con4:"test",
            con5:"test",
            con6:"test",
        },
        layout2:{
            con1:"test",
            con2:"test",
            con3:"test",
            con4:"test",
            con5:"test",
            con6:"test",
        }
    },
    //组件逻辑js
    data:{
        //js所需接口和其他数据都需数据中转池配合
        "md1_js":"modulejs/md1.js"
    }
});