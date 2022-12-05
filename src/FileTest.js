import React from "react";

// 1. 유명함수
function A() {
    const i = 10;
    // 반복문, 조건문 실행문장
    return (<div><h1>A함수 구조로 정의된 컴포넌트입니다</h1></div>);
}


// 2. 화살표함수(무명함수)
const B = ()=>{

    return (<div><h1>B 화살표함수 구조로 정의된 컴포넌트입니다</h1></div>);

}

// 3. 클래스
class C extends React.Component {
    // 상속 -> 자동 포함 메서드 재정의
    // render() : 화면 렌더링시 호출. 화면 렌더링 요소 정의. -> 두번째 호출
    // constructor(props) : <C /> 컴포넌트 생성 시 호출되는 메서드. 초기변수 정의. -> 첫번째 호출(메모리에 올라감)

    render() {

        return (<div><h1>C 클래스 구조로 정의된 컴포넌트입니다</h1></div>);
    }
}

// return 문 안에 JSX구조가 들어가는 것은 세가지 모두 동일!


export default A; // default는 하나밖에 안됨
export {B}; // 나머지는 선택
export {C};