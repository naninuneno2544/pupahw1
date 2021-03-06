from django.db import models

class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    language = models.CharField(default='python', max_length=100)
    style = models.CharField(default='friendly', max_length=100)

    class Meta:
        ordering = ['created']

class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='')
    price = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=100, default='')
    page = models.CharField(max_length=100, default='')
    immage = models.CharField(max_length=1000, default='')

    def __str__(self):
        return self.name