import React from "react";
class BookHeading extends React.Component {
    
    // 새롭게 추가할 변수가 없음 -> constructor 사용 X
    
    render() {
        // BookHeading만 사용하면 title만 뽑아서 쓸 수 있도록 구현
        return (<h1>제목 = {this.props.title}</h1>);
    }

}

class BookBody extends React.Component {
    
    constructor(props) {
        super(props);
        this.body = "내용 = " + this.props.body;
        this.price = "가격 = " + this.props.price + "원";
    }
    render() {

        return (<div>
            <hr/>
            <h2>{this.body}</h2>
            <h2>{this.price}</h2>
            <hr/>
        </div>);
    }

}

// Book에서 BookHeading와 BookBody를 조합하여 사용
class Book extends React.Component {

    // 추가적인 변수 필요 X -> constructor 필요 X
    // this.props.title
    // this.props.body
    // this.props.price

    render() {

        // return(<div>
        //     <BookHeading title={this.props.title}/>
        //     <BookBody body={this.props.body} price={this.props.price*2}/>
        //     </div>);

        // ** 마치 지역변수처럼 사용 **
        const {title, body, price} = this.props; // 객체 비구조화 할당 변수({})

        return(<div>
            <BookHeading title={title}/>
            <BookBody body={body} price={price*2}/>
            </div>);

    } // render end

}

export default Book;

/* 
오늘 구입한 책 목록
제목 = 리액트 (title)
내용 = 리액트 이야기를 재미나게 풀어봅니다 (body)
가격 = 30000 (price)
*/