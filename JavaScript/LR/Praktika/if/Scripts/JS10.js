let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let c = Number(prompt('Введите третье число'));
let max;
(a>b)? max=a:max=b;
(max>c)? alert('Число '+ max + ' Большее'):alert('Число '+ c + ' Большее');