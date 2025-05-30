// In-memory storage for chat history
const userChats = {};

// Auto-resize textarea
const messageInput = document.getElementById('messageInput');
messageInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

// Send message function
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

function updateLastMessageInUserList() {
    const messages = chatMessages.querySelectorAll('.message');
    if (messages.length === 0) return;
    const last = messages[messages.length - 1].querySelector('.message-content').innerText;
    const active = document.querySelector('.user-item.active');
    if (active) {
        const lastMsgDiv = active.querySelector('.last-message');
        if (lastMsgDiv) lastMsgDiv.innerText = last;
    }
}

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    const messageElement = document.createElement('div');
    messageElement.className = 'message sent';

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageElement.innerHTML = `
        <div class="message-content">${messageText}</div>
        <div class="message-time">${timeString}</div>
    `;

    chatMessages.appendChild(messageElement);

    messageInput.value = '';
    messageInput.style.height = 'auto';

    chatMessages.scrollTop = chatMessages.scrollHeight;

    updateLastMessageInUserList();

    setTimeout(simulateReply, 1000 + Math.random() * 2000);
}

function simulateReply() {
    const replies = [
        "That's cool!",
        "I see what you mean.",
        "Interesting point!",
        "Let me think about that...",
        "I agree with you.",
        "What else is new?",
        "I Think you are Busy",
        "Thanks for sharing!",
        "I dont wants to talk to you",
        "I am not interested in this",
        "I am not in the mood to talk", 
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    const messageElement = document.createElement('div');
    messageElement.className = 'message received';

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageElement.innerHTML = `
        <div class="message-content">${randomReply}</div>
        <div class="message-time">${timeString}</div>
    `;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    updateLastMessageInUserList();
}

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// User selection
const userItems = document.querySelectorAll('.user-item');
userItems.forEach(item => {
    item.addEventListener('click', function() {
        // Save current chat
        const previousActive = document.querySelector('.user-item.active');
        if (previousActive) {
            const prevName = previousActive.querySelector('.user-name').textContent;
            userChats[prevName] = Array.from(chatMessages.children).map(msg => msg.outerHTML);
        }

        // Activate clicked user
        userItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // Update chat header
        const userNameField = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const statusText = document.getElementById('statusText');

        const name = this.querySelector('.user-name').textContent;
        const avatar = this.querySelector('.user-avatar').textContent;
        const isOnline = this.querySelector('.status-dot') && !this.querySelector('.status-dot-off');

        userNameField.textContent = name;
        userAvatar.textContent = avatar;
        statusText.textContent = isOnline ? 'Online' : 'Offline';

        // Load chat history
        chatMessages.innerHTML = '';
        if (userChats[name]) {
            chatMessages.innerHTML = userChats[name].join('');
        } else {
            const starter = document.createElement('div');
            starter.className = 'message received';
            starter.innerHTML = `
                <div class="message-content">Hi there! This is the start of your conversation with ${name}.</div>
                <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            `;
            chatMessages.appendChild(starter);
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;

        updateLastMessageInUserList();
    });
});

// DOMContentLoaded setup
document.addEventListener('DOMContentLoaded', function () {
    // Search
    const searchInput = document.querySelector('.search-input');
    const userItems = document.querySelectorAll('.user-item');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        userItems.forEach(user => {
            const userName = user.querySelector('.user-name').textContent.toLowerCase();
            user.style.display = userName.includes(query) ? 'flex' : 'none';
        });
    });

    // Settings menu toggle
    const settingsIcon = document.getElementById('settingsIcon');
    const settingsMenu = document.getElementById('settingsMenu');

    settingsIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => settingsMenu.style.display = 'none');
    settingsMenu.addEventListener('click', e => e.stopPropagation());

    
    document.getElementById('accountBtn').addEventListener('click', () => {
        // window.location.href = "{% url 'user_account' %}";  // points to your account view
        const url = document.getElementById('accountBtn').getAttribute('data-url');
        window.location.href = url;
    });
    
    document.getElementById('inviteBtn').addEventListener('click', () => {
        // window.location.href = "{% url 'user_invite' %}";  // name of invite page URL
        const url = document.getElementById('inviteBtn').getAttribute('data-url');
        window.location.href = url;
    });

    document.getElementById('helpBtn').addEventListener('click', () => {
        const url = document.getElementById('helpBtn').getAttribute('data-url');
        window.location.href = url;
    });
    
    // Sign out and account
    document.getElementById('signOutBtn').addEventListener('click', () => {
        window.location.href = "{% url 'logout' %}";  // use the name of your logout URL
    });
    
    document.getElementById('addFriendBtn').addEventListener('click', () => {
        const url = document.getElementById('addFriendBtn').getAttribute('data-url');
        window.location.href = url;
    });

    // Initial scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

const attachmentBtn = document.getElementById('attachmentBtn');
const attachmentPopup = document.getElementById('attachmentPopup');

// Toggle popup on click
attachmentBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    attachmentPopup.style.display = 
        attachmentPopup.style.display === 'flex' ? 'none' : 'flex';
});

// Hide popup when clicking outside
document.addEventListener('click', () => {
    attachmentPopup.style.display = 'none';
});

// Prevent popup from closing when clicked inside
attachmentPopup.addEventListener('click', (e) => e.stopPropagation());