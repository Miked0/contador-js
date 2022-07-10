// botões
var buttonIncrement = document.querySelector(".bttn");
var buttonDecrement = document.querySelector("#bttn_decrementar");
var buttonReset = document.querySelector("#bttn_reset");


// contador
var count = document.querySelector(".contador");
var numero = 0;


buttonIncrement.addEventListener("click", () => {
    numero++;
    setTimeout(() => {
        count.textContent = numero
    }, "200");

   
})


buttonDecrement.addEventListener("click", () => {
    numero--;
    setTimeout(() => {
        count.textContent = numero
    }, "200");
 
})

buttonReset.addEventListener("click", () => {
    numero = 0;
    setTimeout(() => {
        count.textContent = numero
    }, "200");
})


