from django.shortcuts import render, HttpResponse,redirect
from .models import Products
# Create your views here.

def get_info(request):
    return render(request,'info.html',{'products':Products.objects.all().values()})

def put_product(request):
    return render(request,'put.html')

def put(request):
    name = request.POST['name']
    quantity = request.POST['quantity']
    t_p = Products(name=name,quantity=quantity)
    t_p.save()
    return redirect('./')

def delete(request,id):
    Products.objects.get(id=id).delete()
    return redirect('../')

def delete_items_list(request):
    return render(request,'delete.html',{'products':Products.objects.all().values()})
