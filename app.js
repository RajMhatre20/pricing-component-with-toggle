const btn = document.querySelector('.btn');
var month = document.getElementsByClassName('pricing');
btn.addEventListener('click', () => {
    btn.classList.toggle('btn_active');
    for (var i = 0; i < month.length; i++) {
        month[i].classList.toggle('anually_active');
    }
});