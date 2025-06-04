💬 WEBCHAT - Real-Time Online Chatting Application

WebChat is a real-time web-based chat application built with Django for the backend and HTML/CSS/JavaScript for the frontend. It supports private messaging, group chats, user authentication, and online user status, providing a seamless communication experience.

--🚀 Features--

👥 User Authentication – Secure login and registration system

💬 Private Chat – One-to-one messaging with real-time updates

👪 Group Chat – Chat with multiple users in a shared group room

📦 Persistent Messaging – Messages are stored in an SQLite database

🟢 Online Status – Displays which users are currently online

🏠 Clean Interface – Includes pages: Home, Login, Register, Chat, and Admin



🛠️ Tech Stack:-

Backend-

🐍 Python

🌐 Django

🗃 SQLite

Frontend-

🖼 HTML5

🎨 CSS3

🧠 JavaScript

📁 Project Structure

⚙️ Setup Instructions

Clone the Repository:-
git clone (https://github.com/Nabeelsadiqu/WEBAPP-Chatting-App.git)
cd webchat

Create Virtual Environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install Dependencies:-
pip install -r requirements.txt

Run Migrations:-
python manage.py migrate

Run the Development Server:-
python manage.py runserver

Visit in Browser:-
http://127.0.0.1:8000/

🔐 Admin Access--

Create superuser:-
python manage.py createsuperuser

Visit admin dashboard at:-
http://127.0.0.1:8000/admin/

✅ To-Do (Planned Features):-

📱 Mobile-responsive layout

🔔 Real-time notifications

🖼 User profile pictures

🌍 WebSocket-based scalability

🤝 Contributing:-
Contributions are welcome! Please open issues or pull requests to suggest or make improvements.

📄 License:-
This project is licensed under the MIT License. See the LICENSE file for more information.

🌐 Live Demo

👉 webchat.example.com
