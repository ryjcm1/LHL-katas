const queenThreat = (whiteQueen, blackQueen) => {

    //generate board - using console.table due to unwanted console wrapping of arrays
    console.table(generateBoard(whiteQueen, blackQueen))

    //using indexOf does not work when comparing objects as js does not reference values but the objects themselves
    const diagonalQ1Threat = JSON.stringify(diagonal(whiteQueen))
    const q2Position = JSON.stringify(blackQueen)

    const diagonalThreat = diagonalQ1Threat.indexOf(q2Position) > -1
    
    //horizontal || vertical || diagonal
    return whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || diagonalThreat

}


const diagonal = (queen) => {
    let i = queen[0]
    let j = queen[1]
    let diaPos = []

    //diagonal right down
    while (i < 8 && j < 8) {
        if (i !== queen[0] && j !== queen[1]) {
            diaPos.push([i, j])
        }
        i++
        j++
    }

    i = queen[0]
    j = queen[1]

    //diagonal left down
    while (i >= 0 && j < 8) {
        if (i !== queen[0] && j !== queen[1]) {
            diaPos.push([i, j])
        }
        i--
        j++
    }

    i = queen[0]
    j = queen[1]

    //diagonal right up
    while (i < 8 && j >= 0) {
        if (i !== queen[0] && j !== queen[1]) {
            diaPos.push([i, j])
        }
        i++
        j--
    }

    i = queen[0]
    j = queen[1]

    //diagonal left up
    while (i >= 0 && j >= 0) {
        if (i !== queen[0] && j !== queen[1]) {
            diaPos.push([i, j])
        }
        i--
        j--
    }

    return diaPos
}



const generateBoard = (whiteQueen, blackQueen) => {
    let board = []

    for (let i = 0; i < 8; i++) {
        let row = []

        for (let j = 0; j < 8; j++) {
            let file = 0
            if (whiteQueen[0] === i && whiteQueen[1] === j) {
                file = 1
            }
            if (blackQueen[0] === i && blackQueen[1] === j) {
                file = 1
            }

            row.push(file)
        }
        board.push(row)
    }

    return board
}

// console.table(generateBoard([0, 5], [5, 0]))


// console.log(diagonal([5,0]))


console.log(queenThreat([5, 0], [0, 5]))

console.log(queenThreat([0, 0], [5, 7]))

