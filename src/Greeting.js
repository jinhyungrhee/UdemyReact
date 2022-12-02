function Greeting() {
    
    let index = parseInt(Math.random() * 10) % 3; // Math.random():0.0 <= ? < 1.0
    //console.log(parseInt(Math.random() * 3))
    
    // 0이면 오늘도 즐거운 하루 되세요
    // 1이면 안녕하세요 리액트
    // 2이면 오늘 날씨 어때요

    // 1. 자바스크립트의 if 블록

    /*let insa;
    if (index === 0) {insa = "오늘도 즐거운 하루 되세요";}
    else if (index === 1) {insa = "안녕하세요 리액트";}
    else {insa = "오늘 날씨 어때요?";}
    
    let result = (<h1>{insa}</h1>)

    // 리액트 함수 리턴값 jsx 문법을 따라야 함
    return result;*/

    // 2. 조건 삼항 연산자 사용
    let insa1 = "오늘도 즐거운 하루 되세요";
    let insa2 = "안녕하세요 리액트";
    let insa3 = "오늘 날씨 어때요";

    let style2 = {color:"pink", backgroundColor:"silver", textAlign:"center"}; // JS 객체 리터럴

    return (
        // 조건 삼항 연산자 두 개 나란히(= 중첩하여) 사용
        index == 0 ? <h1 style={{color:'red', border:"2px solid green"}}>{index}:{insa1}</h1> : 
        index == 1 ? <h1 style={style2}>{index}:{insa2}</h1> : <h1>{index}:{insa3}</h1>
    );
    
}

export default Greeting;