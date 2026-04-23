---
title: 为什么 React 建议不要修改状态？
---

## TL;DR

React 建议不要修改状态，因为它可能导致意外行为和错误。React 依赖于状态不变性来有效地确定何时重新渲染组件。当状态被直接修改时，React 可能无法检测到更改，从而导致过时或不正确的 UI 更新。相反，请始终使用 `setState` 或 `useState` 钩子等方法创建一个新的状态对象。

---

## 为什么 React 建议不要修改状态？

### React 的渲染机制

React 使用虚拟 DOM 来优化渲染。当状态改变时，React 将新的虚拟 DOM 与之前的虚拟 DOM 进行比较，以确定更新实际 DOM 所需的最小更改集。此过程称为协调。

### 不变性和状态比较

React 依赖于不变性来有效地检测更改。当状态是不可变的，React 可以通过比较引用来快速确定组件是否需要重新渲染。如果引用不同，React 知道状态已更改。

### 修改状态的问题

1. **过时的 UI 更新**：直接修改状态可能导致 React 无法检测到更改，从而导致 UI 未按预期更新。
2. **调试困难**：直接修改状态会使跟踪状态更改和调试问题变得更加困难。
3. **意外行为**：修改状态可能导致不可预测的行为，尤其是在多个组件依赖于同一状态时。

### 如何正确更新状态

不要直接修改状态，而是始终创建一个新的状态对象。例如，当使用 `useState` 钩子时：

```javascript
const [state, setState] = useState(initialState);

// 错误：直接修改状态
state.value = newValue;

// 正确：创建一个新的状态对象
setState({ ...state, value: newValue });
```

当使用类组件和 `setState` 时：

```javascript
this.setState((prevState) => ({
  ...prevState,
  value: newValue,
}));
```

## 延伸阅读

- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React documentation on reconciliation](https://react.dev/learn/preserving-and-resetting-state)
- [Why not to mutate state in React](https://daveceddia.com/why-not-modify-react-state-directly/)
