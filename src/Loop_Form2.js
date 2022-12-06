import React from "react";

// 자식
class Loop extends React.Component {

    render() {
        

        const loop = this.props.userList.map( 
            (oneUser, index)=>{
                
                // map이 리턴하는 것을 loop가 모아놓는 것!
                return (<li key={index}> {oneUser.id} : {oneUser.name} : {oneUser.age} </li>);

            }); // loop end

            // loop가 다 실행되고나면
            /* 
                <li> ... : ... : </li>
                <li> ... : ... : </li>
                <li> ... : ... : </li>
                <li> ... : ... : </li>
                <li> ... : ... : </li>
            */

            return (<ul>{loop}</ul>);


    } // render

}

// 자식
class UserInform extends React.Component {

    constructor(props) {
        super(props);
        // 초기값 (최초에 아무것도 없는 상태)
        this.state = {id : '', pw : '', name : '', age : 0};
    }

    changeHandler = (e)=>{

        if (e.target.id == "id") {
            this.setState({id : e.target.value});
        }
        else if (e.target.id == "pw") {
            this.setState({pw : e.target.value});
        }
        else if (e.target.id == "name") {
            this.setState({name : e.target.value});
        }
        else if (e.target.id == "age") {
            this.setState({age : e.target.value});
        }

    }

    addUserHandler = ()=> {
        // 사용자가 이러한 내용을 입력했다면 
        // 프로퍼티에 전달받은 addUser 함수에게 인자로 전해줌 (함수도 변수의 일종)
        this.props.addUser({id: this.state.id, pw:this.state.pw, name:this.state.name, age:this.state.age});

    }

    render() {
        return (
            <div>
                아이디입력:<input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.changeHandler} /> <br />
                암호입력:<input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.changeHandler} /> <br />
                이름입력:<input type="text" id="name" name="name" placeholder="이름 입력" onChange={this.changeHandler} /> <br />
                나이입력:<input type="text" id="age" name="age" placeholder="나이 입력" onChange={this.changeHandler} /> <br />

                <button id="userInsertBtn" onClick={this.addUserHandler} >회원가입버튼</button>
            </div>
        );
    }

}

// 부모
class TotalUserInform extends React.Component {

    constructor(props) {
        super(props);
        // render메소드 내부(전체 클래스 영역)에서 사용 가능. 변수값 변경 가능.
        // 단 화면 rerendering X => state 변수 형태로 선언!
        this.state = {userList : 
            [{id : 'sba1', pw:'sba1', name:'홍길동', age:20},
            {id : 'sba2', pw:'sba2', name:'김영희', age:30},
            {id : 'sba3', pw:'sba3', name:'안철수', age:35},
            {id : 'sba4', pw:'sba4', name:'박보검', age:25},
            {id : 'sba5', pw:'sba5', name:'유재석', age:22}]
        };
    } // constructor 


    render() {

        // userList 변경 가능. 변경 시 화면 리렌더링 함수("함수를 자식에게 내려줄 예정")
        // userList 수정 기능 this.setState(userList 수정....);
        const addUser = (oneUser)=>{
            // oneUser - 한사람의 입력정보       
            this.state.userList.push(oneUser); // 개수 변경
            this.setState({userList : this.state.userList}); // 변경된 userList로 다시 업데이트
        }

        return (<div>
            <UserInform addUser={addUser}/>
            <Loop userList={this.state.userList}/>
        </div>);
    }

}

export default Loop;
export {TotalUserInform};