# Todo
SSR、Webpack实践todolist
# webpack配置过程遇到的问题
style-loader 和 css-loader 的配置顺序不能反了

否则报错
CssSyntaxError 
Module build failed (from ./node_modules/css-loader/dist/cjs.js):
# 使用说明
1、按S键可快速聚焦输入框，输入完成按Enter即可添加你的todo
2、在“已完成”页签下添加todo会自动跳转“全部”页签
3、如果todo文本内容过长以...隐藏超出部分（todo写辣么长是魔鬼吧）
4、如果todo项大于10个则以滚动方式展示
5、禁止选中文本
6、图标使用纯CSS实现