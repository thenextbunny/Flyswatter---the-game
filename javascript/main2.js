// Inserindo stopwatch que comece conjunto ao main.js
document.getElementById('stopwatch').innerHTML = time
randomPosition() 

// Elemento inserido para criação de elementos antes definido no começo da página
var createFly = setInterval(function() {randomPosition()}, 2000)