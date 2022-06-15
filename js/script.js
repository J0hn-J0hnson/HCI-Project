const name = document.getElementById('name')
const email = document.getElementById('confirm_name')
const address = document.getElementById('address')
const password = document.getElementById('password')
const form = document.getElementById('form')
const check = document.getElementById('check')

form.addEventListener('submit', (e) => {
  if (name.value === '' || name.value == null) {
    alert("Name is required!");
  }else if(email.value === '' || email.value == null){
    alert("Email is required!");
  }else if (password.value === '' || password.value == null) {
    alert("Password is required!");
  }else if (address.value === '' || address.value == null){
    alert("Address is required!");
  }else if (check.checked === 0){
    alert("agree to the terms and conditions!")
  }else{
    alert("Account registered!")
  }
})