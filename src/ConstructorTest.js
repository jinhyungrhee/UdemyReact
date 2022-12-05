import React from "react";

class ConsturctorTest extends React.Component {
    // constructor 외부에서 클래스 변수 선언(this 필요X)
    title = "제목";
    
    // <ConstructorTest witer="작성자" viewCount:10/>
    // ** constructor - 객체 생성시 1번만 실행 **
    constructor(props) { // 호출 다른 외부파일에서 전달 저장 용도 변수 = 객체

        // [props] - 외부로부터 전달받은 속성을 나타냄 (props는 객체 타입)
        // props = {writer : "작성자",viewCount : 10 ,... }

        // props.writer
        // props.viewCount 

        // this -> ConstructorTest로 만들어진 태그 자체
        super(props); // 부모 생성자 호출 -> 부모 객체에 props 변수 전달
        console.log("1-생성자함수 호출");

        // constructor 내부에서 클래스 변수 선언
        this. contents = "내용";
        //this.writer = 호출 다른 외부 파일에서 전달받자;
        //this.list = {a:100, b:"비"}; // 객체 리터럴
        //this.list2 = [1, 2, 3, 4]; // 배열
        
    }

    // ** render - props나 변수값이 변경될 때마다 반복해서 실행 **
    render() {
        console.log("2-랜더 함수 호출");
        this.props.writer = "작성자변경!";
        // this -> 현재 자기자신을 가지고 있는 객체
        // this 없이 쓰면 render 안에 선언된 변수인지 객체의 변수인지 알 수가 없기 때문!
        return (<div>{this.title}-{this.contents}-{this.props.writer}</div>); 
    }

}

export default ConsturctorTest;