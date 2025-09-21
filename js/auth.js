// Email and password validation for sign up and sign in
function validateEmail(email) {
  // Simple regex for email format
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function validatePassword(password) {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
}

function showError(form, message) {
  let error = form.querySelector('.form-error');
  if (!error) {
    error = document.createElement('div');
    error.className = 'form-error';
    error.style.color = '#ff4d4f';
    error.style.margin = '10px 0';
    form.prepend(error);
  }
  error.textContent = message;
}

function clearError(form) {
  let error = form.querySelector('.form-error');
  if (error) error.remove();
}

// Signup validation
if (document.querySelector('.auth-form')) {
  document.querySelector('.auth-form').addEventListener('submit', function(e) {
    clearError(this);
    const email = this.querySelector('input[name="email"]').value.trim();
    const password = this.querySelector('input[name="password"]').value;
    const confirm = this.querySelector('input[name="confirm-password"]');
    if (!validateEmail(email)) {
      e.preventDefault();
      showError(this, 'Please enter a valid email address.');
      return;
    }
    if (!validatePassword(password)) {
      e.preventDefault();
      showError(this, 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.');
      return;
    }
    if (confirm && password !== confirm.value) {
      e.preventDefault();
      showError(this, 'Passwords do not match.');
      return;
    }
  });
}
// Login validation
if (document.querySelector('.auth-form')) {
  document.querySelector('.auth-form').addEventListener('submit', function(e) {
    clearError(this);
    const email = this.querySelector('input[name="email"]').value.trim();
    const password = this.querySelector('input[name="password"]').value;
    if (!validateEmail(email)) {
      e.preventDefault();
      showError(this, 'Please enter a valid email address.');
      return;
    }
    if (!validatePassword(password)) {
      e.preventDefault();
      showError(this, 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.');
      return;
    }
  });
}
