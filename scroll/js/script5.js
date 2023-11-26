const getScrollpercent = () => {
    //スクロール量
    const scrolled = window.scrollY;
    //ページ全体の高さ
    const pageHeight = document.documentElement.scrollHeight;
    //表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;
    //スクロールされた量
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    //プログレスバーに幅を指定
    document.querySelector('#bar').style.width = `${percentage}%`;
}

window.addEventListener('scroll', getScrollpercent);
