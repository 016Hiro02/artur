let rndAB = (min, max)  => {
    return Math.floor(Math.random() * (max - min +1)) + min}
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
alert(rndAB(a,b))