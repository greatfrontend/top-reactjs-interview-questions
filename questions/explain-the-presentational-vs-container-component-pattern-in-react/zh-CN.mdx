---
title: 解释 React 中的展示组件与容器组件模式
---

## TL;DR

在 React 中，展示组件与容器组件模式是一种设计方法，其中展示组件侧重于外观，而容器组件侧重于工作方式。展示组件负责渲染 HTML 和 CSS，而容器组件处理逻辑和状态管理。这种分离有助于维护干净和有组织的 codebase。

---

## React 中的展示组件与容器组件模式

### 展示组件

展示组件主要关注 UI。它们仅通过 props 接收数据和回调，并且很少有自己的状态（除了 UI 状态，如 `hover` 或 `active`）。它们通常是无状态函数组件，但也可以是类组件。

#### 特点

- 关注外观
- 通过 props 接收数据和回调
- 很少有自己的状态
- 通常写成函数组件
- 不直接使用 Redux 或其他状态管理库

#### 例子

```jsx
const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);
```

### 容器组件

容器组件关注于工作方式。它们管理状态并处理业务逻辑。它们通常获取数据、处理用户交互，并将数据作为 props 传递给展示组件。

#### 特点

- 关注工作方式
- 管理状态并处理业务逻辑
- 获取数据并处理用户交互
- 将数据和回调传递给展示组件
- 经常使用 Redux 或其他状态管理库

#### 例子

```jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import Button from './Button';

class ButtonContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleClick = () => {
    // Handle button click
  };

  render() {
    return <Button onClick={this.handleClick} label="Click me" />;
  }
}

const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(ButtonContainer);
```

### 优点

- **关注点分离**：通过将 UI 与逻辑分离，代码库变得更加模块化，更易于维护。
- **可重用性**：展示组件可以在应用程序的不同部分重复使用，因为它们不与特定逻辑相关联。
- **可测试性**：展示组件更容易测试，因为它们是无状态的，并且仅依赖于 props。

## 延伸阅读

- [React documentation on components and props](https://react.dev/learn/passing-props-to-a-component)
- [Dan Abramov's article on presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Redux documentation on presentational and container components](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)
