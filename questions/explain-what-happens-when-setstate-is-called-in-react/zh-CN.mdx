---
title: 解释在 React 中调用 `useState` 设置器函数时会发生什么
---

## 总结

当在 React 中调用 `useState` 钩子返回的设置器函数时，它会安排对组件状态值的更新。然后，React 会将组件重新渲染与新状态排队。此过程通常是异步的，并且 React 会将多个状态更新批处理在一起以提高性能。

---

## 调用 `useState` 设置器时会发生什么

### 状态更新调度

当您调用 `useState` 提供的设置器函数（例如，`setCount`）时，React 会安排对该特定状态变量的更新。这不会立即发生；React 会将组件标记为需要使用更新后的状态值重新渲染。

```javascript
const [count, setCount] = useState(0);
// ...
setCount(count + 1); // 安排更新以将 'count' 设置为 1
```

### 状态替换

`useState` 设置器函数**完全替换**您提供的新值中的旧状态值。如果您的状态是一个对象，并且您只想更新一个属性，则需要手动展开旧状态并覆盖特定属性。

```javascript
const [user, setUser] = useState({ name: 'Anon', age: 99 });

// 仅更新 name，您必须展开旧状态：
setUser((prevState) => ({ ...prevState, name: 'John' }));
// 如果您只是执行 setUser({ name: 'John' })，则 'age' 属性将会丢失。
```

### 重新渲染

在安排状态更新后，React 最终将触发组件的重新渲染。函数组件主体将使用新的状态值再次执行。React 更新其虚拟 DOM，将其与之前的版本进行比较，并仅在必要时有效地更新实际 DOM。

### 异步性质和批处理

由 `useState` 设置器触发的状态更新通常是异步和批处理的。如果您在同一个事件处理程序或 effect 中调用多个状态设置器，React 通常会将这些更新批处理在一起，以进行单次重新渲染，从而获得更好的性能。因此，您不应该依赖状态变量在调用设置器后立即具有新值。如果新状态依赖于之前的状态，请使用函数式更新形式。

```javascript
// 假设 count 为 0
setCount(count + 1); // 将更新排队到 1
setCount(count + 1); // 仍然将 count 视为 0，再次将更新排队到 1!
// 结果可能是 1，而不是 2

// 使用函数式更新的正确方法：
setCount((prevCount) => prevCount + 1); // 根据之前的状态将更新排队
setCount((prevCount) => prevCount + 1); // 根据第一个的结果将另一个更新排队
// 结果将是 2
```

## 延伸阅读

- [React 文档：使用状态 Hook (`useState`)](https://react.dev/reference/react/useState)
- [React 文档：将多个状态更新排队](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
