let browser = prompt('Введите ваш браузер');
if(browser=='Edge') 
{
    alert("You' we got the Edge!");
}
else if(browser=='Chrome'||browser=='Firefox'||browser=='Safari'||browser=='Opera')
{
    alert('Okay we support these browser too');
}
else
{
    alert('We hope that this Page looks ok!');
}