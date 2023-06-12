input.onGesture(Gesture.Shake, function () {
    basic.showString("Erdbeben ")
})
if (input.lightLevel() > 10) {
    basic.setLedColor(0xff0000)
} else {
    basic.setLedColor(0x007fff)
}
