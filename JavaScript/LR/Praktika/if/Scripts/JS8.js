num = prompt('Введите число');
let znak;
(num >0)? znak="положительное": znak="отрицательное";
if (num.length==1)
{
    alert('Число '+num+' однозначное ' + znak);
}
else if (num.length==2)
{
    alert('Число '+num+' двухзначное ' + znak);
}
else if (num.length==3)
{
    alert('Число '+num+' трехзначное ' + znak);
}
else
{
    alert('Число '+num+' многозначное ' + znak)
}