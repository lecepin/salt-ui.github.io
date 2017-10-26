# tingle-number-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-number-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-number-field)
一句话描述
一张截图

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

## Props

NumberField 共享 TextField 所有配置，除此外

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
| type | string | optional | "card" | 金额格式化的类型，枚举值 card/cnmobile/money |
| delimiter | string | optional | “ ” | 格式化时用到的分隔符 |
| fixedNum | number | optional |  | type 为 money 时有效，指定最多几位小数 |  
| format | function(value, delimiter) | optional | noop | 自定义格式化函数，优先级高于 type |
| deFormat | func(value, delimiter) | optional | (str, delimiter) => str.split(delimiter).join('') | 去格式化的函数，在自己指定 format 的时候会用到。|

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-number-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
