# React Developer Study Guide

This guide is a comprehensive roadmap for learning React, covering key concepts and advanced topics.  It's designed to take you from beginner to a confident React developer.

## Table of Contents

1.  **Core Concepts:**
    *   1.1 [Components](#11-components)
    *   1.2 [JSX](#12-jsx)
    *   1.3 [State](#13-state)
    *   1.4 [Props](#14-props)
    *   1.5 [Reconciliations (Virtual DOM)](#15-reconciliations-virtual-dom)
    *   1.6 [Hooks](#16-hooks)
    *   1.7 [Virtual DOM](#17-virtual-dom)
    *   1.8 [Lifecycle Methods (Class Components)](#18-lifecycle-methods-class-components)
    *   1.9 [Refs](#19-refs)
    *   1.10 [Portals](#110-portals)
    *   1.11 [Error Boundaries](#111-error-boundaries)
    *   1.12 [Context API](#112-context-api)

2.  **Advanced Patterns & Techniques:**
    *   2.1 [Prop Drilling & State Lifting](#21-prop-drilling--state-lifting)
    *   2.2 [Higher-Order Components (HOCs)](#22-higher-order-components-hocs)
    *   2.3 [Render Props](#23-render-props)
    *   2.4 [Code Splitting & Lazy Loading](#24-code-splitting--lazy-loading)
    *   2.5 [Custom Hooks](#25-custom-hooks)
    *   2.6 [Batched Updates](#26-batched-updates)

3.  **Server-Side Rendering (SSR) & Static Site Generation (SSG):**
    *   3.1 [SSR with Next.js](#31-ssr-with-nextjs)
    *   3.2 [SSG with Gatsby or Next.js](#32-ssg-with-gatsby-or-nextjs)
    *   3.3 [Hydration](#33-hydration)

4.  **Concurrency & Performance:**
    *   4.1 [Concurrent Mode](#41-concurrent-mode)
    *   4.2 [Suspense for Data Fetching](#42-suspense-for-data-fetching)
    *   4.3 [React Fiber Architecture](#43-react-fiber-architecture)
    *   4.4 [DevTools & Performance Optimization](#44-devtools--performance-optimization)
    *   4.5 [Lazy Initialization with `useState`](#45-lazy-initialization-with-usestate)

5.  **Architectural Patterns & Frameworks:**
    *   5.1 [Compound Components Pattern](#51-compound-components-pattern)
    *   5.2 [Meta Frameworks: Next.js & Remix](#52-meta-frameworks-nextjs--remix)
    *   5.3 [Progressive Web Apps (PWAs) with React](#53-progressive-web-apps-pwas-with-react)
    *   5.4 [Micro Frontends with React](#54-micro-frontends-with-react)

6.  **State Management:**
    *   6.1 [Reactivity in React (Derived State)](#61-reactivity-in-react-derived-state)
    *   6.2 [Redux & Redux Toolkit](#62-redux--redux-toolkit)

7.  **Accessibility & Testing:**
    *   7.1 [Accessibility in React (ARIA & Screen Readers)](#71-accessibility-in-react-aria--screen-readers)
    *   7.2 [Testing in React (Jest & React Testing Library)](#72-testing-in-react-jest--react-testing-library)

8.  **Styling & Animations:**
    *   8.1 [Animations in React](#81-animations-in-react)

9.  **Interview Questions & Answers:**
    *   [General React Questions](#general-react-questions)
    *   [Component-Related Questions](#component-related-questions)
    *   [Hook-Related Questions](#hook-related-questions)
    *   [State Management Questions](#state-management-questions)
    *   [Performance Optimization Questions](#performance-optimization-questions)
    *   [SSR/SSG Questions](#ssrssg-questions)
    *   [Testing Questions](#testing-questions)
    *   [Accessibility Questions](#accessibility-questions)
    *   [Advanced Concept Questions](#advanced-concept-questions)

---

## 1. Core Concepts

### 1.1 Components

*   **Explanation:** React applications are built from reusable UI components. These components can be either functional components or class components (though functional components with hooks are the modern approach).  A component encapsulates its own logic and rendering.

*   **Real-time Example:** Think of a `Button`, `Input`, or `Card` component in an e-commerce application.  Each has its specific functionality and appearance, making the app modular and maintainable.

*   **Code Example:**

    ```javascript
    // Functional Component
    function MyComponent(props) {
        return (
            <div>
                <h1>Hello, {props.name}!</h1>
            </div>
        );
    }

    // Class Component (Less Common Now)
    class MyClassComponent extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello, {this.props.name}!</h1>
                </div>
            );
        }
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are the differences between functional and class components?**
        *   **A:** Functional components are simpler, use hooks for state and lifecycle, and are generally preferred. Class components use class syntax, require `render()` method, and use `this` keyword. Functional components offer better performance (in some scenarios) and readability.

    *   **Q: What are the benefits of using components?**
        *   **A:** Reusability, maintainability, testability, and separation of concerns.  Components allow you to break down a complex UI into smaller, manageable pieces.

### 1.2 JSX

*   **Explanation:** JSX (JavaScript XML) is a syntax extension to JavaScript that allows you to write HTML-like structures in your JavaScript code.  It gets transformed into regular JavaScript function calls that create React elements.

*   **Real-time Example:**  Instead of manually creating elements with `React.createElement`, JSX lets you write: `<h1>Hello, world!</h1>` directly within your component.

*   **Code Example:**

    ```javascript
    const element = <h1>Hello, JSX!</h1>; // JSX
    // This is equivalent to:
    const element2 = React.createElement('h1', null, 'Hello, JSX!');
    ```

*   **Interview Q&A:**

    *   **Q: What is JSX?**
        *   **A:** JSX is a syntax extension to JavaScript that allows you to write HTML-like structures in your JavaScript code.  It gets transformed into regular JavaScript function calls.

    *   **Q:  Does the browser understand JSX directly?**
        *   **A:** No, JSX needs to be transpiled into JavaScript using tools like Babel.

### 1.3 State

*   **Explanation:** State is data that a component manages internally.  When the state changes, React re-renders the component to reflect the updated data. In functional components, state is managed with the `useState` hook.

*   **Real-time Example:** A counter component that increments a number displayed on the screen. The current count is stored in the component's state.

*   **Code Example:**

    ```javascript
    import React, { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0); // Initial state is 0

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is the purpose of state in React?**
        *   **A:** To store and manage data that can change over time, triggering re-renders when updated.

    *   **Q:  How do you update the state in a functional component?**
        *   **A:** Using the `useState` hook and its updater function (e.g., `setCount`).

    *   **Q: Why should we use the updater function instead of directly modifying the state like `this.state.count = 100;`**
        *   **A:** because React uses virtual dom and it compares the changes between the previous and new states, which can cause unexpected behaviors.

### 1.4 Props

*   **Explanation:** Props (short for "properties") are data passed from a parent component to a child component.  They are read-only from the child's perspective.

*   **Real-time Example:** Passing the text for a button from a parent component to a `Button` component.

*   **Code Example:**

    ```javascript
    function Button(props) {
        return <button>{props.text}</button>;
    }

    function ParentComponent() {
        return <Button text="Click Me!" />;
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are props?**
        *   **A:**  Data passed from a parent component to a child component.

    *   **Q: Can a child component modify its props?**
        *   **A:** No, props are read-only from the child's perspective.

### 1.5 Reconciliations (Virtual DOM)

*   **Explanation:** React uses a virtual DOM (Document Object Model) to optimize updates to the actual DOM. When the state of a component changes, React creates a new virtual DOM tree. It then compares this new tree to the previous one, identifies the minimal set of changes required, and efficiently updates the real DOM.  This process is called reconciliation.

*   **Real-time Example:** Imagine updating a list with 1000 items.  Instead of re-rendering the entire list, React's virtual DOM identifies only the changed items and updates those in the real DOM.

*   **Explanation:** The Reconciliation process involves diffing the Virtual DOM trees and then applying minimal patches to the real DOM.

*   **Interview Q&A:**

    *   **Q: What is the Virtual DOM?**
        *   **A:** A lightweight, in-memory representation of the real DOM.

    *   **Q: How does the Virtual DOM improve performance?**
        *   **A:** By minimizing direct manipulations to the real DOM, which are expensive. React batches updates and applies only the necessary changes.

    *   **Q: What's the reconciliation process?**
        *   **A:** The process of comparing the new and previous Virtual DOM trees to determine the minimal set of changes needed in the real DOM.

### 1.6 Hooks

*   **Explanation:** Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They were introduced in React 16.8 and provide a more straightforward way to manage state and side effects in functional components, eliminating the need for class components in many cases.

*   **Real-time Example:**  Using `useState` for managing component-specific data, `useEffect` for fetching data or performing side effects after rendering.

*   **Code Example:**

    ```javascript
    import React, { useState, useEffect } from 'react';

    function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            document.title = `You clicked ${count} times`;
        }, [count]); // Only re-run the effect if count changes

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are React Hooks?**
        *   **A:** Functions that allow you to use state and other React features in functional components.

    *   **Q: What are some common built-in Hooks?**
        *   **A:** `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, `useRef`.

    *   **Q:  What are the rules of Hooks?**
        *   **A:** Only call Hooks at the top level of a React function.  Don't call Hooks inside loops, conditions, or nested functions. Only call Hooks from React function components or custom Hooks.

### 1.7 Virtual DOM

(Already covered in Reconciliations - expand details if needed)

### 1.8 Lifecycle Methods (Class Components)

*   **Explanation:** Lifecycle methods are special methods in class components that allow you to hook into different stages of a component's lifecycle (mounting, updating, unmounting).  While less common now with Hooks, understanding them is helpful for maintaining older codebases.

*   **Real-time Example:**  `componentDidMount` for fetching data when a component first renders, `componentWillUnmount` for cleaning up resources when a component is removed from the DOM.

*   **Code Example:**

    ```javascript
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { data: null };
        }

        componentDidMount() {
            // Fetch data when the component mounts
            fetch('/api/data')
                .then(response => response.json())
                .then(data => this.setState({ data }));
        }

        componentWillUnmount() {
            // Clean up any resources (e.g., timers, event listeners)
        }

        render() {
            return (
                <div>
                    {this.state.data ? <p>Data: {this.state.data}</p> : <p>Loading...</p>}
                </div>
            );
        }
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are React lifecycle methods?**
        *   **A:** Special methods in class components that allow you to hook into different stages of a component's lifecycle.

    *   **Q: Name some common lifecycle methods and their purpose.**
        *   **A:** `constructor`: Initializes the component. `render`: Returns the JSX to be rendered.  `componentDidMount`: Called after the component mounts. `componentDidUpdate`: Called after the component updates. `componentWillUnmount`: Called before the component unmounts.

    *   **Q:  Why are Hooks generally preferred over lifecycle methods?**
        *   **A:** Hooks provide a more concise and readable way to manage state and side effects in functional components. They also promote code reuse and make it easier to reason about component behavior.

### 1.9 Refs

*   **Explanation:** Refs (references) provide a way to access the underlying DOM node or a React element created in the `render` method. They are useful for managing focus, text selection, or directly interacting with DOM elements.

*   **Real-time Example:** Focusing an input field when a button is clicked.

*   **Code Example:**

    ```javascript
    import React, { useRef, useEffect } from 'react';

    function MyInput() {
        const inputRef = useRef(null);

        useEffect(() => {
            // Focus the input on component mount
            inputRef.current.focus();
        }, []);

        return <input type="text" ref={inputRef} />;
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are refs in React?**
        *   **A:** A way to access the underlying DOM node or a React element.

    *   **Q: What are some use cases for refs?**
        *   **A:** Managing focus, text selection, triggering imperative animations, integrating with third-party DOM libraries.

    *   **Q:  When should you use refs?**
        *   **A:** Sparingly, when you need to directly interact with the DOM.  Avoid using refs for things that can be achieved with React's declarative approach (state and props).

### 1.10 Portals

*   **Explanation:** Portals provide a way to render a child component into a different part of the DOM tree outside of its parent. This is useful for elements like modals, tooltips, or notifications that should visually appear on top of other content, regardless of their position in the component hierarchy.

*   **Real-time Example:**  Displaying a modal window that overlays the entire application, even if the modal's component is nested deep within other components.

*   **Code Example:**

    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    const modalRoot = document.getElementById('modal-root'); // Assumes you have a <div id="modal-root"> in your HTML

    function MyModal(props) {
        return ReactDOM.createPortal(
            <div className="modal">
                <h1>{props.message}</h1>
                <button onClick={props.onClose}>Close</button>
            </div>,
            modalRoot
        );
    }

    function App() {
        const [showModal, setShowModal] = React.useState(false);

        return (
            <div>
                <button onClick={() => setShowModal(true)}>Open Modal</button>
                {showModal && <MyModal message="Hello from the modal!" onClose={() => setShowModal(false)} />}
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are React portals?**
        *   **A:** A way to render a child component into a different part of the DOM tree.

    *   **Q: What are some use cases for portals?**
        *   **A:** Modals, tooltips, notifications, elements that need to break out of their parent's styling constraints (e.g., `overflow: hidden`).

    *   **Q: How do events behave with portals?**
        *   **A:** Events still propagate up the React tree, even if the portal renders the element in a different part of the DOM.

### 1.11 Error Boundaries

*   **Explanation:** Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.  They are a way to gracefully handle unexpected errors in your components.

*   **Real-time Example:**  Wrapping a section of your application with an error boundary to prevent a single component's error from breaking the entire UI.

*   **Code Example:**

    ```javascript
    import React from 'react';

    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        componentDidCatch(error, errorInfo) {
            // You can also log the error to an error reporting service
            console.error(error, errorInfo);
        }

        render() {
            if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>Something went wrong.</h1>;
            }

            return this.props.children;
        }
    }

    function BrokenComponent() {
        throw new Error("I'm a broken component!");
    }

    function App() {
        return (
            <ErrorBoundary>
                <BrokenComponent />
            </ErrorBoundary>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are error boundaries in React?**
        *   **A:** React components that catch JavaScript errors in their child component tree and display a fallback UI.

    *   **Q:  How do you create an error boundary?**
        *   **A:** By creating a class component that implements `static getDerivedStateFromError()` and `componentDidCatch()`.

    *   **Q:  What are the limitations of error boundaries?**
        *   **A:** Error boundaries only catch errors in the components *below* them in the tree.  They cannot catch errors within themselves.  They also don't catch errors caused by event handlers, asynchronous code (e.g., `setTimeout`, `requestAnimationFrame`), server-side rendering, or errors thrown in the error boundary itself.

### 1.12 Context API

*   **Explanation:** The Context API provides a way to share data between components without explicitly passing props through every level of the component tree. It's useful for theming, user authentication, or global configuration settings.

*   **Real-time Example:**  Providing a theme (e.g., light or dark mode) to all components in your application without having to pass the theme prop to each one individually.

*   **Code Example:**

    ```javascript
    import React, { createContext, useContext, useState } from 'react';

    // 1. Create a Context
    const ThemeContext = createContext();

    // 2. Create a Provider Component
    function ThemeProvider({ children }) {
        const [theme, setTheme] = useState('light');

        const toggleTheme = () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
        };

        const value = { theme, toggleTheme }; // Value to be provided to consumers

        return (
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        );
    }

    // 3. Create a Consumer Component (using a Hook)
    function ThemedButton() {
        const { theme, toggleTheme } = useContext(ThemeContext);

        return (
            <button style={{ backgroundColor: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }} onClick={toggleTheme}>
                Toggle Theme
            </button>
        );
    }

    function App() {
        return (
            <ThemeProvider>
                <div>
                    <ThemedButton />
                </div>
            </ThemeProvider>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is the Context API in React?**
        *   **A:** A way to share data between components without explicitly passing props through every level of the component tree.

    *   **Q: What are the key parts of the Context API?**
        *   **A:** `createContext`, `Provider`, and `useContext` (or `Consumer` for class components).

    *   **Q: When should you use Context API?**
        *   **A:** For data that needs to be accessible by many components within an application, such as theming, user authentication, or global configuration settings.  Avoid using Context for data that is only needed by a few components, as prop drilling might be a simpler solution in those cases.

---

## 2. Advanced Patterns & Techniques

### 2.1 Prop Drilling & State Lifting

*   **Explanation:**
    *   **Prop Drilling:**  The process of passing props down through multiple levels of the component tree, even if intermediate components don't need the data themselves.  This can lead to verbose and less maintainable code.
    *   **State Lifting:** Moving state up to a common ancestor component that needs to share that state with multiple children.  This allows the parent component to control the state and pass it down as props to the children.

*   **Real-time Example:** Imagine a user authentication status needed deep within a nested component.  Prop drilling would involve passing the authentication status through all intermediate components. State lifting would involve managing the authentication status in a parent component and passing it down to the necessary child components.

*   **Code Example (Prop Drilling):**

    ```javascript
    function Grandparent(props) {
        return <Parent user={props.user} />;
    }

    function Parent(props) {
        return <Child user={props.user} />;
    }

    function Child(props) {
        return <p>Hello, {props.user.name}!</p>;
    }

    function App() {
        const user = { name: 'Alice' };
        return <Grandparent user={user} />;
    }
    ```

*   **Code Example (State Lifting):**

    ```javascript
    import React, { useState } from 'react';

    function ChildA({ onInputChange }) {
        return <input type="text" onChange={(e) => onInputChange(e.target.value)} />;
    }

    function ChildB({ inputValue }) {
        return <p>You entered: {inputValue}</p>;
    }

    function Parent() {
        const [inputValue, setInputValue] = useState('');

        return (
            <div>
                <ChildA onInputChange={setInputValue} />
                <ChildB inputValue={inputValue} />
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is prop drilling?**
        *   **A:** Passing props down through multiple levels of the component tree unnecessarily.

    *   **Q: What is state lifting?**
        *   **A:** Moving state up to a common ancestor component to share it with multiple children.

    *   **Q: When should you use state lifting?**
        *   **A:** When multiple components need to share and update the same state.

    *   **Q:  What are some alternatives to prop drilling?**
        *   **A:** Context API, Redux (or other state management libraries), Component Composition.

### 2.2 Higher-Order Components (HOCs)

*   **Explanation:** A higher-order component (HOC) is a function that takes a component as an argument and returns a new, enhanced component. HOCs are a way to reuse component logic and add functionality (e.g., authentication, data fetching) to multiple components.

*   **Real-time Example:** Creating an HOC that adds authentication logic to a component, redirecting the user to a login page if they are not authenticated.

*   **Code Example:**

    ```javascript
    import React from 'react';

    function withAuthentication(WrappedComponent) {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = { isAuthenticated: false }; // Replace with actual authentication check
            }

            componentDidMount() {
                // Simulate authentication check
                setTimeout(() => {
                    this.setState({ isAuthenticated: true });
                }, 1000);
            }

            render() {
                if (!this.state.isAuthenticated) {
                    return <p>Please log in.</p>; // Or redirect to login page
                }

                return <WrappedComponent {...this.props} />;
            }
        };
    }

    function MyComponent(props) {
        return <p>Welcome!</p>;
    }

    const AuthenticatedComponent = withAuthentication(MyComponent);
    ```

*   **Interview Q&A:**

    *   **Q: What is a higher-order component (HOC)?**
        *   **A:** A function that takes a component as an argument and returns a new, enhanced component.

    *   **Q: What are the benefits of using HOCs?**
        *   **A:** Code reuse, separation of concerns, adding functionality to multiple components.

    *   **Q: What are some drawbacks of HOCs?**
        *   **A:** Can make debugging more difficult, can lead to prop name collisions, can increase component complexity.

    *   **Q: What is the alternative to using HOCs?**
        *   **A:** React Hooks (generally preferred for their simplicity and flexibility).

### 2.3 Render Props

*   **Explanation:** A render prop is a function prop that a component uses to render something.  Instead of hardcoding the rendering logic within the component, the component delegates the rendering to the function provided as a prop.

*   **Real-time Example:** A `Mouse` component that tracks the mouse position and provides that position to its children via a render prop function, allowing different children to render different things based on the mouse position.

*   **Code Example:**

    ```javascript
    import React from 'react';

    class Mouse extends React.Component {
        constructor(props) {
            super(props);
            this.state = { x: 0, y: 0 };
        }

        handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y: event.clientY,
            });
        };

        render() {
            return (
                <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                    {this.props.render(this.state)}
                </div>
            );
        }
    }

    function App() {
        return (
            <Mouse
                render={mouse => (
                    <p>
                        The mouse position is ({mouse.x}, {mouse.y})
                    </p>
                )}
            />
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is a render prop?**
        *   **A:** A function prop that a component uses to render something.

    *   **Q: What are the benefits of using render props?**
        *   **A:** Code reuse, flexibility in rendering logic, separation of concerns.

    *   **Q: What are some drawbacks of render props?**
        *   **A:** Can make code more verbose, can be confusing to read.

    *   **Q:  What is the alternative to using render props?**
        *   **A:** React Hooks (generally preferred for their simplicity and flexibility).

### 2.4 Code Splitting & Lazy Loading

*   **Explanation:**
    *   **Code Splitting:**  Breaking down your application's code into smaller chunks (bundles) that can be loaded on demand.  This reduces the initial load time and improves the application's performance.
    *   **Lazy Loading:** Loading components or modules only when they are needed (e.g., when they are first rendered or when the user navigates to a specific route).

*   **Real-time Example:**  Only loading the code for a specific page when the user navigates to that page, instead of loading the entire application's code upfront.

*   **Code Example:**

    ```javascript
    import React, { Suspense, lazy } from 'react';

    const MyComponent = lazy(() => import('./MyComponent')); // Dynamic import

    function App() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <MyComponent />
                </Suspense>
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is code splitting?**
        *   **A:** Breaking down your application's code into smaller chunks that can be loaded on demand.

    *   **Q: What is lazy loading?**
        *   **A:** Loading components or modules only when they are needed.

    *   **Q: What are the benefits of code splitting and lazy loading?**
        *   **A:** Reduced initial load time, improved application performance, better user experience.

    *   **Q: How can you implement code splitting in React?**
        *   **A:** Using `React.lazy` and `Suspense`, dynamic imports, route-based code splitting with React Router.

### 2.5 Custom Hooks

*   **Explanation:** Custom Hooks allow you to extract component logic into reusable functions.  A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. They're a mechanism to reuse stateful logic.

*   **Real-time Example:**  Creating a custom Hook that fetches data from an API and handles loading and error states.

*   **Code Example:**

    ```javascript
    import { useState, useEffect } from 'react';

    function useFetch(url) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const json = await response.json();
                    setData(json);
                    setError(null);
                } catch (e) {
                    setError(e);
                    setData(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [url]);

        return { data, loading, error };
    }

    function MyComponent() {
        const { data, loading, error } = useFetch('https://api.example.com/data');

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return (
            <div>
                {data && <p>Data: {data.value}</p>}
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are custom Hooks in React?**
        *   **A:** Functions that allow you to extract component logic into reusable functions.

    *   **Q: What are the benefits of using custom Hooks?**
        *   **A:** Code reuse, separation of concerns, improved readability, easier testing.

    *   **Q: What are the rules for creating custom Hooks?**
        *   **A:** The name must start with "use", and they can call other Hooks.

    *   **Q: Can custom Hooks be used in class components?**
        *   **A:** No, custom Hooks can only be used in functional components.

### 2.6 Batched Updates

*   **Explanation:** React batches multiple state updates into a single re-render cycle to improve performance. This means that if you call `setState` multiple times within the same event handler, React will only re-render the component once after all the updates have been processed.

*   **Real-time Example:** Updating multiple state variables in response to a single user event (e.g., updating the x and y coordinates of a mouse position).

*   **Code Example:**

    ```javascript
    import React, { useState } from 'react';

    function MyComponent() {
        const [count1, setCount1] = useState(0);
        const [count2, setCount2] = useState(0);

        const handleClick = () => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
        };

        return (
            <div>
                <p>Count 1: {count1}</p>
                <p>Count 2: {count2}</p>
                <button onClick={handleClick}>Increment Both</button>
            </div>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What are batched updates in React?**
        *   **A:** React batches multiple state updates into a single re-render cycle.

    *   **Q: Why does React batch updates?**
        *   **A:** To improve performance by reducing the number of re-renders.

---
## 3. Server-Side Rendering (SSR) & Static Site Generation (SSG)

### 3.1 SSR with Next.js

*   **Explanation:** Server-Side Rendering (SSR) involves rendering React components on the server and sending the fully rendered HTML to the client's browser.  This improves initial load time, SEO (search engine optimization), and accessibility, especially for content-heavy applications. Next.js is a popular React framework that simplifies SSR.

*   **Real-time Example:**  An e-commerce website where search engine crawlers need to be able to easily index product pages. SSR ensures that the HTML content is readily available for crawlers.

*   **Key Concepts (Next.js):**
    *   `getServerSideProps`: Function that fetches data on each request.
    *   `getStaticProps`: Function that fetches data at build time.
    *   `pages` directory:  Files in the `pages` directory automatically become routes.

*   **Code Example (Next.js):**

    ```javascript
    // pages/index.js
    function HomePage({ data }) {
        return (
            <div>
                <h1>Welcome</h1>
                <p>Data: {data}</p>
            </div>
        );
    }

    export async function getServerSideProps(context) {
        const res = await fetch('https://api.example.com/data');
        const data = await res.text();

        return {
            props: {
                data,
            },
        };
    }

    export default HomePage;
    ```

*   **Interview Q&A:**

    *   **Q: What is Server-Side Rendering (SSR)?**
        *   **A:** Rendering React components on the server and sending the fully rendered HTML to the client's browser.

    *   **Q: What are the benefits of SSR?**
        *   **A:** Improved initial load time, SEO, accessibility, and better performance on devices with limited resources.

    *   **Q: What is Next.js?**
        *   **A:** A React framework that simplifies SSR and provides other features like routing and API routes.

    *   **Q: What is `getServerSideProps` in Next.js?**
        *   **A:** A function that fetches data on each request and passes it as props to the page component.

### 3.2 SSG with Gatsby or Next.js

*   **Explanation:** Static Site Generation (SSG) involves generating the HTML content for your website at build time. This results in extremely fast load times and excellent SEO. Gatsby and Next.js are popular frameworks for SSG.

*   **Real-time Example:** A blog or documentation website where content is updated relatively infrequently. SSG allows you to pre-render all pages and serve them directly from a CDN.

*   **Key Concepts:**
    *   Data fetching at build time.
    *   Generating HTML files for each route.
    *   Deploying static files to a CDN.

*   **Code Example (Next.js):**

    ```javascript
    // pages/posts/[id].js
    function Post({ post }) {
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        );
    }

    export async function getStaticPaths() {
        const res = await fetch('https://api.example.com/posts');
        const posts = await res.json();

        const paths = posts.map((post) => ({
            params: { id: post.id.toString() },
        }));

        return { paths, fallback: false };
    }

    export async function getStaticProps({ params }) {
        const res = await fetch(`https://api.example.com/posts/${params.id}`);
        const post = await res.json();

        return {
            props: {
                post,
            },
        };
    }

    export default Post;
    ```

*   **Interview Q&A:**

    *   **Q: What is Static Site Generation (SSG)?**
        *   **A:** Generating the HTML content for your website at build time.

    *   **Q: What are the benefits of SSG?**
        *   **A:** Extremely fast load times, excellent SEO, improved security.

    *   **Q: What is `getStaticProps` in Next.js?**
        *   **A:** A function that fetches data at build time and passes it as props to the page component.

    *   **Q: What is `getStaticPaths` in Next.js?**
        *   **A:** A function that defines the paths for which static pages should be generated.

### 3.3 Hydration

*   **Explanation:** Hydration is the process of making the static HTML generated by SSR or SSG interactive. After the browser receives the HTML, React "hydrates" the application by attaching event listeners and connecting the HTML to the React component tree.

*   **Real-time Example:**  A website that uses SSR to improve initial load time.  Once the HTML is loaded, React hydrates the application, allowing users to interact with buttons, forms, and other dynamic elements.

*   **Key Concepts:**
    *   Attaching event listeners to the static HTML.
    *   Connecting the HTML to the React component tree.
    *   Ensuring that the client-side and server-side rendering match.

*   **Interview Q&A:**

    *   **Q: What is hydration in React?**
        *   **A:** The process of making the static HTML generated by SSR or SSG interactive.

    *   **Q: What are the challenges of hydration?**
        *   **A:** Ensuring that the client-side and server-side rendering match, handling differences in the environment (e.g., browser vs. server).

    *   **Q: What are some strategies for improving hydration performance?**
        *   **A:** Lazy loading components, using `useEffect` to delay client-side logic, optimizing the initial render.

---

## 4. Concurrency & Performance

### 4.1 Concurrent Mode

*   **Explanation:** Concurrent Mode is a set of new features in React that help improve the responsiveness and performance of your application. It allows React to interrupt, pause, resume, or abandon rendering tasks as needed.

*   **Key Features:**
    *   Interruptible rendering: React can pause and resume rendering tasks to keep the UI responsive.
    *   Suspense for data fetching: Allows you to display a fallback UI while data is loading.
    *   Transitions: Helps prioritize UI updates to provide a smoother user experience.

*   **Interview Q&A:**
    *   **Q: What is Concurrent Mode in React?**
        *   **A:**  A set of features that allow React to interrupt, pause, resume, or abandon rendering tasks.
    *   **Q: What problems does Concurrent Mode solve?**
        *   **A:** Improves responsiveness and performance, especially for complex UIs and slow networks.
    *   **Q: What are the benefits of interruptible rendering?**
        *   **A:** Keeps the UI responsive by allowing React to prioritize user interactions.
    *   **Q: What is the role of Suspense in Concurrent Mode?**
        *   **A:** Allows you to display a fallback UI while data is loading, improving the user experience.

### 4.2 Suspense for Data Fetching

*   **Explanation:** Suspense is a React component that lets you "suspend" the rendering of a component tree until some data is available.  It allows you to display a fallback UI (e.g., a loading spinner) while data is being fetched. This integrates well with Concurrent Mode.

*   **Code Example:**

    ```javascript
    import React, { Suspense } from 'react';

    // Assume `fetchData` returns a Promise that resolves with the data
    const resource = fetchData('https://api.example.com/data');

    function MyComponent() {
        const data = resource.read(); // Throws a Promise if data is not yet available
        return <p>Data: {data}</p>;
    }

    function App() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent />
            </Suspense>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is Suspense in React?**
        *   **A:** A component that lets you suspend the rendering of a component tree until some data is available.
    *   **Q: What is the purpose of Suspense?**
        *   **A:** To improve the user experience by displaying a fallback UI while data is loading.
    *   **Q: How does Suspense work?**
        *   **A:** It relies on resources that can "suspend" rendering if the data is not yet available.
    *   **Q: What kind of resources can be used with Suspense?**
        *   **A:**  Data fetching libraries that support Suspense (e.g., Relay, experimental data fetching APIs).

### 4.3 React Fiber Architecture

*   **Explanation:** React Fiber is the new reconciliation engine in React 16. It's a complete rewrite of the previous reconciliation algorithm and enables features like Concurrent Mode. The key idea behind Fiber is to break down rendering into smaller, interruptible units of work.

*   **Key Concepts:**
    *   Fiber nodes:  Represent individual components or DOM elements.
    *   Work in progress tree:  The tree being built during rendering.
    *   Scheduler:  Prioritizes and schedules rendering tasks.

*   **Interview Q&A:**

    *   **Q: What is React Fiber?**
        *   **A:** The new reconciliation engine in React 16.
    *   **Q: What problem does React Fiber solve?**
        *   **A:**  Improves responsiveness and enables Concurrent Mode by allowing React to interrupt and resume rendering tasks.
    *   **Q: How does React Fiber work?**
        *   **A:**  By breaking down rendering into smaller, interruptible units of work.

### 4.4 DevTools & Performance Optimization

*   **Explanation:** The React DevTools browser extension is an essential tool for debugging and profiling React applications. It allows you to inspect the component tree, examine props and state, and measure performance.

*   **Key Optimization Techniques:**
    *   Using `React.memo` to prevent unnecessary re-renders of functional components.
    *   Using `useMemo` and `useCallback` to memoize expensive calculations and function references.
    *   Code splitting and lazy loading.
    *   Avoiding unnecessary state updates.
    *   Using shouldComponentUpdate (in class components) to prevent re-renders.

*   **Interview Q&A:**

    *   **Q: What are React DevTools?**
        *   **A:** A browser extension for debugging and profiling React applications.
    *   **Q: How can you use React DevTools to improve performance?**
        *   **A:** By identifying components that are re-rendering unnecessarily.
    *   **Q: What is `React.memo`?**
        *   **A:** A higher-order component that memoizes functional components to prevent unnecessary re-renders.
    *   **Q: What are `useMemo` and `useCallback`?**
        *   **A:** Hooks that memoize expensive calculations and function references, respectively.

### 4.5 Lazy Initialization with `useState`

*   **Explanation:** When initializing state with `useState`, you can pass a function instead of a direct value.  This function will only be executed once, during the initial render. This is useful for expensive initial state calculations.

*   **Code Example:**

    ```javascript
    import React, { useState } from 'react';

    function MyComponent() {
        const [data, setData] = useState(() => {
            // This function will only run once during the initial render
            console.log('Expensive initial state calculation');
            return someExpensiveCalculation();
        });

        return <p>Data: {data}</p>;
    }
    ```

*   **Interview Q&A:**
    *   **Q: How can you avoid expensive calculations when initializing state with `useState`?**
        *   **A:** By passing a function to `useState` instead of a direct value.  This function will only be executed once, during the initial render.

---

## 5. Architectural Patterns & Frameworks

### 5.1 Compound Components Pattern

*   **Explanation:** The Compound Components pattern is a way to create components that implicitly share state and behavior. It involves a parent component that manages the state and a set of child components that use that state.  The child components usually don't work independently.

*   **Real-time Example:** A `Tabs` component where the parent component manages the active tab and the child `Tab` components display the content for each tab.

*   **Code Example:**

    ```javascript
    import React, { useState, createContext, useContext } from 'react';

    const TabsContext = createContext();

    function Tabs({ children }) {
        const [activeTab, setActiveTab] = useState(0);

        const value = {
            activeTab,
            setActiveTab,
        };

        return (
            <TabsContext.Provider value={value}>
                <div>{children}</div>
            </TabsContext.Provider>
        );
    }

    function Tab({ index, children }) {
        const { activeTab, setActiveTab } = useContext(TabsContext);

        return (
            <div style={{ display: activeTab === index ? 'block' : 'none' }}>
                {children}
            </div>
        );
    }

    function TabList({ children }) {
        const { activeTab, setActiveTab } = useContext(TabsContext);
        return (<div>{children}</div>);
    }

    function TabButton({ index, children }) {
        const { activeTab, setActiveTab } = useContext(TabsContext);
        return (<button onClick={() => setActiveTab(index)}>{children}</button>);
    }

    function App() {
        return (
            <Tabs>
                <TabList>
                    <TabButton index={0}>Tab 1</TabButton>
                    <TabButton index={1}>Tab 2</TabButton>
                </TabList>

                <Tab index={0}>
                    <p>Content for Tab 1</p>
                </Tab>
                <Tab index={1}>
                    <p>Content for Tab 2</p>
                </Tab>
            </Tabs>
        );
    }
    ```

*   **Interview Q&A:**

    *   **Q: What is the Compound Components pattern?**
        *   **A:** A way to create components that implicitly share state and behavior.
    *   **Q: What are the benefits of using the Compound Components pattern?**
        *   **A:** Improved code organization, easier to create complex UI components, more flexible and reusable components.
    *   **Q: What are the drawbacks of using the Compound Components pattern?**
        *   **A:** Can make code more complex, requires careful planning.

### 5.2 Meta Frameworks: Next.js & Remix

(We've already covered Next.js in SSR/SSG. Add details about Remix if needed)

*   **Remix:**
    *   Focuses on web standards, progressive enhancement, and server-side rendering.
    *   Provides a data loading and mutation API that integrates seamlessly with React.
    *   Encourages building resilient and performant web applications.

### 5.3 Progressive Web Apps (PWAs) with React

*   **Explanation:** Progressive Web Apps (PWAs) are web applications that provide a native app-like experience to users. They can be installed on the user's device, work offline, and send push notifications.

*   **Key Components:**
    *   Service Worker: A script that runs in the background and handles caching, push notifications, and other background tasks.
    *   Manifest file: A JSON file that provides information about the PWA, such as its name, icon, and start URL.
    *   HTTPS: PWAs must be served over HTTPS for security reasons.

*   **Tools:**
    *   `create-react-app` with the `serviceWorker.register()` call.
    *   Workbox:  A library for creating and managing service workers.

*   **Interview Q&A:**

    *   **Q: What is a Progressive Web App (PWA)?**
        *   **A:** A web application that provides a native app-like experience to users.
    *   **Q: What are the benefits of PWAs?**
        *   **A:** Installable, work offline, send push notifications, fast loading times, improved user engagement.
    *   **Q: What are the key components of a PWA?**
        *   **A:** Service worker, manifest file, HTTPS.
    *   **Q: What is a service worker?**
        *   **A:** A script that runs in the background and handles caching, push notifications, and other background tasks.

### 5.4 Micro Frontends with React

*   **Explanation:** Micro frontends are an architectural pattern where a frontend application is broken down into smaller, independent applications that can be developed, deployed, and maintained by different teams. Each micro frontend can use its own technology stack, including React.

*   **Key Concepts:**
    *   Independent teams:  Each team owns and maintains a specific micro frontend.
    *   Technology diversity:  Each micro frontend can use its own technology stack.
    *   Independent deployment:  Each micro frontend can be deployed independently.

*   **Techniques:**
    *   Build-time integration:  Micro frontends are built and integrated at build time.
    *   Run-time integration:  Micro frontends are loaded and integrated at run time.
        *   JavaScript-based routing (e.g., using a library to dynamically load micro frontends).
        *   Web Components.
        *   IFrames.

*   **Interview Q&A:**

    *   **Q: What are micro frontends?**
        *   **A:** An architectural pattern where a frontend application is broken down into smaller, independent applications.
    *   **Q: What are the benefits of using micro frontends?**
        *   **A:** Independent teams, technology diversity, independent deployment, improved scalability.
    *   **Q: What are some challenges of using micro frontends?**
        *   **A:** Increased complexity, communication overhead, potential performance issues.
    *   **Q: What are some techniques for integrating micro frontends?**
        *   **A:** Build-time integration, run-time integration (JavaScript-based routing, Web Components, IFrames).

---

## 6. State Management

### 6.1 Reactivity in React (Derived State)

*   **Explanation:** Reactivity refers to how automatically the UI updates in response to changes in data. Derived state is state that can be calculated or derived from existing state or props. It's important to manage derived state correctly to avoid performance issues and unnecessary re-renders.

*   **Code Example:**

    ```javascript
    import React, { useState, useMemo } from 'react';

    function MyComponent({ items }) {
        const [filter, setFilter] = useState('');

        // Calculate the filtered items using useMemo
        const filteredItems = useMemo(() => {
            console.log('Filtering items...'); // This will only run when items or filter changes
            return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        }, [items, filter]);

        return (
            <div>
                <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
    ```

*   **Interview Q&A:**
        *   **Q: What is derived state in React?**
            *   **A:** State that can be calculated or derived from existing state or props.
        *   **Q: How can you efficiently manage derived state in React?**
            *   **A:** Using `useMemo` to memoize the calculation of derived state.  Using libraries like Reselect for more complex scenarios.
        *   **Q: Why is it important to manage derived state correctly?**
            *   **A:** To avoid performance issues and unnecessary re-renders.

### 6.2 Redux & Redux Toolkit

*   **Explanation:** Redux is a popular state management library for React applications. It provides a centralized store for managing application state and a predictable way to update that state. Redux Toolkit simplifies Redux development by providing a set of utilities for common tasks, such as creating reducers, actions, and selectors.

*   **Key Concepts:**
    *   Store:  A single source of truth for the application state.
    *   Actions:  Plain JavaScript objects that describe an event that occurred in the application.
    *   Reducers:  Functions that specify how the state should be updated in response to an action.
    *   Selectors: Functions that extract data from the store.

*   **Redux Toolkit:**
    *   `configureStore`: Simplifies store creation.
    *   `createSlice`: Simplifies reducer and action creation.
    *   `createAsyncThunk`: Simplifies asynchronous action creation.

*   **Interview Q&A:**

    *   **Q: What is Redux?**
        *   **A:** A state management library for React applications.
    *   **Q: What are the key concepts in Redux?**
        *   **A:** Store, actions, reducers, selectors.
    *   **Q: What is the purpose of the Redux store?**
        *   **A:** To provide a single source of truth for the application state.
    *   **Q: What is the purpose of Redux actions?**
        *   **A:** To describe an event that occurred in the application.
    *   **Q: What is the purpose of Redux reducers?**
        *   **A:** To specify how the state should be updated in response to an action.
    *   **Q: What is Redux Toolkit?**
        *   **A:** A set of utilities that simplify Redux development.

---

## 7. Accessibility & Testing

### 7.1 Accessibility in React (ARIA & Screen Readers)

*   **Explanation:** Accessibility (a11y) is the practice of making web applications usable by people with disabilities.  In React, this involves using semantic HTML, ARIA attributes, and providing appropriate labels and descriptions for interactive elements. Screen readers are software applications that allow people with visual impairments to access digital content.

*   **Key Concepts:**
    *   Semantic HTML:  Using HTML elements that convey the meaning and structure of the content (e.g., `<article>`, `<nav>`, `<aside>`).
    *   ARIA attributes:  Adding attributes to HTML elements to provide additional information to screen readers (e.g., `aria-label`, `aria-describedby`, `aria-hidden`).
    *   Keyboard accessibility:  Ensuring that all interactive elements can be accessed and operated using the keyboard.
    *   Color contrast:  Ensuring that there is sufficient contrast between text and background colors.

*   **Tools:**
    *   Lighthouse:  A tool that audits web pages for accessibility issues.
    *   React Axe:  A library that automatically detects accessibility issues in React components.

*   **Interview Q&A:**
    *   **Q: What is accessibility (a11y)?**
        *   **A:** The practice of making web applications usable by people with disabilities.
    *   **Q: Why is accessibility important?**
        *   **A:** To ensure that everyone can access and use web applications, regardless of their abilities.
    *   **Q: What are some key concepts in React accessibility?**
        *   **A:** Semantic HTML, ARIA attributes, keyboard accessibility, color contrast.
    *   **Q: What are ARIA attributes?**
        *   **A:** Attributes that provide additional information to screen readers.

### 7.2 Testing in React (Jest & React Testing Library)

*   **Explanation:** Testing is an essential part of developing robust and maintainable React applications. Jest is a popular JavaScript testing framework, and React Testing Library is a library that provides utilities for testing React components in a user-centric way.

*   **Types of Tests:**
    *   Unit tests:  Test individual components or functions in isolation.
    *   Integration tests:  Test the interaction between multiple components.
    *   End-to-end tests: Test the entire application from the user's perspective.

*   **React Testing Library Principles:**
    *   Write tests that resemble how users interact with the application.
    *   Focus on testing the behavior of components, not their implementation details.

*   **Code Example:**

    ```javascript
    // MyComponent.js
    import React from 'react';

    function MyComponent({ message }) {
        return <p>{message}</p>;
    }

    export default MyComponent;

    // MyComponent.test.js
    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import MyComponent from './MyComponent';

    test('renders the message prop', () => {
        render(<MyComponent message="Hello, world!" />);
        const messageElement = screen.getByText('Hello, world!');
        expect(messageElement).toBeInTheDocument();
    });
    ```

*   **Interview Q&A:**

    *   **Q: Why is testing important in React development?**
        *   **A:** To ensure that the application works correctly, to prevent regressions, and to make the code more maintainable.
    *   **Q: What are some different types of tests you can write for React applications?**
        *   **A:** Unit tests, integration tests, end-to-end tests.
    *   **Q: What is Jest?**
        *   **A:** A popular JavaScript testing framework.
    *   **Q: What is React Testing Library?**
        *   **A:** A library that provides utilities for testing React components in a user-centric way.
    *   **Q: What are some key principles of React Testing Library?**
        *   **A:** Write tests that resemble how users interact with the application, focus on testing the behavior of components.

---

## 8. Styling & Animations

### 8.1 Animations in React

*   **Explanation:** Animations can enhance the user experience by making your React applications more engaging and visually appealing. There are several ways to implement animations in React.

*   **Techniques:**
    *   CSS Transitions:  Simple animations that transition between two states.
    *   CSS Animations:  More complex animations that define keyframes.
    *   React Transition Group:  A library for managing component transitions (e.g., mounting and unmounting).
    *   Framer Motion:  A powerful library for creating complex and interactive animations.
    *   GSAP (GreenSock Animation Platform): A professional-grade animation library offering precise control and performance.

*   **Interview Q&A:**

    *   **Q: Why use animations in web development?**
        *   **A:** Improve user experience, create visual feedback, make the interface more intuitive, guide the user's attention.
    *   **Q: List animation techniques in React.**
        *   **A:** CSS Transitions, CSS Animations, React Transition Group, Framer Motion.
    *   **Q: When should you use React Transition Group?**
        *   **A:** For managing the animations of components as they mount and unmount.
    *   **Q: Where Framer Motion fits in?**
        *   **A:** Handles complex and interactive animations with simple API.

---

---
## 9. Interview Questions & Answers

This section contains a comprehensive set of interview questions and answers covering various React concepts and techniques.  Use these to prepare for your React interviews and solidify your understanding of the material.

### General React Questions

*   **Q: What is React?**
    *   **A:** (Provide a concise definition: A JavaScript library for building user interfaces, focusing on components and declarative programming.)
*   **Q: What are the main features of React?**
    *   **A:** (List key features: Component-based architecture, JSX, virtual DOM, one-way data binding, declarative approach.)
*   **Q: What are the advantages of using React?**
    *   **A:** (Discuss benefits: Reusability, maintainability, performance, SEO friendliness (with SSR), large community.)
*   **Q: What is JSX?**
    *   **A:** (Explain JSX: A syntax extension to JavaScript that allows writing HTML-like structures in your JavaScript code.)
*   **Q: How does JSX get transformed into JavaScript?**
    *   **A:** (Describe the transformation process: Using tools like Babel to transpile JSX into regular JavaScript function calls.)
*   **Q: What is the Virtual DOM?**
    *   **A:** (Explain Virtual DOM: A lightweight, in-memory representation of the real DOM that allows React to optimize updates.)
*   **Q: How does the Virtual DOM improve performance?**
    *   **A:** (Describe the process: By minimizing direct manipulations to the real DOM. React batches updates and applies only the necessary changes.)
*   **Q: What is the reconciliation process in React?**
    *   **A:** (Explain reconciliation: Comparing the new and previous Virtual DOM trees to determine the minimal set of changes needed in the real DOM.)
*   **Q: What are components in React?**
    *   **A:** (Explain components: Reusable UI elements that encapsulate their own logic and rendering.)
*   **Q: What are the differences between functional and class components?**
    *   **A:** (Compare functional and class components: Functional components are simpler, use hooks for state and lifecycle, and are generally preferred. Class components use class syntax, require `render()` method, and use `this` keyword.)
*   **Q: What are props?**
    *   **A:** (Explain props: Data passed from a parent component to a child component.)
*   **Q: Can a child component modify its props?**
    *   **A:** (State that props are read-only from the child's perspective.)
*   **Q: What is state in React?**
    *   **A:** (Explain state: Data that a component manages internally, triggering re-renders when updated.)
*   **Q: How do you update the state in a functional component?**
    *   **A:** (Explain `useState`: Using the `useState` hook and its updater function (e.g., `setCount`).)
*   **Q: What are React Hooks?**
    *   **A:** (Explain Hooks: Functions that allow you to use state and other React features in functional components.)
*   **Q: What are some common built-in Hooks?**
    *   **A:** (List common Hooks: `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, `useRef`.)
*   **Q: What are the rules of Hooks?**
    *   **A:** (Explain the rules: Only call Hooks at the top level of a React function.  Don't call Hooks inside loops, conditions, or nested functions. Only call Hooks from React function components or custom Hooks.)
*   **Q: What is `useEffect`?**
    *   **A:** (Explain `useEffect`: A Hook that allows you to perform side effects in functional components.)
*   **Q: What are some common use cases for `useEffect`?**
    *   **A:** (List use cases: Fetching data, setting up subscriptions, manually changing the DOM.)
*   **Q: What is the dependency array in `useEffect`?**
    *   **A:** (Explain the dependency array: An array of values that `useEffect` depends on. The effect will only run if one of these values changes.)
*   **Q: What happens if you omit the dependency array in `useEffect`?**
    *   **A:** (Explain the behavior: The effect will run after every render.)
*   **Q: What is `useContext`?**
    *   **A:** (Explain `useContext`: A Hook that allows you to access the value of a Context.)
*   **Q: What is the Context API?**
    *   **A:** (Explain Context API: A way to share data between components without explicitly passing props through every level of the component tree.)
*   **Q: What are refs in React?**
    *   **A:** (Explain refs: A way to access the underlying DOM node or a React element.)
*   **Q: What are some use cases for refs?**
    *   **A:** (List use cases: Managing focus, text selection, triggering imperative animations, integrating with third-party DOM libraries.)
*   **Q: What are error boundaries in React?**
    *   **A:** (Explain error boundaries: React components that catch JavaScript errors in their child component tree and display a fallback UI.)
*   **Q: How do you create an error boundary?**
    *   **A:** (Describe the implementation: By creating a class component that implements `static getDerivedStateFromError()` and `componentDidCatch()`.)
*   **Q: What are React portals?**
    *   **A:** (Explain portals: A way to render a child component into a different part of the DOM tree.)
*   **Q: What are some use cases for portals?**
    *   **A:** (List use cases: Modals, tooltips, notifications.)

### Component-Related Questions

*   **Q: What is component composition?**
    *   **A:** (Explain component composition: The practice of building complex UIs by combining smaller, reusable components.)
*   **Q: What are the benefits of using component composition?**
    *   **A:** (Discuss benefits: Reusability, maintainability, flexibility.)
*   **Q: What is prop drilling?**
    *   **A:** (Explain prop drilling: Passing props down through multiple levels of the component tree unnecessarily.)
*   **Q: What are some alternatives to prop drilling?**
    *   **A:** (List alternatives: Context API, Redux (or other state management libraries), Component Composition.)
*   **Q: What is state lifting?**
    *   **A:** (Explain state lifting: Moving state up to a common ancestor component to share it with multiple children.)
*   **Q: When should you use state lifting?**
    *   **A:** (Explain the scenario: When multiple components need to share and update the same state.)
*   **Q: What is a higher-order component (HOC)?**
    *   **A:** (Explain HOC: A function that takes a component as an argument and returns a new, enhanced component.)
*   **Q: What are the benefits of using HOCs?**
    *   **A:** (Discuss benefits: Code reuse, separation of concerns, adding functionality to multiple components.)
*   **Q: What are some drawbacks of HOCs?**
    *   **A:** (List drawbacks: Can make debugging more difficult, can lead to prop name collisions, can increase component complexity.)
*   **Q: What is a render prop?**
    *   **A:** (Explain render prop: A function prop that a component uses to render something.)
*   **Q: What are the benefits of using render props?**
    *   **A:** (Discuss benefits: Code reuse, flexibility in rendering logic, separation of concerns.)
*   **Q: What are some drawbacks of render props?**
    *   **A:** (List drawbacks: Can make code more verbose, can be confusing to read.)
*   **Q: What is the Compound Components pattern?**
    *   **A:** (Explain Compound Components:  A pattern where components implicitly share states and behavior, requires parent component that manages states)

### Hook-Related Questions

*   **Q: What is a custom Hook?**
    *   **A:** (Explain custom Hooks: Functions that allow you to extract component logic into reusable functions.)
*   **Q: What are the benefits of using custom Hooks?**
    *   **A:** (Discuss benefits: Code reuse, separation of concerns, improved readability, easier testing.)
*   **Q: What are the rules for creating custom Hooks?**
    *   **A:** (Explain the rules: The name must start with "use", and they can call other Hooks.)
*   **Q: Can custom Hooks be used in class components?**
    *   **A:** (State that custom Hooks can only be used in functional components.)
*   **Q: How do you manage side effects in functional components?**
    *   **A:** (Explain `useEffect`: Using the `useEffect` Hook.)
*   **Q: What is the purpose of the dependency array in `useEffect`?**
    *   **A:** (Explain dependency array: To control when the effect runs.)
*   **Q: How can you prevent unnecessary re-renders in functional components?**
    *   **A:** (Explain `React.memo`: By using `React.memo` to memoize the component.)
*   **Q: What is `useMemo`?**
    *   **A:** (Explain `useMemo`: A Hook that memoizes the result of an expensive calculation.)
*   **Q: What is `useCallback`?**
    *   **A:** (Explain `useCallback`: A Hook that memoizes a function reference.)

### State Management Questions

*   **Q: What is the Context API?**
    *   **A:** (Explain Context API: A way to share data between components without explicitly passing props.)
*   **Q: What are the key parts of the Context API?**
    *   **A:** (List key parts: `createContext`, `Provider`, and `useContext`.)
*   **Q: When should you use the Context API?**
    *   **A:** (Explain use cases: For data that needs to be accessible by many components within an application.)
*   **Q: What is Redux?**
    *   **A:** (Explain Redux: A state management library for React applications.)
*   **Q: What are the key concepts in Redux?**
    *   **A:** (List key concepts: Store, actions, reducers, selectors.)
*   **Q: What is the purpose of the Redux store?**
    *   **A:** (Explain the store: To provide a single source of truth for the application state.)
*   **Q: What is the purpose of Redux actions?**
    *   **A:** (Explain actions: To describe an event that occurred in the application.)
*   **Q: What is the purpose of Redux reducers?**
    *   **A:** (Explain reducers: To specify how the state should be updated in response to an action.)
*   **Q: What is Redux Toolkit?**
    *   **A:** (Explain Redux Toolkit: A set of utilities that simplify Redux development.)
*   **Q: What are some benefits of using Redux Toolkit?**
    *   **A:** (List benefits: Simplifies store creation, reducer and action creation, and asynchronous action creation.)
*   **Q: What are the alternatives to Redux?**
    *   **A:** (List alternatives: Context API, Zustand, MobX, Recoil.)

### Performance Optimization Questions

*   **Q: How can you optimize the performance of a React application?**
    *   **A:** (List optimization techniques: Code splitting, lazy loading, memoization, avoiding unnecessary state updates, using shouldComponentUpdate (in class components), using the React Profiler.)
*   **Q: What is code splitting?**
    *   **A:** (Explain code splitting: Breaking down your application's code into smaller chunks that can be loaded on demand.)
*   **Q: What is lazy loading?**
    *   **A:** (Explain lazy loading: Loading components or modules only when they are needed.)
*   **Q: How can you implement code splitting in React?**
    *   **A:** (Describe implementation: Using `React.lazy` and `Suspense`, dynamic imports, route-based code splitting with React Router.)
*   **Q: What is memoization?**
    *   **A:** (Explain memoization: Caching the results of expensive function calls and returning the cached result when the same inputs occur again.)
*   **Q: How can you memoize components in React?**
    *   **A:** (Explain `React.memo`: By using `React.memo` for functional components or `shouldComponentUpdate` for class components.)
*   **Q: What are `useMemo` and `useCallback`?**
    *   **A:** (Explain the Hooks: `useMemo` memoizes the result of a calculation, `useCallback` memoizes a function reference.)
*   **Q: What is the purpose of `shouldComponentUpdate` in class components?**
    *   **A:** (Explain `shouldComponentUpdate`: To prevent unnecessary re-renders.)
*   **Q: How can you use the React Profiler to identify performance issues?**
    *   **A:** (Describe the process: Using the React Profiler in the React DevTools to record performance data and identify components that are taking a long time to render.)
*   **Q: What are batched updates in React?**
        *   **A:** (Explain batched updates: React batches multiple state updates into a single re-render cycle)

### SSR/SSG Questions

*   **Q: What is Server-Side Rendering (SSR)?**
    *   **A:** (Explain SSR: Rendering React components on the server and sending the fully rendered HTML to the client's browser.)
*   **Q: What are the benefits of SSR?**
    *   **A:** (List benefits: Improved initial load time, SEO, accessibility, and better performance on devices with limited resources.)
*   **Q: What is Next.js?**
    *   **A:** (Explain Next.js: A React framework that simplifies SSR and provides other features like routing and API routes.)
*   **Q: What is `getServerSideProps` in Next.js?**
    *   **A:** (Explain `getServerSideProps`: A function that fetches data on each request and passes it as props to the page component.)
*   **Q: What is Static Site Generation (SSG)?**
    *   **A:** (Explain SSG: Generating the HTML content for your website at build time.)
*   **Q: What are the benefits of SSG?**
    *   **A:** (List benefits: Extremely fast load times, excellent SEO, improved security.)
*   **Q: What is `getStaticProps` in Next.js?**
    *   **A:** (Explain `getStaticProps`: A function that fetches data at build time and passes it as props to the page component.)
*   **Q: What is `getStaticPaths` in Next.js?**
    *   **A:** (Explain `getStaticPaths`: A function that defines the paths for which static pages should be generated.)
*   **Q: What is hydration in React?**
    *   **A:** (Explain hydration: The process of making the static HTML generated by SSR or SSG interactive.)

### Testing Questions

*   **Q: Why is testing important in React development?**
    *   **A:** (Explain importance: To ensure that the application works correctly, to prevent regressions, and to make the code more maintainable.)
*   **Q: What are some different types of tests you can write for React applications?**
    *   **A:** (List types: Unit tests, integration tests, end-to-end tests.)
*   **Q: What is Jest?**
    *   **A:** (Explain Jest: A popular JavaScript testing framework.)
*   **Q: What is React Testing Library?**
    *   **A:** (Explain React Testing Library: A library that provides utilities for testing React components in a user-centric way.)
*   **Q: What are some key principles of React Testing Library?**
    *   **A:** (List principles: Write tests that resemble how users interact with the application, focus on testing the behavior of components.)
*   **Q: How do you test asynchronous code in React?**
    *   **A:** (Explain testing asynchronous code: Using `async/await` and `waitFor` from React Testing Library.)

### Accessibility Questions

*   **Q: What is accessibility (a11y)?**
    *   **A:** (Explain accessibility: The practice of making web applications usable by people with disabilities.)
*   **Q: Why is accessibility important?**
    *   **A:** (Explain the importance: To ensure that everyone can access and use web applications, regardless of their abilities.)
*   **Q: What are some key concepts in React accessibility?**
    *   **A:** (List key concepts: Semantic HTML, ARIA attributes, keyboard accessibility, color contrast.)
*   **Q: What are ARIA attributes?**
    *   **A:** (Explain ARIA attributes: Attributes that provide additional information to screen readers.)
*   **Q: What are some common ARIA attributes?**
    *   **A:** (List common attributes: `aria-label`, `aria-describedby`, `aria-hidden`, `aria-live`.)
*   **Q: How can you ensure that your React application is keyboard accessible?**
    *   **A:** (Explain keyboard accessibility: Making sure that all interactive elements can be accessed and operated using the keyboard.)
*   **Q: How can you test the accessibility of your React application?**
    *   **A:** (List testing methods: Using tools like Lighthouse and React Axe, manually testing with a screen reader.)

### Advanced Concept Questions

*   **Q: What is Concurrent Mode in React?**
    *   **A:** (Explain Concurrent Mode: A set of features that allow React to interrupt, pause, resume, or abandon rendering tasks.)
*   **Q: What problems does Concurrent Mode solve?**
    *   **A:** (List problems solved: Improves responsiveness and performance, especially for complex UIs and slow networks.)
*   **Q: What are the benefits of interruptible rendering?**
    *   **A:** (Explain benefits: Keeps the UI responsive by allowing React to prioritize user interactions.)
*   **Q: What is the role of Suspense in Concurrent Mode?**
    *   **A:** (Explain Suspense's role: Allows you to display a fallback UI while data is loading, improving the user experience.)
*   **Q: What is React Fiber?**
    *   **A:** (Explain React Fiber: The new reconciliation engine in React 16.)
*   **Q: What problem does React Fiber solve?**
    *   **A:** (Explain the problem solved: Improves responsiveness and enables Concurrent Mode by allowing React to interrupt and resume rendering tasks.)
*   **Q: What are micro frontends?**
    *   **A:** (Explain micro frontends: An architectural pattern where a frontend application is broken down into smaller, independent applications.)
*   **Q: What are the benefits of using micro frontends?**
    *   **A:** (List benefits: Independent teams, technology diversity, independent deployment, improved scalability.)
*   **Q: What are some challenges of using micro frontends?**
    *   **A:** (List challenges: Increased complexity, communication overhead, potential performance issues.)

---