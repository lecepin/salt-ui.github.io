# history
## 1.2.6
* with tingle-scroll-list@1.3.0

## 1.2.3
* tingle-checkbox-field@1.1.4
 * fix: 移动端无法选中选项
 * fix: 样式修复

## 1.2.2
* 移除demo的Native，用户可到钉钉官网查找相关jsapi，更新更及时

## 1.2.1
* 误发，忘记build了

## 1.2.0
* tingle-crumb
 * 新增组件

## 1.1.18 / 2016.12.30
* tingle-checkbox-field
 * 右侧 icon 没对齐修复
 * 滑动穿透修复
* tingle-photo-field
 * placeholder样式修复
* tingle-textarea-field
 * placeholder 文案颜色与规范不一致修复

## 1.1.17 / 2016.12.15
* tingle-checkbox-field
 * 移动端多选组件交互更改，提供了一种slot的方式
* tingle-text-field
 * 禁用态也可显示placeholder
* tingle-tab-bar
 * 修复icon不支持相对路径的问题

## 1.1.16 / 2016.12.8
* tingle-search-bar
 * zindex修复
* tingle-tab-bar
 * zindex修复
* tingle-list
 * 移除dependencies中的gulp-svg-symbols，它仅用于开发

## 1.1.15 / 2016.12.1
* fix 1.1.14遗留的bug

## 1.1.14 / 2016.12.1
* fix 1.1.13遗留的bug

## 1.1.13
* 复制index.html到dist/demo/index.html，并更新页面上静态文件地址，发布到线上，用户可以访问这个demo

## 1.1.11
* tingle-list
 * 数据更新后isDelete不可用，fix
* tingle-scroll-list
 * 把数据请求的功能分离出来
* tingle-datetime-field
 * console.waring拼写错误，fix
* tingle-slide
 * 90毫秒的点击捕获时间太短，改成500
* tingle-photo-field
 * Ali.alert，bugfix

## 1.1.10
* @ali/tingle-box@1.0.2 
 * 增加react依赖，支持node端渲染
* @ali/tingle-checkbox-field@1.0.13 
 * feat: add required tag
* @ali/tingle-gallery@1.1.2 
  * 增加react依赖，支持node端渲染 
* @ali/tingle-group@1.0.8 
 * 增加react依赖，支持node端渲染
* @ali/tingle-icon-source@1.0.13
 * feat: add field-required
* @ali/tingle-mask@1.0.6 
 * 增加react依赖，支持node端渲染
* @ali/tingle-photo-field@1.0.3 
 * feat: add required tag
* @ali/tingle-slide@1.0.8 
* @ali/tingle-slot@1.0.9 
 * fix issue [#4](http://gitlab.alibaba-inc.com/tingle-ui/tingle-slot/issues/4)
* @ali/tingle-toast@1.0.10 
 * feat: change loading

## 1.1.9
 * @ali/tingle-slot@1.0.9
   * bugfix

## 1.1.8
 * @ali/tingle-cascade-select-field
   * 新增组件

## 1.1.7
 * @ali/tingle-dialog@1.0.19 
  * 修复国际化 bug
 * @ali/tingle-icon-source@1.0.12 
  * 增加 toast 图标
 * @ali/tingle-tab@1.0.23 
  * remove border-bottom in the brick mode

## 1.1.6
* @ali/tingle-tab-bar@1.1.4
 * 调整选中态图片地址的传入方式为使用属性 activeIcon
 * 支持自定义 TabBar 和 TabBarItem 样式
* @ali/tingle-search-bar@1.0.4
 * 修复clear keyword未触发 onChange 的 bug

## 1.1.5
* @ali/tingle-tab-bar@1.1.2
 * fix: touch scroll
* @ali/tingle-dialog@1.0.18 
 * 支持国际化
* @ali/tingle-grid@1.0.4 
 * 代码优化
* @ali/tingle-scroll-list@1.2.7
 * bugfix
 
## 1.1.4
* @ali/tingle-scroll-list@1.2.2
 * Bugfix/reset position
* @ali/tingle-search-bar@1.0.3
 * fix: reset overflow after unmount
* @ali/tingle-icon-source@1.0.11
 * display none
 
## 1.1.3
* @ali/tingle-scroll-list@1.2.1
 * fix default background image
 * fix rchild
* @ali/tingle-tab@1.0.22 
 * fix title propType to `node`
 * style: formatting
 
## 1.1.2
* @ali/tingle-rate@1.0.2 
 * gulpfile add plugin `add-module-exports`
* @ali/tingle-scroll-list@1.1.5 
 * fix rchild is undefined
 
## 1.1.1
* tingle-button@1.0.10
 * onClick 传入 event 参数
 
## 1.1.0
* 版本号标准化
* tingle-toast@1.0.7
 * 改为默认不显示 mask
* tingle-tab@1.0.20
 * 修复文字很长时，右侧没留空白
* tingle-scroll-list@1.1.4
 * use nextProps param to do fetch action
* tingle-checkbox-field@1.0.12
 * label判断修改
* tingle-radio-field@1.0.9
 * label判断修改
* tingle-scroller@1.0.7
 * 文档订正
* tingle-layer@1.0.10
 * 文档订正
* tingle-rate@1.0.1
 * 新增组件 
* tingle-photo-field@1.0.1
 * 新增组件
 
## 1.0.29
* tingle-scroll-list@1.1.0
 * 重构
 * 样式修改

## 1.0.28
* tingle-toast@1.0.6
 * mask 支持隐藏
* tingle-layer@1.0.9
 * 修复 mask  隐藏
* tingle-iscroll-list@1.0.11
 * 修复滑动到末页的时候会将所有数据清空
 * 修复在 scroll 里的元素在 Android 里无法点击
* tingle-checkbox-field@1.0.11
 * 添加 label
 * tingle-radio-field@1.0.7
  * 添加 label
* tingle-calendar@1.0.0
 * 新增组件
 * 新增 calendar demo

## 1.0.27
* tingle-tab@1.0.18
  * demo 修改
* tingle-scroll-list@1.0.5
  * 样式修改
  
## 1.0.26
* tingle-datetime-field@1.0.6
  * 新增
* tingle-scroll-list@1.0.1
  * 新增

## 1.0.25
* tingle-slot@1.0.8
  * 支持服务端调用（增加 react 依赖）
  * 增加表头显示功能
* tingle-select-field@1.0.8
  * 支持服务端调用（增加 react 依赖）
* tingle-tab@1.0.17
 *  增加 tab 滚动定位
* tingle-search-bar@1.0.2
 *  添加 onEnter 和 onExit

## 1.0.24
* tingle-search-bar@1.0.1
 * 新增
* tingle-tab@1.0.16
 * 添加切换销毁属性 `destroyInactiveTabPane` 
* tingle-slot@1.0.6
 * 修复 constructor 里使用了 `this.prpps`
 
## 1.0.23
* tingle-slide@1.0.7
  * 修复只有一个元素时无法触发 `onSlideClick` 事件的错误

## 1.0.22
* tingle-list@1.0.9
 * list item 的 onclick 回调添加 data 参数
 * 头像 的 onclick 回调添加 data 参数
 * 添加滑动删除的回调
* tingle-field@1.0.14
 * 添加必填标识(星号)

## 1.0.21
* tingle-list@1.0.8
 * list Item 添加 onClick 回调
 * data中的内容不传就不显示（解决有人不想显示头像的问题）
 * 添加头像 onClick 回调
* 打包修复

## 1.0.20
* tingle-gallery
  * 添加 `onGalleryClick` 特性

## 1.0.19
* 重新构建 salt-ui

## 1.0.18
* tingle-list
 * [解决tingle-group边线问题](http://gitlab.alibaba-inc.com/tingle-ui/tingle-list/issues/10)
 * 解决setState后list数据不变的问题

## 1.0.17
* tingle-icon
 * [文档补充] (http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/issues/4)
 * [添加 onClick 事件] (http://gitlab.alibaba-inc.com/tingle-ui/tingle-icon/issues/6)

## 1.0.16
 * tingle-tab bug fix to 1.0.14:
  * [tab 切换方式用 show/hide 会有问, 改用只渲染当前 body](http://gitlab.alibaba-inc.com/tingle-ui/tingle-tab/issues/5)
  * [导航部分右边添加自定义icon区域](http://gitlab.alibaba-inc.com/tingle-ui/tingle-tab/issues/6)
 * tingle-select-field bug fix to 1.0.6
  * [点击图标不会出现选项](http://gitlab.alibaba-inc.com/tingle-ui/tingle-select-field/issues/7)

## 1.0.15
 * tingle-dialog 1.0.17 修复了在内外安卓容器无法居中的问题

## 1.0.13
 * copy salt.js and salt.css

## 1.0.12  
 * 和 tnpm 包版本号保持一致

## 1.0.5
 * add global SaltUI

## 1.0.4
 * tingle-filed	1.0.12 修复了 className不在最外层的问题
 * tingle-select-field	1.0.5 fix issue #2 #3
 * tingle-icon 1.0.10 把 svg4everybody 本地化，原有的方式 webpack 打包后有问题
 * tingle-dialog 1.0.14 fix issue #3 #4 #5
 * tingle-group	1.0.7 fix issue #3