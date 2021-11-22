def etape(texte: str):
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_string(texte)
def tourner(num: number):
    if num >= 0:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, num)
        basic.pause(410)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, abs(num))
        basic.pause(480)
basic.show_leds("""
    # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
""")

def on_forever():
    for index in range(10):
        etape("a")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.pause(3500)
        etape("b")
        tourner(255)
        etape("c")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.pause(1800)
        etape("d")
        tourner(255)
        etape("e")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.pause(1500)
        etape("f")
        tourner(255)
        etape("g")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.pause(3500)
        etape("h")
        tourner(-255)
        etape("i")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.pause(1800)
        etape("k")
        tourner(-255)
        etape("l")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.pause(1200)
        etape("m")
        tourner(-255)
basic.forever(on_forever)

def on_in_background():
    for index2 in range(100000):
        music.play_melody("C5 A F A E B G A ", 120)
control.in_background(on_in_background)
