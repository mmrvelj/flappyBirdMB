let holePosition = randint(0, 4)
let wallPosition = 4
let hole2Position = randint(0, 4)
let birdPosition = 2
let saveMe = 3
let score = 0
let hiScore = 0
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (index == holePosition || index == holePosition + 1) {
            led.unplot(wallPosition, index)
        } else {
            led.plot(wallPosition, index)
        }
    }
    if (wallPosition < 2) {
        for (let index = 0; index <= 4; index++) {
            if (index == hole2Position || index == hole2Position + 1) {
                led.unplot(4, index)
            } else {
                led.plot(4, index)
            }
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        birdPosition += -1
    } else {
        birdPosition += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        if (saveMe > 0) {
            birdPosition = holePosition
            saveMe += -1
        } else {
            if (birdPosition < 2) {
                birdPosition = 4
            } else {
                birdPosition = 0
            }
        }
    }
    if (birdPosition < 0) {
        birdPosition = 0
    }
    if (birdPosition > 4) {
        birdPosition = 4
    }
    led.plot(0, birdPosition)
    basic.pause(500)
    led.unplot(0, birdPosition)
    for (let index = 0; index <= 4; index++) {
        led.unplot(wallPosition, index)
        if (wallPosition < 2) {
            led.unplot(4, index)
        }
    }
    wallPosition += -1
    if (wallPosition <= 0) {
        if (birdPosition != holePosition && birdPosition != holePosition + 1) {
            if (score > hiScore) {
                hiScore = score
                basic.showLeds(`
                    . . . . .
                    # . # . #
                    # # # . #
                    # . # . #
                    . . . . .
                    `)
                basic.pause(1000)
            } else {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            basic.pause(500)
            basic.showString("" + (score))
            basic.showArrow(ArrowNames.East)
            while (!(input.buttonIsPressed(Button.B))) {
            	
            }
            basic.clearScreen()
            holePosition = randint(0, 4)
            wallPosition = 4
            hole2Position = randint(0, 4)
            birdPosition = 2
            saveMe = 3
            score = 0
        }
        wallPosition = 3
        holePosition = hole2Position
        hole2Position = randint(0, 4)
        score += 1
        for (let index = 0; index <= 4; index++) {
            led.unplot(wallPosition + 3, index)
        }
    }
})
