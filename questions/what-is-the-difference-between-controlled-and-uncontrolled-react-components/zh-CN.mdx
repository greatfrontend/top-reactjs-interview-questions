---
title: 受控组件和非受控 React 组件有什么区别？
---

## TL;DR

React 中的受控组件是指表单数据由组件的状态处理的组件。状态是唯一的真理来源，对表单输入的任何更改都通过事件处理程序进行管理。另一方面，非受控组件在其内部存储自己的状态，并依赖于 refs 来访问表单值。受控组件提供更多控制，更容易测试，而非受控组件对于基本用例来说可能更易于实现。

---

## 受控组件和非受控 React 组件有什么区别？

### 受控组件

受控组件是指表单数据由组件的状态处理的组件。状态是唯一的真理来源，对表单输入的任何更改都通过事件处理程序进行管理。

#### 示例

```jsx
class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### 非受控组件

非受控组件在其内部存储自己的状态，并依赖于 refs 来访问表单值。这种方法更类似于传统的 HTML 表单元素。

#### 示例

```jsx
class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.inputRef.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### 主要区别

#### 状态管理

- 受控组件：状态由 React 组件管理。
- 非受控组件：状态由 DOM 管理。

#### 数据流

- 受控组件：数据从组件的状态流向输入元素。
- 非受控组件：数据通过 refs 从输入元素流向组件。

#### 用例

- 受控组件：当您需要强制验证、有条件地禁用/启用输入或执行其他复杂交互时，首选受控组件。
- 非受控组件：适用于简单表单或需要与非 React 代码集成时。

## 延伸阅读

- [React documentation on controlled and uncontrolled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [React refs and the DOM](https://react.dev/learn/manipulating-the-dom-with-refs)
