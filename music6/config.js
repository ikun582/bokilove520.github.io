/**
 * 大家在这里自定义即可，如果不添加图片，记得把图片配置的src写成 ""
 */
var settings = {
    // 爱心配置
    love: {
        length: 700,  // 爱心的大小
        duration: 1.75,  // 爱心扩散速度，越小速度越快
        velocity: 120,  // 爱心扩散速度，越小速度越慢
        effect: -0.75, // 爱心收缩效果，比如：1扩散，-2收缩
        size: 32, // 爱心数量
        color: "red" // 爱心颜色
    },
    // 开始按钮配置
    button: {
        // 按钮内容
        text: "打开礼物",
        // 按钮字体颜色
        color: "#FFF",
        // 按钮边框颜色
        borderColor: "red",
        // 按钮宽度
        width: "240",
        // 按钮高度
        height: "80",
        // 按钮字体大小
        size: "30",
        // 按钮圆角，可根据喜好调节
        borderRadius: "5"
    },
    // 背景颜色配置
    bg: {
        color: "#000"
    },
    // 音乐配置
    music: {
        // 只用写音乐名，比如 xxx.mp3
        src: "hugme.mp3"
    },
    // 文字配置
    text: {
        // 文字内容
        content: "润熙",
        // 字体大小
        size: "40",
        // 文字宽度
        width: "500",
        // 文字颜色
        color: "#B0D5DF",
        // 文字是否加粗,0不加粗，1加粗
        bold: "1",
        // 文字距离左边多远
        left: "450",
        // 文字距离顶部多远
        top: "200",
        // 透明度，1不透明，0不透明
        opacity: ".6"
    },
    // 图片配置
    image: {
        // 图片放在image文件夹下，然后写图片名比如 xxx.png
        src: "你好.jpg",
        // 图片宽度
        width: "200",
        // 图片高度
        height: "200",
        // 图片距离顶部距离
        top: "500",
        // 图片距离左边距离
        left: "400",
        // 圆角，50%是圆形
        borderRadius: "50%",
        // 透明度，1不透明，0不透明
        opacity: ".5"
    }
};