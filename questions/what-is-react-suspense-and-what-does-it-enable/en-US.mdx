---
title: What is React Suspense and what does it enable?
---

## TL;DR

React Suspense is a feature that allows you to handle asynchronous operations in your React components more gracefully. It enables you to show fallback content while waiting for something to load, such as data fetching or code splitting. You can use it with `React.lazy` for code splitting and with libraries like `react-query` for data fetching.

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
```

---

## What is React Suspense and what does it enable?

### Introduction to React Suspense

React Suspense is a feature introduced by the React team to help manage asynchronous operations in a more declarative way. It allows you to specify a loading state (fallback) while waiting for some asynchronous operation to complete, such as data fetching or code splitting.

### Code splitting with React.lazy

One of the primary use cases for React Suspense is code splitting. Code splitting allows you to load parts of your application on demand, which can significantly improve the initial load time of your application.

```jsx
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

In this example, `React.lazy` is used to dynamically import the `LazyComponent`. The `Suspense` component wraps the lazy-loaded component and provides a fallback UI (`<div>Loading...</div>`) to display while the component is being loaded.

### Data fetching with Suspense

React Suspense can also be used for data fetching, although this feature is still experimental and requires additional libraries like `react-query` or `Relay`.

```jsx
import React, { Suspense } from 'react';
import { useQuery } from 'react-query';

function fetchData() {
  return fetch('https://api.example.com/data').then((response) =>
    response.json(),
  );
}

function DataComponent() {
  const { data } = useQuery('data', fetchData);
  return <div>{data}</div>;
}

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <DataComponent />
    </Suspense>
  );
}
```

In this example, `react-query` is used to fetch data, and `Suspense` provides a fallback UI while the data is being loaded.

### Benefits of React Suspense

- **Improved user experience**: By showing fallback content, you can keep the user engaged while waiting for asynchronous operations to complete.
- **Simplified code**: Suspense allows you to handle loading states declaratively, reducing the need for complex state management.
- **Better performance**: Code splitting with `React.lazy` can significantly reduce the initial load time of your application.

## Further reading

- [React Suspense documentation](https://react.dev/reference/react/Suspense)
- [React.lazy documentation](https://react.dev/reference/react/lazy)
- [React Query documentation](https://react-query.tanstack.com/)
- [Relay documentation](https://relay.dev/docs/next/guides/relay-resolvers/suspense/)
