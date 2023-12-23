let readNumber = () => {
    while(true){
        let inp =  prompt('Введите число');
        if(inp === ''||inp === null){
        return null}
        let qv = Number(inp);
        if(!isNaN(qv)){
        return qv}
    }
}
let res = readNumber();
if (res === null){
alert('Отменено');}
else{
alert(res);}