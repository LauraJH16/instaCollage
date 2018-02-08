$(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');

  var validateEmail = false;
  var validatePassword = false;

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateEmail && validatePassword) {
      $('#btn-login').attr('disabled', false);
      $('#btn-login').addClass('red');
    }
  }


  $email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    }
  });

  $password.on('input', function() {
    var REGEXPASS = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\0-9]{6,}$/;
    if (REGEXPASS.test($(this).val())) {
      validatePassword = true;
      activeButton();
    }
  });

  $('#btn-login').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'view/home.html';
  });
});
