function PassAss(){
    let pass = document.getElementById('password');
    let ck = document.getElementById('ck')
    if (ck.checked){
        pass.type="text";
    }
    else {
        pass.type="password";
    }
}
