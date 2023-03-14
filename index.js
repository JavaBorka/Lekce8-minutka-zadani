console.log('funguju!');

/***** CVIČENÍ 3 ******/

// Naklonujte si repozitář pro stránku s kuchyňskou minutkou. Využijte funkci setTimeout ke splnění následujících úkolů.

// Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.

// Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.

// Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.

// Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.

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