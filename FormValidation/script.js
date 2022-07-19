$(document).ready(function (){
  $('#usernameValidation').hide();
  $('#passwordValidation').hide();
  $('#confirm_passwordValidation').hide();
  $('#emailValidation').hide();

  let usernameError = true;
  let passwordError = true;
  let confirm_passwordError = true;
  let emailError = true;

  // username validation
  $('#username').keyup(function(){
    username_validation();
  });

  function username_validation(){
    let usernameRegex =  new RegExp("^[A-Za-z][A-Za-z0-9_]{7,29}$");
    let usrenameVal = $('#username').val();
    if(usernameRegex.test(usrenameVal)){
      $('#usernameValidation').hide();
    }
    else{
      $('#usernameValidation').show();
      $('#usernameValidation').html('Invalid Username');
      $('#usernameValidation').css('color','#ff0000');
      usernameError = false;
      return false;
    }
  }

  // password validation
  $('#password').keyup(function(){
    password_validation();
  });

  function password_validation(){
    let passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let passwordVal = $('#password').val();
    if(passRegex.test(passwordVal)){
      $('#passwordValidation').hide();
    }
    else{
      $('#passwordValidation').show();
      $('#passwordValidation').html('Invalid Password');
      $('#passwordValidation').css('color','#ff0000');
      passwordError = false;
      return false;
    }
  }

    // confirm password validation
  $('#confirm_password').keyup(function(){
    confirm_password_validation();
  });

  function confirm_password_validation(){
    let passwordVal = $('#password').val();
    let confirmpassVal = $('#confirm_password').val();

    if(passwordVal != confirmpassVal){
      $('#confirm_passwordValidation').show();
      $('#confirm_passwordValidation').html('Password did not match');
      $('#confirm_passwordValidation').css('color','#ff0000');
      confirm_passwordError = false;
      return false;
    }
    else{
      $('#confirm_passwordValidation').hide();
    }
  }

  // email validation
  $('#email').keyup(function(){
    email_validation();
  });

  function email_validation(){

    let emailregex = new RegExp("^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/");
    let emailregexo = new RegExp("^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$");  
    let emailVal = $('#email').val();

    if(emailregex.test(emailVal) || emailregexo.test(emailVal)){
      $('#emailValidation').hide();
    }
    else{
      $('#emailValidation').show();
      $('#emailValidation').html('Invalid Email');
      $('#emailValidation').css('color','#ff0000');
      emailError = false;
      return false;
    }
  }

  $('#btn').click(function(){
    validation();
  });

  function validation(){
    username_validation();
    password_validation();
    confirm_password_validation();
    email_validation();
    if(usernameError==true && passwordError==true  && confirm_passwordError==true  && emailError==true){
      return true;
    }
    else{
      return false;
    }
  }
});

