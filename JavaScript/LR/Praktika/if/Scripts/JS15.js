let login = prompt('кто там?');
if(login=='' || login ==null)
{
    alert('Отменено');
}
else if(login == 'Админ')
{
    let pass =prompt('Пароль?');
    if(pass=='' || pass ==null)
    {
        alert('Отменено');
    } 
    else if(pass=='Я главный') 
    {
        alert('Здравствуйте');
    } 
    else
    {
        alert('Невверный пароль')
    }
}
else
{
    alert('Я вас не знаю')
}