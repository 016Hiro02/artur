let qv = prompt('Введите трехзначное число');
if (qv.length == 3)
{
    qv = Number(qv)
    if (qv % 2 == 0)
    {
        let ans = (Math.floor(qv / 100))+(Math.floor((qv % 100)/10))+(Math.floor((qv % 100)%10));
        alert(ans);
    }
    else
    {
        let ans = (Math.floor(qv / 100))*(Math.floor((qv % 100)/10))*(Math.floor((qv % 100)%10));
        alert(ans);
    }
}
console.log