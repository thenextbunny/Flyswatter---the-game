// Inserindo stopwatch que comece conjunto ao main.js
document.getElementById('stopwatch').innerHTML = time
randomPosition() 

// Elemento inserido para criação de elementos antes definido no começo da página
let createFly = setInterval(function() {
    randomPosition()
}, createFlyTime) // Incorporanto tempo de criação do mosquito de main.js em main2.js