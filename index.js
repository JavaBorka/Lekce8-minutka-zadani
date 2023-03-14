console.log('funguju!');

const alarmElm = document.querySelector('.alarm')
const audioElm = document.querySelector('audio')

const ring = () => {
    alarmElm.classList.add('alarm--ring')
    audioElm.play()
}
let timeToring = prompt('Kolik vteřin má uplynout, než minutka začne zvonit?')
timeToring = timeToring * 1000

// VYPNUTÍ ČASOVAČE

const timer = setTimeout(ring, timeToring)

const stopTimeout = () => {
    audioElm.pause()
    clearTimeout(timer)
}
const stopAlarm = document.querySelector('.stopAlarm')
stopAlarm.addEventListener('click', stopTimeout)


/****** Řešení Monika *******/

/*
const audioElm = document.querySelector('audio')
const alarmElm = document.querySelector('.alarm')
const stopAlarm = document.querySelector('.stopAlarm')
const vstupUzivatel = Number(prompt('Kolik vteřin má uplynout, než minutka začne zvonit?'))

const timer = setTimeout(() => {
    alarmElm.classList.add('alarm--ring')
    audioElm.play()
}, vstupUzivatel*1000)

stopAlarm.addEventListener('click', () => {
    audioElm.pause()
    clearTimeout(timer)
})
*/