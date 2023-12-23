function ChechAge(age)
{
    if(age>=18)
    {
        return true;
    }
    else
    {
        let vop = confirm('Родители разрешили?');
        return vop
    }
}
let age = Number(prompt('Введите ваш возраст'));
let acess = ChechAge(age);
if (acess == true)
{
    alert('Доступ разрешен')
}
else if (acess == false)
{
    alert('Доступ Запрещен')
}
else
{
    alert('ОШИБКА')
}