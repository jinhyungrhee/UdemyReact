import { useState } from "react";

function EventComponent2 (p) {

    // state 객체 변수와 setState 함수 없음
    // useState() 라이브러리 호출 - 변경이 가능하도록(state 객첵 사용이 가능하도록) 
    const [value, setValue] = useState(0);
    const [name, setName] = useState(p.name);
 
    const clickHandler = ()=>{
        setValue(value+1);
        setName("이벤트처리중");
    }
    
    return (
        <div>
            <div>{value} - {name} </div>
            <button onClick={ clickHandler }>클릭버튼</button>
            <div>전달받은 name = {name}</div>
        </div>

    ); // return


}

export default EventComponent2;