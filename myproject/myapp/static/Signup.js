  // Password strength indicator
        const passwordInput = document.getElementById('password');
        const strengthText = document.getElementById('strengthText');
        const strengthMeter = document.getElementById('strengthMeter');
        const signupBtn = document.getElementById('signupBtn');

        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Check for length
            if (password.length >= 8) strength += 1;
            if (password.length >= 12) strength += 1;
            
            // Check for uppercase letters
            if (/[A-Z]/.test(password)) strength += 1;
            
            // Check for numbers
            if (/[0-9]/.test(password)) strength += 1;
            
            // Check for special characters
            if (/[^A-Za-z0-9]/.test(password)) strength += 1;
            
            // Update strength meter
            let strengthPercent = (strength / 5) * 100;
            strengthMeter.style.width = strengthPercent + '%';
            
            // Update colors and text
            if (strength <= 1) {
                strengthText.textContent = 'Password strength: weak';
                strengthMeter.style.backgroundColor = '#ff4757';
            } else if (strength <= 3) {
                strengthText.textContent = 'Password strength: medium';
                strengthMeter.style.backgroundColor = '#ffa502';
            } else {
                strengthText.textContent = 'Password strength: strong';
                strengthMeter.style.backgroundColor = '#2ed573';
            }
        });

        // Password toggle visibility
        const togglePassword = document.getElementById('togglePassword');
        togglePassword.addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });

        // Form validation
        const signupForm = document.getElementById('signupForm');
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Check if passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Check if terms are agreed
            if (!document.getElementById('agree-terms').checked) {
                alert('You must agree to the terms and conditions!');
                return;
            }
            
            // Simulate successful signup
            signupBtn.disabled = true;
            signupBtn.textContent = 'Creating Account...';
            
            setTimeout(() => {
                alert('Account created successfully! Redirecting to login...');
                // In a real app, you would redirect to login page
                window.location.href = 'Login.html';
            }, 1500);
        });