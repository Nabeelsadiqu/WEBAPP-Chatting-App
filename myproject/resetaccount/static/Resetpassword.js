document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.getElementById('recoveryForm');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');

    recoveryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        if (!email) return;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        fetch(window.location.href, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            },
            body: `email=${encodeURIComponent(email)}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccess(`Password reset link sent to ${email}`);
                recoveryForm.reset();
            } else {
                showSuccess(data.message || 'Email not found.');
            }
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Reset Link';
        })
        .catch(error => {
            console.error('Error:', error);
            showSuccess('Something went wrong. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Reset Link';
        });

        function showSuccess(message) {
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        }
    });
});
