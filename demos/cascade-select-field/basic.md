---
order: 0
title: 基本使用
---

```jsx
const { Group, CascadeSelectField } = SaltUI;

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }, {
      value: 'xixi',
      label: '西溪',
    }, {
      value: 'long',
      label: '名称加长测试名称加长测试名称加长测试名称加长测试名称加长测试名称加长测试名称加长测试名称加长测试名称加长测试',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }, {
      value: 'zongtongfu',
      label: '总统府',
    }],
  }, {
    value: 'suzhou',
    label: '苏州',
    children: [{
      value: 'zhuozhengyuan',
      label: '拙政园',
    }, {
      value: 'shizilin',
      label: '狮子林',
    }],
  }],
}];
const columns = ['省', '市', '景点'];

class Demo extends React.Component {

  constructor(props) {
    super(props);

    const t = this;
    t.state = {
      value: [],
      value1: [
        'zhejiang',
        'hangzhou',
        'xixi',
      ],
    };
  }

  handleChange(field, value) {
    console.log(value);
    this.setState({
      [field]: value,
    });
  }

  render() {
    const t = this;
    return (
      <div>
        <Group>
          <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">级联选择器演示</Group.Head>
          <Group.List>
            <CascadeSelectField label="普通模式" onSelect={t.handleChange.bind(t, 'value')} options={options} value={t.state.value} placeholder="请输入" columns={columns} tip="这里是提示信息" />
            <CascadeSelectField label="级联模式" mode="complex" onSelect={t.handleChange.bind(t, 'value1')} options={options} value={t.state.value1} placeholder="请输入" columns={columns} />
            <CascadeSelectField label="只读模式" onSelect={t.handleChange.bind(t, 'value')} options={[]} value={['***']} placeholder="请输入" columns={columns} tip="这里是提示信息" readOnly />
          </Group.List>
        </Group>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```

```css
body {
  background-color: #f2f2f2;
}

```