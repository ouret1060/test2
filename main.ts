let angle = 0
pins.servoWritePin(AnalogPin.P0, 90)
basic.pause(5000)
let servo = 90

basic.forever(function () {
    angle = input.compassHeading()
    angle = (angle > 180) ? angle - 360 : angle
    if (servo < 180 && angle > 3) {
        servo += 2
    } else if (servo > -180 && angle < -3) {
        servo -= 2
    }
    pins.servoWritePin(AnalogPin.P0, servo)
    serial.writeString("angle = " + angle + ", servo = " + servo + "\r\n")
    basic.pause(100)
})
