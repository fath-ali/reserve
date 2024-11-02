
const btn = document.getElementById("loginButton");
btn.addEventListener('click',function(){
    const unsername = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById("password").value;
    const place = document.getElementById('place').value;
    const message = document.getElementById('message');
    if(unsername && password && phone && place){
        message.textContent =`Welcome ${unsername}`;
        message.style.color = 'green';
    }else if(place ==='kabul'){
        message.textContent = `You are not availibe here ${place}`
        message.style.color = 'red'
    }
    if(unsername ==='' && password ==='' && phone =='' && place ==''){
    message.textContent = `Please Fill The Form Here`;
    message.style.color = 'red'
     message.style.width = '50%';
    message.style.height = '50px';
    message.style.textAlign = 'center'
    message.style.fontSize = '1.6rem';
    }

})