---
title: 如何测试 React 应用程序？
---

## TL;DR

要测试 React 应用程序，您可以使用 Jest 和 React Testing Library 等工具。Jest 是一个与 React 配合良好的 JavaScript 测试框架，而 React Testing Library 提供了以类似于用户与组件交互的方式测试 React 组件的实用程序。您可以使用 Cypress 等工具为单个组件编写单元测试、为组件交互编写集成测试以及编写端到端测试。

---

## 如何测试 React 应用程序？

### 单元测试

单元测试涉及单独测试各个组件。Jest 是一个用于单元测试 React 应用程序的常用选择。它提供了一个测试运行器、断言库和模拟功能。

#### 示例

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyComponent from './MyComponent';

test('renders the component with the correct text', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
```

### 集成测试

集成测试涉及测试多个组件之间的交互。React Testing Library 对此很有用，因为它允许您渲染组件并像用户一样与它们交互。

#### 示例

```javascript
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ParentComponent from './ParentComponent';

test('updates child component when parent state changes', () => {
  render(<ParentComponent />);
  fireEvent.click(screen.getByText('Update Child'));
  expect(screen.getByText('Child Updated')).toBeInTheDocument();
});
```

### 端到端测试

端到端 (E2E) 测试涉及从用户的角度测试整个应用程序流程。Cypress 是一个用于 React 应用程序中 E2E 测试的常用工具。

#### 示例

```javascript
describe('My Application', () => {
  it('should allow a user to log in', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

### 快照测试

快照测试涉及捕获组件的渲染输出并将其与已保存的快照进行比较。Jest 提供了对快照测试的内置支持。

#### 示例

```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('matches the snapshot', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

## 延伸阅读

- [Jest 文档](https://jestjs.io/docs/getting-started)
- [React Testing Library 文档](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress 文档](https://docs.cypress.io/guides/overview/why-cypress)
- [使用 Jest 进行快照测试](https://jestjs.io/docs/snapshot-testing)
