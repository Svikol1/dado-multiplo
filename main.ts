radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(200)
    if (receivedNumber > dado) {
        basic.showIcon(IconNames.Sad)
    }
    avversario = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    dado = randint(1, 6)
    basic.showNumber(dado)
    radio.sendNumber(dado)
    if (avversario > dado) {
        basic.showIcon(IconNames.Sad)
    }
    avversario = 0
    basic.pause(200)
})
let avversario = 0
let dado = 0
radio.setGroup(1)
