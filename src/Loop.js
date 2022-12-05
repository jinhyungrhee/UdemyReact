import React from "react";

// 자식
class Loop extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // this.userList = 
    //     // [{id : 'sba1', pw:'sba1', name:'홍길동', age:20},
    //     // {id : 'sba2', pw:'sba2', name:'김영희', age:30},
    //     // {id : 'sba3', pw:'sba3', name:'안철수', age:35},
    //     // {id : 'sba4', pw:'sba4', name:'박보검', age:25},
    //     // {id : 'sba5', pw:'sba5', name:'유재석', age:22}];
    //     this.userList = props.userList;
    // } // constructor 

    render() {
        // const loop = ()=>{
        //     let result = "";
        //     for (var i = 0; i < this.userList.length; i++) {
        //         result += "<li>" + this.userList[i].id + ", " + this.userList[i].name + ", " + this.userList[i].age + "</li>";
        //     } // for
        //     return result;

        // } // loop 

        // const outerResult = loop();
        
        // return (<ol>{outerResult}</ol>);

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

            return (<ol>{loop}</ol>);


    } // render

}

// 자식
class UserInform extends React.Component {

    // 아이디 암호 이름 나이 입력폼 구성
    state = {}

    constructor(props) {
        super(props);
        this.state = {id : "아직 입력 전", pw : "아직 설정 전", name : "아직 설정 전", age : "아직 설정 전", idResult : "", pwResult : "", nameResult : "" , ageResult : "", userList : props.userList}; // 최초 state 값
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

    clickHandler = ()=> {

        this.setState({idResult : this.state.id});
        this.setState({pwResult : this.state.pw});
        this.setState({nameResult : this.state.name});
        this.setState({ageResult : this.state.age});

        //console.log(this.state.idResult, this.state.pwResult, this.state.nameResult);

        this.state.userList.push({id : this.state.idResult, pw : this.state.pwResult, name : this.state.nameResult, age : this.state.ageResult});
        //this.setState({userList : {id : this.state.idResult, pw : this.state.pwResult, name : this.state.nameResult, age : this.state.ageResult}});

        console.log(this.state.idResult);
        // state.userList에 push - 맨 처음 눌렀을 때 빈 값이 들어가는 문제 有
        // this.state.userList.push({id : this.state.idResult, pw : this.state.pwResult, name : this.state.nameResult, age : this.state.ageResult});
    
        console.log(this.state.userList);
        

    }

    render() {
        return (
            <div>
                아이디입력:<input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.changeHandler} /> <br />
                암호입력:<input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.changeHandler} /> <br />
                이름입력:<input type="text" id="name" name="name" placeholder="이름 입력" onChange={this.changeHandler} /> <br />
                나이입력:<input type="text" id="age" name="age" placeholder="나이 입력" onChange={this.changeHandler} /> <br />

                <button id="userInsertBtn" onClick={this.clickHandler} >회원가입버튼</button>
                <h1>입력결과 - {this.state.idResult}, {this.state.nameResult}, {this.state.ageResult} </h1>
                <Loop userList={this.state.userList}/>
            </div>
        );
    }

}

// 부모
class TotalUserInform extends React.Component {

    constructor(props) {
        super(props);
        this.userList = 
        [{id : 'sba1', pw:'sba1', name:'홍길동', age:20},
        {id : 'sba2', pw:'sba2', name:'김영희', age:30},
        {id : 'sba3', pw:'sba3', name:'안철수', age:35},
        {id : 'sba4', pw:'sba4', name:'박보검', age:25},
        {id : 'sba5', pw:'sba5', name:'유재석', age:22}];
    } // constructor 

    render() {

        return (<div>
            <UserInform userList={this.userList}/>
            {/* <Loop userList={this.userList}/> */}
        </div>);
    }

}

export default Loop;
export {TotalUserInform};