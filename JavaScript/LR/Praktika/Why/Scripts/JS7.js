let num = +prompt('Введите число:')
        nextPrime:
        for (let i = 2; i<=num; i++){
            for (let j = 2; j<i; j++){
                if (i%j==0) continue nextPrime;
            }
            alert(i);
            console.log(i);
        }