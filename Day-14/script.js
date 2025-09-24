let email = document.getElementById('email');
let password = document.getElementById('password');

let users =JSON.parse(localStorage.getItem('users')) || [];

function getUserData(){
    let user = {
        email : email.value,
        password : password.value
    }
    
    users.push(user);
    
    email.value = '';
    password.value = '';
    localStorage.setItem('users',JSON.stringify(users));
  
}




