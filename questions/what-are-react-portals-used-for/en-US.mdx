---
title: What are React Portals used for?
---

## TL;DR

React Portals are used to render children into a DOM node that exists outside the hierarchy of the parent component. This is useful for scenarios like modals, tooltips, and dropdowns where you need to break out of the parent component's overflow or z-index constraints. You can create a portal using `ReactDOM.createPortal(child, container)`.

---

## What are React Portals used for?

### Introduction

React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is particularly useful for certain UI patterns that require breaking out of the normal parent-child DOM structure.

### Use cases

#### Modals

Modals often need to be rendered outside the parent component to avoid issues with z-index and overflow. By using a portal, you can ensure the modal is rendered at the top level of the DOM, making it easier to manage its visibility and positioning.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root'),
  );
};
```

#### Tooltips

Tooltips need to be rendered outside the parent component to avoid being clipped by overflow settings. Using a portal allows the tooltip to be positioned correctly without being constrained by the parent component's styles.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Tooltip = ({ text, targetRef }) => {
  const tooltipStyle = {
    position: 'absolute',
    top: targetRef.current.offsetTop,
    left: targetRef.current.offsetLeft,
  };

  return ReactDOM.createPortal(
    <div className="tooltip" style={tooltipStyle}>
      {text}
    </div>,
    document.body,
  );
};
```

#### Dropdowns

Dropdowns often need to be rendered outside the parent component to avoid being clipped by overflow settings. Using a portal allows the dropdown to be positioned correctly without being constrained by the parent component's styles.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Dropdown = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="dropdown">{children}</div>,
    document.body,
  );
};
```

### How to create a portal

To create a portal, you use the `ReactDOM.createPortal` method. This method takes two arguments: the child element to render and the DOM node to render it into.

```jsx
ReactDOM.createPortal(child, container);
```

### Benefits

- **Breaking out of parent constraints**: Portals allow you to render components outside the parent component's DOM hierarchy, which is useful for avoiding issues with z-index and overflow.
- **Improved accessibility**: By rendering components like modals and tooltips at the top level of the DOM, you can ensure they are more easily accessible to screen readers and other assistive technologies.
- **Simplified styling**: By rendering components outside the parent component, you can avoid complex CSS rules and ensure the component is styled correctly.

## Further reading

- [React createPortal documentation](https://react.dev/reference/react-dom/createPortal)
- [Building a modal in React with React Portals](https://blog.logrocket.com/build-modal-with-react-portals/)
