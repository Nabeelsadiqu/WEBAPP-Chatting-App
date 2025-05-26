from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.urls import reverse

def forgot_password(request):
    success = False
    if request.method == 'POST':
        email = request.POST.get('email')
        try:
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            reset_link = request.build_absolute_uri(
                reverse('password_reset_confirm', kwargs={'uidb64': uid, 'token': token})
            )
            message = f'Hi {user.username},\n\nClick here to reset your password:\n{reset_link}'
            send_mail(
                'Password Reset Request',
                message,
                'nabeelwd248@gmail.com.com',
                [email],
                fail_silently=False,
            )
            return JsonResponse({'success': True, 'message': f'Reset link sent to {email}'})
        except User.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'No account with this email found.'})
    else:  # You might want to display a generic message
         return render(request, 'resetaccount/forgot_password.html', {'success': success})
