from sqlite3 import IntegrityError
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        remember_me = request.POST.get("remember") 

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)

            # If "Remember Me" is checked
            if not remember_me:
                # Session will expire when browser is closed
                request.session.set_expiry(0)
            else:
                # Session will expire in 1 Day
                request.session.set_expiry(86400)
            return redirect('chat')
        else:
            return render(request, 'myapp/login.html', {'error': 'Invalid credentials'})

    return render(request, 'myapp/login.html')


def signup_view(request):
    if request.method == 'POST':
        fullname = request.POST.get('fullname', '').strip()
        email = request.POST.get('email', '').strip()
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '')
        confirm_password = request.POST.get('confirm_password', '')

        # Validate required fields
        if not all([fullname, email, username, password, confirm_password]):
            return render(request, 'myapp/Signup.html', {'error': 'All fields are required'})

        # Check if passwords match
        if password != confirm_password:
            return render(request, 'myapp/Signup.html', {'error': 'Passwords do not match'})

        # Check if username already exists
        if User.objects.filter(username=username).exists():
            return render(request, 'myapp/Signup.html', {'error': 'Username already exists'})

        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.first_name = fullname
            user.save()
        except IntegrityError:
            return render(request, 'myapp/Signup.html', {'error': 'An error occurred. Please try again.'})

        return redirect('login')  # Redirect to login page

    return render(request, 'myapp/Signup.html')