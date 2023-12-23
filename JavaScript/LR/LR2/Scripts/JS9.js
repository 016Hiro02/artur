let fokus=(tx1=document.getElementById('tx1'),tx2=document.getElementById('tx2'))=>{
  let temp = tx1.value;
  tx1.value = tx2.value;
  tx2.value = temp;
}