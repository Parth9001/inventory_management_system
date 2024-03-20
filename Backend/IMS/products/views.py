from django.shortcuts import render, HttpResponse,redirect
from .models import Products,User
from rest_framework.generics import ListAPIView
from rest_framework import filters
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from .serializers import *
import django

# Create your views here.
@api_view(['GET'])
def get_info(request):
    # return render(request,'info.html',{'products':Products.objects.all().values()})
    Objects = Products.objects.all()
    serializer = PSerializer(Objects,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post(request):
    serializer = PSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


class Delete(APIView):
    def delete(self, request, pk, format=None):
        try:
            instance = Products.objects.get(pk=pk)
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class Put(APIView):
    def put(self, request, pk, format=None):
        try:
            instance = Products.objects.get(pk=pk)
        except Products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = PSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_add(request):
    serializer = USerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def user_list(request):
    users = User.objects.all()
    serializer = USerializer(users,many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# def search(request):
#     st=request.data["search"]
#     allobjects=Products.objects.all()
#     outputobj=Products.objects.none()
#     for obj in allobjects:
#         if st in obj.name:
#             outputobj.append(obj)
#     serializer=PSerializer(outputobj, many=True)
#     return Response(serializer.data)
class SearchAPIView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = PSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class LoginAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            s = USerializer(user)
            # Perform login actions here if needed
            return Response(s.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)