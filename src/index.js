function checkPassword(){
const a = document.getElementById('password1').value;
const b = document.getElementById('password2').value;
    if(a ==""){
        document.getElementById('messages').innerHTML="Please fill the password input"
        return false;
    }
    if( a != b){
        alert('Wrong Password')
    }
    else{
        alert('Correct Password')
    }
}
checkPassword();
