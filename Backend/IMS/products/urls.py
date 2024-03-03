from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_info),
    path('put_product/put',views.put),
    path('put_product/',views.put_product),
    path('delete/<int:id>/',views.delete,name='delete'),
    path('delete/',views.delete_items_list)
]