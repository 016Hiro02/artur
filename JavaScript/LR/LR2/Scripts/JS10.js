let isNum =()=>{
    let inp = document.getElementById('inp');
			let vl = inp.value;
			if(!isNaN(vl)){
				let otv = document.getElementById('otv');
				otv.value =  vl*vl;
			} else {
				alert('Введено не число!')
			}
}