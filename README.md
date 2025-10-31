# Top React.js Interview Questions (Updated for 2025)

Curated top React.js interview questions with high quality answers for acing your front end interviews.

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
| 37 | [Explain server-side rendering of React applications and its benefits?](#explain-server-side-rendering-of-react-applications-and-its-benefits) |
| 38 | [Explain static generation of React applications and its benefits?](#explain-static-generation-of-react-applications-and-its-benefits) |
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
| 51 | [What is a switching component?](#what-is-a-switching-component) |
| 52 | [What are React Mixins?](#what-are-react-mixins) |
| 53 | [What are the pointer events supported in React?](#what-are-the-pointer-events-supported-in-react) |
| 54 | [Why should component names start with a capital letter?](#why-should-component-names-start-with-capital-letter) |
| 55 | [Are custom DOM attributes supported in React v16?](#are-custom-dom-attributes-supported-in-react-v16) |
| 56 | [How do you loop inside JSX?](#how-to-loop-inside-jsx) |
| 57 | [How do you access props within attribute quotes?](#how-do-you-access-props-in-attribute-quotes) |
| 58 | [What is a React PropType array with shape?](#what-is-react-proptype-array-with-shape) |
| 59 | [How do you conditionally apply class attributes?](#how-to-conditionally-apply-class-attributes) |
| 60 | [Why is ReactDOM separated from React?](#why-reactdom-is-separated-from-react) |

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

    A React Node is any renderable unit in React, such as an element, string, number, or `null`. A React Element is an immutable object describing what to render, created using JSX or `React.createElement`. A React Component is a function or class that returns React Elements, enabling the creation of reusable UI pieces.

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

    In React, `state` is a local data storage that is managed within a component and can change over time, while `props` are read-only attributes passed from a parent component to a child component. State is used for data that changes within a component, whereas props are used to pass data and event handlers to child components.

    <!-- Update here: /questions/what-is-the-difference-between-state-and-props-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-state-and-props-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

5. ### What is the purpose of the `key` prop in React?

    <!-- Update here: /questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx -->

    The `key` prop in React is used to uniquely identify elements in a list. It helps React optimize rendering by efficiently updating and reordering elements. Without a unique `key`, React may re-render elements unnecessarily, leading to performance issues and bugs.
    
    ```jsx
    {
      items.map((item) => <ListItem key={item.id} value={item.value} />);
    }
    ```

    <!-- Update here: /questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-the-key-prop-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

6. ### What is the consequence of using array indices as the value for `key`s in React?

    <!-- Update here: /questions/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react/en-US.mdx -->

    Using array indices as the value for `key`s in React can lead to performance issues and bugs. When the order of items changes, React may not correctly identify which items have changed, leading to unnecessary re-renders or incorrect component updates. It's better to use unique identifiers for `key`s to ensure React can efficiently manage and update the DOM.

    <!-- Update here: /questions/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

7. ### What is the difference between controlled and uncontrolled React Components?

    <!-- Update here: /questions/what-is-the-difference-between-controlled-and-uncontrolled-react-components/en-US.mdx -->

    Controlled components in React are those where the form data is handled by the component's state. The state is the single source of truth, and any changes to the form input are managed through event handlers. Uncontrolled components, on the other hand, store their own state internally and rely on refs to access the form values. Controlled components offer more control and are easier to test, while uncontrolled components can be simpler to implement for basic use cases.

    <!-- Update here: /questions/what-is-the-difference-between-controlled-and-uncontrolled-react-components/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-controlled-and-uncontrolled-react-components?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

8. ### What are some pitfalls about using context in React?

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    Using context in React can lead to performance issues if not managed properly. It can cause unnecessary re-renders of components that consume the context, even if the part of the context they use hasn't changed. Additionally, overusing context for state management can make the code harder to understand and maintain. It's important to use context sparingly and consider other state management solutions like Redux or Zustand for more complex state needs.

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

9. ### What are the benefits of using hooks in React?

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    Hooks in React allow you to use state and other React features without writing a class. They make it easier to reuse stateful logic between components, improve code readability, and simplify the codebase by reducing the need for lifecycle methods. Hooks like `useState` and `useEffect` are commonly used to manage state and side effects in functional components.

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-hooks-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

10. ### What are the rules of React hooks?

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    React hooks have a few essential rules to ensure they work correctly. Always call hooks at the top level of your React function, never inside loops, conditions, or nested functions. Only call hooks from React function components or custom hooks. These rules ensure that hooks maintain the correct state and lifecycle behavior.

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-react-hooks?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

11. ### What is the difference between `useEffect` and `useLayoutEffect` in React?

    <!-- Update here: /questions/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react/en-US.mdx -->

    `useEffect` and `useLayoutEffect` are React hooks used to handle side effects in functional components, but they differ in timing and use cases:
    
    - `useEffect`: Runs asynchronously after the DOM has been painted. It is suitable for tasks like data fetching, subscriptions, or logging.
    - `useLayoutEffect`: Runs synchronously after DOM mutations but before the browser paints. Use it for tasks like measuring DOM elements or synchronizing the UI with the DOM.
    
    Code example:
    
    ```jsx
    import React, { useEffect, useLayoutEffect, useRef } from 'react';
    
    function Example() {
      const ref = useRef();
    
      useEffect(() => {
        console.log('useEffect: Runs after DOM paint');
      });
    
      useLayoutEffect(() => {
        console.log('useLayoutEffect: Runs before DOM paint');
        console.log('Element width:', ref.current.offsetWidth);
      });
    
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

    The callback function argument format of `setState()` in React is used to ensure that state updates are based on the most recent state and props. This is particularly important when the new state depends on the previous state. Instead of passing an object directly to `setState()`, you pass a function that takes the previous state and props as arguments and returns the new state.
    
    ```javascript
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
        inputEl.current.focus();
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

    The `useCallback` hook in React is used to memoize functions, preventing them from being recreated on every render. This is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. You should use `useCallback` when you have a function that is passed as a prop to a child component and you want to avoid the child component re-rendering unnecessarily.
    
    ```javascript
    const memoizedCallback = useCallback(() => {
      doSomething(a, b);
    }, [a, b]);
    ```

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

    The `useId` hook in React is used to generate unique IDs for elements within a component. This is particularly useful for accessibility purposes, such as linking form inputs with their labels. It ensures that IDs are unique across the entire application, even if the component is rendered multiple times.
    
    ```javascript
    import { useId } from 'react';
    
    function MyComponent() {
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

    `forwardRef()` in React is used to pass a ref through a component to one of its child components. This is useful when you need to access a DOM element or a child component's instance directly from a parent component. You wrap your functional component with `forwardRef()` and use the `ref` parameter to forward the ref to the desired child element.
    
    ```jsx
    import React, { forwardRef } from 'react';
    
    const MyComponent = forwardRef((props, ref) => <input ref={ref} {...props} />);
    ```

    <!-- Update here: /questions/what-is-forwardref-in-react-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-forwardref-in-react-used-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

22. ### How do you reset a component's state in React?

    <!-- Update here: /questions/how-do-you-reset-a-components-state-in-react/en-US.mdx -->

    To reset a component's state in React, you can set the state back to its initial value. This can be done by defining an initial state and then using the `setState` function to reset it. For example, if you have a state object like this:
    
    ```javascript
    const [state, setState] = useState(initialState);
    ```
    
    You can reset it by calling:
    
    ```javascript
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

    React recommends against mutating state because it can lead to unexpected behavior and bugs. React relies on state immutability to efficiently determine when to re-render components. When state is mutated directly, React may not detect the changes, leading to stale or incorrect UI updates. Instead, always create a new state object using methods like `setState` or the `useState` hook.

    <!-- Update here: /questions/why-does-react-recommend-against-mutating-state/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-does-react-recommend-against-mutating-state?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

24. ### What are error boundaries in React for?

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    Error boundaries in React are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application. They are implemented using the `componentDidCatch` lifecycle method and the `static getDerivedStateFromError` method. Error boundaries do not catch errors inside event handlers, asynchronous code, or server-side rendering.

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-error-boundaries-in-react-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

25. ### How do you test React applications?

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    To test React applications, you can use tools like Jest and React Testing Library. Jest is a JavaScript testing framework that works well with React, and React Testing Library provides utilities to test React components in a way that resembles how users interact with them. You can write unit tests for individual components, integration tests for component interactions, and end-to-end tests using tools like Cypress.

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

    React Portals are used to render children into a DOM node that exists outside the hierarchy of the parent component. This is useful for scenarios like modals, tooltips, and dropdowns where you need to break out of the parent component's overflow or z-index constraints. You can create a portal using `ReactDOM.createPortal(child, container)`.

    <!-- Update here: /questions/what-are-react-portals-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-react-portals-used-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

28. ### How do you debug React applications?

    <!-- Update here: /questions/how-do-you-debug-react-applications/en-US.mdx -->

    To debug React applications, you can use the React Developer Tools browser extension to inspect component hierarchies and state. Additionally, you can use `console.log` statements to log data and errors, and leverage breakpoints in your code using browser developer tools. For more advanced debugging, you can use error boundaries to catch and handle errors in your components.

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
    
    ```javascript
    // Using React.lazy and Suspense
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    function App() {
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </React.Suspense>
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

    To optimize the performance of React contexts and reduce rerenders, you can use techniques such as memoizing context values, splitting contexts, and using selectors. Memoizing context values with `useMemo` ensures that the context value only changes when its dependencies change. Splitting contexts allows you to isolate state changes to specific parts of your application. Using selectors with libraries like `use-context-selector` can help you only rerender components that actually need the updated context value.
    
    ```javascript
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
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

    <!-- Update here: /questions/what-are-higher-order-components-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-higher-order-components-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

34. ### What is the Flux pattern and what are its benefits?

    <!-- Update here: /questions/what-is-the-flux-pattern-and-what-are-its-benefits/en-US.mdx -->

    The Flux pattern is an architectural design used for managing state in applications, particularly in React ecosystems. It enforces a unidirectional data flow, making it easier to manage and debug application state.
    
    - **Core components**:
      - **Dispatcher**: Manages actions and dispatches them to stores.
      - **Stores**: Hold the state and logic of the application.
      - **Actions**: Payloads of information sent from the application to the dispatcher.
      - **View**: React components that re-render when stores update.
    - **Benefits**:
      - Predictable state management due to unidirectional data flow.
      - Improved debugging and testing.
      - Clear separation of concerns.
    
    Example flow:
    
    1. User interacts with the **View**.
    2. **Actions** are triggered and dispatched by the **Dispatcher**.
    3. **Stores** process the actions and update their state.
    4. **View** re-renders based on the updated state.

    <!-- Update here: /questions/what-is-the-flux-pattern-and-what-are-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-flux-pattern-and-what-are-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

35. ### Explain one-way data flow of React and its benefits

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    In React, one-way data flow means that data in a React application flows in a single direction, from parent components to child components. This makes the data flow predictable and easier to debug. The main benefits include improved maintainability, easier debugging, and better performance.

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-one-way-data-flow-of-react-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

36. ### How do you handle asynchronous data loading in React applications?

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    In React applications, asynchronous data loading is typically handled using `useEffect` and `useState` hooks. You initiate the data fetch inside `useEffect` and update the state with the fetched data. This ensures that the component re-renders with the new data. Here's a simple example:
    
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

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

37. ### Explain server-side rendering of React applications and its benefits?

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    Server-side rendering (SSR) in React involves rendering React components on the server and sending the fully rendered HTML to the client. This approach improves initial load times and SEO. The server handles the initial rendering, and the client takes over with React's hydration process. Benefits include faster initial page loads, better SEO, and improved performance on slower devices.

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-server-side-rendering-of-react-applications-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

38. ### Explain static generation of React applications and its benefits?

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    Static generation in React applications involves pre-rendering the HTML at build time, rather than on each request. This results in faster load times and better performance since the HTML is already generated and can be served directly from a CDN. It also improves SEO and can reduce server load. Tools like Next.js facilitate static generation by allowing developers to generate static pages easily.

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-static-generation-of-react-applications-and-its-benefits?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

39. ### Explain the presentational vs container component pattern in React

    <!-- Update here: /questions/explain-the-presentational-vs-container-component-pattern-in-react/en-US.mdx -->

    In React, the presentational vs container component pattern is a design approach where presentational components focus on how things look and container components focus on how things work. Presentational components are concerned with rendering HTML and CSS, while container components handle the logic and state management. This separation helps in maintaining a clean and organized codebase.

    <!-- Update here: /questions/explain-the-presentational-vs-container-component-pattern-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-presentational-vs-container-component-pattern-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

40. ### What are some common pitfalls when doing data fetching in React?

    <!-- Update here: /questions/what-are-some-common-pitfalls-when-doing-data-fetching-in-react/en-US.mdx -->

    Common pitfalls when doing data fetching in React include not handling loading and error states, causing memory leaks by not cleaning up subscriptions, and not using the right lifecycle methods or hooks. Always ensure you handle these states properly, clean up after your components, and use `useEffect` for side effects in functional components.

    <!-- Update here: /questions/what-are-some-common-pitfalls-when-doing-data-fetching-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-common-pitfalls-when-doing-data-fetching-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

41. ### What are render props in React and what are they for?

    <!-- Update here: /questions/what-are-render-props-in-react-and-what-are-they-for/en-US.mdx -->

    Render props in React are a technique for sharing code between components using a prop whose value is a function. This function returns a React element and allows you to pass data to the child component. It helps in reusing component logic without using higher-order components or hooks.
    
    ```jsx
    class DataFetcher extends React.Component {
      state = { data: null };
    
      componentDidMount() {
        fetch(this.props.url)
          .then((response) => response.json())
          .then((data) => this.setState({ data }));
      }
    
      render() {
        return this.props.render(this.state.data);
      }
    }
    
    // Usage
    <DataFetcher
      url="/api/data"
      render={(data) => <div>{data ? data.name : 'Loading...'}</div>}
    />;
    ```

    <!-- Update here: /questions/what-are-render-props-in-react-and-what-are-they-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-render-props-in-react-and-what-are-they-for?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

42. ### What are some React anti-patterns?

    <!-- Update here: /questions/what-are-some-react-anti-patterns/en-US.mdx -->

    React anti-patterns are practices that can lead to inefficient, hard-to-maintain, or buggy code. Some common anti-patterns include:
    
    - Mutating state directly instead of using `setState`
    - Using `componentWillMount` for data fetching
    - Overusing `componentWillReceiveProps`
    - Not using keys in lists
    - Overusing inline functions in render
    - Deeply nested state

    <!-- Update here: /questions/what-are-some-react-anti-patterns/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

43. ### How do you decide between using React state, context, and external state managers?

    <!-- Update here: /questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx -->

    Choosing between React state, context, and external state managers depends on the complexity and scope of your application's state management needs. Use React state for local component state, React context for global state that needs to be shared across multiple components, and external state managers like Redux or MobX for complex state management that requires advanced features like middleware, time-travel debugging, or when the state needs to be shared across a large application.

    <!-- Update here: /questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

44. ### Explain the composition pattern in React

    <!-- Update here: /questions/explain-the-composition-pattern-in-react/en-US.mdx -->

    The composition pattern in React is a way to build components by combining smaller, reusable components. Instead of using inheritance, React encourages composition to create complex UIs. You can pass components as children or props to other components to achieve this. For example:
    
    ```jsx
    function WelcomeDialog() {
      return (
        <Dialog>
          <h1>Welcome</h1>
          <p>Thank you for visiting our spacecraft!</p>
        </Dialog>
      );
    }
    
    function Dialog(props) {
      return <div className="dialog">{props.children}</div>;
    }
    ```

    <!-- Update here: /questions/explain-the-composition-pattern-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-composition-pattern-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

45. ### What is virtual DOM in React?

    <!-- Update here: /questions/what-is-virtual-dom-in-react/en-US.mdx -->

    The virtual DOM in React is a lightweight copy of the actual DOM. It allows React to efficiently update the UI by comparing the virtual DOM with the real DOM and only making necessary changes. This process is called reconciliation. By using the virtual DOM, React minimizes direct manipulation of the real DOM, which can be slow and inefficient.

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

51. ### What is a switching component?

    A _switching component_ is a component that renders one of many components. We need to use object to map prop values to components.

    For example, a switching component to display different pages based on `page` prop:

    ```jsx harmony
    import HomePage from "./HomePage";
    import AboutPage from "./AboutPage";
    import ServicesPage from "./ServicesPage";
    import ContactPage from "./ContactPage";

    const PAGES = {
      home: HomePage,
      about: AboutPage,
      services: ServicesPage,
      contact: ContactPage,
    };

    const Page = (props) => {
      const Handler = PAGES[props.page] || ContactPage;

      return <Handler {...props} />;
    };

    // The keys of the PAGES object can be used in the prop types to catch dev-time errors.
    Page.propTypes = {
      page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
    };
    ```

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-a-switching-component?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

52. ### What are React Mixins?

    _Mixins_ are a way to totally separate components to have a common functionality. Mixins **should not be used** and can be replaced with _higher-order components_ or _decorators_.

    One of the most commonly used mixins is `PureRenderMixin`. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:

    ```javascript
    const PureRenderMixin = require("react-addons-pure-render-mixin");

    const Button = React.createClass({
      mixins: [PureRenderMixin],
      // ...
    });
    ```

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-react-mixins?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

53. ### What are the Pointer Events supported in React?

    _Pointer Events_ provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the _Pointer Events_ specification.

    The following event types are now available in _React DOM_:

    1. `onPointerDown`
    2. `onPointerMove`
    3. `onPointerUp`
    4. `onPointerCancel`
    5. `onGotPointerCapture`
    6. `onLostPointerCapture`
    7. `onPointerEnter`
    8. `onPointerLeave`
    9. `onPointerOver`
    10. `onPointerOut`

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-point-events-supported-in-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

54. ### Why should component names start with capital letter?

    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

    ```jsx harmony
    function SomeComponent {
      // Code goes here
    }
    ```

    You can define function component whose name starts with lowercase letter, but when it's imported it should have a capital letter. Here lowercase is fine:

    ```jsx harmony
    function myComponent {
      render() {
        return <div />;
      }
    }

    export default myComponent;
    ```

    While when imported in another file it should start with capital letter:

    ```jsx harmony
    import MyComponent from "./myComponent";
    ```

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-should-component-names-start-with-capital-letter?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

55. ### Are custom DOM attributes supported in React v16?

    Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn't recognize, React would just skip it.

    For example, let's take a look at the below attribute:

    ```jsx harmony
    <div mycustomattribute={"something"} />
    ```

    Would render an empty div to the DOM with React v15:

    ```html
    <div />
    ```

    In React v16 any unknown attributes will end up in the DOM:

    ```html
    <div mycustomattribute="something" />
    ```

    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/are-custom-dom-attributes-supported-in-react-v16?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

56. ### How to loop inside JSX?

    You can simply use `Array.prototype.map` with ES6 _arrow function_ syntax.

    For example, the `items` array of objects is mapped into an array of components:

    ```jsx harmony
    <tbody>
      {items.map((item) => (
        <SomeComponent key={item.id} name={item.name} />
      ))}
    </tbody>
    ```

    But you can't iterate using `for` loop:

    ```jsx harmony
    <tbody>
      for (let i = 0; i < items.length; i++) {
        <SomeComponent key={items[i].id} name={items[i].name} />
      }
    </tbody>
    ```

    This is because JSX tags are transpiled into _function calls_, and you can't use statements inside expressions. This may change thanks to `do` expressions which are _stage 1 proposal_.

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-to-loop-inside-jsx?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

57. ### How do you access props in attribute quotes?

    React (or JSX) doesn't support variable interpolation inside an attribute value. The below representation won't work:

    ```jsx harmony
    <img className="image" src="images/{this.props.image}" />
    ```

    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:

    ```jsx harmony
    <img className="image" src={"images/" + this.props.image} />
    ```

    Using _template strings_ will also work:

    ```jsx harmony
    <img className="image" src={`images/${this.props.image}`} />
    ```

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-access-props-in-attribute-quotes?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

58. ### What is React PropType array with shape?

    If you want to pass an array of objects to a component with a particular shape then use `React.PropTypes.shape()` as an argument to `React.PropTypes.arrayOf()`.

    ```javascript
    ReactComponent.propTypes = {
      arrayWithShape: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          color: React.PropTypes.string.isRequired,
          fontSize: React.PropTypes.number.isRequired,
        })
      ).isRequired,
    };
    ```

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-react-prop-type-array-with-shape?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

59. ### How to conditionally apply class attributes?

    You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

    ```jsx harmony
    <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
    ```

    Instead you need to move curly braces outside (don't forget to include spaces between class names):

    ```jsx harmony
    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
    ```

    _Template strings_ will also work:

    ```jsx harmony
    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>
    ```

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-to-conditionally-apply-class-attributes?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

60. ### Why ReactDOM is separated from React?

    The React team worked on extracting all DOM-related features into a separate library called _ReactDOM_. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.

    To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of React and React Native.

    <br>

    > Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-react-dom-is-separated-from-react?framework=react&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>


<!-- QUESTIONS:END -->
