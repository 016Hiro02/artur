a = Number(prompt('Введите сторону a'));
b = Number(prompt('Введите сторону b'));
c = Number(prompt('Введите сторону c'));
if (a+b>c && a+c>b && b+c>a)
{
    alert('Треугольник существует');
}
else
{
    alert('Треугольник не существует');
}