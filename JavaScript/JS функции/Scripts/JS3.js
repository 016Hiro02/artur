function min (a,b)
{
    return (a<b)? a:b;
}
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
alert(min(a,b)+' Меньшие из '+ a+' и '+b)
