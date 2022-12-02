import React from "react";
// function으로 정의

// function Employee() {
//     let salary = 1000;
//     function calcSalary() {}
//     function work() {}
// }

// class 방식으로 정의

class Employee extends React.Component { // Employee는 React.Component를 상속받음 -> Employee 내부에도 React.Component의 기능을 다 가지고 있음! (사용가능, ex-render()메서드)
    
    // (필수) JSX를 그려주는 역할 - 내가 원하는 대로 변경(재정의-Overriding)
    render() {
        
        // 자바스크립트 코드
        const clickHandler = ()=>{alert("리액트 클래스 방식으로 정의되었습니다.");}
        
        return (<div onClick = {clickHandler}><h1>테스트해보세요</h1></div>);
    }    
}

// jsx 태그의 속성명이나 css 속성명 두단어결합 -> CamelCase (onClick)

export default Employee