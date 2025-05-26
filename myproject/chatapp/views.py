from django.shortcuts import redirect, render

def chat_page(request):
    return render(request, 'chatapp/chat.html')


def account_view(request):
    return render(request, 'chatapp/user_account.html')

def invite_view(request):
    return render(request, 'userinvite.html')