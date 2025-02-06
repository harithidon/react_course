# react_course
Learning the React for Basic to Advance
# React Mastery Guide

This repository is a comprehensive guide to mastering React, covering essential concepts, interview questions, and practical examples.

## Table of Contents

1.  **Core Concepts:**
    *   [Components](#components)
    *   [JSX](#jsx)
    *   [State](#state)
    *   [Props](#props)
    *   [Reconciliations](#reconciliations)
    *   [Hooks](#hooks)
    *   [Virtual DOM](#virtual-dom)
    *   [Lifecycle Methods](#lifecycle-methods)
    *   [Refs](#refs)
    *   [Portals](#portals)
    *   [Error Boundaries](#error-boundaries)
    *   [Prop Drilling & State Lifting](#prop-drilling--state-lifting)
    *   [Context API](#context-api)
    *   [React Router](#react-router)
    *   [Keys](#keys)
    *   [Fragments](#fragments)
    *   [Higher-Order Components](#higher-order-components)
    *   [Render Props](#render-props)
2.  **Advanced Topics:**
    *   [Code Splitting & Lazy Loading](#code-splitting--lazy-loading)
    *   [Server-Side Rendering (SSR) & Static Site Generation (SSG)](#server-side-rendering-ssr--static-site-generation-ssg)
    *   [Hydration](#hydration)
    *   [Concurrent Mode](#concurrent-mode)
    *   [Suspense for Data Fetching](#suspense-for-data-fetching)
    *   [React Fiber](#react-fiber)
    *   [Custom Hooks](#custom-hooks)
    *   [Batched Updates](#batched-updates)
    *   [Strict Mode](#strict-mode)
    *   [DevTools & Performance Optimization](#devtools--performance-optimization)
    *   [Lazy Initialization with `useState`](#lazy-initialization-with-usestate)
    *   [Compound Components Pattern](#compound-components-pattern)
    *   [Web Workers in React](#web-workers-in-react)
    *   [Meta Frameworks (Next.js, Remix)](#meta-frameworks-nextjs-remix)
    *   [Reactivity in React (Derived State)](#reactivity-in-react-derived-state)
    *   [Progressive Web App (PWA) with React](#progressive-web-app-pwa-with-react)
    *   [Animations in React](#animations-in-react)
    *   [Redux & Redux Toolkit](#redux--redux-toolkit)
    *   [Accessibility in React (ARIA & Screen Readers)](#accessibility-in-react-aria--screen-readers)
    *   [Testing in React (Jest & React Testing Library)](#testing-in-react-jest--react-testing-library)
    *   [Micro Frontends with React](#micro-frontends-with-react)
3.  **Other Important Concepts:**
    *   [Modules](#modules)
    *   [Components](#components)
    *   [Templates and Data Binding](#templates-and-data-binding)
    *   [Directives](#directives)
    *   [Services and Dependency Injection](#services-and-dependency-injection)
    *   [Routing and Navigations](#routing-and-navigations)
    *   [Forms](#forms)
    *   [Pipes](#pipes)
    *   [Http Clients](#http-clients)
    *   [State Management](#state-management)
    *   [Lifecycle Hooks](#lifecycle-hooks)
    *   [Event Emitters](#event-emitters)
    *   [Testing](#testing)
    *   [Angular CLI](#angular-cli)
    *   [Performance Optimization](#performance-optimization)
    *   [Animations](#animations)
    *   [Observables and RxJS](#observables-and-rxjs)
    *   [Custom Elements](#custom-elements)
4.  **Contributing**

## 1. Core Concepts

### Components

*   **Explanation:** Components are the building blocks of React UIs. They are reusable, independent pieces of code that return HTML elements to be rendered in the browser.  React has functional components, which are JavaScript functions, and class components (less common in modern React), which are ES6 classes.

*   **Interview Questions:**
    *   What are the differences between functional and class components?
    *   What is a PureComponent?  When would you use it?
    *   How do you pass data from a parent component to a child component?

*   **Code Example:**

    ```jsx
    // Functional Component
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    // Class Component (Less common in modern React)
    class Greeting extends React.Component {
      render() {
        return <h1>Welcome, {this.props.name}!</h1>;
      }
    }

    function App() {
      return (
        <div>
          <Welcome name="Sarah" />
          <Greeting name="John" />
        </div>
      );
    }

    export default App;
    ```

### JSX

*   **Explanation:** JSX (JavaScript XML) is a syntax extension to JavaScript. It allows you to write HTML-like code within your JavaScript files, making component structures more readable and easier to maintain.

*   **Interview Questions:**
    *   What is JSX?
    *   How is JSX transformed into JavaScript?
    *   Can you use JavaScript expressions inside JSX?

*   **Code Example:**

    ```jsx
    const element = (
      <h1>
        Hello, JSX! {1 + 1} {/* JavaScript expression */}
      </h1>
    );

    function App() {
      const name = "Alice";
      return (
        <h1>
          Hello, {name}! {/* Embedding a variable */}
        </h1>
      );
    }

    export default App;
    ```

### State

*   **Explanation:** State is a JavaScript object that holds data that may change over time. When state changes, React re-renders the component to reflect the new data. In functional components, state is managed using the `useState` hook.

*   **Interview Questions:**
    *   What is state in React?
    *   How do you update state in a functional component?
    *   What is the purpose of `useState`?

*   **Code Example:**

    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0); // Initialize state with 0

      const increment = () => {
        setCount(count + 1);
      };

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }

    export default Counter;
    ```

### Props

*   **Explanation:** Props (short for "properties") are used to pass data from a parent component to a child component. Props are read-only within the child component.

*   **Interview Questions:**
    *   What are props in React?
    *   How do you pass data from a parent to a child component using props?
    *   Are props mutable?

*   **Code Example:**

    ```jsx
    function ChildComponent(props) {
      return <p>Hello, {props.name}!</p>;
    }

    function ParentComponent() {
      return <ChildComponent name="Bob" />;
    }

    export default ParentComponent;
    ```

### Reconciliations

*   **Explanation:** Reconciliation is the process React uses to update the DOM efficiently. When a component's state changes, React creates a new virtual DOM and compares it to the previous virtual DOM. It then identifies the minimal set of changes needed to update the real DOM.

*   **Interview Questions:**
    *   What is reconciliation in React?
    *   How does React optimize DOM updates?
    *   What is the virtual DOM?

*   **Code Example:**  (Demonstrating reconciliation is best done through profiling and observing updates, rather than a direct code example)

    Imagine this scenario:

    ```jsx
    function List({ items }) {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }
    ```

    If the `items` array changes, React will efficiently update only the list items that have changed, thanks to the `key` prop.  Keys help React identify which items have been added, removed, or updated.

### Hooks

*   **Explanation:** Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They were introduced in React 16.8 and provide a way to use state and other React features without writing classes.  Key hooks include `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, and `useMemo`.

*   **Interview Questions:**
    *   What are React Hooks?
    *   What are some common React Hooks?
    *   What are the rules of Hooks? (Must be called at the top level, must be called from React functions).
    *   How do you manage side effects in functional components?
    *   What is the difference between `useMemo` and `useCallback`?

*   **Code Example:**

    ```jsx
    import React, { useState, useEffect } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        // This effect runs after every render
        document.title = `You clicked ${count} times`;

        // Optional cleanup function (runs when component unmounts or before next effect)
        return () => {
          document.title = "React App"; // Reset title
        };
      }, [count]); // Only re-run the effect if count changes

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

    export default Example;
    ```

### Virtual DOM

*   **Explanation:** The Virtual DOM (VDOM) is a lightweight, in-memory representation of the actual DOM. React uses the VDOM to efficiently update the real DOM by comparing changes and only applying the necessary updates.

*   **Interview Questions:**
    *   What is the Virtual DOM?
    *   How does the Virtual DOM improve performance?
    *   How does React compare the Virtual DOM to the real DOM?

*   **Code Example:** (The Virtual DOM is an internal implementation detail of React.  You don't directly interact with it in your code, but understand its role).

    Imagine React maintaining two JavaScript objects that represent the DOM structure.  When state changes, React creates a *new* VDOM.  Then it diffs the old and the new to determine the minimal changes needed to be applied to the real DOM.

### Lifecycle Methods

*   **Explanation:** Lifecycle methods are special methods that are automatically called at different stages of a component's lifecycle (mounting, updating, unmounting).  While less common in modern React (due to Hooks), it's important to understand them.

*   **Interview Questions:**
    *   What are React Lifecycle Methods?
    *   What is the order in which they are called?
    *   What are the different phases of a component's lifecycle?
    *   Which lifecycle methods are deprecated?

*   **Code Example (Class Component):**

    ```jsx
    import React from 'react';

    class LifeCycleExample extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor');
      }

      static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // or updated state based on props
      }

      componentDidMount() {
        console.log('ComponentDidMount');
        // Ideal for fetching data
        this.interval = setInterval(() => {
          this.setState({ count: this.state.count + 1 });
        }, 1000);
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true; // or false to prevent re-render
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null; // or some snapshot value
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
      }

      componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interval);
      }

      render() {
        console.log('Render');
        return (
          <div>
            <p>Count: {this.state.count}</p>
          </div>
        );
      }
    }

    export default LifeCycleExample;

    ```

### Refs

*   **Explanation:** Refs (references) provide a way to access the underlying DOM nodes or React elements created in the `render` method. They are useful for focusing an input field, triggering animations, or directly manipulating the DOM.

*   **Interview Questions:**
    *   What are refs in React?
    *   How do you create a ref?
    *   What are the use cases for refs?
    *   What is `forwardRef`?

*   **Code Example:**

    ```jsx
    import React, { useRef, useEffect } from 'react';

    function InputFocus() {
      const inputRef = useRef(null);

      useEffect(() => {
        // Focus the input element on component mount
        inputRef.current.focus();
      }, []);

      return (
        <input type="text" ref={inputRef} />
      );
    }

    export default InputFocus;
    ```

### Portals

*   **Explanation:** Portals provide a way to render a child component into a DOM node that exists outside the parent component's DOM hierarchy. This is useful for modals, tooltips, and other elements that should not be constrained by their parent's styles or layout.

*   **Interview Questions:**
    *   What are React Portals?
    *   Why would you use a Portal?
    *   What are the common use cases?

*   **Code Example:**

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    const modalRoot = document.getElementById('modal-root'); // Create a div with id="modal-root" in your HTML

    function Modal(props) {
      return ReactDOM.createPortal(
        <div className="modal">
          {props.children}
        </div>,
        modalRoot
      );
    }

    function App() {
      const [isOpen, setIsOpen] = React.useState(false);

      return (
        <div>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          {isOpen && (
            <Modal>
              <h1>Modal Content</h1>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
          )}
        </div>
      );
    }

    export default App;
    ```

### Error Boundaries

*   **Explanation:** Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.  Note: Error boundaries only catch errors in the *render* phase, not in event handlers.

*   **Interview Questions:**
    *   What are Error Boundaries?
    *   How do you create an Error Boundary?
    *   What types of errors do Error Boundaries catch?
    *   Where should you place Error Boundaries in your application?

*   **Code Example:**

    ```jsx
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

    export default App;
    ```

### Prop Drilling & State Lifting

*   **Explanation:**
    *   **Prop Drilling:**  Occurs when you pass props through multiple levels of the component tree, even when intermediate components don't need the props themselves. This can make code harder to maintain.
    *   **State Lifting:**  Involves moving state up to a common ancestor component so that multiple child components can share and update the state.

*   **Interview Questions:**
    *   What is prop drilling?  What are its drawbacks?
    *   What is state lifting?
    *   How can you avoid prop drilling? (Context API, Redux, other state management solutions)

*   **Code Example (Prop Drilling):**

    ```jsx
    function Grandparent({ theme }) {
      return <Parent theme={theme} />;
    }

    function Parent({ theme }) {
      return <Child theme={theme} />;
    }

    function Child({ theme }) {
      return <button style={{ background: theme }}>Click me</button>;
    }

    function App() {
      return <Grandparent theme="lightcoral" />;
    }

    export default App;
    ```

    In this example, `theme` is passed from `Grandparent` to `Child` even though `Parent` doesn't directly use it.  This is prop drilling.  Context can solve this.

*   **Code Example (State Lifting):**

    ```jsx
    import React, { useState } from 'react';

    function ChildA({ onInputChange }) {
      return <input type="text" onChange={(e) => onInputChange(e.target.value)} />;
    }

    function ChildB({ value }) {
      return <p>You typed: {value}</p>;
    }

    function Parent() {
      const [inputValue, setInputValue] = useState('');

      return (
        <div>
          <ChildA onInputChange={setInputValue} />
          <ChildB value={inputValue} />
        </div>
      );
    }

    export default Parent;
    ```

    Here, the `inputValue` state is lifted to the `Parent` component so both `ChildA` and `ChildB` can access it.

### Context API

*   **Explanation:** The Context API provides a way to share data between components without having to manually pass props through every level of the tree. It's useful for sharing data that is considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

*   **Interview Questions:**
    *   What is the Context API in React?
    *   When would you use the Context API?
    *   How do you create a context?
    *   How do you consume a context?
    *   What are the limitations of the Context API?

*   **Code Example:**

    ```jsx
    import React, { createContext, useContext, useState } from 'react';

    // 1. Create a context
    const ThemeContext = createContext();

    // 2. Create a provider
    function ThemeProvider({ children }) {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    }

    // 3. Create a custom hook to consume the context
    function useTheme() {
      return useContext(ThemeContext);
    }

    function ThemedButton() {
      const { theme, toggleTheme } = useTheme();

      return (
        <button onClick={toggleTheme} style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
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

    export default App;
    ```

### React Router

*   **Explanation:** React Router is a standard library for routing in React applications. It enables navigation between different views or components in response to user actions, such as clicking links or submitting forms.

*   **Interview Questions:**
    *   What is React Router?
    *   What are the different types of routers in React Router? (`BrowserRouter`, `HashRouter`, `MemoryRouter`)
    *   How do you define routes in React Router?
    *   How do you navigate between routes?
    *   What are route parameters?

*   **Code Example:**

    ```jsx
    import React from 'react';
    import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

    function Home() {
      return <h2>Home</h2>;
    }

    function About() {
      return <h2>About</h2>;
    }

    function App() {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
    ```

### Keys

*   **Explanation:** Keys are special string attributes you need to include when creating lists of elements in React. Keys help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and uniquely identify each element in the list.  Using the index as a key is generally an anti-pattern.

*   **Interview Questions:**
    *   What are keys in React lists?
    *   Why are keys important?
    *   What happens if you don't provide keys?
    *   Why is using the index as a key an anti-pattern?

*   **Code Example:**

    ```jsx
    function ListComponent({ items }) {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }

    // Example items array:
    const items = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
    ];

    function App() {
      return <ListComponent items={items} />;
    }

    export default App;
    ```

### Fragments

*   **Explanation:** Fragments let you group a list of children without adding extra nodes to the DOM.  This is useful when you want to return multiple elements from a component without introducing an unnecessary parent element.

*   **Interview Questions:**
    *   What are Fragments in React?
    *   Why would you use Fragments?
    *   What is the shorthand syntax for Fragments?

*   **Code Example:**

    ```jsx
    import React from 'react';

    function MyComponent() {
      return (
        <> {/* Fragment shorthand */}
          <h1>Hello</h1>
          <p>This is a paragraph.</p>
        </>
      );
    }

    export default MyComponent;

    // Equivalent using React.Fragment:
    function MyComponent2() {
      return (
        <React.Fragment>
          <h1>Hello</h1>
          <p>This is a paragraph.</p>
        </React.Fragment>
      );
    }

    ```

### Higher-Order Components

*   **Explanation:** A higher-order component (HOC) is a function that takes a component as an argument and returns a new, enhanced component. HOCs are a powerful way to reuse component logic.

*   **Interview Questions:**
    *   What are Higher-Order Components (HOCs)?
    *   What are the use cases for HOCs?
    *   What are the benefits of using HOCs?
    *   What are the drawbacks of using HOCs?
    *   How do HOCs compare to Hooks?

*   **Code Example:**

    ```jsx
    import React from 'react';

    // HOC that adds logging functionality
    function withLogging(WrappedComponent) {
      return class extends React.Component {
        componentDidMount() {
          console.log(`Component ${WrappedComponent.name} is mounted`);
        }

        render() {
          return <WrappedComponent {...this.props} />;
        }
      };
    }

    function MyComponent(props) {
      return <p>Hello, {props.name}!</p>;
    }

    const EnhancedComponent = withLogging(MyComponent);

    function App() {
      return <EnhancedComponent name="World" />;
    }

    export default App;
    ```

### Render Props

*   **Explanation:** A render prop is a technique for sharing code between React components using a prop whose value is a function. The component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

*   **Interview Questions:**
    *   What are Render Props?
    *   How do Render Props work?
    *   When would you use Render Props?
    *   How do Render Props compare to HOCs and Hooks?

*   **Code Example:**

    ```jsx
    import React from 'react';

    class MouseTracker extends React.Component {
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
        <MouseTracker
          render={mouse => (
            <p>
              The mouse position is ({mouse.x}, {mouse.y})
            </p>
          )}
        />
      );
    }

    export default App;
    ```

## 2. Advanced Topics

### Code Splitting & Lazy Loading

*   **Explanation:** Code splitting is a technique that allows you to break down your application into smaller chunks, which can be loaded on demand. Lazy loading is a specific implementation of code splitting where components or modules are loaded only when they are needed.  This improves initial load time.

*   **Interview Questions:**
    *   What is code splitting?
    *   What is lazy loading?
    *   How do you implement code splitting in React?
    *   What are the benefits of code splitting and lazy loading?

*   **Code Example:**

    ```jsx
    import React, { lazy, Suspense } from 'react';

    const LazyComponent = lazy(() => import('./LazyComponent')); // Path to the component

    function App() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }

    export default App;
    ```

### Server-Side Rendering (SSR) & Static Site Generation (SSG)

*   **Explanation:**
    *   **Server-Side Rendering (SSR):**  Rendering React components on the server and sending the fully rendered HTML to the client.  Improves initial load time and SEO.
    *   **Static Site Generation (SSG):**  Generating HTML pages at build time.  Results in very fast loading times and excellent SEO.

*   **Interview Questions:**
    *   What is Server-Side Rendering (SSR)?
    *   What is Static Site Generation (SSG)?
    *   What are the benefits of SSR and SSG?
    *   How do you implement SSR and SSG in React?
    *   What are the trade-offs between SSR and SSG?
    *   What frameworks support SSR and SSG? (Next.js, Gatsby)

*   **Code Example:** (SSR and SSG typically require a framework like Next.js or Gatsby.  This is a conceptual example).

    **Next.js (SSR Example):**

    ```javascript
    // pages/index.js
    function HomePage(props) {
      return <h1>Welcome, {props.message}!</h1>;
    }

    export async function getServerSideProps() {
      return {
        props: {
          message: 'Hello from the server!',
        },
      };
    }

    export default HomePage;
    ```

### Hydration

*   **Explanation:** Hydration is the process of making the static HTML generated by the server interactive on the client-side. During hydration, React attaches event listeners and re-renders the component tree to ensure that the client-side state matches the server-side rendered HTML.

*   **Interview Questions:**
    *   What is hydration in React?
    *   Why is hydration necessary?
    *   What are the potential issues with hydration?
    *   How can you optimize hydration?

*   **Code Example:** (Hydration is largely handled by the framework you use for SSR/SSG, such as Next.js or Gatsby.  You don't typically write code specifically for hydration).

### Concurrent Mode

*   **Explanation:** Concurrent Mode is a set of new features in React that allow it to handle multiple tasks simultaneously without blocking the main thread. This enables a more responsive and smoother user experience, especially for complex applications.

*   **Interview Questions:**
    *   What is Concurrent Mode in React?
    *   What are the benefits of Concurrent Mode?
    *   How does Concurrent Mode work?
    *   What are the potential challenges of using Concurrent Mode?
    *   What is React Fiber?

*   **Code Example:** (Concurrent Mode is enabled by using `ReactDOM.createRoot` instead of `ReactDOM.render`).

    ```jsx
    import React from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App';

    const container = document.getElementById('root');
    const root = createRoot(container); // Create a root.
    root.render(<App />);
    ```

### Suspense for Data Fetching

*   **Explanation:** Suspense is a React component that allows you to "suspend" the rendering of a component until some data is available. This is particularly useful for data fetching, as it allows you to display a loading indicator while the data is being fetched.

*   **Interview Questions:**
    *   What is Suspense in React?
    *   How does Suspense work with data fetching?
    *   What are the benefits of using Suspense for data fetching?
    *   What are the limitations of Suspense?

*   **Code Example:**

    ```jsx
    import React, { Suspense } from 'react';

    // Assume this is a component that uses Suspense internally (e.g., fetching data)
    const MyDataComponent = React.lazy(() => import('./MyDataComponent'));

    function App() {
      return (
        <Suspense fallback={<div>Loading data...</div>}>
          <MyDataComponent />
        </Suspense>
      );
    }

    export default App;
    ```

### React Fiber

*   **Explanation:** React Fiber is the new reconciliation engine in React that enables Concurrent Mode. It breaks down the rendering process into smaller, interruptible units of work, allowing React to prioritize and handle different tasks more efficiently.

*   **Interview Questions:**
    *   What is React Fiber?
    *   How does React Fiber improve performance?
    *   What are the key concepts of React Fiber? (Work loops, interruptible rendering)

*   **Code Example:** (React Fiber is an internal implementation detail. You don't write code directly targeting Fiber.)

### Custom Hooks

*   **Explanation:** Custom Hooks are JavaScript functions that start with "use" and can call other Hooks. They allow you to extract component logic into reusable functions.

*   **Interview Questions:**
    *   What are Custom Hooks in React?
    *   Why would you create a Custom Hook?
    *   What are the rules for naming Custom Hooks?
    *   How do you share logic between components using Custom Hooks?

*   **Code Example:**

    ```jsx
    import { useState, useEffect } from 'react';

    // Custom Hook for fetching data
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
          } catch (error) {
            setError(error);
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
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }

    export default MyComponent;
    ```

