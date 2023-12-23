/*(a+' <Большие> из '+ a+' и '+b):(b+' Большие из '+ a+' и '+b)*/
/*
let max = (a,b) =>{return (a>b)? a:b;}
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
alert(max(a,2*b))
alert(max(2*a-b,b))
/*Задание 1*/
/*
let x = Number(prompt('Введите x'));
let sign = (x) => {if(x > 0){return 1} else if(x == 0){return 0} else{return -1}};
alert(sign(x))
/*Задание 2*/
/*
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
let c = Number(prompt('Введите c'));
let avg = function(a,b,c){
    return(a+b+c)/3
}
alert(avg(a,b,c));
/*Задание 3*/
/*
let n = (a) => {if(a%2!=0){return a}else{return 0}};
let sumNechet = (a,b) => {
    let sum = 0;
    for(let i=a;i<b;i++)
    {
        sum +=n(i);
    }
    return sum
};
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
alert(sumNechet(a,b))
/*Задание 4*/
/*
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
let rndAB = (min, max)  => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(rndAB(a,b))
/*Задание 5*/
/*
let div = (x, y) => {
    if (y === 0) {
      return "Деление на ноль невозможно";
    }
    if (x < y) {
      return 0;
    }
    let result = 1;
    let sum = y;
    while (sum <= x) {
      sum += y;
      result++;
    }
    return result - 1;
  }

let x = Number(prompt('Введите x'));
let y = Number(prompt('Введите y'));
alert(div(x,y))

/*Задание 6*/

let okr = (x, d) => {
    let brux = Math.pow(10, d);
    let krug = parseInt(x * brux + 0.5, 10) / brux;
    return krug;
}
let Nig = Number(prompt('Введите Рациональое число'));
let d = Number(prompt('До скольки округлить?'));
let krugNig = okr(Nig, d);
alert(krugNig);
/*Задание 7*/