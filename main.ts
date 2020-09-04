let strip = 0
basic.showLeds(`
    # . . . .
    . # . . .
    . . # # #
    . # . . .
    # . . . .
    `)
serial.writeLine("Now start")
basic.forever(function () {
    strip = maqueen.Ultrasonic(PingUnit.Centimeters)
    serial.writeLine("" + (strip))
    if (strip > 20 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (strip > 20 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    } else if (strip > 20 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    } else if (strip <= 20) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    }
})
