---
title: React 中的 `useMemo` Hook 是什么？应该在什么时候使用它？
---

## TL;DR

React 中的 `useMemo` Hook 用于记忆昂贵的计算，以便仅在其中一个依赖项发生更改时才重新计算它们。 这可以通过避免不必要的重新计算来提高性能。 当您有一个计算量很大的函数，并且不需要在每次渲染时运行它时，您应该使用 `useMemo`。

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

## React 中的 `useMemo` Hook 是什么？应该在什么时候使用它？

### 什么是 `useMemo`？

`useMemo` Hook 是一个内置的 React Hook，它允许您记忆函数的计算结果。 这意味着该函数仅在其依赖项之一发生更改时才会重新执行。 `useMemo` 的主要目的是通过防止不必要的重新计算来优化性能。

### 语法

`useMemo` 的语法如下：

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- 第一个参数是一个返回您要记忆的值的函数。
- 第二个参数是一个依赖项数组。 仅当这些依赖项之一发生更改时，才会重新计算记忆值。

### 什么时候应该使用它？

#### 昂贵的计算

如果您有一个执行计算量很大的计算的函数，则可以使用 `useMemo` 确保仅在必要时才执行此计算。

```javascript
const expensiveCalculation = (num) => {
  // Some expensive calculation
  return num * 2;
};

const MyComponent = ({ number }) => {
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return <div>{memoizedValue}</div>;
};
```

#### 避免不必要的渲染

`useMemo` 还可以用于避免子组件的不必要渲染。 如果子组件依赖于计算量很大的值，则可以使用 `useMemo` 确保仅在必要时才重新计算该值。

```javascript
const MyComponent = ({ items }) => {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return <ChildComponent sortedItems={sortedItems} />;
};
```

### 注意事项

- **过度使用**：过度使用 `useMemo` 可能会导致代码更复杂，而没有显着的性能优势。 应谨慎使用。
- **依赖项**：确保正确指定所有依赖项。 缺少依赖项可能会导致值过时，而额外的依赖项可能会导致不必要的重新计算。

## 延伸阅读

- [React documentation on `useMemo`](https://react.dev/reference/react/useMemo)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback) by Kent C. Dodds
