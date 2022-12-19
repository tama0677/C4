basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        pins.servoWritePin(AnalogPin.P0, 90)
        if (0 < pins.analogReadPin(AnalogPin.P0)) {
            pins.servoWritePin(AnalogPin.P0, 180)
        }
    }
})
