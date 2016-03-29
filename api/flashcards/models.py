from __future__ import unicode_literals

from django.db import models


class Card(models.Model):
    path = models.TextField()
    front = models.TextField()
    back = models.TextField()
    source = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "%s (%s)" % (self.front, self.path)


class Review(models.Model):
    card = models.ForeignKey('Card', on_delete=models.CASCADE)
    show_after = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
