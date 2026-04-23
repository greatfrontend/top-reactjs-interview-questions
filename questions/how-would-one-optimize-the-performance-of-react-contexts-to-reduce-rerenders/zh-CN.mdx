---
title: 如何优化 React Context 的性能以减少重新渲染？
---

## 总结

要优化 React Context 的性能并减少重新渲染，可以使用诸如记忆上下文值、拆分上下文和使用选择器等技术。使用 `useMemo` 记忆上下文值可确保上下文值仅在其依赖项更改时才更改。拆分上下文允许您将状态更改隔离到应用程序的特定部分。使用像 `use-context-selector` 这样的库与选择器可以帮助您仅重新渲染实际需要更新的上下文值的组件。

```javascript
const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
```

---

## 如何优化 React Context 的性能以减少重新渲染

### 记忆上下文值

减少不必要的重新渲染的最有效方法之一是记忆上下文值。通过使用 `useMemo`，您可以确保上下文值仅在其依赖项更改时才更改。

```javascript
import React, { createContext, useMemo, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const value = useMemo(() => ({ state, setState }), [state]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
```

### 拆分上下文

另一种技术是将您的上下文拆分为多个较小的上下文。通过这种方式，您可以将状态更改隔离到应用程序的特定部分，从而减少需要重新渲染的组件数量。

```javascript
const UserContext = createContext();
const ThemeContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 使用选择器

使用选择器可以帮助您仅重新渲染实际需要更新的上下文值的组件。像 `use-context-selector` 这样的库对此目的非常有用。

```javascript
import { createContext, useContextSelector } from 'use-context-selector';

const MyContext = createContext();

const MyComponent = () => {
  const state = useContextSelector(MyContext, (v) => v.state);

  return <div>{state}</div>;
};
```

## 延伸阅读

- [React context 文档](https://react.dev/learn/passing-data-deeply-with-context)
- [useMemo Hook 文档](https://react.dev/reference/react/useMemo)
- [use-context-selector 库](https://github.com/dai-shi/use-context-selector)
