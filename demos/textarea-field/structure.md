---
order: 2
title: 上下结构
---



```jsx
import { Group, TextareaField } from 'saltui';

const { Component } = React;

class TextareaFieldDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      t1: '默认文案',
      t2: '曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。曾经有一份真诚的爱情摆在我的面前，我没有珍惜，等到失去的时候才后悔莫及，人世间最痛苦的事莫过于此。',
      t3: '',
    };
  }

  handleChange(name, value) {
    console.log(value);
    this.setState({
      [name]: value,
    });
  }


  render() {
    const t = this;
    return (
      <div>

        <Group.List>
          <TextareaField
            layout="v" label="标题如果特别长，可以选择使用上下结构"
            placeholder="请输入"
            tip="这里也有个提示"
            onChange={(value) => { t.handleChange('t3', value); }}
          />
        </Group.List>

      </div>
    );
  }
}

ReactDOM.render(<TextareaFieldDemo />, mountNode);
```