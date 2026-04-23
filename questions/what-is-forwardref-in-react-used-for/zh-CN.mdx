---
title: React 中的 `forwardRef()` 有什么作用？
---

## TL;DR

React 中的 `forwardRef()` 用于通过组件将 ref 传递给其子组件之一。当您需要直接从父组件访问 DOM 元素或子组件的实例时，这非常有用。您使用 `forwardRef()` 包装您的函数式组件，并使用 `ref` 参数将 ref 转发到所需的子元素。

```jsx
import React, { forwardRef } from 'react';

const MyComponent = forwardRef((props, ref) => <input ref={ref} {...props} />);
```

---

## React 中的 `forwardRef()` 有什么作用？

### 简介

在 React 中，`forwardRef()` 是一个高阶函数，它允许您通过组件将 ref 转发给其子组件之一。当您需要直接从父组件访问 DOM 元素或子组件的实例时，这特别有用。

### 为什么使用 `forwardRef()`？

在以下几种情况下，`forwardRef()` 很有用：

- **访问 DOM 元素**：当您需要直接操作 DOM 元素时，例如聚焦输入字段。
- **与子组件交互**：当您需要调用子组件实例的方法或访问其属性时。

### 如何使用 `forwardRef()`

要使用 `forwardRef()`，您需要使用它包装您的函数式组件，并使用 `ref` 参数将 ref 转发到所需的子元素。

#### 示例

这是一个简单的示例，演示如何使用 `forwardRef()`：

```jsx
import React, { forwardRef, useRef } from 'react';

// 定义一个函数式组件并用 forwardRef 包装它
const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // 访问 input 元素并聚焦它
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
```

在此示例中：

1. `MyInput` 是一个用 `forwardRef()` 包装的函数式组件。
2. `ref` 参数被转发到 `MyInput` 内部的 `input` 元素。
3. 在 `ParentComponent` 中，使用 `useRef()` 创建一个 ref (`inputRef`)。
4. `inputRef` 被传递给 `MyInput`，允许父组件直接访问 input 元素。
5. 当单击按钮时，`focusInput` 函数使用 ref 来聚焦 input 元素。

### 重要注意事项

- **仅限函数式组件**：`forwardRef()` 与函数式组件一起使用。类组件可以直接使用 ref，而无需 `forwardRef()`。
- **Ref 转发**：确保 ref 被转发到 DOM 元素或类组件实例，而不是另一个函数式组件。

## 延伸阅读

- [React documentation on `forwardRef()`](https://react.dev/reference/react/forwardRef)
- [Using the `useRef` Hook](https://react.dev/reference/react/useRef)
- [Refs and the DOM](https://react.dev/learn/manipulating-the-dom-with-refs)
