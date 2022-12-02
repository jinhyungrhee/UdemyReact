import React from 'react';
import ReactDOM from 'react-dom/client';
import Calc from './Calculator';
//import Pay from './Expression';
//import Greeting from './Greeting';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import MyApp from './MyApp';
//import Var from './Var';
import Employee from './ClassSyntax';
import GreetingClass from './GreetingClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Var/> */}
    {/* <Pay/> */}
    {/* <Greeting /> */}
    {/* <Calc su1="7" su2="20" /> */}
    {/* <Employee /> */}
    <GreetingClass />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
