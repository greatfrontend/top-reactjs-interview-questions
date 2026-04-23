---
title: React 中 state 和 props 的区别是什么？
---

## TL;DR

在 React 中，`state` 是在组件内部管理并可以随时间变化的数据存储，而 `props` 是从父组件传递给子组件的只读属性。State 用于组件内变化的数据，而 props 用于将数据和事件处理程序传递给子组件。

---

## React 中 state 和 props 的区别是什么？

### State

State 是 React 组件中的一个内置对象，用于保存关于组件的数据或信息。它在组件内部进行管理，并且可以随时间变化，通常是响应用户操作或网络响应。当 state 发生变化时，组件会重新渲染以反映新的 state。

- State 是组件局部的，无法在组件外部访问或修改
- State 可以在类组件的构造函数中初始化，或者在函数组件中使用 `useState` hook
- State 的变化是异步的，应该使用类组件中的 `setState` 方法或函数组件中 `useState` 返回的更新函数

类组件中 state 的示例：

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

函数组件中 state 的示例：

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Props

Props（属性的简称）是从父组件传递给子组件的只读属性。它们用于将数据和事件处理程序传递到组件树的下方。Props 是不可变的，这意味着它们不能被子组件更改。

- Props 作为参数传递给子组件函数，或者作为类组件中 `this` 对象的属性
- Props 允许通过向组件传递不同的数据来复用组件
- Props 也可以用来传递函数，使子组件能够与父组件通信

类组件中 props 的示例：

```jsx
class ParentComponent extends React.Component {
  render() {
    return <ChildComponent message="Hello, World!" />;
  }
}

class ChildComponent extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}
```

函数组件中 props 的示例：

```jsx
function ParentComponent() {
  return <ChildComponent message="Hello, World!" />;
}

function ChildComponent(props) {
  return <p>{props.message}</p>;
}
```

### 关键区别

- State 在组件内部管理，而 props 从父组件传递
- State 可以随时间变化，而 props 是不可变的
- State 用于组件内部变化的数据，而 props 用于向子组件传递数据和事件处理程序

## 延伸阅读

- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React documentation on components and props](https://react.dev/learn/passing-props-to-a-component)
- [React Hooks documentation](https://react.dev/reference/react/hooks)
