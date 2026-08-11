# Top React.js Interview Questions (Updated for 2026)

**Updated for 2026!** Curated top React.js interview questions with high quality answers for acing your Front End Engineer interviews, brought to you by [GreatFrontEnd](https://www.greatfrontend.com/?utm_source=github&utm_medium=referral&utm_campaign=top-reactjs-qns&gnrs=yangshun).

Looking for more? Read our blog post [100+ React interview questions and answers](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers?utm_source=github&utm_medium=referral&utm_campaign=top-reactjs-qns) compiled from ex-FAANG interviewers, including React 19 coverage (Actions, Server Components, the `use` hook, and the React Compiler).

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

    React is an open-source library maintained by Meta and the community for building user interfaces from components. Components describe UI declaratively from props, state, and context; React reconciles those descriptions and commits the necessary changes through renderers such as React DOM and React Native. Its main benefits are composability, explicit one-way data flow, reusable stateful logic through Hooks, support for client and server rendering architectures, and a broad ecosystem.
    
    **Key characteristics of React**:
    
    - **Declarative**: You describe the desired state of your UI based on data, and React handles updating the actual DOM efficiently.
    - **Component-based**: Build reusable and modular UI elements (components) that manage their own state and logic.
    - **Reconciliation**: React compares element descriptions and commits the necessary renderer-specific changes. These descriptions are not a copy of the browser DOM.
    - **JSX**: While not mandatory, JSX provides a syntax extension that allows you to write HTML-like structures within your JavaScript code, making UI development more intuitive.

    <!-- Update here: /questions/what-is-react-describe-the-benefits-of-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-describe-the-benefits-of-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

2. ### What is the difference between React Node, React Element, and a React Component?

    <!-- Update here: /questions/what-is-the-difference-between-react-node-react-element-and-a-react-component/en-US.mdx -->

    A **React Node** is a value React can render, including an element, string, number, bigint, iterable of nodes, portal, or an empty value such as `null` or a boolean. React 19's type also supports promises that resolve to renderable nodes in supported rendering environments. A **React Element** is the immutable object produced by JSX or `createElement` that describes what to render. A **React Component** is a function or class React uses as an element type. Components produce nodes; elements are descriptions; nodes are the broader set of renderable values.

    <!-- Update here: /questions/what-is-the-difference-between-react-node-react-element-and-a-react-component/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-react-node-react-element-and-a-react-component?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

3. ### What is JSX and how does it work?

    <!-- Update here: /questions/what-is-jsx-and-how-does-it-work/en-US.mdx -->

    JSX is a syntax extension for JavaScript that lets you describe UI with HTML-like markup inside JavaScript. A build tool transforms it into ordinary function calls before the browser runs it. With the modern automatic runtime, `<div>Hello, world!</div>` becomes a call to a helper from `react/jsx-runtime`; the older classic transform used `React.createElement`.

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

    Context in React is convenient but easy to misuse. The biggest pitfalls are passing a fresh object or array as the provider `value` on every render, assuming `memo` or React Compiler will stop a context subscription update (they won't), and putting frequently changing, unrelated data into one context. Split independent values into focused providers, stabilize object values when appropriate, and consider a selector-based state library when consumers need different slices of rapidly changing state.

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

9. ### What are the benefits of using hooks in React?

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    Hooks let function components use state, context, refs, effects, and other React features without classes. Custom Hooks compose reusable stateful logic without adding wrapper components. React 19 added Hooks such as `useActionState` and `useOptimistic`, while React DOM provides `useFormStatus`. React 19's similarly named `use(resource)` is an API rather than a Hook and follows different call-order rules.

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-hooks-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

10. ### What are the rules of React hooks?

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    React hooks have a few essential rules to ensure they work correctly. Call hooks at the top level of a function component or custom hook — never inside loops, conditions, nested functions, or after an early `return`. The `use` API is the exception: it is not a Hook and may be called conditionally or in loops, but it must still run inside a component or Hook and cannot be wrapped in `try`/`catch`. Lean on `eslint-plugin-react-hooks` to enforce these rules.

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-react-hooks?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

11. ### What is the difference between `useEffect` and `useLayoutEffect` in React?

    <!-- Update here: /questions/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react/en-US.mdx -->

    Both hooks run side effects after render, but they differ in **when** they fire relative to paint:
    
    - `useEffect` runs after React commits. For effects not caused by an interaction, React generally lets the browser paint first; interaction-driven effects may run before paint. Use it for synchronizing with external systems when the work does not need to block paint.
    - `useLayoutEffect` runs **synchronously during the commit phase, after DOM mutations but before the browser paints**. It blocks paint, so use it only when you need to measure the DOM and write to it in the same frame to avoid a visual flicker.
    
    Both accept a dependency array with the same semantics. In development Strict Mode, React performs an extra setup-and-cleanup cycle before the real setup. Neither effect runs during server rendering; `useLayoutEffect` is especially unsuitable there because the server has no layout to measure.
    
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

    The dependency array of `useEffect` controls when React re-synchronizes the effect. With no array, React runs setup after every commit. With `[]`, it runs setup after the component mounts (development Strict Mode immediately performs an extra setup/cleanup cycle). With dependencies, it runs after mount and again whenever any dependency changes according to `Object.is`. Cleanup runs before re-synchronization and after unmounting.

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
    
    > React Compiler 1.0 is a separate, optional build-time optimizer. When enabled, it memoizes compatible components and values and can reduce the need for manual `useCallback`, `useMemo`, and `memo`. Check profiling and compiled output before adding manual memoization to Compiler-enabled code.

    <!-- Update here: /questions/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

16. ### What is the `useMemo` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usememo-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    `useMemo` caches a calculation result between renders while its dependencies remain `Object.is`-equal. Use it as a performance optimization for a measured expensive calculation or when a stable object/array identity enables another optimization. It is not a semantic guarantee, so code must remain correct if React discards the cache and recomputes the value. React Compiler can provide equivalent memoization for compatible code when the optional build-time optimizer is enabled.
    
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

    A re-render means React calls a function component again (or calls a class component's `render`) to compute a new element description. State updates, context changes, or a parent rendering can trigger it. React then reconciles the result with the previous tree. Re-rendering is not the same as updating the DOM: if the rendered output is unchanged, the commit may perform no DOM mutations.

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

    As of React 19 (December 2024), `forwardRef()` is **no longer necessary** — function components can now accept `ref` as a regular prop, so wrapping in `forwardRef()` is no longer required. React plans to deprecate `forwardRef()` in a future release. `forwardRef()` historically existed because, before React 19, function components could not receive a `ref` prop and `forwardRef()` was the official workaround for forwarding a parent's ref down to a child DOM node or component.
    
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

    React treats state as a read-only snapshot. Mutating an object or array in place keeps the same reference, so an `Object.is` state bailout, memoized child, memoized calculation, or Effect dependency may not observe a change. Mutation also alters older render snapshots that still reference the object, making behavior harder to reason about and incompatible with features that rely on snapshot semantics. Produce a new object or array with spreads, non-mutating methods such as `map`/`filter`/`toSorted`, or a helper such as Immer.

    <!-- Update here: /questions/why-does-react-recommend-against-mutating-state/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-does-react-recommend-against-mutating-state?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

24. ### What are error boundaries in React for?

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    Error boundaries catch errors thrown while rendering their descendant tree and display fallback UI instead of losing the entire React root. They are class components that use `static getDerivedStateFromError` to render a fallback and may use `componentDidCatch` for logging. Place them at meaningful recovery boundaries such as routes or independent panels. They do not catch event-handler errors, errors in arbitrary asynchronous callbacks, server-rendering errors, or errors thrown by the boundary itself. React has no function-component API for defining a boundary; a library can provide a reusable boundary component. React 19 also provides root options for reporting caught, uncaught, and recoverable errors, but those reporting callbacks do not replace fallback UI.

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-error-boundaries-in-react-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

25. ### How do you test React applications?

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    A common stack is Jest or Vitest as the test runner with React Testing Library, which encourages testing observable behavior instead of implementation details. Drive realistic interactions with `@testing-library/user-event`, mock network calls with a tool such as MSW, and cover critical flows in a real browser with Playwright or Cypress. Use async queries (`findBy*`, `waitFor`) for UI that appears after asynchronous client updates. Test Server Components through the integration facilities of the framework and bundler that implement them.

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-test-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

26. ### Explain what React hydration is

    <!-- Update here: /questions/explain-what-react-hydration-is/en-US.mdx -->

    Hydration is the process in which React renders the client tree, matches it to HTML previously produced by React on the server, attaches event handling, and makes the existing markup interactive. Use `hydrateRoot` rather than creating a fresh client root over server HTML. The first client output must match the server output; mismatches are bugs unless they are deliberately and narrowly suppressed.

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

    Use React Developer Tools to inspect the component tree and profile commits, browser breakpoints and network tools for runtime behavior, and development Strict Mode to expose impure rendering and missing cleanup. Owner stacks help trace which component created failing JSX. React 19.2 also adds React tracks to Chrome performance profiles for scheduler and component work. Use error boundaries for render failures, while handling event and asynchronous errors at their source.

    <!-- Update here: /questions/how-do-you-debug-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-debug-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

29. ### What is React strict mode and what are its benefits?

    <!-- Update here: /questions/what-is-react-strict-mode-and-what-are-its-benefits/en-US.mdx -->

    `<StrictMode>` enables development-only checks for a React subtree. React renders components an extra time to expose impure rendering, runs an extra setup-and-cleanup cycle for Effects, re-runs ref callbacks, and checks for deprecated APIs. It renders no UI and adds no production behavior. The extra work is a stress test: fix the missing cleanup or impurity instead of trying to suppress it.

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

    Context consumers re-render whenever the provider receives a different `value` according to `Object.is`. Neither `memo` nor React Compiler prevents that subscription update. Keep provider values stable, split unrelated or differently changing data into separate contexts, and separate state from a stable dispatch function so dispatch-only consumers do not re-render on state changes. Use `memo` to protect expensive descendants below a consumer, and consider selector-based state libraries when consumers need independent slices of frequently changing state.
    
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
    
    HOCs were especially common before Hooks and remain valid in existing code and library APIs such as React Redux's `connect`. For new function components, custom Hooks usually share stateful logic with less wrapper nesting. An HOC can still be appropriate when the abstraction must return a component or wrap rendering rather than only share logic.

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

    In React, one-way data flow means that data moves from parent components to children through props and context. Children treat those inputs as read-only; to request a parent-state change, a child invokes a callback or dispatch function supplied from above. Controlled inputs may look like two-way binding, but they still update through an explicit event followed by a new value flowing down. The benefits are explicit ownership, predictable updates, and easier tracing and testing.

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-one-way-data-flow-of-react-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

36. ### How do you handle asynchronous data loading in React applications?

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    Prefer a framework's data-loading APIs or a client cache such as TanStack Query, SWR, or RTK Query because they handle caching, deduplication, race conditions, and request waterfalls. Fetching in an Effect remains valid for simple client-only cases, but it needs explicit loading/error handling, cleanup, and stale-response protection. React 19's `use` API can read a cached promise and suspend; the promise should come from a Suspense-enabled framework/cache, a route loader, or a Server Component rather than being recreated during render.

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

37. ### Explain server-side rendering of React applications and its benefits

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    Server-side rendering (SSR) renders React output to HTML on the server and sends it to the browser. `hydrateRoot` then attaches React to matching client-rendered output so interactive Client Components can work. Modern React streams with `renderToPipeableStream` for Node streams or `renderToReadableStream` for Web Streams. React 19.2 supports Web Streams in Node too, although the React team recommends Node streams there for performance. Benefits include earlier content and crawlable HTML; tradeoffs include server work, hydration cost, and mismatch risk.

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-server-side-rendering-of-react-applications-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

38. ### Explain static generation of React applications and its benefits

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    Static generation (SSG) renders HTML ahead of requests, usually during a build, so the result can be cached and served from a CDN. React itself provides static rendering APIs, while frameworks decide how routes, data caches, and revalidation work. In Next.js, `generateStaticParams` can enumerate dynamic routes to prerender, but current caching is explicit rather than every fetch being static by default. SSG is best for content that does not vary per request; framework features such as revalidation and partial prerendering can combine cached shells with fresher content.

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

    Common data-fetching pitfalls include missing loading and error states, ignoring HTTP error statuses, leaving stale requests active, allowing responses to win races, recreating promises during render, and triggering request waterfalls. Prefer framework loaders or a client cache when they fit. For manual Effect-based fetching, clean up with `AbortController` and handle Strict Mode's extra development setup/cleanup cycle. React 19's `use` API can read a cached promise with Suspense, but it does not make an ordinary `fetch()` created during render safe.

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
    import { useState } from 'react';
    
    function Toggle({ children }) {
      const [on, setOn] = useState(false);
      return (
        <>
          <button onClick={() => setOn((value) => !value)}>Toggle</button>
          {children(on)}
        </>
      );
    }
    
    <Toggle>{(on) => <p>{on ? 'On' : 'Off'}</p>}</Toggle>;
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

    Match the tool to the kind of state. Use `useState`/`useReducer` for local component state, and lift state up before reaching for anything heavier. Context transports a value through a subtree; it does not provide storage, update logic, or fine-grained subscriptions by itself. Reach for a client-state library such as Zustand, Jotai, or Redux Toolkit when many unrelated components need shared state and selector-based subscriptions or store tooling. Treat **server state separately**: a framework data layer or a library such as TanStack Query, SWR, or RTK Query can add caching, refetching, and invalidation when the application needs them.

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

    The "virtual DOM" is not a copy of the browser DOM. It is shorthand for the React element descriptions produced by components, together with React's internal Fiber tree. During rendering, React reconciles a new description with the previous one; during commit, it applies the required host-environment changes. This model enables declarative UI, batching, interruption, and multiple renderers, but diffing and retaining an extra tree have costs. It is a predictable update strategy, not a guarantee that React beats carefully written direct DOM code.

    <!-- Update here: /questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

47. ### What is React Fiber and how is it an improvement over the previous approach?

    <!-- Update here: /questions/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach/en-US.mdx -->

    Fiber is React's internal reconciliation architecture, introduced in React 16. A Fiber represents a unit of work and links to related Fibers in the component tree. This structure lets React assign priorities, pause or abandon interruptible renders, and commit completed work separately. It is the foundation for concurrent features such as transitions and Suspense, but it does not make every update asynchronous or guarantee that expensive rendering will be fast.

    <!-- Update here: /questions/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

48. ### What is reconciliation in React?

    <!-- Update here: /questions/what-is-reconciliation-in-react/en-US.mdx -->

    Reconciliation is React's render-phase process for matching a newly returned element tree with the previous tree. Element types, positions, and keys determine whether React preserves a component and its state or replaces it. Reconciliation calculates the required changes; the separate commit phase applies those changes to the DOM. A render can therefore occur without any DOM mutation.

    <!-- Update here: /questions/what-is-reconciliation-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-reconciliation-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

49. ### What is React Suspense and what does it enable?

    <!-- Update here: /questions/what-is-react-suspense-and-what-does-it-enable/en-US.mdx -->

    `Suspense` lets React display a fallback while a descendant is not ready to render. Supported sources include code loaded with `lazy`, cached promises read with React 19's `use` API, React Server Components, and Suspense-enabled framework or library integrations. Suspense coordinates pending UI; an error boundary is still needed for rejected promises, and arbitrary asynchronous work does not activate Suspense automatically.
    
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

    Calling a `useState` setter queues either a replacement value or an updater function for the component's next render. It does not change the state variable in the currently running code because each render sees a snapshot of state. React batches updates where possible, processes queued updaters in order, renders with the resulting state, and commits any required DOM changes. If the final state is `Object.is`-equal to the current state, React can skip rendering the children. `useReducer` dispatches follow the same scheduling model; the API is distinct from class-based `this.setState`.

    <!-- Update here: /questions/explain-what-happens-when-setstate-is-called-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-what-happens-when-setstate-is-called-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>


<!-- QUESTIONS:END -->
