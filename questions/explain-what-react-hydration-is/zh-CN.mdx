---
title: 解释 React 水合是什么
---

## TL;DR

React 水合是在客户端附加事件监听器并使服务器渲染的 HTML 页面具有交互性的过程。当 React 应用程序进行服务器端渲染时，HTML 会发送到客户端，React 会接管并通过附加事件处理程序和初始化状态来使其具有动态性。此过程称为水合。

---

## 什么是 React 水合？

### 服务器端渲染 (SSR)

服务器端渲染 (SSR) 是一种在服务器上生成网页 HTML 并将其发送到客户端的技术。这允许更快的初始页面加载和更好的 SEO，因为内容在加载页面时已经可用。

### 水合过程

水合是在将服务器端渲染的 HTML 发送到客户端后发生的过程。React 获取静态 HTML 并通过附加事件监听器和初始化状态来“水合”它，从而使页面具有交互性。此过程涉及：

1. **重用现有的 HTML**：React 使用服务器生成的 HTML，而不是从头开始重新渲染它。
2. **附加事件监听器**：React 将必要的事件监听器附加到现有的 HTML 元素。
3. **初始化状态**：React 初始化组件状态和属性以使页面具有动态性。

### 示例

这是一个简单的例子，说明这个概念：

1. **服务器端渲染**：服务器生成以下 HTML：

   ```html
   <div id="root">
     <button>Click me</button>
   </div>
   ```

2. **客户端水合**：当 HTML 发送到客户端时，React 使用以下代码对其进行水合：

   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';

   function App() {
     const handleClick = () => {
       alert('Button clicked!');
     };

     return <button onClick={handleClick}>Click me</button>;
   }

   ReactDOM.hydrate(<App />, document.getElementById('root'));
   ```

在此示例中，服务器将带有按钮的静态 HTML 发送到客户端。然后，React 通过附加 `onClick` 事件监听器来对按钮进行水合，使其具有交互性。

### 水合的好处

1. **更快的初始加载**：由于 HTML 已经可用，因此初始页面加载速度更快。
2. **SEO 优势**：搜索引擎可以抓取服务器渲染的 HTML，从而改善 SEO。
3. **改进的用户体验**：用户可以立即看到内容，甚至在 React 完全接管之前。

### 水合的挑战

1. **不匹配问题**：如果服务器渲染的 HTML 与客户端 React 组件不匹配，则可能导致错误和警告。
2. **性能开销**：水合可能占用大量资源，尤其对于大型应用程序而言。

## 延伸阅读

- [React 文档关于 hydration](https://react.dev/reference/react-dom/client/hydrateRoot)
- [React 中的服务端渲染](https://react.dev/reference/react-dom/server)
- [Next.js 文档关于 hydration](https://nextjs.org/docs/basic-features/pages#hydration)
