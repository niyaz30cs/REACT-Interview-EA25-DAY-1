# React Interview Preparation Question DAY-1
### Q-1.What is SPA?
Ans: 
- SPA:- stands for Single page Application.
- A single - page application is a type of web application that loads a single HTML page and dynamically updates the content as the user interface with the application.
- React is a popular javaScript library for building SPA.
- SPA use Single HTML file.
### Q-2. What is Virtual DOM?
Ans:-
- **DOM** :-Dom stands for document object model.normally wherever a user request a webpage the browser receive HTML document for the page from the server.
- Virtual Dom is the lightWeight Representation of your Dom.
- Two virtual DOM compare to each other for new change this process are called **diffing algorithm**.
- The new change are update in the real DOM this process are call **Recoincilation**.
### Q-3. Difference between class and function Component?
ANS:-
|Class Component|Function Component|
|----|----|
|Class Component define by js class.|Function Component define by js Function.
|class component is statefull component.|function component is stateless component.
|***render()*** method present in class component.|***render()*** method not present in function component.
|***this*** keyword use in class component.|***this*** keyword not present in function component.
|React-life-cycle method used in class component.|Hooks are used in function component.|

### Q-4.What is package.json?
***Ans:-*** This is a JSON (javaScript object Notation)file that include key information concerning your project . this is arequired file that is needed to run any react project.

- Name and version.
- Dependency
- Scripts
- Dev Dependencies

### Q-5.What is JSX and why do we used it insted of js?
***Ans**:-JSX which is Stands for JavaScript XML is a syntax Extension for JavaScript that is Commonlly used is react Application.

- It Allow to Write HTML code like writen your JavaScript code.
- JSX provided Several benefith for building user interface.
- - Declarative Syntax
- - Readability
- - Component Composition
- - Performance optimization
- - Ecosystem Supports

### Q-6.What is deference between ReactJS and React Native?
|React JS|React Native|
|----|----|
|React Js is JavaScript library.|React Native is  Mobile framwork.|
|use to build web application.|use to build cross plateform mobile application.|
V-Dom render data on browser|Native API for mobile component rendering.|
|create Robust animation using css.|Need to use API create Animation.|

### Q-7.difference between statefull and stateless component?
|Statefull|Stateless|
|----|----|
class component is a statefull component.|function component is a stateless component.|
|Require to save the current state of a process|state of the process are not saved|
|Design is completed and heavy data must stored.|Server design is simplifier is complex.|


# React Interview Preparation Question DAY-2
### Q-1.What is NPM?
***Ans***:-NPM Stands for node package mannager.

- NPM is short for node package manager, an online directory that contains the various already registered open-source packages.
- NPM modules consume the various functions as a third-party package when installed into an app using the NPM command npm install .
- Package management.
- Dependency Management
- Command-line- interface.
- Script.
- Security.
- open source and community.
### Q-2. What is event in React Js?
***Ans:-***

- Events in React JS allow developers to respond to user interaction within their applications quickly and efficiently. 
- An Event in React is an action that is trigger by the user or the system.Example-mouse click,keyboard press or resize are all event.
- React has own event called synthetic event.
- ***Example:-***
- onClick
- onSubmit
- onChange
- onKeyPress
- onMouseOver
- onMouseOut

### Q-3.Difference between Axios and fetch?
***Ans***
|Axios|Fetch|
|----|----|
|Easier to work with|Harder to work with|
|Less verbose|More verbose|
|Has to be Compiled|Read directly by browser|
|Third party Library|Vanilla Javascript|
|it is Faster|Little bit Slower|
|Easier to error handler|hard to error handler|
|axios use data property|fetch use body proprty|
|Need install external library|No need to install any Thing|

# React Interview Preparation Question DAY-3

### Q-1. What is props drilling and state uplifting in ReactJs?
***Ans:-***

 ***Props Drilling:-*** The component at the top and bottom of the stack need access to the state.
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

- props drilling means data pass parent to child one component to another component.

***State uplifting:-*** Lifting state up is a common pattern that is essential for React developers to know. It helps you avoid more complex (and often unnecessary) patterns for managing your state.

- state uplifting means data transfer child to parent.


### Q-2. What is ContextApi?
***Ans:-*** The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

- Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
- The Context API in React is a way for a component to share data with other components without having to pass props down through multiple levels of the component tree.

### Q-3. What is useState hooks?
***Ans:-***

- The React useState Hook allows us to track state in a function component.
- State generally refers to data or properties that need to be tracking in an application.

- useState is a React Hook that lets you add a state variable to your component.
- ***syntax***

const [state, setState] = useState(initialState);

### Q-4. What is useEffect?
***Ans:-***

- The useEffect Hook allows you to perform side effects in your components.
- useEffect accepts two arguments. The second argument is optional.
- useEffect is a React Hook that lets you synchronize a component with an external system.
- ***syntax:-***

useEffect(setup, dependencies?)

- The useEffect hook is a smooth combination of React’s lifecycle methods like componentDidMount, componentDidUpdate and componentWillUnmount.

# React Interview Preparation Question DAY-4

### Q-1. Difference between Callback and useCallBack hooks?

|CallBack|useCallBack|
|----|----|
|A callback is function that pass as a argument into another function.|useCallBack is react hook that return a memoized function|
|A callback is typically used to handle event or to pass data between component.|useCallBack is take two argument function and dependency of array|

### Q-2. Why do you need keys in react js ?
***Ans:-*** Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

- Identify which elements are added.
- Identify which elements are updated.
- Identify which elements are removed.

At this point, you may wonder why do we need it? After all, we could identify elements by their id, className, parent/child, index, props, etc. The answer is because of React's Diffing Algorithm.

### Q-3.what is useMemo in ReactJs?
***Ans:-*** The useMemo is a hook used in the functional component of react that returns a memoized value.

- The React useMemo Hook returns a memoized value.
- The useMemo Hook only runs when one of its dependencies update.
- This can improve performance.
- 


***why use useMeme?***

The basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program.

## use cases:-

- Managing DOM element.
- implementing animation and transition.
- strong and accessing previous state value.
- integrating with third party.

### Q-4. What is useReducer hook?
***Ans:-*** The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.

- The useReducer Hook is similar to the useState Hook.
- It allows for custom state logic.
- ***syntax:-***
useReducer(reducer, initialState)
- reducer
- dispatch
- action
- state
- initialState

# React Interview Preparation Question DAY-5

### Q-1.What is HigerOrderComponent?
***Ans:-*** HigherOrderComponent is a function that take a component as argument
and some additional functionality and return a new Component.

- In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.
- ***syntax:-***
const EnhancedComponent = higherOrderComponent(OriginalComponent); 

### Reason to use Higher-Order component:
- Easy to handle
- Get rid of copying the same logic in every component
- Makes code more readable

### Q-2.What is React lifeCycle Method
***Ans:-*** 
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

**Mounting:-**

Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

### Q-3 What is memory leak?
***Ans:-*** A memory leak in React.js can occur when you have objects or resources that are no longer needed but are still being referenced by the application, preventing them from being garbage collected. Over time, this can lead to increased memory usage and degraded performance. 

# React Interview Preparation Question DAY-6

### Q-1. Explain reducer as pure function in redux?
***Ans:-*** In Redux, a reducer is a pure function that takes the current state and an action as its arguments, and returns a new state. It is a fundamental concept in Redux for managing the state of your application. Let's break down what it means for a reducer to be a pure function:

- ***Pure Function:*** A pure function is a function that always produces the same output for the same input, and it has no side effects. In the context of Redux, this means that a reducer's output (the new state) is solely determined by its input (the current state and the action) and nothing else.

- ***Current State:*** The current state is the current representation of your application's data. It is passed as the first argument to the reducer.

- ***Action:*** An action is a plain JavaScript object that describes what happened in your application. It typically has a type property and may include additional data. The reducer takes this action as the second argument.

- ***New State:*** The reducer returns a new state that reflects the changes caused by the action. It should not modify the current state; instead, it creates a new state object with the necessary updates.

### Q-2. What is redux and why it is use?
***Ans:-*** Redux is a popular state management library for JavaScript applications, often used with libraries like React but also applicable to other frameworks or libraries. It provides a predictable and centralized way to manage the state of your application. Here's why Redux is used and its key benefits:

1. ***Centralized State Management:*** Redux centralizes the state of your application in a single JavaScript object called the "store." This makes it easier to manage and maintain the state, especially in larger and more complex applications.

2. ***Predictable State Changes:*** Redux enforces a unidirectional data flow, which means that changes to the state are predictable and follow a clear pattern. Actions are dispatched to modify the state, and reducers define how those actions affect the state.

3. ***Pure Functions:*** Reducers in Redux are pure functions, which means they have no side effects and always produce the same output for the same input. This predictability simplifies debugging and testing.

4. ***Time-Travel Debugging:*** Redux allows for time-travel debugging, meaning you can go back and forth through the application's state to understand how it reached a certain state, which is incredibly useful for debugging complex applications.

5. ***Easier Testing:*** The predictability and purity of Redux functions make it easier to write unit tests for your application's state management logic.

5. ***Component Isolation:*** Redux promotes the idea of separating the UI components from the state management logic. This separation of concerns makes your code more modular and easier to maintain.

6. ***Middleware Support:*** Redux provides a middleware mechanism that allows you to intercept and process actions before they reach the reducers. This is useful for tasks like asynchronous data fetching, logging, or routing.

7. ***Community and Ecosystem:*** Redux has a large and active community, and there are many useful extensions and tools available to enhance your development experience, like Redux DevTools for debugging.

8. ***Scalability:*** Redux is designed to scale with your application as it grows. It can handle complex state management needs without becoming unwieldy.

Redux is commonly used in web applications, including React applications, but it can be applied to other JavaScript environments as well. It is especially beneficial for applications with complex data flows or when you need a high level of control over how data is managed and updated in your app.


### Q-3.Why do we use redux thunk?
***Ans:-*** Redux Thunk is a middleware for Redux that is used to handle asynchronous actions in a Redux application. Here's why you might use Redux Thunk:

1. ***Handling Asynchronous Actions:*** Redux Thunk allows you to dispatch functions as actions, not just plain objects. This is particularly useful for managing asynchronous operations, like making API requests or interacting with web services. You can dispatch actions at different stages of an asynchronous operation (e.g., request sent, request successful, request failed).

2. ***Simplified Action Creators:*** Without Redux Thunk, action creators are typically plain objects. With Redux Thunk, action creators can return functions that have access to the dispatch function. This simplifies the process of creating actions for asynchronous operations.

3. ***Separation of Concerns:*** By using Redux Thunk, you can separate the logic for making API requests and handling the results from the components that trigger these actions. This promotes a cleaner and more maintainable codebase.

3. ***Cancelable Actions:*** You can implement features like canceling in-flight requests or handling race conditions when multiple actions are dispatched concurrently.



