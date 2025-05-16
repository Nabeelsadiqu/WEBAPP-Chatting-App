from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('chat')
        else:
            return render(request, 'myapp/login.html', {'error': 'Invalid credentials'})

    return render(request, 'myapp/login.html')


def register_view(request):
    if request.method == 'POST':
        fullname = request.POST['fullname']
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password != confirm_password:
            return render(request, 'myapp/Signup.html', {'error': 'Passwords do not match'})

        if user.objects.filter(username=username).exists():
            return render(request, 'myapp/Signup.html', {'error': 'Username already exists'})

        user = user.objects.create_user(username=username, email=email, password=password)
        user.first_name = fullname
        user.save()
        login(request, user)
        return redirect('chat')

    return render(request, 'myapp/Signup.html')