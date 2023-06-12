function showPassword(){
  var show = document.getElementById('Show')
  if (show.type=='password'){
    show.type='text';
  }
  else {
    show.type='password';
  }
}
function SubmitFunction(){
  alert("Your feedback has been submited")
}
function LogIn(){
  alert("You are Logged in")
}
function Register(){
  alert("Thank you for registering with Uniq Do")
}