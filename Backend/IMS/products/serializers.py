from rest_framework import serializers
from .models import Products,User
from django.contrib.auth import authenticate

    
class USerializer(serializers.ModelSerializer):   
    class Meta:
        model = User
        fields = '__all__' 
class PSerializer(serializers.ModelSerializer):   
    issued_to=USerializer(many=True, read_only=True)
    class Meta:
        model = Products
        fields = '__all__' 

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                data['user'] = user
            else:
                raise serializers.ValidationError("Unable to log in with provided credentials.")
        else:
            raise serializers.ValidationError("Must include 'username' and 'password'.")
        return data