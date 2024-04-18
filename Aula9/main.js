let buttons = document.querySelectorAll('a', '.btn');
let url = window.location.href;


for (let joao of buttons){
    if (joao.href == url){
        joao.classList.add('active');
    }

}