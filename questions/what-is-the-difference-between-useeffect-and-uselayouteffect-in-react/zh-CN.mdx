---
title: React 中 `useEffect` 和 `useLayoutEffect` 有什么区别？
---

## TL;DR

`useEffect` 和 `useLayoutEffect` 是 React 钩子，用于处理函数组件中的副作用，但它们在时机和用例上有所不同：

- `useEffect`：在 DOM 绘制后异步运行。它适用于数据获取、订阅或日志记录等任务。
- `useLayoutEffect`：在 DOM 更改后但在浏览器绘制之前同步运行。将其用于测量 DOM 元素或将 UI 与 DOM 同步等任务。

代码示例：

```jsx
import React, { useEffect, useLayoutEffect, useRef } from 'react';

function Example() {
  const ref = useRef();

  useEffect(() => {
    console.log('useEffect: Runs after DOM paint');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Runs before DOM paint');
    console.log('Element width:', ref.current.offsetWidth);
  });

  return <div ref={ref}>Hello</div>;
}
```

---

## 什么是 `useEffect`？

`useEffect` 是一个 React 钩子，用于管理函数组件中的副作用。副作用包括获取数据、更新订阅或与浏览器的 DOM API 交互等操作。

- 它在 DOM 更新和绘制后异步运行。
- 它不会阻止浏览器更新 UI。
- 默认情况下，它在每次渲染后运行，但依赖项可以控制其执行。

### 代码示例

```jsx
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Component mounted or updated');
    return () => console.log('Cleanup on unmount or dependency change');
  }, []); // Runs only on mount and unmount

  return <div>Hello, World!</div>;
}
```

### 常见用例

- 从 API 获取数据
- 设置订阅（例如，WebSocket 连接）
- 日志记录或分析跟踪
- 添加和删除事件侦听器

## 什么是 `useLayoutEffect`？

`useLayoutEffect` 是一个类似于 `useEffect` 的 React 钩子，但它在时机上有所不同。它在 DOM 更改后并在浏览器绘制屏幕之前同步运行。

- 它适用于需要在绘制前访问 DOM 的任务。
- 它可以阻止渲染，因此应谨慎使用。

### 代码示例

```jsx
import React, { useLayoutEffect, useRef } from 'react';

function Example() {
  const ref = useRef();

  useLayoutEffect(() => {
    console.log('Element dimensions:', ref.current.getBoundingClientRect());
  });

  return <div ref={ref}>Hello</div>;
}
```

### 常见用例

- 测量 DOM 元素（例如，用于动画或布局）
- 根据计算调整 DOM 属性或样式
- 修复 UI 同步问题

## `useEffect` 和 `useLayoutEffect` 之间的主要区别

### 时机

- `useEffect`：在浏览器绘制 UI 后执行。
- `useLayoutEffect`：在浏览器绘制之前，DOM 更改后立即执行。

### 阻塞行为

- `useEffect`：非阻塞，异步运行。
- `useLayoutEffect`：阻塞，同步运行。

### 用例示例

- `useEffect`：获取数据、更新状态或添加事件监听器。
- `useLayoutEffect`：测量 DOM 元素、管理动画或解决布局问题。

## 延伸阅读

- [React Hooks 文档](https://react.dev/reference/react/hooks)
- [React `useEffect` API 文档](https://react.dev/reference/react/useEffect)
- [React `useLayoutEffect` API 文档](https://react.dev/reference/react/useLayoutEffect)
- [`useEffect` 和 `useLayoutEffect` 之间的区别](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
