let Cases = ['','','','','','','','','']
let player = 0
let symbol = ['o','x']
let gameOver = false
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function addSym(position) {
    
    if (gameOver) {
        return;
    }

    if (Cases[position] == '') {
        
        Cases[position] = symbol[player]

        gameOver = Win()

        if(gameOver == false){ player = (player == 0) ? 1 : 0 }

    }
    return gameOver
}

function Win() {
    for (let i = 0; i < wins.length; i++) {
        let seq = wins[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (Cases[pos1] == Cases[pos2] &&
            Cases[pos2] == Cases[pos3] &&
            Cases[pos1] != '') {
                return true
            }
    }

    return false
}

function ResetGame() {
    for(let i = 0; i < Cases.length; i++) {
        Cases[i] = ""

        let x = document.querySelectorAll('.x')
        let o = document.querySelectorAll('.o')

        x.forEach(el => {
            el.classList.remove('x')
        })

        o.forEach(el => {
            el.classList.remove('o')
        })
    }
    
    player = 0
    
    gameOver = false

}