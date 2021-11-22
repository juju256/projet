function etape(texte: string) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showString(texte)
}

function tourner(num: number) {
    if (num >= 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, num)
        basic.pause(410)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.abs(num))
        basic.pause(480)
    }
    
}

basic.showLeds(`
    # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
`)
basic.forever(function on_forever() {
    for (let index = 0; index < 10; index++) {
        etape("a")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(3500)
        etape("b")
        tourner(255)
        etape("c")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1800)
        etape("d")
        tourner(255)
        etape("e")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1500)
        etape("f")
        tourner(255)
        etape("g")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(3500)
        etape("h")
        tourner(-255)
        etape("i")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1800)
        etape("k")
        tourner(-255)
        etape("l")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1200)
        etape("m")
        tourner(-255)
    }
})
control.inBackground(function on_in_background() {
    for (let index2 = 0; index2 < 100000; index2++) {
        music.playMelody("C5 A F A E B G A ", 120)
    }
})
