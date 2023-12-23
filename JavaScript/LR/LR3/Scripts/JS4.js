let rndABtck = (min, max)  => {
    return (Math.random() * (max - min)) + min;}
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
alert(rndABtck(a,b))
