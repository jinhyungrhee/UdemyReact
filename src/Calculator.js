// 1. Calc 함수 정의
// 2. 외부 파일에서는 Calculator로 지정
// 3.  10 + 20 = 30 (배경색 : 오렌지, 중앙정렬) 
// 4.  10 - 20 = -10 (배경색 : 핑크, 중앙정렬)
// 5.  10 * 20 =  200 (배경색 : 하늘색, 중앙정렬)
// 6. 10 / 20 = 0.5 (배경색 : 바이올렛, 중앙정렬)
// 7. css 속성 지정

function Calc(param) {  // <Calc su1="10" su2="20 />" [리액트 컴포넌트]

    /* param 객체 = {su1 : 10, su2 : 20} */

    let su1 = parseInt(param.su1);
    let su2 = parseInt(param.su2);
    //let op_list = ["+", "-", "*", "/"];
    //let colors = ['orange', 'pink', 'aqua', 'violet']

    let centerStyle = {textAlign:"center"};
    let color1 = "red";
    let color2 = "orange";
    let color3 = "yellow";
    let color4 = "green";

    return (
        <div style={centerStyle}>
            <h3 style={{color:color1}}> {su1} + {su2} = {su1 + su2} </h3>
            <h3 style={{color:color2}}> {su1} - {su2} = {su1 - su2} </h3>
            <h3 style={{color:color3}}> {su1} * {su2} = {su1 * su2} </h3>
            <h3 style={{color:color4}}> {su1} / {su2} = {su1 / su2} </h3>
        </div>
    );

    
    // return (
    //     <div>
    //         <h1 style={{backgroundColor:"orange", textAlign:"center"}}> {su1} + {su2} = {su1 + su2}</h1>
    //         <h1 style={{backgroundColor:"pink", textAlign:"center"}}> {su1} - {su2} = {su1 - su2}</h1>
    //         <h1 style={{backgroundColor:"aqua", textAlign:"center"}}> {su1} * {su2} = {su1 * su2}</h1>
    //         <h1 style={{backgroundColor:"violet", textAlign:"center"}}> {su1} / {su2} = {su1 / su2}</h1>
    //     </div>
    // );
}

export default Calc;