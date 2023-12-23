var cv = prompt('как вас зовут?')
var res = confirm('Имя правильное?')
if (res == true)
{
    alert('Привет '+cv)
}
else
{
    var cv = prompt('Введите правильное имя')
    alert('Привет '+cv)
}