import React from "react";

class GreetingClass extends React.Component {


    render() {
        const welcome = (e)=>{ 
            alert(e.target.value+ "하네요"); 
            e.target.value = "퇴근";
        }  // 변수 범위가 반드시 render 함수 내부여야 함! 
        return (
        <div>
            <input type="button" value="인사" onClick={welcome} />
            <h3></h3>
        </div>
        );
        // Q. JSX로 화면구성을 끝낸다음인데, 핸들러 함수가 호출되었을 때 화면구성을 어떻게 변경시킬 수 있을까??
        // react에는 this가 없음! : const welcome = ()=>{ alert(this.value + "하네요"); } 동작 X
        // 이벤트 처리시 이벤트 발생한 객체(=target) 표현 방법 : e.target
    }
}

export default GreetingClass;