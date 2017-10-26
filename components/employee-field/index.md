# tingle-employee-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-employee-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-employee-field)

人员选择表单域



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

```js
<EmployeeField
  label="选择人员"
  placeholder="请选择"
  value={this.state.value}
  corpId={'xxxxxxxxx'}
  onChange={(value) => { this.onChange(value); }}
/>
```

## Props

| 配置项        | 类型        | 必填    | 默认值  | 功能/备注                      |
| ---------- | --------- | ----- | ---- | -------------------------- |
| className  | string    | false |   | 自定义的当前组件容器上对应的类名               |
| corpId | string    | true | ''  | 调用钉钉api所使用的企业id                     |
| placeholder     | string      | false | '' | 占位符                 |
| multiple     | bool      | false |   true   | 是否允许多选 |
| isNeedSearch     | bool      | false |   true   | 是否需要搜索 |
| locale     | string      | false |   'zh-cn'   | 语言 |
| startWithDepartmentId     | string      | false |    -1  | -1表示打开的通讯录从自己所在部门开始展示, 0表示从企业最上层开始，(其他数字表示从该部门开始:暂时不支持) |
| readOnly     | bool      | false |   false   | 是否只读 |
| value     | array      | false |   []   | 值 |
| onChange     | func      | false |      | function(list){} |

- 钉钉api接受的参数，请查看[这里](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.Du9ebD&treeId=171&articleId=104926&docType=1)

## Value 

| 配置项        | 类型        |意义        |
| ---------- | --------- | --------- |
| label  | string  | 显示的标签 |
| key | string  | 工号 |
| avatar | string | 头像 |

```js
[{
  label: '欧阳震华',
  key: '023456',
  avater: 'http://www.xxxxxx.com/aaa.jpg',
}]
```


## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-employee-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
