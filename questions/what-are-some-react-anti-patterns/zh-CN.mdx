---
title: React 的一些反模式是什么？
---

## TL;DR

React 反模式是指可能导致代码效率低下、难以维护或出现错误的实践。一些常见的反模式包括：

- 直接改变状态，而不是使用 `setState`
- 使用 `componentWillMount` 进行数据获取
- 过度使用 `componentWillReceiveProps`
- 在列表中不使用键
- 在 render 中过度使用内联函数
- 状态嵌套过深

---

## 常见的 React 反模式

### 直接改变状态

直接改变状态可能导致意外的行为和错误。 始终使用 `setState` 来更新状态。

```javascript
// 反模式
this.state.count = 1;

// 正确方法
this.setState({ count: 1 });
```

### 使用 `componentWillMount` 进行数据获取

`componentWillMount` 已被弃用，不应用于数据获取。 请改用 `componentDidMount`。

```javascript
// 反模式
componentWillMount() {
  fetchData();
}

// 正确方法
componentDidMount() {
  fetchData();
}
```

### 过度使用 `componentWillReceiveProps`

`componentWillReceiveProps` 已被弃用。 请改用 `getDerivedStateFromProps` 或 `componentDidUpdate`。

```javascript
// 反模式
componentWillReceiveProps(nextProps) {
  if (nextProps.value !== this.props.value) {
    this.setState({ value: nextProps.value });
  }
}

// 正确方法
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null;
}
```

### 在列表中不使用键

键可帮助 React 识别哪些项目已更改、已添加或已删除。 不使用键可能导致渲染效率低下。

```javascript
// 反模式
const listItems = items.map((item) => <li>{item}</li>);

// 正确方法
const listItems = items.map((item) => <li key={item.id}>{item}</li>);
```

### 在 render 中过度使用内联函数

在 `render` 方法中定义函数可能导致性能问题，因为每次渲染都会创建一个新函数。

```javascript
// 反模式
render() {
  return <button onClick={() => this.handleClick()}>点击我</button>;
}

// 正确方法
render() {
  return <button onClick={this.handleClick}>点击我</button>;
}
```

### 深度嵌套状态

深度嵌套状态会使状态管理变得复杂且容易出错。 尽可能扁平化状态结构。

```javascript
// 反模式
this.state = {
  user: {
    profile: {
      name: 'John',
      age: 30,
    },
  },
};

// 正确方法
this.state = {
  userName: 'John',
  userAge: 30,
};
```

## 延伸阅读

- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React documentation on lists and keys](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [React documentation on hooks](https://react.dev/reference/react/hooks)
- [React documentation on memo optimizing performance](https://react.dev/reference/react/memo)
