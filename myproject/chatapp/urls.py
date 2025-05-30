from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.chat_page, name='chat'),
    path('user_account/', views.account_view, name='user_account'),
    path('user_invite/', views.invite_view, name='user_invite'),
    path('helpcenter/', views.helpcenter, name='helpcenter'),
    path('adduser/', views.adduser, name='adduser'),
]
