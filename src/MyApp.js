function MyApp() {
    // 1개 태그만 리턴
    //return <h1>리턴문 테스트</h1>;

    return (<div>
        <h1>리턴문테스트</h1>
        <p>2개 이상의 태그를 리턴합니다.</p>
        <img src="logo192.png" alt=""/>
        </div>);
}

// 외부에서 사용가능하도록 설정
export default MyApp;