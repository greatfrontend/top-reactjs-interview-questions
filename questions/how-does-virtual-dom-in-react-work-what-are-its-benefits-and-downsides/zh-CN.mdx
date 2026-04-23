---
title: React 中的虚拟 DOM 如何工作？它有哪些优点和缺点？
---

## TL;DR

React 中的虚拟 DOM 是实际 DOM 的轻量级副本。当组件的状态发生变化时，React 会创建一个新的虚拟 DOM 树，并使用称为“协调”的过程将其与之前的树进行比较。然后，只有差异会在实际 DOM 中更新，从而使更新更有效。优点包括提高性能和更具声明性的方式来管理 UI。但是，它可能会增加复杂性，并且对于非常简单的应用程序可能没有那么高的性能。

---

## React 中的虚拟 DOM 如何工作？

### 什么是虚拟 DOM？

虚拟 DOM 是一个概念，其中 UI 的虚拟表示形式保存在内存中，并通过 React 等库与真实的 DOM 同步。此过程称为“协调”。

### 它是如何工作的？

1. **初始渲染**：首次渲染 React 组件时，会创建一个虚拟 DOM 树。此树是实际 DOM 的轻量级副本。
2. **状态更改**：当组件的状态发生变化时，React 会创建一个新的虚拟 DOM 树。
3. **差异**：React 将新的虚拟 DOM 树与之前的树进行比较，以找到差异。此过程称为“差异”。
4. **协调**：React 仅根据在差异过程中找到的差异来更新实际 DOM 的部分。

### 代码示例

```jsx
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

在此示例中，当单击按钮时，状态会发生变化，从而触发创建新的虚拟 DOM 树。然后，React 将此新树与之前的树进行比较，并仅更新实际 DOM 中的 `<p>` 元素。

## 虚拟 DOM 的好处

### 提高性能

- **高效更新**：通过仅更新已更改的 DOM 部分，React 最小化了昂贵的 DOM 操作的数量。
- **批量更新**：React 可以将多个更新批量处理在一起，从而减少重新渲染的次数。

### 声明式 UI

- **简化开发**：开发人员可以描述 UI 在给定状态下应该是什么样子，而 React 负责更新 DOM 以匹配该状态。

### 跨平台

- **React Native**：虚拟 DOM 概念允许 React 用于使用 React Native 进行移动应用程序开发，从而在不同平台上提供一致的开发体验。

## 虚拟 DOM 的缺点

### 复杂性

- **学习曲线**：对于初学者来说，理解虚拟 DOM 的工作原理以及如何优化组件可能具有挑战性。
- **开销**：对于非常简单的应用程序，维护虚拟 DOM 的开销可能不合理。

### 性能限制

- **并非万能药**：虽然虚拟 DOM 改善了许多用例的性能，但在非常具体、高度优化的场景中，它的性能可能不如手动 DOM 操作。

## 延伸阅读

- [React Docs on Reconciliation](https://react.dev/learn/render-and-commit)
- [What is the Virtual DOM in React?](https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/)
