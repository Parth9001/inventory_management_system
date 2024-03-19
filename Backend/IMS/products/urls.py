from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_info),
    path('post/',views.post),
    path('delete/<int:pk>/',views.Delete.as_view()),
    path('user_add/',views.user_add),
    path('user_info/',views.user_list),
    path('put/<int:pk>',views.Put.as_view()),
    # path('search/', views.search),
    path('search/', views.SearchAPIView.as_view(), name='search'),
    path('api/login/', views.LoginAPIView.as_view(), name='login'),
]