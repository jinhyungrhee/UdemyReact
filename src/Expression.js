function Pay() {

    const item = "카드";
    const title = "밥, 음료수";
    const price = 10000;
    const imgUrl = "https://cdn.hellodd.com/news/photo/202211/98758_315776_382.jpg";
    const result = (<div>
        <h1>{title} 먹었습니다</h1>
        <h2>{item} 로 - {price / 10} 원을 지불합니다.(10개월 할부)</h2>
        <img src={imgUrl} alt="양대창"/>
    </div>);
    return result;

}

export default Pay;