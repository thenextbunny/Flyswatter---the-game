// Recuperar nível selecionado para iniciar jogo
function startGame() {
    let level = document.getElementById('level').value

    if(level === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    } else {
        window.location.href='game.html?' + level
    }
}