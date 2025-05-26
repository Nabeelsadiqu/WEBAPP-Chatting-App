from django.urls import path
from .views import forgot_password
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('resetaccount/', forgot_password, name='resetaccount'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(
        template_name='newpass.html'), name='password_reset_confirm'),
]