input.onPinPressed(TouchPin.P0, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
basic.showIcon(IconNames.Duck)
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
