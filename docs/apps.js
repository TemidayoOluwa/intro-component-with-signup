document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  validateInputs(); // Call the function to validate inputs
});

function validateInputs() {
  const inputs = document.querySelectorAll('.general');
  inputs.forEach(input => {
      const value = input.value.trim();
      const parent = input.closest('.cover');
      const errorMessage = parent.querySelector('.error-message');
      const errorIcon = parent.querySelector('.error-icon');
      console.log(errorIcon)
      if (value === '') {
          setError(parent, errorMessage, errorIcon, `${input.placeholder} cannot be empty`);
      } else {
          setSuccess(parent, errorMessage, errorIcon);
      }
  });
}
const parent = input.closest('.cover');
// const inputs= document.querySelector('.blocks');
function setError(parent, errorMessage, errorIcon, message) {
  parent.classList.add('error');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  errorIcon.style.display = 'flex';
}

function setSuccess(parent, errorMessage, errorIcon) {
  parent.classList.remove('error');
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  errorIcon.style.display = 'none';
}


// the toggle eye button
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
  } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
  }
}