---
title: What is the `useRef` hook in React and when should it be used?
---

## TL;DR

The `useRef` hook in React is used to create a mutable object that persists across renders. It can be used to access and manipulate DOM elements directly, store mutable values that do not cause re-renders when updated, and keep a reference to a value without triggering a re-render. For example, you can use `useRef` to focus an input element:

```javascript
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return <input ref={inputEl} type="text" />;
}
```

---

## What is the `useRef` hook in React and when should it be used?

### Introduction to `useRef`

The `useRef` hook in React is a function that returns a mutable `ref` object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

### Key use cases for `useRef`

#### Accessing and manipulating DOM elements

One of the primary use cases for `useRef` is to directly access and manipulate DOM elements. This is particularly useful when you need to interact with the DOM in ways that are not easily achievable through React's declarative approach.

Example:

```javascript
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return <input ref={inputEl} type="text" />;
}
```

In this example, the `useRef` hook is used to create a reference to the input element, and the `useEffect` hook is used to focus the input element when the component mounts.

#### Storing mutable values

`useRef` can also be used to store mutable values that do not cause a re-render when updated. This is useful for keeping track of values that change over time but do not need to trigger a re-render.

Example:

```javascript
import React, { useRef } from 'react';

function Timer() {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
    console.log(count.current);
  };

  return <button onClick={increment}>Increment</button>;
}
```

In this example, the `count` variable is stored in a `useRef` object, and its value is incremented without causing the component to re-render.

#### Keeping a reference to a value

`useRef` can be used to keep a reference to a value without triggering a re-render. This is useful for storing values that need to persist across renders but do not need to cause a re-render when they change.

Example:

```javascript
import React, { useRef, useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h1>Now: {count}</h1>
      <h2>Before: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, `prevCountRef` is used to keep a reference to the previous value of `count` without causing a re-render.

## Further reading

- [React documentation on `useRef`](https://react.dev/reference/react/useRef)
- [Using the `useRef` hook](https://react.dev/learn/manipulating-the-dom-with-refs)
