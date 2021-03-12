// combine all JS files into one
// Worked differently on mac vs windows, both chrome
// Stop ability to refresh/reset timer
// Store email/Answers for later  use
// quick way to identify each one
// print whole page with answers entered?
// use JS to create page by putting images in array/creating id's vs. HTML?

//login page JS

var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPhone = document.getElementById('userPhone');
var loginSubmit = document.getElementById('loginSub');
var error = document.getElementById('error');

loginSubmit.addEventListener('click', () => {
  //format for email
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  //format for phone number, must be 10 digits
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  //check if the name is at least 2 chars
  //display error that name must be 2+ chars
  //stop page from refreshing or continuing
  if (userName.value.length < 2) {
    error.style.display = 'initial';
    error.innerHTML = 'Name must be at least 2 characters.';
    return false;

    //check for valid email, otherwise show error and stop page
  } else if (!email_regex.test(userEmail.value)) {
    error.style.display = 'initial';
    error.innerHTML = 'Please enter a valid email.';
    return false;

    //check for valid phone number, otherwise show error and stop page
  } else if (!phoneno.test(userPhone.value)) {
    error.style.display = 'initial';
    error.innerHTML = 'Please enter a 10 digit phone number.';
    return false;

    //if all criteria met, continue to next page
  } else {
    error.style.display = 'none';
    location.href = 'welcome.html';
  }
});
