document.addEventListener('DOMContentLoaded', function() {
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const avatarUpload = document.getElementById('avatarUpload');
    const profileAvatar = document.getElementById('profileAvatar');
    const accountForm = document.getElementById('accountForm');
    const usernameInput = document.getElementById('username');
    const usernameAvailability = document.getElementById('usernameAvailability');
    const saveBtn = document.getElementById('saveBtn');

    // Avatar upload functionality
    changeAvatarBtn.addEventListener('click', function() {
        avatarUpload.click();
    });

    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                profileAvatar.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Username availability check (simulated)
    usernameInput.addEventListener('input', function() {
        const username = this.value.trim();
        
        if (username.length < 3) {
            usernameAvailability.style.display = 'none';
            return;
        }
        
        // Simulate API call to check username
        saveBtn.disabled = true;
        usernameAvailability.style.display = 'flex';
        usernameAvailability.className = 'username-availability';
        usernameAvailability.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking availability...';
        
        setTimeout(function() {
            // This is just a simulation - in a real app you'd check with your backend
            const takenUsernames = ['admin', 'test', 'user', 'john'];
            const isAvailable = !takenUsernames.includes(username.toLowerCase());
            
            if (isAvailable) {
                usernameAvailability.className = 'username-availability available';
                usernameAvailability.innerHTML = '<i class="fas fa-check-circle"></i> This username is available';
                saveBtn.disabled = false;
            } else {
                usernameAvailability.className = 'username-availability taken';
                usernameAvailability.innerHTML = '<i class="fas fa-times-circle"></i> This username is taken';
                saveBtn.disabled = true;
            }
        }, 800);
    });

    // Form submission
    accountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = usernameInput.value.trim();
        const bio = document.getElementById('bio').value.trim();
        
        // In a real app, you would send this data to your backend
        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';
        
        setTimeout(function() {
            alert('Profile updated successfully!');
            saveBtn.disabled = false;`  `
            saveBtn.textContent = 'Save Changes';
            window.location.href = 'Chatpage.html';
        }, 1500);
    });

    // Initial check if username is filled
    if (usernameInput.value.trim().length > 0) {
        usernameInput.dispatchEvent(new Event('input'));
    }
});