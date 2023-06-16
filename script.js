const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  errorMessage.innerHTML = '';

  const fullname = form.elements['fullname'].value;
  const email = form.elements['email'].value;
  const phone = form.elements['phone'].value;
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm-password'].value;

  if (fullname.length < 5) {
    showError('Full Name must be at least 5 characters long.');
    return;
  }

  if (!email.includes('@')) {
    showError('Email ID should contain the @ character.');
    return;
  }

  if (phone.length !== 10 || phone === '123456789' || isNaN(phone)) {
    showError('Phone Number should be a 10-digit number and not equal to 123456789.');
    return;
  }

  if (password.length < 8 || password === 'password' || password === fullname) {
    showError('Password must be at least 8 characters long and should not be "password" or the user\'s name.');
    return;
  }

  if (password !== confirmPassword) {
    showError('Password and Confirm Password do not match.');
    return;
  }

  // All validations passed, registration successful
  alert('Registration Successful!');
  form.reset();
});

function showError(message) {
  errorMessage.innerHTML = message;
}
