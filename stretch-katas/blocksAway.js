const blocksAway = (arrOfDirections) => {
    let currentPosition = [0, 0]


    let facingDirection = null

    for (let i = 0; i < arrOfDirections.length - 1; i = i + 2) {

        //initial case
        if (facingDirection === null) {
            switch (arrOfDirections[i]) {
                case 'right':
                    currentPosition[0] += arrOfDirections[i + 1]
                    facingDirection = 'east'
                    break;
                case 'left':
                    currentPosition[1] += arrOfDirections[i + 1]
                    facingDirection = 'north'
                    break;
            }
        
        //facing north
        } else if (facingDirection === 'north') {
            switch (arrOfDirections[i]) {
                case 'right':
                    currentPosition[0] += arrOfDirections[i + 1]
                    facingDirection = 'east'
                    break;
                case 'left':
                    currentPosition[0] -= arrOfDirections[i + 1]
                    facingDirection = 'west'
                    break;
            }

        //facing east
        } else if (facingDirection === 'east') {
            switch (arrOfDirections[i]) {
                case 'right':
                    currentPosition[1] -= arrOfDirections[i + 1]
                    facingDirection = 'south'
                    break;
                case 'left':
                    currentPosition[1] += arrOfDirections[i + 1]
                    facingDirection = 'north'
                    break;
            }
        //facing south
        } else if (facingDirection === 'south') {
            switch (arrOfDirections[i]) {
                case 'right':
                    currentPosition[0] -= arrOfDirections[i + 1]
                    facingDirection = 'west'
                    break;
                case 'left':
                    currentPosition[0] += arrOfDirections[i + 1]
                    facingDirection = 'east'
                    break;
            }

        //facing west            
        } else if (facingDirection === 'west') {
            switch (arrOfDirections[i]) {
                case 'right':
                    currentPosition[1] += arrOfDirections[i + 1]
                    facingDirection = 'north'
                    break;
                case 'left':
                    currentPosition[1] -= arrOfDirections[i + 1]
                    facingDirection = 'south'
                    break;
            }
        }
    }

    let positionObject = {east : currentPosition[0], north: currentPosition[1]}

    return positionObject

}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));