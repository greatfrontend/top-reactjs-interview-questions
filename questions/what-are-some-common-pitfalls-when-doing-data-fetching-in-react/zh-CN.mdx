---
title: 在 React 中进行数据获取时，有哪些常见的陷阱？
---

## TL;DR

在 React 中进行数据获取时，常见的陷阱包括不处理加载和错误状态、通过不清理订阅导致内存泄漏，以及不使用正确的生命周期方法或钩子。 始终确保正确处理这些状态，清理组件后，并在函数式组件中使用 `useEffect` 进行副作用处理。

---

## 在 React 中进行数据获取时常见的陷阱

### 不处理加载和错误状态

在获取数据时，管理请求的不同状态（加载、成功和错误）至关重要。 否则，可能会导致糟糕的用户体验。

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
return <div>{JSON.stringify(data)}</div>;
```

### 通过不清理订阅导致内存泄漏

当组件在获取请求完成之前卸载时，它可能导致内存泄漏。 为了防止这种情况，您应该清理任何正在进行的请求。

```jsx
useEffect(() => {
  let isMounted = true;

  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      if (isMounted) {
        setData(data);
        setLoading(false);
      }
    })
    .catch((error) => {
      if (isMounted) {
        setError(error);
        setLoading(false);
      }
    });

  return () => {
    isMounted = false;
  };
}, []);
```

### 不使用正确的生命周期方法或钩子

在类组件中，数据获取应在 `componentDidMount` 中完成。 在函数式组件中，使用 `useEffect` 钩子。

```jsx
// Class component
class MyComponent extends React.Component {
  componentDidMount() {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }
}

// Functional component
const MyComponent = () => {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);
};
```

### 忽略 `useEffect` 中的依赖项数组

`useEffect` 中的依赖项数组决定了 effect 的运行时间。 忽略它可能导致不必要的重新渲染或错过的更新。

```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error));
}, []); // 空数组意味着此 effect 在初始渲染后运行一次
```

### 在 render 方法中获取数据

直接在 render 方法中获取数据可能导致无限循环和性能问题。 始终使用生命周期方法或钩子。

```jsx
// Incorrect
const MyComponent = () => {
  const data = fetch('https://api.example.com/data').then((response) =>
    response.json(),
  );
  return <div>{JSON.stringify(data)}</div>;
};

// Correct
const MyComponent = () => {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);
};
```

## 延伸阅读

- [React documentation on hooks](https://react.dev/reference/react/hooks)
- [React documentation on `useEffect`](https://react.dev/reference/react/useEffect)
- [Handling async requests in React](https://www.robinwieruch.de/react-hooks-fetch-data)
