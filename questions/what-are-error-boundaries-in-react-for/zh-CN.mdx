---
title: React 中的错误边界是做什么的？
---

## 总结

React 中的错误边界是捕获其子组件树中任何位置的 JavaScript 错误的组件，记录这些错误，并显示备用 UI，而不是崩溃整个应用程序。它们使用 `componentDidCatch` 生命周期方法和 `static getDerivedStateFromError` 方法实现。错误边界不会捕获事件处理程序、异步代码或服务器端渲染中的错误。

---

## React 中的错误边界是做什么的？

### 简介

错误边界是 React 中的一项功能，有助于以更优雅的方式管理和处理错误。它们允许开发人员捕获其组件树中任何位置的 JavaScript 错误，记录这些错误，并显示备用 UI，而不是崩溃整个应用程序。

### 如何实现错误边界

要创建错误边界，您需要定义一个类组件，该组件实现以下一个或两个生命周期方法：

- `static getDerivedStateFromError(error)`：此方法用于更新状态，以便下一次渲染将显示备用 UI。
- `componentDidCatch(error, info)`：此方法用于记录错误信息。

这是一个错误边界组件的示例：

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 用法

要使用错误边界，请将其包装在您要监视错误的任何组件周围：

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### 限制

错误边界有一些限制：

- 它们不会捕获事件处理程序中的错误。对于事件处理程序，您需要使用常规的 JavaScript `try`/`catch` 块。
- 它们不会捕获异步代码中的错误（例如，`setTimeout` 或 `requestAnimationFrame` 回调）。
- 它们不会捕获服务器端渲染期间的错误。
- 它们不会捕获在错误边界本身中抛出的错误。

### 最佳实践

- 使用错误边界来包装高级组件，例如路由处理程序或应用程序的主要部分。
- 将错误记录到错误报告服务，以跟踪生产中的问题。
- 提供用户友好的备用 UI，以改善发生错误时的用户体验。

## 延伸阅读

- [React documentation on error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
