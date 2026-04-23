---
title: React 中重新渲染是什么意思？
---

## 总结

在 React 中，重新渲染是指组件响应状态或 props 的变化而更新其在 DOM 中的输出的过程。当组件的状态或 props 发生变化时，React 会触发重新渲染，以确保 UI 反映最新的数据。此过程涉及再次调用组件的 render 方法以生成新的虚拟 DOM，然后将其与之前的虚拟 DOM 进行比较，以确定更新实际 DOM 所需的最小更改集。

---

## React 中重新渲染是什么意思？

### 理解重新渲染

在 React 中，重新渲染是指组件响应其状态或 props 的变化而更新其在 DOM 中的输出的过程。这确保了 UI 始终与底层数据同步。

### 什么时候会发生重新渲染？

重新渲染发生在以下情况下：

- 当组件使用 `setState` 更改状态时
- 当组件从其父组件接收到新的 props 时
- 当父组件重新渲染时，导致其子组件也重新渲染

### 重新渲染过程

1. **状态或 props 更改**：当组件的状态或 props 更改时，React 会为该组件安排重新渲染。
2. **render 方法**：React 调用组件的 `render` 方法以生成新的虚拟 DOM 树。
3. **虚拟 DOM 比较**：React 使用 diffing 算法将新的虚拟 DOM 树与之前的虚拟 DOM 树进行比较。
4. **DOM 更新**：React 计算所需的最小更改集并相应地更新实际 DOM。

### 示例

这是一个简单的示例，用于说明重新渲染：

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

在此示例中：

- `Counter` 组件有一个状态变量 `count`。
- 当单击按钮时，`setCount` 会更新状态，从而触发重新渲染。
- 再次调用 `render` 方法，并将新的虚拟 DOM 与之前的虚拟 DOM 进行比较。
- React 更新实际 DOM 以反映新的计数。

### 性能考虑

重新渲染可能很昂贵，尤其对于复杂的组件或大型应用程序而言。为了优化性能，React 提供了几种技术：

- **PureComponent**：一个基类，它实现了 props 和 state 的浅层比较，以防止不必要的重新渲染。
- **React.memo**：一个高阶组件，它会记忆组件 render 的结果，以避免在 props 未更改的情况下重新渲染。
- **useMemo 和 useCallback**：用于记忆值和函数的 Hook，以防止不必要的重新渲染。

## 延伸阅读

- [React documentation on rendering](https://react.dev/learn/render-and-commit)
- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React.memo](https://react.dev/reference/react/memo)
