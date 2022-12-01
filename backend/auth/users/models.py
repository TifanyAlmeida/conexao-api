from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    nome = models.CharField(max_length=255)
    nascimento = models.DateField()
    cpf = models.CharField(max_length=15)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
