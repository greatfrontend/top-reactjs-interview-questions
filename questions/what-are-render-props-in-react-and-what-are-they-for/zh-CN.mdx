---
title: React 中的 render props 是什么，它们有什么用？
---

## TL;DR

React 中的 Render props 是一种在组件之间共享代码的技术，它使用一个值为函数的 prop。此函数返回一个 React 元素，并允许您将数据传递给子组件。它有助于重用组件逻辑，而无需使用高阶组件或钩子。

```jsx
class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

// Usage
<DataFetcher
  url="/api/data"
  render={(data) => <div>{data ? data.name : 'Loading...'}</div>}
/>;
```

---

## React 中的 render props 是什么，它们有什么用？

### 定义

Render props 是 React 中一种在组件之间共享代码的模式，它使用一个值为函数的 prop。此函数被称为“render prop”，因为它用于确定要渲染的内容。

### 目的

Render props 用于：

- 在组件之间共享逻辑，而无需使用高阶组件 (HOC) 或钩子
- 使组件更具可重用性和可组合性
- 提高代码可读性和可维护性

### 工作原理

使用 render prop 的组件将一个函数作为 prop。此函数在组件的 `render` 方法中被调用，以生成所需的输出。

### 示例

这是一个简单的示例，用于说明这个概念：

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <h1>
      The mouse position is ({x}, {y})
    </h1>
  )}
/>;
```

在此示例中，`MouseTracker` 是一个跟踪鼠标位置并将坐标传递给 `render` prop 函数的组件。然后，`render` prop 函数确定如何显示坐标。

### 优点

- **可重用性**：跟踪鼠标位置的逻辑被封装在 `MouseTracker` 中，使其可在应用程序的不同部分重复使用。
- **关注点分离**：`MouseTracker` 组件负责跟踪鼠标位置，而 `render` prop 函数负责渲染 UI。
- **灵活性**：通过将不同的 `render` prop 函数传递给同一个 `MouseTracker` 组件，可以创建不同的 UI 表示。

## 延伸阅读

- [高级 React 模式](https://kentcdodds.com/blog/compound-components-with-react-hooks)
