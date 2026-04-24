# Top React.js Interview Questions (Updated for 2025)

**Updated for 2025!** Curated top React.js interview questions with high quality answers for acing your Front End Engineer interviews, brought to you by [GreatFrontEnd](https://www.greatfrontend.com/?utm_source=github&utm_medium=referral&utm_campaign=top-reactjs-qns&gnrs=yangshun).

---

<div>
  <p align="center">
    <a href="https://www.greatfrontend.com/questions/react-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=top-reactjs-qns&gnrs=yangshun">
      <img src="./assets/greatfrontend.gif" alt="GreatFrontEnd React Interview Questions" width="100%">
    </a>
  </p>
</div>

> Black Friday 2025 sale going on now, enjoy the largest discount of the year! [Get 30% off GreatFrontEnd Premium →](https://www.greatfrontend.com/questions/react-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=top-reactjs-qns&gnrs=yangshun) 💡

---

## Table of Contents

<!-- TABLE_OF_CONTENTS:START -->

| No. | Questions |
| --- | --------- |
| 1 | [What is React? Describe the benefits of React](#what-is-react-describe-the-benefits-of-react) |
| 2 | [What is the difference between React Node, React Element, and a React Component?](#what-is-the-difference-between-react-node-react-element-and-a-react-component) |
| 3 | [What is JSX and how does it work?](#what-is-jsx-and-how-does-it-work) |
| 4 | [What is the difference between state and props in React?](#what-is-the-difference-between-state-and-props-in-react) |
| 5 | [What is the purpose of the `key` prop in React?](#what-is-the-purpose-of-the-key-prop-in-react) |
| 6 | [What is the consequence of using array indices as the value for `key`s in React?](#what-is-the-consequence-of-using-array-indices-as-the-value-for-keys-in-react) |
| 7 | [What is the difference between controlled and uncontrolled React Components?](#what-is-the-difference-between-controlled-and-uncontrolled-react-components) |
| 8 | [What are some pitfalls about using context in React?](#what-are-some-pitfalls-about-using-context-in-react) |
| 9 | [What are the benefits of using hooks in React?](#what-are-the-benefits-of-using-hooks-in-react) |
| 10 | [What are the rules of React hooks?](#what-are-the-rules-of-react-hooks) |
| 11 | [What is the difference between `useEffect` and `useLayoutEffect` in React?](#what-is-the-difference-between-useeffect-and-uselayouteffect-in-react) |
| 12 | [What is the purpose of callback function argument format of `setState()` in React and when should it be used?](#what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used) |
| 13 | [What does the dependency array of `useEffect` affect?](#what-does-the-dependency-array-of-useeffect-affect) |
| 14 | [What is the `useRef` hook in React and when should it be used?](#what-is-the-useref-hook-in-react-and-when-should-it-be-used) |
| 15 | [What is the `useCallback` hook in React and when should it be used?](#what-is-the-usecallback-hook-in-react-and-when-should-it-be-used) |
| 16 | [What is the `useMemo` hook in React and when should it be used?](#what-is-the-usememo-hook-in-react-and-when-should-it-be-used) |
| 17 | [What is the `useReducer` hook in React and when should it be used?](#what-is-the-usereducer-hook-in-react-and-when-should-it-be-used) |
| 18 | [What is the `useId` hook in React and when should it be used?](#what-is-the-useid-hook-in-react-and-when-should-it-be-used) |
| 19 | [What does re-rendering mean in React?](#what-does-re-rendering-mean-in-react) |
| 20 | [What are React Fragments used for?](#what-are-react-fragments-used-for) |
| 21 | [What is `forwardRef()` in React used for?](#what-is-forwardref-in-react-used-for) |
| 22 | [How do you reset a component's state in React?](#how-do-you-reset-a-components-state-in-react) |
| 23 | [Why does React recommend against mutating state?](#why-does-react-recommend-against-mutating-state) |
| 24 | [What are error boundaries in React for?](#what-are-error-boundaries-in-react-for) |
| 25 | [How do you test React applications?](#how-do-you-test-react-applications) |
| 26 | [Explain what React hydration is](#explain-what-react-hydration-is) |
| 27 | [What are React Portals used for?](#what-are-react-portals-used-for) |
| 28 | [How do you debug React applications?](#how-do-you-debug-react-applications) |
| 29 | [What is React strict mode and what are its benefits?](#what-is-react-strict-mode-and-what-are-its-benefits) |
| 30 | [How do you localize React applications?](#how-do-you-localize-react-applications) |
| 31 | [What is code splitting in a React application?](#what-is-code-splitting-in-a-react-application) |
| 32 | [How would one optimize the performance of React contexts to reduce rerenders?](#how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders) |
| 33 | [What are higher order components in React?](#what-are-higher-order-components-in-react) |
| 34 | [What is the Flux pattern and what are its benefits?](#what-is-the-flux-pattern-and-what-are-its-benefits) |
| 35 | [Explain one-way data flow of React and its benefits](#explain-one-way-data-flow-of-react-and-its-benefits) |
| 36 | [How do you handle asynchronous data loading in React applications?](#how-do-you-handle-asynchronous-data-loading-in-react-applications) |
| 37 | [Explain server-side rendering of React applications and its benefits](#explain-server-side-rendering-of-react-applications-and-its-benefits) |
| 38 | [Explain static generation of React applications and its benefits](#explain-static-generation-of-react-applications-and-its-benefits) |
| 39 | [Explain the presentational vs container component pattern in React](#explain-the-presentational-vs-container-component-pattern-in-react) |
| 40 | [What are some common pitfalls when doing data fetching in React?](#what-are-some-common-pitfalls-when-doing-data-fetching-in-react) |
| 41 | [What are render props in React and what are they for?](#what-are-render-props-in-react-and-what-are-they-for) |
| 42 | [What are some React anti-patterns?](#what-are-some-react-anti-patterns) |
| 43 | [How do you decide between using React state, context, and external state managers?](#how-do-you-decide-between-using-react-state-context-and-external-state-managers) |
| 44 | [Explain the composition pattern in React](#explain-the-composition-pattern-in-react) |
| 45 | [What is virtual DOM in React?](#what-is-virtual-dom-in-react) |
| 46 | [How does virtual DOM in React work? What are its benefits and downsides?](#how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides) |
| 47 | [What is React Fiber and how is it an improvement over the previous approach?](#what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach) |
| 48 | [What is reconciliation in React?](#what-is-reconciliation-in-react) |
| 49 | [What is React Suspense and what does it enable?](#what-is-react-suspense-and-what-does-it-enable) |
| 50 | [Explain what happens when the `useState` setter function is called in React](#explain-what-happens-when-the-usestate-setter-function-is-called-in-react) |

<!-- TABLE_OF_CONTENTS:END -->

## Questions with answers

<!-- QUESTIONS:START -->

1. ### What is React? Describe the benefits of React

    <!-- Update here: /questions/what-is-react-describe-the-benefits-of-react/en-US.mdx -->

    React is a JavaScript library created by Facebook for building user interfaces, primarily for single-page applications. It allows developers to create reusable components that manage their own state. Key benefits of React include a component-based architecture for modular code, the virtual DOM for efficient updates, a declarative UI for more readable code, one-way data binding for predictable data flow, and a strong community and ecosystem with abundant resources and tools.
    
    **Key characteristics of React**:
    
    - **Declarative**: You describe the desired state of your UI based on data, and React handles updating the actual DOM efficiently.
    - **Component-based**: Build reusable and modular UI elements (components) that manage their own state and logic.
    - **Virtual DOM**: React uses a lightweight in-memory representation of the actual DOM, allowing it to perform updates selectively and efficiently.
    - **JSX**: While not mandatory, JSX provides a syntax extension that allows you to write HTML-like structures within your JavaScript code, making UI development more intuitive.

    <!-- Update here: /questions/what-is-react-describe-the-benefits-of-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-describe-the-benefits-of-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

2. ### What is the difference between React Node, React Element, and a React Component?

    <!-- Update here: /questions/what-is-the-difference-between-react-node-react-element-and-a-react-component/en-US.mdx -->

    A **React Node** is anything React can render: a React Element, a string, a number, an array of nodes, a fragment, a portal, `null`, `undefined`, `false`, or `true`. A **React Element** is the immutable plain object React produces from JSX or `React.createElement` describing what to render. A **React Component** is a function (or, historically, a class) that accepts props and returns React Nodes. Elements describe the UI; components are the factories that produce those elements.

    <!-- Update here: /questions/what-is-the-difference-between-react-node-react-element-and-a-react-component/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-react-node-react-element-and-a-react-component?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

3. ### What is JSX and how does it work?

    <!-- Update here: /questions/what-is-jsx-and-how-does-it-work/en-US.mdx -->

    JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX makes it easier to create React components by allowing you to write what looks like HTML directly in your JavaScript code. Under the hood, JSX is transformed into JavaScript function calls, typically using a tool like Babel. For example, `<div>Hello, world!</div>` in JSX is transformed into `React.createElement('div', null, 'Hello, world!')`.

    <!-- Update here: /questions/what-is-jsx-and-how-does-it-work/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-jsx-and-how-does-it-work?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

4. ### What is the difference between state and props in React?

    <!-- Update here: /questions/what-is-the-difference-between-state-and-props-in-react/en-US.mdx -->

    **State** is data a component owns and can update over time; **props** are data a component receives from its parent and is not allowed to mutate. State changes trigger a re-render of the owning component (and its descendants); prop changes happen because the parent re-rendered with new values. Together they implement React's one-way data flow: state lives at the lowest common ancestor that needs it, flows down as props, and changes flow back up via callbacks passed as props.

    <!-- Update here: /questions/what-is-the-difference-between-state-and-props-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-state-and-props-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

5. ### What is the purpose of the `key` prop in React?

    <!-- Update here: /questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx -->

    The `key` prop tells React how to identify each child in a list across renders so it can match the right component instance to the right data, preserve its state, and reorder DOM nodes correctly. A `key` only needs to be unique among siblings, not globally. Changing a component's `key` is also the idiomatic way to **reset its state** — React unmounts the old instance and mounts a fresh one.
    
    ```jsx
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} value={item.value} />
      ))}
    </ul>
    ```

    <!-- Update here: /questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-the-key-prop-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

6. ### What is the consequence of using array indices as the value for `key`s in React?

    <!-- Update here: /questions/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react/en-US.mdx -->

    Using array indices as `key`s causes React to reconcile the list incorrectly when items are reordered, inserted, or removed. Because the key identifies a position rather than an item, React reuses the wrong component instances — leaving stale local state, focus, and DOM attached to the wrong rows. The fix is to use a stable, unique identifier from the data (e.g. `item.id`). Index keys are only safe when the list is static and never reordered, filtered, or prepended to.

    <!-- Update here: /questions/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

7. ### What is the difference between controlled and uncontrolled React Components?

    <!-- Update here: /questions/what-is-the-difference-between-controlled-and-uncontrolled-react-components/en-US.mdx -->

    A **controlled** component drives a form input from React state — you pass `value`/`checked` plus an `onChange` handler, and React state is the single source of truth. An **uncontrolled** component lets the DOM keep the value; you read it via a `ref` (or on submit) and seed the initial value with `defaultValue`/`defaultChecked`. Controlled inputs are the right default when you need validation, conditional UI, or to derive other state from the value. Uncontrolled inputs are simpler for write-once forms and for `<input type="file">`, which is always uncontrolled. React 19 also added first-class form support via the form `action` prop, `useFormStatus`, and `useActionState`, which often removes the need for per-field controlled state.

    <!-- Update here: /questions/what-is-the-difference-between-controlled-and-uncontrolled-react-components/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-controlled-and-uncontrolled-react-components?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

8. ### What are some pitfalls about using context in React?

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    Context in React is convenient but easy to misuse. The biggest pitfalls are passing a fresh object/array as the provider `value` on every render (which forces every consumer to re-render), assuming `React.memo` will stop context-driven re-renders (it won't), and reaching for context as a general-purpose state manager. For frequently-changing or independent slices of state, split context into multiple providers, memoize the value, or use a dedicated state library like Redux, Zustand, or Jotai.

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

9. ### What are the benefits of using hooks in React?

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    Hooks let you use state and other React features in plain functions, without classes. They were introduced to solve real pain points in the class-component era — "wrapper hell" from HOCs and render props, the awkwardness of `this` binding, and the difficulty of sharing stateful logic between components. Custom hooks make that logic genuinely reusable through composition. React 19 expands the set further with hooks like `use`, `useActionState`, `useOptimistic`, and `useFormStatus` for promises, forms, and optimistic UI.

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-hooks-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

10. ### What are the rules of React hooks?

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    React hooks have a few essential rules to ensure they work correctly. Always call hooks at the top level of your component or custom hook — never inside loops, conditions, nested functions, or after an early `return`. Only call hooks from React function components or other custom hooks (whose names must start with `use`). Lean on `eslint-plugin-react-hooks` to enforce these rules. The React Compiler (RC/stable by 2026) relaxes the need for some manual memoization, but the rules of hooks themselves still apply.

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-react-hooks?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

11. ### What is the difference between `useEffect` and `useLayoutEffect` in React?

    <!-- Update here: /questions/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react/en-US.mdx -->

    Both hooks run side effects after render, but they differ in **when** they fire relative to paint:
    
    - `useEffect` runs **asynchronously after the browser has painted**. It does not block the user from seeing the new frame. Use it for data fetching, subscriptions, logging, and most side effects.
    - `useLayoutEffect` runs **synchronously during the commit phase, after DOM mutations but before the browser paints**. It blocks paint, so use it only when you need to measure the DOM and write to it in the same frame to avoid a visual flicker.
    
    Both accept a dependency array with the same semantics, both fire twice on mount in Strict Mode development builds, and `useLayoutEffect` has no effect during server rendering (React warns if you use it in SSR).
    
    Code example:
    
    ```jsx
    import { useEffect, useLayoutEffect, useRef } from 'react';
    
    function Example() {
      const ref = useRef(null);
    
      useEffect(() => {
        console.log('useEffect: runs after paint');
      }, []);
    
      useLayoutEffect(() => {
        console.log('useLayoutEffect: runs before paint');
        console.log('Element width:', ref.current.offsetWidth);
      }, []);
    
      return <div ref={ref}>Hello</div>;
    }
    ```

    <!-- Update here: /questions/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

12. ### What is the purpose of callback function argument format of `setState()` in React and when should it be used?

    <!-- Update here: /questions/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used/en-US.mdx -->

    The callback (or **updater function**) form of `setState` — both `this.setState(prev => ...)` in classes and `setX(prev => ...)` with `useState` — guarantees that each update is computed from the latest queued state rather than the value captured in your closure. Use it whenever the next state depends on the previous state, especially when you call the setter more than once in the same event handler or when the update may run after an `await`/timeout/promise.
    
    ```jsx
    // Modern hooks form (preferred)
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
      setCount((c) => c + 1);
      setCount((c) => c + 1); // Both run; final count is +2.
    };
    ```
    
    ```jsx
    // Legacy class form
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment,
    }));
    ```

    <!-- Update here: /questions/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

13. ### What does the dependency array of `useEffect` affect?

    <!-- Update here: /questions/what-does-the-dependency-array-of-useeffect-affect/en-US.mdx -->

    The dependency array of `useEffect` determines when the effect should re-run. If the array is empty, the effect runs only once after the initial render. If it contains variables, the effect runs whenever any of those variables change. If omitted, the effect runs after every render.

    <!-- Update here: /questions/what-does-the-dependency-array-of-useeffect-affect/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-does-the-dependency-array-of-useeffect-affect?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

14. ### What is the `useRef` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-useref-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    The `useRef` hook in React is used to create a mutable object that persists across renders. It can be used to access and manipulate DOM elements directly, store mutable values that do not cause re-renders when updated, and keep a reference to a value without triggering a re-render. For example, you can use `useRef` to focus an input element:
    
    ```javascript
    import React, { useRef, useEffect } from 'react';
    
    function TextInputWithFocusButton() {
      const inputEl = useRef(null);
    
      useEffect(() => {
        inputEl.current?.focus();
      }, []);
    
      return <input ref={inputEl} type="text" />;
    }
    ```

    <!-- Update here: /questions/what-is-the-useref-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-useref-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

15. ### What is the `useCallback` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    `useCallback` returns a memoized function whose identity only changes when one of its dependencies changes. The point is **referential stability** — so a `React.memo`-wrapped child does not re-render, or a `useEffect` whose deps include the function does not re-fire. Re-creating a plain function literal each render is essentially free; the actual cost being avoided is the **downstream work** triggered by a new reference.
    
    ```javascript
    const memoizedCallback = useCallback(() => {
      doSomething(a, b);
    }, [a, b]);
    ```
    
    > Note for 2026: with the **React Compiler** (stable in React 19), most components no longer need manual `useCallback` / `useMemo` / `React.memo` — the compiler memoizes automatically. New code targeting a compiler-enabled project should generally not reach for `useCallback` unless profiling shows a specific need.

    <!-- Update here: /questions/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

16. ### What is the `useMemo` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usememo-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    The `useMemo` hook in React is used to memoize expensive calculations so that they are only recomputed when one of the dependencies has changed. This can improve performance by avoiding unnecessary recalculations. You should use `useMemo` when you have a computationally expensive function that doesn't need to run on every render.
    
    ```javascript
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```

    <!-- Update here: /questions/what-is-the-usememo-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-usememo-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

17. ### What is the `useReducer` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    The `useReducer` hook in React is used for managing complex state logic in functional components. It is an alternative to `useState` and is particularly useful when the state has multiple sub-values or when the next state depends on the previous one. It takes a reducer function and an initial state as arguments and returns the current state and a dispatch function.
    
    ```javascript
    const [state, dispatch] = useReducer(reducer, initialState);
    ```
    
    Use `useReducer` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous state.

    <!-- Update here: /questions/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

18. ### What is the `useId` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-useid-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    `useId` (added in React 18) generates a stable, unique string ID per component instance, **per React root**. Its main reason for existing is to produce IDs that match between the server-rendered HTML and the client hydration — a plain incrementing counter would produce mismatches. Within a single root the IDs are unique, but two separate roots on the same page can collide unless you set `identifierPrefix` on `createRoot` / `hydrateRoot`. Use it for things like linking `<label htmlFor>` to `<input id>`, never as a list `key`.
    
    ```javascript
    import { useId } from 'react';
    
    function NameField() {
      const id = useId();
      return (
        <div>
          <label htmlFor={id}>Name:</label>
          <input id={id} type="text" />
        </div>
      );
    }
    ```

    <!-- Update here: /questions/what-is-the-useid-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-useid-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

19. ### What does re-rendering mean in React?

    <!-- Update here: /questions/what-does-re-rendering-mean-in-react/en-US.mdx -->

    Re-rendering in React refers to the process where a component updates its output to the DOM in response to changes in state or props. When a component's state or props change, React triggers a re-render to ensure the UI reflects the latest data. This process involves calling the component's render method again to produce a new virtual DOM, which is then compared to the previous virtual DOM to determine the minimal set of changes needed to update the actual DOM.

    <!-- Update here: /questions/what-does-re-rendering-mean-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-does-re-rendering-mean-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

20. ### What are React Fragments used for?

    <!-- Update here: /questions/what-are-react-fragments-used-for/en-US.mdx -->

    React Fragments are used to group multiple elements without adding extra nodes to the DOM. This is useful when you want to return multiple elements from a component's render method without wrapping them in an additional HTML element. You can use the shorthand syntax `<>...</>` or the `React.Fragment` syntax.
    
    ```jsx
    return (
      <>
        <ChildComponent1 />
        <ChildComponent2 />
      </>
    );
    ```

    <!-- Update here: /questions/what-are-react-fragments-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-react-fragments-used-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

21. ### What is `forwardRef()` in React used for?

    <!-- Update here: /questions/what-is-forwardref-in-react-used-for/en-US.mdx -->

    As of React 19 (December 2024), `forwardRef()` is **deprecated**. Function components can now accept `ref` as a regular prop, so wrapping in `forwardRef()` is no longer required. `forwardRef()` historically existed because, before React 19, function components could not receive a `ref` prop and `forwardRef()` was the official workaround for forwarding a parent's ref down to a child DOM node or component.
    
    ```jsx
    // Modern (React 19+): ref is a regular prop
    function MyInput({ ref, ...props }) {
      return <input ref={ref} {...props} />;
    }
    
    // Legacy (React 18 and earlier): wrap with forwardRef
    import { forwardRef } from 'react';
    const MyInputLegacy = forwardRef((props, ref) => (
      <input ref={ref} {...props} />
    ));
    ```

    <!-- Update here: /questions/what-is-forwardref-in-react-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-forwardref-in-react-used-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

22. ### How do you reset a component's state in React?

    <!-- Update here: /questions/how-do-you-reset-a-components-state-in-react/en-US.mdx -->

    The most idiomatic way to reset a component's state in React is to give the component a `key` prop and change it — React unmounts the old instance and mounts a fresh one with brand-new state. For finer-grained resets, call your `useState` setter with the initial value, or dispatch a `RESET` action when using `useReducer`.
    
    ```javascript
    // Force a full reset by changing the key
    <Form key={formId} />;
    
    // Or reset specific state in place
    setState(initialState);
    ```

    <!-- Update here: /questions/how-do-you-reset-a-components-state-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-reset-a-components-state-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

23. ### Why does React recommend against mutating state?

    <!-- Update here: /questions/why-does-react-recommend-against-mutating-state/en-US.mdx -->

    React recommends against mutating state because several of its mechanisms depend on the previous and next state being **different objects** (reference inequality). When you mutate state in place, the reference does not change, which breaks `Object.is` bailouts in `useState`/`useReducer`, breaks `React.memo` and `useMemo`/`useEffect` dependency comparisons, and can cause tearing under concurrent rendering. It also defeats time-travel debugging in React DevTools. Always produce a **new** object/array (with the spread operator, array methods like `map`/`filter`/`toSorted`, or a library such as Immer) and pass it to the state setter.

    <!-- Update here: /questions/why-does-react-recommend-against-mutating-state/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-does-react-recommend-against-mutating-state?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

24. ### What are error boundaries in React for?

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    Error boundaries in React are components that catch JavaScript errors thrown during rendering, in lifecycle methods, and in constructors of their child component tree, then display a fallback UI instead of crashing the whole application. They are implemented as class components using `static getDerivedStateFromError` (to render a fallback) and optionally `componentDidCatch` (for logging). Since React 16, an uncaught error unmounts the entire React tree, which makes error boundaries effectively required for production apps. Error boundaries do not catch errors inside event handlers, asynchronous code, or server-side rendering. As of React 19, there is still no hooks-based API for error boundaries — most teams use the `react-error-boundary` library, or rely on the new root-level `onUncaughtError`, `onCaughtError`, and `onRecoverableError` options on `createRoot`/`hydrateRoot`.

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-error-boundaries-in-react-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

25. ### How do you test React applications?

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    To test React applications, use Jest or Vitest as the test runner together with React Testing Library, which encourages testing components the way users interact with them. Drive interactions with `@testing-library/user-event` (preferred over `fireEvent`), mock network calls with MSW, and write end-to-end tests with Playwright (or Cypress). For React 19 features like async components and Server Components, lean on async queries (`findBy*`, `waitFor`).

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-test-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

26. ### Explain what React hydration is

    <!-- Update here: /questions/explain-what-react-hydration-is/en-US.mdx -->

    React hydration is the process of attaching event listeners and making a server-rendered HTML page interactive on the client side. When a React application is server-side rendered, the HTML is sent to the client, and React takes over to make it dynamic by attaching event handlers and initializing state. This process is called hydration.

    <!-- Update here: /questions/explain-what-react-hydration-is/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-what-react-hydration-is?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

27. ### What are React Portals used for?

    <!-- Update here: /questions/what-are-react-portals-used-for/en-US.mdx -->

    React Portals are used to render children into a DOM node that exists outside the hierarchy of the parent component. This is useful for scenarios like modals, tooltips, and dropdowns where you need to break out of the parent component's overflow or z-index constraints. You create a portal with `createPortal(child, container)` from `react-dom`. Even though the rendered DOM lives elsewhere, the portal still belongs to the React tree, so events bubble up to the React parent and context still flows through normally.

    <!-- Update here: /questions/what-are-react-portals-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-react-portals-used-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

28. ### How do you debug React applications?

    <!-- Update here: /questions/how-do-you-debug-react-applications/en-US.mdx -->

    To debug React applications, use the React Developer Tools browser extension to inspect the component tree, props/state, and rendering with the Profiler. Enable Strict Mode during development to surface unsafe patterns, and rely on React 19.1 owner stacks for clearer component-aware stack traces. Use error boundaries (or the `react-error-boundary` package) to catch render-time errors, and reach for `console.log`, breakpoints, and the React DevTools "log" button for deeper inspection.

    <!-- Update here: /questions/how-do-you-debug-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-debug-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

29. ### What is React strict mode and what are its benefits?

    <!-- Update here: /questions/what-is-react-strict-mode-and-what-are-its-benefits/en-US.mdx -->

    React strict mode is a development tool that helps identify potential problems in an application. It activates additional checks and warnings for its descendants. It doesn't render any visible UI and doesn't affect the production build. The benefits include identifying unsafe lifecycle methods, warning about legacy string ref API usage, detecting unexpected side effects, and ensuring that components are resilient to future changes.

    <!-- Update here: /questions/what-is-react-strict-mode-and-what-are-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-strict-mode-and-what-are-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

30. ### How do you localize React applications?

    <!-- Update here: /questions/how-do-you-localize-react-applications/en-US.mdx -->

    To localize a React application, you typically use a library like `react-i18next` or `react-intl`. First, you set up your translation files for different languages. Then, you configure the localization library in your React app. Finally, you use the provided hooks or components to display localized text in your components.
    
    ```javascript
    // Example using react-i18next
    import { useTranslation } from 'react-i18next';
    
    const MyComponent = () => {
      const { t } = useTranslation();
      return <p>{t('welcome_message')}</p>;
    };
    ```

    <!-- Update here: /questions/how-do-you-localize-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-localize-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

31. ### What is code splitting in a React application?

    <!-- Update here: /questions/what-is-code-splitting-in-a-react-application/en-US.mdx -->

    Code splitting in a React application is a technique used to improve performance by splitting the code into smaller chunks that can be loaded on demand. This helps in reducing the initial load time of the application. You can achieve code splitting using dynamic `import()` statements or React's `React.lazy` and `Suspense`.
    
    ```jsx
    import { lazy, Suspense } from 'react';
    
    const LazyComponent = lazy(() => import('./LazyComponent'));
    
    function App() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      );
    }
    ```

    <!-- Update here: /questions/what-is-code-splitting-in-a-react-application/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-code-splitting-in-a-react-application?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

32. ### How would one optimize the performance of React contexts to reduce rerenders?

    <!-- Update here: /questions/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders/en-US.mdx -->

    The first thing to know in 2026 is that the **React Compiler** auto-memoizes components and values, so a lot of the manual `useMemo`/`useCallback` work that used to be required for context performance is now done for you — adopt it before reaching for other tricks. Beyond that, the canonical patterns are: split a single context into a state context and a dispatch (or setter) context so consumers that only dispatch don't rerender on state changes; memoize the value object you pass to the provider; wrap consumer components in `React.memo`; and reach for selector libraries like `use-context-selector` when you need to subscribe to a slice of a large value.
    
    ```javascript
    const value = useMemo(() => ({ state }), [state]); // dispatch is already stable
    ```

    <!-- Update here: /questions/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

33. ### What are higher order components in React?

    <!-- Update here: /questions/what-are-higher-order-components-in-react/en-US.mdx -->

    Higher order components (HOCs) in React are functions that take a component and return a new component with additional props or behavior. They are used to reuse component logic. For example, if you have a component `MyComponent`, you can create an HOC like this:
    
    ```javascript
    const withExtraProps = (WrappedComponent) => {
      return (props) => <WrappedComponent {...props} extraProp="value" />;
    };
    
    const EnhancedComponent = withExtraProps(MyComponent);
    ```
    
    HOCs are largely a legacy pattern. The current React docs (React 19) discourage HOCs in favor of custom hooks for sharing logic between function components. You'll still see HOCs in older code and in libraries (e.g. `connect` from React Redux), but for new code, prefer hooks.

    <!-- Update here: /questions/what-are-higher-order-components-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-higher-order-components-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

34. ### What is the Flux pattern and what are its benefits?

    <!-- Update here: /questions/what-is-the-flux-pattern-and-what-are-its-benefits/en-US.mdx -->

    The Flux pattern is an architectural design Facebook introduced for managing state in React applications. It enforces a unidirectional data flow, making it easier to manage and debug application state. Today Flux is largely historical — it has been superseded by libraries it inspired, such as Redux, Zustand, and the built-in `useReducer` + Context combination — but its single-source-of-truth and unidirectional-flow ideas are still the foundation of those tools.
    
    - **Core components**:
      - **Dispatcher**: Single hub that manages actions and dispatches them to all registered stores.
      - **Stores**: Hold the state and business logic; act as change emitters that notify subscribed views.
      - **Actions**: Plain payloads of information sent from the application to the dispatcher.
      - **View**: React components that subscribe to stores and re-render when stores emit changes.
    - **Benefits**:
      - Predictable state management due to unidirectional data flow.
      - Single source of truth for application state.
      - Improved debugging and testing.
      - Clear separation of concerns.
    
    Example flow:
    
    1. User interacts with the **View**.
    2. **Actions** are triggered and dispatched by the **Dispatcher**.
    3. **Stores** process the actions, update their state, and emit a change event.
    4. **View** re-renders based on the updated state.

    <!-- Update here: /questions/what-is-the-flux-pattern-and-what-are-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-flux-pattern-and-what-are-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

35. ### Explain one-way data flow of React and its benefits

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    In React, one-way data flow means that data moves in a single direction: from parent components down to child components via `props`. Children cannot mutate the props they receive; to change parent state, a child invokes a callback the parent passed in. This contrasts with two-way binding (e.g. Angular or Vue's `v-model`), where view and model stay in sync automatically. The main benefits are predictable state changes, easier debugging, and patterns like controlled components, immutable updates, and time-travel debugging that fall out naturally from the constraint.

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-one-way-data-flow-of-react-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

36. ### How do you handle asynchronous data loading in React applications?

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    In a modern React app, **don't** roll your own `useEffect` + `fetch` for data loading — the React docs explicitly recommend against it. Reach first for a dedicated data-fetching library: **TanStack Query**, **SWR**, or **RTK Query** for client-side fetching, or **Server Components** and route-level loaders (Next.js App Router, Remix/React Router) when you control the framework. In React 19, the new `use()` hook lets a component read a promise directly and suspend, which pairs naturally with `<Suspense>` for loading states and error boundaries for failures. A hand-written `useEffect`+`fetch` is a low-level fallback that needs an `AbortController`, a `response.ok` check, and careful state handling to avoid race conditions and stale updates.

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

37. ### Explain server-side rendering of React applications and its benefits

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    Server-side rendering (SSR) in React involves rendering React components on the server and sending the resulting HTML to the client. The browser displays that HTML immediately, then `hydrateRoot` attaches event handlers so the page becomes interactive. Modern React supports streaming SSR via `renderToPipeableStream` (Node) and `renderToReadableStream` (Web), and React Server Components let parts of the tree render only on the server. Benefits include faster perceived loads and better SEO; tradeoffs include a slower TTFB, the cost of hydration, and the risk of hydration mismatches.

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-server-side-rendering-of-react-applications-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

38. ### Explain static generation of React applications and its benefits

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    Static generation (SSG) pre-renders pages to HTML at build time, instead of rendering them per request. The output is plain files that can be served from a CDN, which makes loads fast and SEO straightforward. Frameworks like Next.js, Remix, Astro, and Gatsby support it; in Next.js's App Router, fetches are statically generated by default and `generateStaticParams` enumerates dynamic routes at build. Incremental Static Regeneration (ISR) lets you re-build individual pages in the background after a TTL, so static does not have to mean stale. SSG is best for content that does not vary per user and does not need to be perfectly fresh.

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-static-generation-of-react-applications-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

39. ### Explain the presentational vs container component pattern in React

    <!-- Update here: /questions/explain-the-presentational-vs-container-component-pattern-in-react/en-US.mdx -->

    The presentational vs container component pattern (also known as "dumb vs smart components") splits components into two roles: presentational components decide how things look and receive everything via props, while container components decide how things work — they fetch data, hold state, and pass props down. Dan Abramov, who popularized the pattern in 2015, [updated his original article in 2019](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) to say he no longer recommends splitting components this way: hooks (especially custom hooks) cover the same separation of concerns without forcing you to introduce a wrapper component. The vocabulary is still useful for talking about responsibilities, but in modern React the "container" layer is usually a custom hook.

    <!-- Update here: /questions/explain-the-presentational-vs-container-component-pattern-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-presentational-vs-container-component-pattern-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

40. ### What are some common pitfalls when doing data fetching in React?

    <!-- Update here: /questions/what-are-some-common-pitfalls-when-doing-data-fetching-in-react/en-US.mdx -->

    Common pitfalls when doing data fetching in React include not handling loading and error states, leaking requests by not aborting them on unmount, ignoring race conditions when props or query params change, fetching during render (which loops), and triggering request waterfalls. In modern React (18+), use `AbortController` for cleanup, account for StrictMode's intentional double-invoke in development, and prefer purpose-built libraries like TanStack Query, SWR, or RTK Query for caching and deduplication. React 19's `use()` hook plus Suspense, and Server Components, are now the recommended way to read promises in components.

    <!-- Update here: /questions/what-are-some-common-pitfalls-when-doing-data-fetching-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-common-pitfalls-when-doing-data-fetching-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

41. ### What are render props in React and what are they for?

    <!-- Update here: /questions/what-are-render-props-in-react-and-what-are-they-for/en-US.mdx -->

    Render props in React are a technique for sharing code between components using a prop whose value is a function. The component calls that function with some internal state or data, and the function returns the React element to render. The prop does not have to be named `render` — passing a function as `children` is the more common modern form.
    
    ```jsx
    import { useEffect, useState } from 'react';
    
    function DataFetcher({ url, children }) {
      const [data, setData] = useState(null);
    
      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then(setData);
      }, [url]);
    
      return children(data);
    }
    
    // Usage
    <DataFetcher url="/api/data">
      {(data) => <div>{data ? data.name : 'Loading...'}</div>}
    </DataFetcher>;
    ```
    
    Render props were popular before hooks. As of modern React, custom hooks have largely replaced them for sharing stateful logic, though render props are still useful for components that own a piece of UI structure (e.g. virtualized lists, headless component libraries).

    <!-- Update here: /questions/what-are-render-props-in-react-and-what-are-they-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-render-props-in-react-and-what-are-they-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

42. ### What are some React anti-patterns?

    <!-- Update here: /questions/what-are-some-react-anti-patterns/en-US.mdx -->

    React anti-patterns are practices that lead to inefficient, buggy, or hard-to-maintain code. Common ones in modern (hooks-era) React include:
    
    - Mutating state directly instead of producing a new value
    - Using `useState` to mirror props or other state instead of computing the value during render
    - Using `useEffect` to derive data that could just be computed
    - Using array index as `key` for dynamic lists
    - Stale closures inside effects (missing or wrong dependencies)
    - Forgetting to clean up effects (subscriptions, timers, listeners)
    - Mutating refs during render
    - Not using keys in lists at all
    - Reaching for `useMemo`/`useCallback` everywhere instead of where they actually help

    <!-- Update here: /questions/what-are-some-react-anti-patterns/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

43. ### How do you decide between using React state, context, and external state managers?

    <!-- Update here: /questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx -->

    Match the tool to the kind of state. Use `useState`/`useReducer` for local component state, and lift state up before reaching for anything heavier. Use React Context to pass values that change rarely (theme, locale, current user) — Context is **not** a state manager and re-renders all consumers on every change. Reach for a client-state library like Zustand, Jotai, or Redux Toolkit when many unrelated components need to share frequently-changing state. Critically, treat **server state separately**: TanStack Query, SWR, or RTK Query handle caching, refetching, and invalidation far better than any general-purpose store.

    <!-- Update here: /questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

44. ### Explain the composition pattern in React

    <!-- Update here: /questions/explain-the-composition-pattern-in-react/en-US.mdx -->

    The composition pattern in React is the practice of building UIs by combining smaller, reusable components instead of extending them through inheritance. The most common forms are: passing children (`props.children`), passing components as named props (slots), specialization (a more specific component that wraps a generic one and fixes some props), render props / "children as a function", and compound components (a parent component that exposes a set of related sub-components, e.g. `<Tabs>` with `<Tabs.List>` and `<Tabs.Panel>`). Composition is React's main reuse mechanism, alongside custom hooks for behavior.

    <!-- Update here: /questions/explain-the-composition-pattern-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-composition-pattern-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

45. ### What is virtual DOM in React?

    <!-- Update here: /questions/what-is-virtual-dom-in-react/en-US.mdx -->

    The "virtual DOM" in React is a tree of plain JavaScript objects (React elements) that describes what the UI should look like — it is not a copy of the actual DOM. When state or props change, React builds a new tree, compares it with the previous one (a process called reconciliation, performed by the Fiber reconciler since React 16), and applies only the necessary changes to the real DOM. The React team now prefers the terms "React elements" and "Fiber tree." The main benefit is the declarative programming model, not raw speed over hand-written DOM updates.

    <!-- Update here: /questions/what-is-virtual-dom-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-virtual-dom-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

46. ### How does virtual DOM in React work? What are its benefits and downsides?

    <!-- Update here: /questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx -->

    The virtual DOM in React is a lightweight copy of the actual DOM. When the state of a component changes, React creates a new virtual DOM tree and compares it with the previous one using a process called "reconciliation." Only the differences are then updated in the actual DOM, making updates more efficient. The benefits include improved performance and a more declarative way to manage UI. However, it can add complexity and may not be as performant for very simple applications.

    <!-- Update here: /questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

47. ### What is React Fiber and how is it an improvement over the previous approach?

    <!-- Update here: /questions/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach/en-US.mdx -->

    React Fiber is a complete rewrite of React's reconciliation algorithm, introduced in React 16. It improves the rendering process by breaking down rendering work into smaller units, allowing React to pause and resume work, which makes the UI more responsive. This approach enables features like time slicing and suspense, which were not possible with the previous stack-based algorithm.

    <!-- Update here: /questions/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

48. ### What is reconciliation in React?

    <!-- Update here: /questions/what-is-reconciliation-in-react/en-US.mdx -->

    Reconciliation in React is the process through which React updates the DOM to match the virtual DOM. When a component's state or props change, React creates a new virtual DOM tree and compares it with the previous one. This comparison process is called "diffing." React then updates only the parts of the actual DOM that have changed, making the updates efficient and fast.

    <!-- Update here: /questions/what-is-reconciliation-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-reconciliation-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

49. ### What is React Suspense and what does it enable?

    <!-- Update here: /questions/what-is-react-suspense-and-what-does-it-enable/en-US.mdx -->

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

    <!-- Update here: /questions/what-is-react-suspense-and-what-does-it-enable/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-suspense-and-what-does-it-enable?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

50. ### Explain what happens when the `useState` setter function is called in React

    <!-- Update here: /questions/explain-what-happens-when-setstate-is-called-in-react/en-US.mdx -->

    When the setter function returned by the `useState` hook is called in React, it schedules an update to the component's state value. React then queues a re-render of the component with the new state. This process is typically asynchronous, and React batches multiple state updates together for performance.

    <!-- Update here: /questions/explain-what-happens-when-setstate-is-called-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-what-happens-when-setstate-is-called-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>


<!-- QUESTIONS:END -->
