import React from 'react';
import ReactDOM from 'react-dom/client';
//import Calc from './Calculator';
//import Pay from './Expression';
//import Greeting from './Greeting';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import MyApp from './MyApp';
//import Var from './Var';
//import Employee from './ClassSyntax';
//import GreetingClass from './GreetingClass';
//import A, {B, C} from './FileTest';
//import ConsturctorTest from './ConstructorTest';
//import Book from './Book';
//import EventComponent1 from './EventComponent1';
//import EventComponent2 from './EventComponent2';
//import LoginForm from './LoginForm';
import Loop, {TotalUserInform} from './Loop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Var/> */}
    {/* <Pay/> */}
    {/* <Greeting /> */}
    {/* <Calc su1="7" su2="20" /> */}
    {/* <Employee /> */}
    {/* <GreetingClass /> */}
    {/* <A />
    <B />
    <C /> */}
    {/* <ConsturctorTest writer="작성자123"/> */}
    {/* <Book title="리액트" body="리액트 이야기를 재미나게 풀어봅니다" price="30000" />
    <Book title="스프링" body="mvc는 물론 부트까지도 다룹니다" price="40000" />
    <Book title="마리아DB" body="오라클 mysql mariadb 비교하여 설명합니다" price="25000" /> */}
    {/* <EventComponent1 name="리액트이벤트처리"/>
    <EventComponent2 name="리액트이벤트처리"/> */}
    {/* <LoginForm /> */}
    {/* <Loop /> */}
    <TotalUserInform />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
