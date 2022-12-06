import React from "react";

class BoardHeading extends React.Component {
// 게시물 테이블의 제목행 구성
// 번호 제목 작성자 조회수

    render() {
        return(<thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th><th colSpan="2">추가동작</th></tr></thead>);
    }

}

class Board extends React.Component {
// BoardList 내부 게시물 5개 배열 테이블 내부 출력
// 단, 출력 시 나올 때마다 viewCount 값 1씩 증가 - (반복문) + (state값 1씩 증가)
    constructor(props) {
        super(props);
        this.state = {boardList : this.props.boardList};
    }

    render() {

        const deleteHandler = (e)=>{
            // 삭제버튼 클릭한 게시물을 게시물 리스트에서 삭제
            // 현재 삭제 버튼을 클릭한 게시물이 몇번째인지 확인 
            // + 부모 처리함수(=deleteBoard)에 전달함
            this.props.deleteBoard(e.target.id); 
        }

        // 디버깅
        const updateHandler = (e)=>{
            const target = {seq : e.target.id, title : '수정한 제목', writer : '수정한 작성자', viewCount : 0};
            console.log(target);
            this.props.updateBoard(target);
        }

        const loop = this.state.boardList.map(
            (obj, index)=>{
                return (<tr key={index}><td>{obj.seq}</td><td>{obj.title}</td><td>{obj.writer}</td><td>{obj.viewCount}</td><td><button id={obj.seq} onClick={updateHandler}>수정</button></td><td><button id={index} onClick={deleteHandler}>삭제</button></td></tr>);
            
        });

        return (<tbody>{loop}</tbody>);
    }
}

class BoardInsertForm extends React.Component {
    // 제목 : 입력창
    // 작성자 : 입력창
    // 글추가버튼 -> 이벤트처리

    // 제목 입력 값, 작성자 입력값 전달받아서 글 추가버튼 클릭시 
    // props.addBoard(...)로 전달 -> 
    // 번호 : 게시물 번호 없음(게시물 리스트.length + 1)
    // 조회수 : 0

    constructor(props) {
        super(props);
        // state 변수 초기화
        this.state = {size : this.props.size, seq : this.props.size, title : '', writer : '', viewCount : 0};
    }


    changeHandler = (e)=>{
        // if (e.target.id == "title") {
        //     this.setState({title : e.target.value});
        // }
        // else if (e.target.id == "writer") {
        //     this.setState({writer : e.target.value});
        // }
        // 비구조화 할당 문법
        this.setState({ [e.target.id] : e.target.value});
    }

    clickHandler = ()=>{
        //console.log(this.state.boardList);
        this.setState({seq : this.state.seq + 1}); // seq 1씩 증가
        this.props.addBoard({seq : this.state.seq, title : this.state.title, writer : this.state.writer, viewCount : this.state.viewCount});
    }

    render() {
        return (
            <div>
                제목:<input type="text" id="title" onChange={this.changeHandler}></input>
                작성자:<input type="text" id="writer" onChange={this.changeHandler}></input>
                <input type="button" value="글 추가" id="submit" onClick={this.clickHandler}></input>
            </div>
        );
    }

}


// 부모 컴포넌트
class BoardList extends React.Component {

    constructor(props) {
        super(props);
        // 현재 생성자 함수에서만 사용할지 render 메서드에서도 사용할지 값 변경 시 화면 렌더링을 
        // 할 것인지 고려하여 선언 
        this.state = { boardList : 
        [
            {seq:1, title:'제목1', writer : "작성자1", viewCount : 1},
            {seq:2, title:'제목2', writer : "작성자2", viewCount : 10},
            {seq:3, title:'제목3', writer : "작성자3", viewCount : 5},
            {seq:4, title:'제목4', writer : "작성자4", viewCount : 123},
            {seq:5, title:'제목5', writer : "작성자5", viewCount : 0}
        ]
    };

    }

    render() {

        const addBoard = (oneBoard)=>{
            // 게시물을 전달받아서 추가하는 메서드(자식에게 보내서 사용)
            // 1. 입력된 게시물 1개 전달
            // 2. 1번에서 전달받은 게시물을 현재 게시물 리스트에 추가
            // 3. state 게시물리스트값 변경
            this.state.boardList.push(oneBoard);
            this.setState({boardList : this.state.boardList});

            // BoardList 길이
            console.log(this.state.boardList.length);
            // this.setState({boardLength : this.state.boardList.length});
        }

        const deleteBoard = (index)=>{
            // index는 배열의 0번째 요소부터 시작
            // 배열 메서드 : (추가)push, (반복)map, (삭제)filter, splice
            //this.state.boardList.splice(순서(0-), 개수);
            this.state.boardList.splice(index, 1);
            // 수정된 배열 업데이트 - rerendering
            this.setState({boardList : this.state.boardList});

        }

        const updateBoard = (updateBoard)=>{
            // 배열에서 반복하면서 수정 게시물 seq와 배열내 5개 게시물들의 seq 비교
            // 수정클릭게시물 seq 일치하는 게시물 찾았다
            // 찾은 게시물을 수정입력(제목, 작성자)게시물 내용으로 변경한다
            // (필수) state에게 알려준다 (this.setState())
            this.setState({boardList : this.state.boardList.map(function(obj) {
                return updateBoard.seq == obj.seq ? updateBoard : obj; // 찾아서 맞으면 변경 아니면 기존 그대로

            })});

            // this.state.boardList.map(function(oneBoard) {
            //     return updateBoard.seq == oneBoard.seq ? updateBoard : oneBoard;

            // })

        }

        return(
            <div>
                <table border="3">
                    <BoardHeading />
                    <Board boardList={this.state.boardList} deleteBoard={deleteBoard} updateBoard={updateBoard}/>
                </table>
                <BoardInsertForm addBoard={addBoard} size={this.state.boardList.length + 1}/>
            </div>
        );
    }
}

export default BoardList;