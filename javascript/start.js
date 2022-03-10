// Recuperar nível selecionado e iniciar jogo
function startGame() {
    var level = document.getElementById('level').value

    if(level === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    } else {
        window.location.href='game.html?' + level
    }
}