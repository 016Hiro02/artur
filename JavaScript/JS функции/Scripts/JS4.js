function pov(x, n)
{
    let ox = 1
    for(let i=0;i<n;i++)
    {
        ox*=x
    }
    return ox
}
let x = Number(prompt('Введите x'));
let n = Number(prompt('Введите n'));
alert(pov(x,n)+' - '+x+' Возведеный в степень '+ n)