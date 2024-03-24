from django.shortcuts import render, HttpResponse,redirect
from .models import Products,User,ProductLog
from rest_framework.generics import ListAPIView
from rest_framework import filters
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from django.db import models
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
    
# @api_view(['POST'])
# def issue_product(request):
#     if request.method == 'POST':
#         username = request.data.get('username', None)
#         product_id = request.data.get('product_id', None)
#         quantity = request.data.get('quantity', None)        
        
#         if not username or not product_id or not quantity:
#             return Response({'error': 'Username, product ID and quantity are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
#         try:
#             user = User.objects.get(username=username)
#             product = Products.objects.get(product_id=product_id)
#             product.quantity-=int(quantity)
#             if product.quantity <= 0:
#                 return Response({'error': 'Product is out of stock.'}, status=status.HTTP_400_BAD_REQUEST)
            
#             user.products_issued.add(product)
#             product.save()
#             user.save()
            
#             return Response({'message': 'Product issued successfully.'}, status=status.HTTP_200_OK)
        
#         except User.DoesNotExist:
#             return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        
#         except Products.DoesNotExist:
#             return Response({'error': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)

# @api_view(['POST'])
# def get_users_of_products(request):
#     # user_name=request.data.get('username')
#     try:
#             product_id = request.data.get('product_id')
#             product = Products.objects.get(product_id=product_id)
#             users_issued = product.user_set.all()
#             data = []
#             for user in users_issued:
#                 issued_data = {
#                     'username': user.username,
#                     'issued_datetime': user.products_issued.filter(product_id=product_id).first().issued_datetime,
#                     'quantity': user.products_issued.filter(product_id=product_id).first().quantity
#                 }
#                 data.append(issued_data)
#             return Response(data, status=status.HTTP_200_OK)
#         # user=User.objects.get(username=user_name)
#         # products=user.products_issued
#         # serializer=PSerializer(products)
#         # return Response(serializer.data, status=status.HTTP_200_OK)

#     except Products.DoesNotExist:
#         return Response({'error': 'Products not found.'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def get_product_info(request):
    try:
        pk = request.data.get('pk')
        product = Products.objects.get(product_id=pk)
        serializer = PSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Products.DoesNotExist:
        return Response({'error': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)

# @api_view(['GET'])
# def get_issued_products(request):
#     try:
#         products=Products.objects.filter(issued_to__isnull=False)
#         serializer=PSerializer(products, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     except Products.DoesNotExist:
#         return Response({'error': 'Products not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def issue_product(request):
    if request.method == 'POST':
        product_id = request.data.get('product_id')
        username = request.data.get('username')
        quantity = int(request.data.get('quantity'))
        product = Products.objects.get(product_id=product_id)
        if quantity > product.quantity:
            return render(request, 'error.html', {'error_message': 'Not enough quantity available.'})
        else:
            product.quantity -= quantity
            product.save()
            t = ProductLog(user=User.objects.get(username=username), product=product, quantity=quantity)
            t.save()
            return Response(PLogSerializer(ProductLog.objects.all(),many=True), status=status.HTTP_200_OK)
        
@api_view(['POST'])
def get_log_of_product(request):
    try:
        product_id = request.data.get('product_id')
        product = Products.objects.get(product_id=product_id)
        # serializer = PLogSerializer(ProductLog,many=True)
        return Response(ProductLog.objects.get(product=product))
    except:
        return Response({'error': 'Products not found.'}, status=status.HTTP_404_NOT_FOUND)
