from flashcards.models import Card
from rest_framework import serializers, viewsets


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Card


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
