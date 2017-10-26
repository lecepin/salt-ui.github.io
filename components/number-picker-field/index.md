# tingle-number-picker-field [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-number-picker-field.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-number-picker-field)

数字步进器表单域。

![image](https://work.alibaba-inc.com/aliwork_tfs/g01_alibaba-inc_com/tfscom/TB1b3itQVXXXXcVXVXXXXXXXXXX.tfsprivate.)

## Props

属性 | 类型 | 默认值| 描述
---- | ---- | ----- | ----
|className|string|-|默认值|
|value|number|0|默认值|
|max|number|-|最大值|
|min|number|-|最小值|
|step|number|1|每次改变步数，可以为小数|
|onChange|optional|-|变化时回调函数|
|readOnly|boolean|false|只读（设置readOnly为true时按钮不可操作）|
|disabled|boolean|false|是否禁用|

## Demo

```
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleValueChange(newValue) {
        this.setState({
            text: newValue
        });
    }

    render() {
        let t = this;
        return (
            <NumberPickerField label="简单Demo" step={0.1} min={-5} value={t.state.value} onChange={t.handleValueChange.bind(t)} />
        );
    }
};

```

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

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-number-picker-field/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)