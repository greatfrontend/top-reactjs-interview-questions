---
title: 如何在 React 应用程序中处理异步数据加载？
---

## TL;DR

在 React 应用程序中，异步数据加载通常使用 `useEffect` 和 `useState` 钩子来处理。您在 `useEffect` 内部启动数据获取，并使用获取的数据更新状态。这确保了组件使用新数据重新渲染。这是一个简单的例子：

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

---

## 在 React 应用程序中处理异步数据加载

### 使用 `useEffect` 和 `useState`

处理 React 中异步数据加载最常见的方法是使用 `useEffect` 和 `useState` 钩子。`useEffect` 允许您执行副作用，例如数据获取，而 `useState` 有助于管理组件的状态。

1. **初始化状态**：使用 `useState` 创建状态变量来存储获取的数据和加载状态。
2. **获取数据**：使用 `useEffect` 在组件挂载时执行数据获取。
3. **更新状态**：获取数据后，更新状态以触发重新渲染。

这是一个详细的例子：

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

### 处理错误

处理数据获取期间可能发生的错误非常重要。您可以在 `useEffect` 中使用 `try-catch` 块来捕获和处理错误。

```javascript
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);
```

### 使用自定义钩子

为了更好地重用代码，您可以创建自定义钩子来处理数据获取。这允许您封装数据获取逻辑并在多个组件中重用它。

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

然后，您可以在组件中使用此自定义钩子：

```javascript
import React from 'react';
import useFetch from './useFetch';

function DataFetchingComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

## 延伸阅读

- [React documentation on hooks](https://react.dev/reference/react/hooks)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Handling errors in async functions](https://javascript.info/async-await#error-handling)
