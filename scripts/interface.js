document.addEventListener('DOMContentLoaded',() => {

    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.addEventListener('click', EventClick)
    })

})

function EventClick(event) {
    let SelectedSquare = event.target
    let winner;

    if(addSym(SelectedSquare.id)) {

        if (player == 0) {
            winner = 'Círculo'
        } else {
            winner = 'Xis'
        }

        setTimeout(() => {
            alert(`O jogo acabou! - O vencedor foi ${winner}`)
        }, 300)
    }

    updateGame()

}

function updateGame(ele) {
    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        let position = square.id
        let symbol = Cases[position]

        if (symbol != "") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}

let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', ResetGame)