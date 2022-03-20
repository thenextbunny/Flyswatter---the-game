// Variáveis gerais
let width = 0
let height = 0
let lifes = 1
let time = 15
let createFlyTime = 1250

// Selecionando os níveis com base no tempo da criação dos mosquitos
let level = window.location.search
    level = level.replace('?', '')

    if (level === 'easy') {
        createFlyTime = 1250
    } else if (level === 'normal') {
        createFlyTime = 1000
    } else if (level === 'medium') {
        createFlyTime = 750
    } else if (level === 'hard') {
        createFlyTime = 550
    }

// Ajustando tamanho 
function adjustPrincipalSize() {

    // Recuperação de altura e largura do dispositivo
    width = window.innerWidth
    height = window.innerHeight
}

adjustPrincipalSize()

// 
let stopWatch = setInterval(function() {
    
    time -= 1

    if(time < 0) {
        clearInterval(stopWatch)
        clearInterval(createFly)
        window.location.href='win.html'
    } else {
        document.getElementById('stopwatch').innerHTML = time
    }

}, 1000)

// 
function randomPosition() {

   // Remoção do 'fly' anterior
    if(document.getElementById('fly')) {
        // remoção do fly automaticamente
        document.getElementById('fly').remove()
        
        // substituição dos full heart
        if(lifes > 2) {
           window.location.href='gameover.html'
        } else {
            document.getElementById('life' + lifes).src='pics/heart_empty_v3.png'
            lifes++
        }
    }

    // Defindo posições aleatórias para as 'moscas'
    let positionX = Math.floor(Math.random() * width) - 200
        positionX = positionX < 0 ? 150 : positionX 
    let positionY = Math.floor(Math.random() * height) - 200
        positionY = positionY < 0 ? 150 : positionY

    // Criar elemento 'moscas' de forma aleatória e programática
    let fly = document.createElement('img')

        fly.src = 'pics/fly.png'
        fly.className = randomSize() + ' ' + randomRotation()
        fly.style.left = positionX + 'px'
        fly.style.top = positionY + 'px'
        fly.style.position = 'absolute'
        fly.id = 'fly'

        fly.onclick = function() {
            this.remove()
        }

    document.body.appendChild(fly)
}

// Tamanhos randômicos para as 'moscas'
function randomSize() {
    let reference = Math.floor(Math.random() * 3) 

    // Informando tamanho atribuído no CSS
    switch(reference) {
        case 0: 
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }
}

// Posições randômicas para as 'moscas'
function randomRotation() {
    let reference  = Math.floor(Math.random() * 4)

    // Informando rotação atribuída no CSS
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
