---
title: 在 React 中使用数组索引作为 `key` 的值有什么后果？
---

## TL;DR

在 React 中使用数组索引作为 `key` 的值可能会导致性能问题和错误。当项目顺序发生变化时，React 可能无法正确识别哪些项目已更改，从而导致不必要的重新渲染或不正确的组件更新。最好使用唯一的标识符作为 `key`，以确保 React 可以有效地管理和更新 DOM。

---

## 使用数组索引作为 React 中 `key` 值的后果

### 性能问题

当数组索引用作 `key` 时，React 可能无法有效地更新 DOM。如果数组中项目的顺序发生变化，React 将无法正确识别已添加、删除或移动的项目。这可能导致不必要的重新渲染和性能下降。

### 不正确的组件更新

使用数组索引作为 `key` 可能会导致应用程序中的错误。例如，如果项目的顺序发生变化，React 可能会为不同的项目重用相同的组件实例，从而导致不正确的状态和 props 传递给组件。这可能导致意外行为和难以调试的问题。

### 例子

考虑以下使用数组索引作为 `key` 的示例：

```jsx
const items = ['Item 1', 'Item 2', 'Item 3'];

const List = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

如果 `items` 的顺序发生变化，React 可能无法正确更新 DOM，从而导致性能问题和潜在的错误。

### 更好的方法

与其使用数组索引，不如使用唯一的标识符作为 `key`。这确保了 React 可以有效地管理和更新 DOM。

```jsx
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const List = () => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
```

在此示例中，使用 `item.id` 作为 `key` 可确保 React 在顺序更改时正确识别和更新项目。

## 延伸阅读

- [React documentation on keys](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [Why using array index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
- [React performance optimization with keys](https://kentcdodds.com/blog/understanding-reacts-key-prop)
