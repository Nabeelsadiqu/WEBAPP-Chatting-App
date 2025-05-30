  function startChat() {
            const friendUrl = document.getElementById('friendUrl').value.trim();
            
            if (!friendUrl) {
                alert("Please enter your friend's WebChat URL");
                return;
            }
            
            // In a real application, this would validate and connect to the friend's URL
            // window.location.href = friendUrl;
            
            // For demo purposes, show an alert
            alert(`Connecting to: ${friendUrl}\n\n(Please Wait...)`);
            window.location.href = "chat.html"; // Redirect to Chatpage
        }
        
        // function createNewChat() {
        //     // In a real application, this would create a new chat session
        //     // window.location.href = "new-chat.html";
            
        //     // For demo purposes, show an alert
        //     alert("Creating a new chat... (This would generate a new chat URL in a real app)");
        // }