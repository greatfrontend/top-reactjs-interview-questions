---
title: useEffect 的依赖项数组会影响什么？
---

## TL;DR

useEffect 的依赖项数组决定了 effect 应该何时重新运行。如果数组为空，则 effect 仅在初始渲染后运行一次。如果它包含变量，则 effect 在任何这些变量更改时运行。如果省略，则 effect 在每次渲染后运行。

---

## useEffect 的依赖项数组会影响什么？

### useEffect 简介

React 中的 `useEffect` 钩子用于在函数组件中执行副作用。这些副作用可以包括数据获取、订阅或手动更改 DOM。`useEffect` 钩子接受两个参数：一个包含副作用逻辑的函数和一个可选的依赖项数组。

### 依赖项数组

依赖项数组是 `useEffect` 钩子的第二个参数。它是一个 effect 所依赖的值的数组。React 使用此数组来确定何时重新运行 effect。

```javascript
useEffect(() => {
  // 在这里编写副作用逻辑
}, [dependency1, dependency2]);
```

### 依赖项数组如何影响 `useEffect`

1. **空依赖项数组 (`[]`)**:
   - effect 仅在初始渲染后运行一次。
   - 这类似于类组件中 `componentDidMount` 的行为。

   ```javascript
   useEffect(() => {
     // 此代码仅在初始渲染后运行一次
   }, []);
   ```

2. **带有变量的依赖项数组**:
   - effect 在初始渲染后运行，并在任何指定的依赖项更改时运行。
   - React 对依赖项进行浅层比较，以确定它们是否已更改。

   ```javascript
   useEffect(() => {
     // 此代码在初始渲染后运行，并在 dependency1 或 dependency2 更改时运行
   }, [dependency1, dependency2]);
   ```

3. **没有依赖项数组**:
   - effect 在每次渲染后运行。
   - 如果 effect 代价高昂，这可能会导致性能问题。

   ```javascript
   useEffect(() => {
     // 此代码在每次渲染后运行
   });
   ```

### 常见陷阱

1. **过时的闭包**:
   - 如果你在 effect 内部使用状态或 props，而没有将它们包含在依赖项数组中，你可能会得到过时的值。
   - 始终将 effect 所依赖的所有状态和 props 包含在依赖项数组中。

   ```javascript
   const [count, setCount] = useState(0);

   useEffect(() => {
     const handle = setInterval(() => {
       console.log(count); // 如果 `count` 不在依赖项数组中，这可能会记录过时的值
     }, 1000);

     return () => clearInterval(handle);
   }, [count]); // 确保 `count` 包含在依赖项数组中
   ```

2. **函数作为依赖项**:
   - 函数在每次渲染时都会重新创建，因此将它们包含在依赖项数组中可能会导致 effect 运行的频率超过必要次数。
   - 如果需要将函数包含在依赖项数组中，请使用 `useCallback` 来记忆化函数。

   ```javascript
   const handleClick = useCallback(() => {
     // 处理点击事件
   }, []);

   useEffect(() => {
     // 此 effect 不会不必要地重新运行，因为 `handleClick` 已被记忆化
   }, [handleClick]);
   ```

## 延伸阅读

- [React Docs: Using the Effect Hook](https://react.dev/reference/react/useEffect)
- [React Docs: Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [Overreacted: A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
