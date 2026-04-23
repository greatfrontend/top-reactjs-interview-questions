---
title: React Hooks 的规则是什么？
---

## 总结

React Hooks 有一些基本规则来确保它们正常工作。 始终在 React 函数的顶层调用 Hooks，切勿在循环、条件或嵌套函数内调用。 仅从 React 函数组件或自定义 Hooks 调用 Hooks。 这些规则确保 Hooks 保持正确的状态和生命周期行为。

---

## React Hooks 的规则是什么？

### 始终在顶层调用 Hooks

Hooks 应该始终在 React 函数的顶层调用。 这意味着你不应该在循环、条件或嵌套函数内调用 Hooks。 此规则确保每次组件渲染时 Hooks 以相同的顺序调用，这对于维护正确的状态和生命周期行为至关重要。

```javascript
// 正确
function MyComponent() {
  const [count, setCount] = useState(0);

  if (count > 0) {
    // 做一些事情
  }
}

// 不正确
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // 这将破坏 Hooks 的规则
  }
}
```

### 仅从 React 函数组件或自定义 Hooks 调用 Hooks

Hooks 应该仅从 React 函数组件或自定义 Hooks 调用。 此规则确保 Hooks 在 React 可以管理其状态和生命周期的适当上下文中被使用。

```javascript
// 正确
function MyComponent() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

// 正确（自定义 Hook）
function useCustomHook() {
  const [state, setState] = useState(null);
  return [state, setState];
}

// 不正确
function regularFunction() {
  const [count, setCount] = useState(0); // 这将破坏 Hooks 的规则
}
```

### 使用 `eslint-plugin-react-hooks` linter

为了执行这些规则，你可以使用 `eslint-plugin-react-hooks` linter。 这个插件将帮助你识别和修复代码中 Hooks 规则的违规行为。

```bash
npm install eslint-plugin-react-hooks --save-dev
```

将插件添加到你的 ESLint 配置中：

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error", // 检查 Hooks 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 依赖项
  }
}
```

## 延伸阅读

- [React hooks documentation](https://react.dev/reference/react/hooks)
- [Rules of hooks](https://react.dev/reference/rules/rules-of-hooks)
- [Using the `eslint-plugin-react-hooks` linter](https://www.npmjs.com/package/eslint-plugin-react-hooks)
