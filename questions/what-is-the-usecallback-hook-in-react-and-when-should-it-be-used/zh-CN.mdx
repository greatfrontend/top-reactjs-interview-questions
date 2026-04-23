---
title: React 中的 `useCallback` Hook 是什么？应该在什么时候使用？
---

## TL;DR

React 中的 `useCallback` Hook 用于记忆函数，防止它们在每次渲染时被重新创建。当将回调传递给依赖于引用相等性以防止不必要渲染的优化子组件时，这特别有用。当您有一个作为 prop 传递给子组件的函数，并且您希望避免子组件不必要地重新渲染时，应该使用 `useCallback`。

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## React 中的 `useCallback` Hook 是什么？应该在什么时候使用？

### 什么是 `useCallback`？

`useCallback` Hook 是一个 React Hook，它返回一个记忆化的回调函数，该函数仅在其中一个依赖项发生更改时才会更改。它对于通过防止不必要的函数重新创建来优化性能非常有用。

### 语法

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### 什么时候应该使用 `useCallback`？

#### 防止不必要的重新渲染

当您将一个函数作为 prop 传递给子组件时，即使函数本身没有改变，子组件也可能在每次父组件重新渲染时重新渲染。使用 `useCallback` 可确保函数引用保持不变，只要其依赖项没有改变，从而防止不必要的重新渲染。

```javascript
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});
```

#### 优化性能

在复杂的应用程序中，在每次渲染时重新创建函数在性能方面可能代价高昂。通过使用 `useCallback`，您可以避免这种开销，并使您的应用程序更有效率。

### 注意事项

- **过度使用**：过度使用 `useCallback` 可能会导致代码更复杂，并且不一定总能提高性能。应谨慎使用。
- **依赖项**：确保所有依赖项都在依赖项数组中正确指定。缺少依赖项可能会导致陈旧的闭包和错误。

## 延伸阅读

- [React documentation on `useCallback`](https://react.dev/reference/react/useCallback)
- [React memoization techniques](https://react.dev/reference/react/memo#skipping-re-rendering-when-props-are-unchanged)
- [Understanding React's `useCallback` and `useMemo`](https://kentcdodds.com/blog/usememo-and-usecallback)
