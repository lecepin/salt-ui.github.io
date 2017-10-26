# tingle-crumb [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-crumb.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-crumb)

面包屑。

![](https://img.alicdn.com/tps/TB1r7gQOVXXXXagXpXXXXXXXXXX-417-73.png)

## Install

```
tnpm install @ali/tingle-crumb --save
```

## Simple Usage

```
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.crumbs = [
            { text: '刘一' },
            { text: '陈二' },
            { text: '张三' },
            { text: '李四' },
            { text: '王五' },
            { text: '赵六' },
            { text: '孙七' },
            { text: '周八' },
            { text: '吴九' },
            { text: '郑十' },
        ];
    }

    onClick(idx) {
        console.log(idx);
        alert(this.crumbs[idx].text);
    }

    render() {
        const t = this;
        return(
            <div>
                <Crumb onClick={t.onClick.bind(t)}>
                    {
                        this.crumbs.map((crumb, key) => {
                            return <Crumb.Item key={key}>{crumb.text}</Crumb.Item>
                        })
                    }
                </Crumb>
            </div>
        );
    }
};

module.exports = Demo;
```

## Props

### showScroll

描述：是否启用横向滑动

类型：`Boolean`

默认：`true`

必选：否

### onClick(index)

描述：点击每个子项目，触发的事件。

类型：`Function`

默认：`noop`

必选：否

* index: 当前点击的项的索引


## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-crumb/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
