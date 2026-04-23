---
title: React 中 `key` prop 的作用是什么？
---

## TL;DR

React 中的 `key` prop 用于唯一标识列表中的元素。它通过有效地更新和重新排序元素来帮助 React 优化渲染。如果没有唯一的 `key`，React 可能会不必要地重新渲染元素，从而导致性能问题和错误。

```jsx
{
  items.map((item) => <ListItem key={item.id} value={item.value} />);
}
```

---

## React 中 `key` prop 的作用是什么？

### 简介

`key` prop 是一个特殊的属性，当你在 React 中创建元素列表时，你需要包含它。它对于帮助 React 识别哪些项目已更改、已添加或已删除至关重要，从而优化渲染过程。

### 为什么 `key` 很重要

1. **高效更新**：React 使用 `key` prop 来跟踪元素。当列表的状态发生变化时，React 可以快速确定哪些项目需要重新渲染、添加或删除。
2. **避免错误**：如果没有唯一的键，React 可能会不必要地或错误地重新渲染元素，从而导致应用程序中出现潜在的错误。
3. **性能优化**：通过使用唯一的键，React 最小化了 DOM 操作的数量，使你的应用程序更快、更高效。

### 如何使用 `key` prop

当渲染元素列表时，你应该为每个元素提供一个唯一的 `key`。此键应该是稳定的，这意味着它不应在渲染之间更改。通常，你可以使用数据中的唯一标识符，例如 `id`。

```jsx
const items = [
  { id: 1, value: 'Item 1' },
  { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' },
];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} value={item.value} />
      ))}
    </ul>
  );
}

function ListItem({ value }) {
  return <li>{value}</li>;
}
```

### 常见错误

1. **使用数组索引作为键**：虽然使用数组索引作为键可能很诱人，但我们不建议这样做，因为如果列表被重新排序或添加/删除项目，索引可能会发生变化。
2. **非唯一键**：确保键在整个列表中是唯一的。重复的键可能导致意外行为和错误。

```jsx
// 错误做法：使用数组索引作为键
{
  items.map((item, index) => <ListItem key={index} value={item.value} />);
}

// 好的做法：使用唯一标识符作为键
{
  items.map((item) => <ListItem key={item.id} value={item.value} />);
}
```

## 延伸阅读

- [React 文档关于 keys](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [为什么 keys 在 React 中很重要](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
- [在 React 中保留和重置状态](https://react.dev/learn/preserving-and-resetting-state)
