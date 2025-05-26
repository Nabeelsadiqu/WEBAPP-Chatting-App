function togglePassword(fieldId) {
        const passwordField = document.getElementById(fieldId);
        const toggleIcon = passwordField.nextElementSibling;
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    }

    // Password Strength Checker
    document.getElementById('newPassword').addEventListener('input', function(e) {
        const password = e.target.value;
        const strengthBar = document.getElementById('strengthBar');
        const strengthText = document.getElementById('strengthText');
        
        let strength = 0;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^A-Za-z0-9]/)) strength++;
        if (password.length >= 8) strength++;
        
        const strengthPercent = (strength / 5) * 100;
        strengthBar.style.width = strengthPercent + '%';
        
        if (strength <= 2) {
            strengthBar.style.backgroundColor = '#ff4757';
            strengthText.textContent = 'Password strength: weak';
        } else if (strength <= 3) {
            strengthBar.style.backgroundColor = '#ffa502';
            strengthText.textContent = 'Password strength: medium';
        } else {
            strengthBar.style.backgroundColor = '#2ed573';
            strengthText.textContent = 'Password strength: strong';
        }
    });

    // Form Validation
    document.getElementById('passwordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordError = document.getElementById('passwordError');
        const confirmError = document.getElementById('confirmError');
        
        // Reset errors
        passwordError.style.display = 'none';
        confirmError.style.display = 'none';

        let isValid = true;

        if (newPassword.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            passwordError.style.display = 'block';
            isValid = false;
        }

        if (newPassword !== confirmPassword) {
            confirmError.textContent = 'Passwords do not match';
            confirmError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Submit form (replace with actual submission logic)
            alert('Password reset successfully!');
            // window.location.href = 'login.html';
        }
    });