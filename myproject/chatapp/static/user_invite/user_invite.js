 document.addEventListener('DOMContentLoaded', function() {
            // Copy invite link functionality
            const copyBtn = document.getElementById('copyBtn');
            const inviteLink = document.getElementById('inviteLink');
            
            copyBtn.addEventListener('click', function() {
                inviteLink.select();
                document.execCommand('copy');
                
                // Change button text temporarily
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.backgroundColor = '#4caf50';
                
                setTimeout(function() {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#4a6bff';
                }, 2000);
            });

            // Email invite functionality
            document.getElementById('emailInviteBtn').addEventListener('click', function() {
                // In a real app, this would open an email invite dialog
                alert('Email invite dialog would open here');
            });

            // Social share buttons
            const socialButtons = document.querySelectorAll('.social-btn');
            socialButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const platform = this.classList.contains('facebook') ? 'Facebook' :
                                    this.classList.contains('twitter') ? 'Twitter' :
                                    this.classList.contains('whatsapp') ? 'WhatsApp' : 'Telegram';
                    alert(`Share dialog for ${platform} would open here`);
                });
            });
        });