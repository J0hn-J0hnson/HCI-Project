const name = document.getElementById('name')
const confirm_name = document.getElementById('confirm_name')
const confirm_password = document.getElementById('confirm_password')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  if (name.value === '' || name.value == null) {
    alert("Name is required!");
  }else if (password.value === '' || password.value == null) {
    alert("Password is required!");
  }else if (confirm_name.value === '' || confirm_name.value == null) {
    alert("Confirm Name is required!");
  }else if (confirm_password.value === '' || confirm_password.value == null) {
    alert("Confirm Password is required!");
  }else if (name.value != confirm_name.value){
    alert("Name and Confirm name must be the same!")
  }else if (password.value != confirm_password.value){
    alert("Password and Confrim Password must be the same!")
  }else{
    alert("Account registered!")
  }
})