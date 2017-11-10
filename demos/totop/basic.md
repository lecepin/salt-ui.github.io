---
order: 0
title: 基本使用
---

```jsx
const { Icon, Button, Totop } = SaltUI;
const { Box } = Totop;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const len = (Math.random() * 10) + 10;
const mockData = [];
for (let i = 0; i < len; i++) {
  mockData.push({
    index: i,
    color: getRandomColor(),
  });
}


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      always: false,
    };
  }

  render() {
    const t = this;
    return (
      <div className="demo">
        <Button onClick={() => { this.setState({ hide: !this.state.hide }); }}>切换返回顶部按钮隐藏</Button>
        <Button onClick={() => { this.setState({ always: !this.state.always }); }}>切换是否始终显示</Button>
        {mockData.map((item, index) => (
          <div key={index} className="demoDiv" style={{ background: item.color }}>{`第${item.index}个区块`}</div>
        ))}
        <Totop
          hideToTopButton={this.state.hide}
          showPosition={[100]}
          hide={t.state.hide}
          debounceNum={100}
          key={this.state.always ? 'always' : 'no'}
          onScroll={(e) => { console.log(e); }}
          ref={(c) => { this.totop = c; }}
          distance={this.state.always ? 0 : 100}
          duration={1000}
          customChildren={false}
          to={100}
          size="large"
        />
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

.demo {
  height: 1900px;
}

.demoDiv {
  height: 300px;
  font-size: 20px;
  line-height: 40px;
  color: white;
}
```