---
title: React 中的协调是什么？
---

## TL;DR

React 中的协调是 React 更新 DOM 以匹配虚拟 DOM 的过程。当组件的状态或属性发生变化时，React 会创建一个新的虚拟 DOM 树，并将其与之前的树进行比较。这个比较过程称为“差异”。然后，React 只更新实际 DOM 中发生变化的部分，从而使更新高效且快速。

---

## React 中的协调是什么？

### 简介

协调是 React 中的一个关键概念，它处理 React 如何更新 DOM 以匹配虚拟 DOM。虚拟 DOM 是实际 DOM 的轻量级副本，React 使用它来确定更新用户界面的最有效方法。

### 虚拟 DOM

React 维护一个虚拟 DOM 以优化更新。当组件的状态或属性发生变化时，React 会创建一个新的虚拟 DOM 树。然后将这棵新树与之前的虚拟 DOM 树进行比较，以确定发生了什么变化。

### 差异算法

将新的虚拟 DOM 树与之前的树进行比较的过程称为“差异”。React 使用高度优化的差异算法来执行此比较。该算法的工作方式如下：

1. **元素类型比较**：如果元素类型不同，React 将用新元素替换旧元素。
2. **键比较**：如果元素类型相同但具有不同的键，React 会将它们视为不同的元素，并用新元素替换旧元素。
3. **属性和状态比较**：如果元素类型相同且具有相同的键，React 将比较它们的属性和状态以确定发生了什么变化。

### 更新 DOM

一旦差异算法确定了更改，React 只会更新实际 DOM 中发生更改的部分。这使得更新高效且快速，因为 React 避免了重新渲染整个 DOM。

### 示例

这是一个简单的示例，用于说明协调：

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

在此示例中，当调用 `increment` 方法时，状态发生变化，React 会创建一个新的虚拟 DOM 树。差异算法将新树与之前的树进行比较，并仅使用新的计数 value 更新 `<p>` 元素。

## 延伸阅读

- [React documentation on reconciliation](https://react.dev/learn/preserving-and-resetting-state)
- [Understanding the virtual DOM](https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/)
