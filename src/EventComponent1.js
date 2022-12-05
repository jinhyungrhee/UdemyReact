import React from "react";

// function EventComponent1 () {

//     const clickHandler = ()=>{}
//     // function 안에 function 형태
//     function click() {}

// }

class EventComponent1 extends React.Component {
    
    // [state 변수 설정] : 변경될 때마다 매번 새롭게 render할 값 설정! **
    // state 객체와 setState 함수 자동 포함 - 원하는 대로 동작 재정의 **
    // props 내용을 변경하고 싶을 땐, state로 만들어서 변경한 뒤에 할당함! **
    state = {value : 0, name : this.props.name }; // state도 일종의 객체


    // function 키워드 사용하지 않아도 됨 - 클래스 안에 메서드 형태
    //1. clickHandler() { /* 클래스 메서드 + 유명함수 */} // 가급적 지양 => '화살표 함수'를 써서 this의 애매모호함을 없애자!
    // clickHandler() { 
            
    //     // state 값을 바꿀 때 사용하는 함수 **
    //     // setState( {변경해야 할 변수명1 : 변경값1, 변수명2 : 변경값2, ... } ); **
    //     this.setState( {value : this.state.value + 1, name : "이벤트처리중"} ); // 여기서 this는 이 함수를 호출한 <button> 태그가 되어버림! (오류)
        
    // }


    //2. clickHandler = ()=>{/* 클래스 메서드 + 화살표함수 */}
    // render - return 안에서 this.clickHandler()로 호출해야함
    // clickHandler = ()=>{ 
            
    //     // state 값을 바꿀 때 사용하는 함수 **
    //     // setState( {변경해야 할 변수명1 : 변경값1, 변수명2 : 변경값2, ... } ); **
    //     this.setState( {value : this.state.value + 1, name : "이벤트처리중"} );
        
    // } // 가급적 통일!


    render() {

        /* 랜더함수 지역함수 + 화살표함수 */
        const clickHandler = ()=>{ 
            
            // state 값을 바꿀 때 사용하는 함수 **
            // setState( {변경해야 할 변수명1 : 변경값1, 변수명2 : 변경값2, ... } ); **
            this.setState( {value : this.state.value + 1, name : "이벤트처리중"} );
            
        } // 가급적 통일!

        return (
        <div>
            <div>{this.state.value} - {this.state.name} </div>
            <button onClick={ clickHandler }>클릭버튼</button>
            {/* <div>전달받은 name = {this.props.name}</div> */}
            <div>전달받은 name = {this.state.name}</div>
        </div>
        ); // return
    } // render end

} // class end

export default EventComponent1;