function ChechAge(age)
{
    return (age>=18)?  true : confirm('Родители разрешили?');
}
let age = Number(prompt('Введите ваш возраст'));
let acess = ChechAge(age);
(acess == true)? alert('Доступ разрешен'):(acess == false)? alert('Доступ Запрещен'):alert('ОШИБКА');;
