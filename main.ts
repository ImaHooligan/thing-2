input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() - 25)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, randint(0, 5))
            basic.pause(200)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() + 25)
})
