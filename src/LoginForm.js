import React from "react";

class LoginForm extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = {id : "아직 입력 전", pw : "아직 설정 전", idresult : "", pwresult : ""}; // 최초 state 값
    }

    changeHandler = (e)=>{
        // 아이디를 하나하나 입력하는 변화가 생길때마다 호출
        // 암호를 하나하나 입력하는 변화가 생길때마다 호출

        //this.setState({id : e.target.value, pw : e.target.value});

        // 아이디 입력 중 발생했다면
        if (e.target.id == "id") {
            this.setState({id : e.target.value}); // 저장
        } 
        // 암호를 입력하는 중에 발생했다면 
        else if (e.target.id == "pw") {
            this.setState({pw : e.target.value}); // 저장
        }

    }

    loginHandler = (e)=>{
        // e.target : 이벤트가 발생한 그 변수 : <button>
        //alert(e.target.innerHTML);

        // 로그인 핸들러 실행 시 state 값 변경
        this.setState({idresult : this.state.id});
        this.setState({pwresult : this.state.pw});


    }

    render() {
        return (
            <div>
                아이디입력:<input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.changeHandler} /> <br />
                암호입력:<input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.changeHandler} /> <br />
                <button id="loginBtn" onClick={this.loginHandler} >로그인버튼</button>
                <h1>로그인아이디와암호입력결과 - {this.state.idresult}, {this.state.pwresult} </h1>
            </div>
        );
    }
}

export default LoginForm;