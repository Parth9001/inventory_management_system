# myapp/backends.py
from django.contrib.auth.backends import BaseBackend
from .models import User

class CustomBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        # Custom authentication logic here
        try:
            user = User.objects.get(user_name=username)
            if user.password==password:
                return user
        except User.DoesNotExist:
            return None

        
