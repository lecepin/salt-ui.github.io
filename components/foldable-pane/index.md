# tingle-foldable-pane [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-foldable-pane.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-foldable-pane)

折叠面板组件。

## How to develop

### install

```bash
tnpm i salt-tools -g
npm run tnpm-dep 
npm start
```

### update

```bash
npm run tnpm-update
```

## Simple Usage

```jsx
<FoldablePane
  className="my-test-demo-foldable"
  foldHeight={300}
  isFold
  onFold={(foldStatus) => { alert(foldStatus); }}
>
  <h1>开发原则</h1>
  <p>我们的开发原则 ...</p>
</FoldablePane>
```

## Props

| 配置项        | 类型        | 必填    | 默认值  | 功能/备注                      |
| ---------- | --------- | ----- | ---- | -------------------------- |
| className  | string    | false |   | 自定义的当前组件容器上对应的类名               |
| foldHeight | number    | false | 240  | 折叠高度                       |
| isFold     | bool      | false | true | 初始化状态时是否折叠                 |
| onFold     | func      | false |      | 点击折叠按钮后的回调函数，第一个参数为当前的折叠状态 |


## APIs

暂无

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-foldable-pane/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
