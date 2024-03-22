from django.urls import path
from . import views

urlpatterns = [
    path('post/',views.post),
    path('delete/<int:pk>/',views.Delete.as_view()),
    path('user_add/',views.user_add),
    path('user_info/',views.user_list),
    path('put/<int:pk>',views.Put.as_view()),
    path('search/', views.SearchAPIView.as_view(), name='search'),
    path('api/login/', views.LoginAPIView.as_view(), name='login'),
    path('', views.get_info),
    path('issue_product/',views.issue_product),
    path('user_products_issued/<str:product_id>',views.get_user_products),
    path('product_info/',views.get_product_info),
    path('user_products_issued/',views.get_user_products),
]
