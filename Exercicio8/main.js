let buttons = document.querySelectorAll(".btn");
buttons.forEach((a) => {
    a.onclick = function() {
        document.querySelector('#tela').innerHTML = a.innerHTML;  
        document.querySelector("#myAudio").play();
        a.style.color = "red";
      }
});
