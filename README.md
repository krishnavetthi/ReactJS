# ReactJS

Library — small, need to install external libs or packages for other functionalities
Component based
Reusable components
Only specific parts of the website can be changed instead of reloading whole website

Babble is a transpiler
JSX is converted to JS
Higher version of JS converted to Older version of JS

JSX - JS and HTML
const name = <h1> Krishna </h1>
Has only one opening and closing tag
const para = <div>
<h1>Title</h1>
<p> This is Krishna Hello </p>
<button> Submit</button>
</div>

React Fragment — Nameless Tags/ Anonymous Tag
<> </>

React contains React DOM package
React —>  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

ReactDOM —> <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
Babble —> <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

Only one index.html file 

<div class = “root”> </div>

ReactDOM.render(what to do, where to do)
What to do —> JSX
Where to do ——> HTML elements

To store JSX into another element, use { }

NPM is a package management that is used to install, uninstall, and update Javascript packages on your workstation, whereas NPX is a package executer that is used to directly execute Javascript packages without installing them
npx create-react-app name
npm run start —>> runs the script

robots.txt file is a text file created by the designer to prevent the search engines and bots to crawl up their sites.

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.


In simple words: index.html is where all your UI is rendered by React and index.js is where all your JS codes exist. So browser, first get index.html and then renders the file. then JS in index.js is responsible for all the logical rendering of UI, which takes element with id root to be its base element for rendering all the UIs.
Like in vanilla JS, React searches for element with ID 'root' and keeps all the UI to be rendered inside that element using the virtual DOM concept. You can view this concept.
After you complete the React development, you have to use a build tool to build React App by npm build or yarn build, which merges all your codes to single file. So when a client requests your site, the server sends .html with the JS files. So, at last, JS files manipulates the single .html file.
About the create-react-app, react-scripts package that comes when you create a react app with npx create-react-app handles all the requirements to serve a development serve using node. All the files of packages are inside node_moudles.

App.js focuses on the component logic, App.css handles the styles specific to the App component, index.js sets up the rendering process, and index.css provides global styles.
We modify only App.js, App.css

Components name should start with uppercase, eg —>> Header, Footer

React SPA - Single Page Application
For Multi Page — react router dom

Real DOM —> Virtual DOM (Copy of real dom)

COMPONENTS AND PROPS
Data which we render in components is props
Prop drilling - Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. 
To solve this problem , useContext is introduced, producer and consumer other levels are not needed to pass the data now.

State — built in react object that is used to contain information about the component. Components state can change over time, when it changes component re-renders.

Hooks — Hooks are reusable functions that provide access to state in React Applications.


useState Hook ——>> The useState() hook allows you to create, track and update a state in functional components. 
Whenever we want to pre-render the data if we update data
Example : in amazon website, if we change our address, new address displays here useState stores this info and serenaders new address

Useeffect Hook —>> useEffect(what to do, dependency array), useEffect( ()=>{} , [] ), if dependency array/list updates then the method will render

```javascript
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);

```
Context API ——>> Its used to import data from parent to child without passing to multiple inner Childs, parent —> Provider, child —> consumer 

Parent Page
export const myContext createContext(); 
<myContext.Provider value={{name,color}}>

</myContext.Provider>

Child Page 
import { myContext } from parent page 
const data = useContext(myContext)
data.field names


REACT ROUTER
Routing in React is the process of determining which components to render based on the current URL or route. React Router is a popular library for routing in React, which provides the ability to map different routes to different components and handle navigation within a React application.
With React Router, you can specify the different routes in your application and associate them with specific components. When the user navigates to a different URL or route within the application, the corresponding component is displayed on the page.

<Outlet/> placeholder

