from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.chat_page, name='chat'),
    path('user_account/', views.account_view, name='user_account'),
    path('invite/', views.invite_view, name='user_invite'),
    path('', views.help_center, name='help_center'),
]
