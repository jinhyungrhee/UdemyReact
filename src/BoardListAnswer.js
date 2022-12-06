import React from "react";

class BoardHeading extends React.Component {
// 게시물 테이블의 제목행 구성
// 번호 제목 작성자 조회수

    render() {
        return(<thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th></tr></thead>);
    }

}

class Board extends React.Component {
// BoardList 내부 게시물 5개 배열 테이블 내부 출력
// 단, 출력 시 나올 때마다 viewCount 값 1씩 증가 - (반복문) + (state값 1씩 증가)
    // constructor(props) {
    //     super(props);
    //     this.state = {boardList : this.props.boardList};
    // }


    render() {

        this.props.boardList;

    
        const loop = this.props.boardList.map(
            (oneboard, index)=>{


                return (<tr key={index}><td>{oneboard.seq}</td><td>{oneboard.title}</td><td>oneboard{obj.writer}</td><td>{++obj.viewCount}</td></tr>);
        });

        return (<tbody>{loop}</tbody>);
    }
}7
7
// 부모 컴포넌트
class BoardList extends React.Component {

    constructor(props) {
        super(props);
        // 현재 생성자 함수에서만 사용할지 render 메서드에서도 사용할지 값 변경 시 화면 렌더링을 
        // 할 것인지 고려하여 선언 
        this.boardList = 
        [
            {seq:1, title:'제목1', writer : "작성자1", viewCount : 1},
            {seq:2, title:'제목2', writer : "작성자2", viewCount : 10},
            {seq:3, title:'제목3', writer : "작성자3", viewCount : 5},
            {seq:4, title:'제목4', writer : "작성자4", viewCount : 123},
            {seq:5, title:'제목5', writer : "작성자5", viewCount : 0}
        ]
    }

    render() {

        return(
            <div>
                <table border="3">
                    <BoardHeading />
                    <Board body={this.boardList} />
                </table>
            </div>
        );
    }
}

export default BoardList;