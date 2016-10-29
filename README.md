#说明

DEMO地址：

http://jianwangsan.cn/LooksLike360safe/index.html

##组件关系表

    app.vue    //根
    index.vue    //360安全卫士初始页面，上方有背景色的区域
        app-title.vue    //最上方，左上角，内容为：“360安全卫士领航版”和它左右两边的图标
        app-config-btns.vue    //最上方，右上角的按钮组，包括关闭和设置等
        app-main.vue    //最中间，显示分数、信息提示，还有按钮
        login-in-appMain.vue    //右上部，登录组件
        
    main-foot.vue    //360安全卫士初始页面，下方背景色为白色的区域
    
    event-bus.js    //事件载体，用于在不同组件之间传递事件