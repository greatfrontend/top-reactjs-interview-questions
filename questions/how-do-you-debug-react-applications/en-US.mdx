---
title: How do you debug React applications?
---

## TL;DR

To debug React applications, you can use the React Developer Tools browser extension to inspect component hierarchies and state. Additionally, you can use `console.log` statements to log data and errors, and leverage breakpoints in your code using browser developer tools. For more advanced debugging, you can use error boundaries to catch and handle errors in your components.

---

## How do you debug React applications?

### Using React Developer Tools

The React Developer Tools browser extension is a powerful tool for inspecting and debugging React applications. It allows you to:

- Inspect the component hierarchy
- View and edit component state and props
- Trace component re-renders

You can install the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools) or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

### Using `console.log` statements

Adding `console.log` statements in your code can help you understand the flow of your application and identify issues. For example:

```javascript
function MyComponent(props) {
  console.log('Rendering MyComponent with props:', props);
  return <div>{props.message}</div>;
}
```

### Using breakpoints

Browser developer tools, such as Chrome DevTools, allow you to set breakpoints in your code. This can help you pause execution and inspect the current state of your application. To set a breakpoint:

1. Open the browser's developer tools (usually by pressing `F12` or `Ctrl+Shift+I`).
2. Navigate to the "Sources" tab.
3. Find the relevant file and line of code.
4. Click on the line number to set a breakpoint.

### Using Error Boundaries

Error boundaries are React components that catch JavaScript errors in their child component tree. You can implement error boundaries in two ways:

#### Using React's Built-in Class Component

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error('Error caught by error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

#### Using react-error-boundary Package

Alternatively, you can use the `react-error-boundary` package for a more convenient approach:

```javascript
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app
      }}
      onError={(error, info) => {
        // Log the error to an error reporting service
      }}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}
```

For handling errors in event handlers or async code, you can use the `useErrorBoundary` hook:

```javascript
import { useErrorBoundary } from 'react-error-boundary';

function MyComponent() {
  const { showBoundary } = useErrorBoundary();

  const handleAsyncError = async () => {
    try {
      await someAsyncOperation();
    } catch (error) {
      showBoundary(error);
    }
  };

  return <button onClick={handleAsyncError}>Perform Action</button>;
}
```

## Further reading

- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Error boundaries in React](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Using the Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [JavaScript debugging and error handling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)
