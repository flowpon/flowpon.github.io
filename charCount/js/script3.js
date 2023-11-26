const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
    count.textContent = text.value.length;
   
    //10文字を超えるなら
    if (text.value.length > 10 ) {
        //alert クラスを加える
        count.classList.add('alert');
        
    } else {
        count.classList.remove('alert');
    }
});
