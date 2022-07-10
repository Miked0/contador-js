var buttonIncrement = document.querySelector(".bttn");
var count = document.querySelector(".contador");

var numero = 0;

buttonIncrement.addEventListener("click", function (e) {
    numero++;
    count.textContent = numero;
})
