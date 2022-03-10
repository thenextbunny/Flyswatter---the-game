var width = 0
var height = 0
var lifes = 1
var time = 15

var createFlyTime = 1250

// Selecionando os níveis com base no tempo da criação dos mosquitos
var level = window.location.search
level = level.replace('?', '')

if (level === 'normal') {
    createFlyTime = 1250
} else if (level === 'medium') {
    createFlyTime = 1000
} else if (level === 'hard') {
    createFlyTime = 750
} else if (level === 'ultrahard') {
    createFlyTime = 550
}

// Ajustando tamanho 
function adjustPrincipalSize() {

    // Recuperação de altura e largura do dispositivo
    width = window.innerWidth
    height = window.innerHeight
}

adjustPrincipalSize()

var stopWatch = setInterval(function() {
    time -= 1

    if(time < 0) {
        clearInterval(stopWatch)
        clearInterval(createFly)
        window.location.href='win.html'
    } else {
        document.getElementById('stopwatch').innerHTML = time
    }
}, 1000)

// Atribuição do JavaScript após o body existir
function randomPosition() {

   // Remoção do 'fly' anterior
    if(document.getElementById('fly')) {
        // remoção do fly automaticamente
        document.getElementById('fly').remove()
        
        // substituição dos full heart
        if(lifes > 2) {
           window.location.href='gameover.html'
        } else {
            document.getElementById('life' + lifes).src='pics/heart_empty.png'
            lifes++
    }
}

// Defindo posições aleatórias para 'flies'
var positionX = Math.floor(Math.random() * width) - 200
var positionY = Math.floor(Math.random() * height) - 200

// Controle do local que 'flies' aparece
positionX = positionX < 0 ? 150 : positionX
positionY = positionY < 0 ? 150 : positionY

// Criar elemento em forma aleatória e programática
var fly = document.createElement('img')
fly.src = 'pics/fly.png'
fly.className = randomSize() + ' ' + randomRotation()
fly.style.left = positionX + 'px'
fly.style.top = positionY + 'px'
fly.style.position = 'absolute'
fly.id = 'fly'
fly.onclick = function() {
    this.remove() // use fly.remove() or this.remove() console.log(0 ++)
}
document.body.appendChild(fly)
}

// Tamanhos randômicos para 'flies'
function randomSize() {
    var reference = Math.floor(Math.random() * 3) 

    // Informando tamanho com ligação CSS
    switch(reference) {
        case 0: 
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }
}

// Alterando posições para 'flies' de forma randômica
function randomRotation() {
    var reference  = Math.floor(Math.random() * 4)

    // Informando rotation com ligação CSS
    switch(reference) {
        case 0: 
            return 'fly1_rotation'
        case 1:
            return 'fly2_rotation'
        case 2:
            return 'fly3_rotation'
        case 3:
            return 'fly4_rotation'
    }
}
