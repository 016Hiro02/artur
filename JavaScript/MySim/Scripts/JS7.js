let checkSpam = (str) =>{
  str = str.toLowerCase();
  let target =['viagra','xxx'];
  alert(target)
  if(str.includes(target))
  {
    return true
  }
  else
  return false;
}
let str = prompt('Введите строку')
alert(checkSpam(str))