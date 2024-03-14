from rest_framework import serializers
from .models import Products,User

class PSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Products
        fields = '__all__' 
    
class USerializer(serializers.ModelSerializer):   
    class Meta:
        model = User
        fields = '__all__' 