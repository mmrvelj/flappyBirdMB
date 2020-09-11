holePosition = randint(0, 4)
wallPosition = 4
hole2Position = randint(0, 4)
birdPosition = 2
saveMe = 3
score = 0
hiScore = 0

def on_forever():
    global birdPosition, saveMe, wallPosition, hiScore, holePosition, hole2Position, score
    for index in range(5):
        if index == holePosition or index == holePosition + 1:
            led.unplot(wallPosition, index)
        else:
            led.plot(wallPosition, index)
    if wallPosition < 2:
        for index2 in range(5):
            if index2 == hole2Position or index2 == hole2Position + 1:
                led.unplot(4, index2)
            else:
                led.plot(4, index2)
    if input.button_is_pressed(Button.A):
        birdPosition += -1
    else:
        birdPosition += 1
    if input.button_is_pressed(Button.B):
        if saveMe > 0:
            birdPosition = holePosition
            saveMe += -1
        else:
            if birdPosition < 2:
                birdPosition = 4
            else:
                birdPosition = 0
    if birdPosition < 0:
        birdPosition = 0
    if birdPosition > 4:
        birdPosition = 4
    led.plot(0, birdPosition)
    basic.pause(500)
    led.unplot(0, birdPosition)
    for index3 in range(5):
        led.unplot(wallPosition, index3)
        if wallPosition < 2:
            led.unplot(4, index3)
    wallPosition += -1
    if wallPosition <= 0:
        if birdPosition != holePosition and birdPosition != holePosition + 1:
            if score > hiScore:
                hiScore = score
                basic.show_leds("""
                    . . . . .
                    # . # . #
                    # # # . #
                    # . # . #
                    . . . . .
                    """)
                basic.pause(1000)
            else:
                basic.show_leds("""
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    """)
            basic.pause(1000)
            basic.show_string("" + str((score)))
            basic.clear_screen()
            holePosition = randint(0, 4)
            wallPosition = 4
            hole2Position = randint(0, 4)
            birdPosition = 2
            saveMe = 3
            score = 0
        wallPosition = 3
        holePosition = hole2Position
        hole2Position = randint(0, 4)
        score += 1
        for index4 in range(5):
            led.unplot(wallPosition + 3, index4)
basic.forever(on_forever)
