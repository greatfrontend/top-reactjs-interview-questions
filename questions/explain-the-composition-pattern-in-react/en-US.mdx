---
title: Explain the composition pattern in React
---

## TL;DR

The composition pattern in React is the practice of building UIs by combining smaller, reusable components instead of extending them through inheritance. The most common forms are: passing children (`props.children`), passing components as named props (slots), specialization (a more specific component that wraps a generic one and fixes some props), render props / "children as a function", and compound components (a parent component that exposes a set of related sub-components, e.g. `<Tabs>` with `<Tabs.List>` and `<Tabs.Panel>`). Composition is React's main reuse mechanism, alongside custom hooks for behavior.

---

## Composition pattern in React

### What is composition?

Composition is a design principle that involves combining smaller, reusable components to build more complex components. In React, this is preferred over inheritance for creating complex UIs.

### How to use composition in React

#### Passing components as children

One common way to use composition is by passing components as children to other components. This allows you to nest components and create a hierarchy.

```jsx
function Dialog(props) {
  return <div className="dialog">{props.children}</div>;
}

function WelcomeDialog() {
  return (
    <Dialog>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </Dialog>
  );
}
```

#### Passing components as props

Another way to achieve composition is by passing components as props. This allows for more flexibility and customization.

```jsx
function SplitPane(props) {
  return (
    <div className="split-pane">
      <div className="split-pane-left">{props.left}</div>
      <div className="split-pane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```

#### Specialization via props

A specialized component wraps a generic one and fixes some of its props. This is React's preferred alternative to subclassing.

```jsx
function Dialog({ title, children }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome">
      <p>Thank you for visiting our spacecraft!</p>
    </Dialog>
  );
}
```

`WelcomeDialog` is a `Dialog` with a fixed `title` — no inheritance required.

#### Render props / children as a function

Sometimes the parent owns state but wants the consumer to decide how to render it. Passing a function as `children` (or as a named prop) gives the consumer full control:

```jsx
function MouseTracker({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {children(pos)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <p>
          Mouse at {x}, {y}
        </p>
      )}
    </MouseTracker>
  );
}
```

In modern React, custom hooks usually replace the render-prop pattern for behavior reuse, but it remains useful when the shared piece is a piece of JSX layout, not just a value.

#### Compound components

Compound components let a parent expose a set of related sub-components that share implicit state via context. The consumer composes them in whatever structure they need:

```jsx
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="account">Account settings</Tabs.Panel>
  <Tabs.Panel value="billing">Billing details</Tabs.Panel>
</Tabs>
```

This is the API style used by libraries like Radix UI and Headless UI, and by HTML itself (`<select>` with `<option>`).

### Benefits of composition

- **Reusability**: Smaller components can be reused across different parts of the application.
- **Maintainability**: Easier to manage and update smaller components.
- **Flexibility**: Components can be combined in many ways to create complex UIs without each combination needing its own component.
- **No inheritance traps**: Avoids the tight coupling of class hierarchies and the diamond problem.

### Composition vs HOCs vs hooks

Before hooks, behavior reuse often went through higher-order components (HOCs like `withRouter`, `connect`) or render props. Both work but tend to introduce wrapper components that show up in the tree and make types and refs awkward to forward. Custom hooks (introduced in React 16.8) cover most of those use cases more cleanly. Today the rule of thumb is:

- Reuse a piece of **UI structure** with composition (children, slots, compound components).
- Reuse a piece of **behavior or state** with a custom hook.
- Reach for HOCs only when wrapping is genuinely what you need (e.g. integrating with a library that expects them).

### When to use composition

- When you need to build complex UIs from smaller, reusable components.
- When you want a generic component (e.g. `Dialog`, `Card`) to support arbitrary content via `children` or slots.
- When you want to avoid inheritance, which React explicitly recommends against for component reuse.

## Further reading

- [Passing JSX as children (react.dev)](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
- [Reusing logic with custom hooks (react.dev)](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Composition in React (React in Patterns)](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/)
