---
title: 您如何决定使用 React 状态、上下文和外部状态管理器？
---

## TL;DR

在 React 状态、上下文和外部状态管理器之间进行选择取决于您的应用程序状态管理需求的复杂性和范围。将 React 状态用于本地组件状态，将 React 上下文用于需要在多个组件之间共享的全局状态，将 Redux 或 MobX 等外部状态管理器用于需要高级功能（如中间件、时间旅行调试）或需要在大型应用程序之间共享状态的复杂状态管理。

---

## 决定使用 React 状态、上下文和外部状态管理器

### React 状态

React 状态最适合用于管理单个组件中的本地状态。它易于使用，并提供了一种直接的方式来处理不需要在多个组件之间共享的状态。

#### 何时使用 React 状态

- 当状态仅与单个组件相关时
- 当状态不需要被其他组件访问或修改时
- 当您希望保持组件自包含且易于理解时

#### 示例

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### React 上下文

React 上下文对于在多个组件之间共享状态非常有用，而无需通过组件树的每一层传递 props。它非常适合需要被许多组件访问的全局状态。

#### 何时使用 React 上下文

- 当您需要在多个组件之间共享状态时
- 当您想避免 prop 钻取（通过多层组件传递 props）时
- 当状态相对简单且不需要高级状态管理功能时

#### 示例

```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换主题
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
```

### 外部状态管理器

Redux 或 MobX 等外部状态管理器专为复杂的状态管理需求而设计。它们提供高级功能，例如中间件、时间旅行调试以及在大型应用程序中管理状态的能力。

#### 何时使用外部状态管理器

- 当状态管理需求复杂并涉及许多相互关联的状态时
- 当您需要高级功能（如中间件、时间旅行调试或开发工具）时
- 当需要在具有许多组件的大型应用程序之间共享状态时

#### Redux 示例

```jsx
// actions.js
export const increment = () => ({ type: 'INCREMENT' });

// reducer.js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;

// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;

// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

## 延伸阅读

- [React 状态文档](https://react.dev/learn/state-a-components-memory)
- [React 上下文文档](https://react.dev/learn/passing-data-deeply-with-context)
- [Redux 文档](https://redux.js.org/)
- [MobX 文档](https://mobx.js.org/README.html)
