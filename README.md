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




