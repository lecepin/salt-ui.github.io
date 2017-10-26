# tingle-password-input [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-password-input.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-password-input)

密码输入框

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
import React from 'react';
import ReactDOM from 'react-dom';
import PasswordInput from 'tingle-password-input';

class Demo extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
          value: '',
          mask: true,
        };
    }

    handleChange(value) {
        this.setState({
            value: value,
        });
    }

    handleMaskToggle(next) {
        this.setState({
            mask: next,
        });
    }

    render() {
        return (
            <div>
                <PasswordInput
                    placeholder="请输入密码"
                    value={this.state.value}
                    mask={this.state.mask}
                    onChange={this.handleChange.bind(this)}
                    onMaskToggle={this.handleMaskToggle.bind(this)} />
          </div>
      );
    }
}

// 渲染demo
ReactDOM.render(<Demo />, document.getElementById('TingleDemo'));

```

## Props

#### className

描述：自定义的扩展样式名称

类型：String

默认：''

必填：否

#### placeholder

描述：水印提示

类型：String

默认：''

必填：否

#### value

描述：输入框的值

类型：String

默认：''

必填：是

#### decrypted

描述：输入框中处于加密状态

类型：Boolean

默认：true

必填：否

#### hideIcon

描述：是否隐藏前面的锁图标

类型：Boolean

默认：false

必填：否

#### onFocus

描述：获取焦点时的回调，第一个参数是当前值，第二个参数是e

类型：Function

默认：Context.noop

必填：否

#### onBlur

描述：失去焦点时的回调，第一个参数是当前值，第二个参数是e

类型：Function

默认：Context.noop

#### onChange

描述：输入框的值改变时的回调，第一个参数是当前值，第二个参数是e

类型：Function

默认：Context.noop

必填：否

#### onDecryptedChange

描述：输入框加密状态切换时的回调，第一个参数是切换后的状态（Boolean），第二个参数是e

类型：Function

默认：Context.noop

## APIs

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-password-input/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
