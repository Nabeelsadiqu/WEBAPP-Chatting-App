from pyexpat.errors import messages
from django.shortcuts import redirect, render
from django.shortcuts import render, redirect
from .forms import ContactForm

def chat_page(request):
    return render(request, 'chatapp/chat.html')


def account_view(request):
    return render(request, 'chatapp/user_account.html')

def invite_view(request):
    return render(request, 'userinvite.html')

# This file defines the help center view.
def help_center(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been submitted. We will respond within 24 hours.')
            return redirect('help_center')
    else:
        form = ContactForm()
    return render(request, 'Chatpage/helpcenter.html', {'form': form})
