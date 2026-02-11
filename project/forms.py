from django import forms
from .models import Boglanish


class ContactForm(forms.ModelForm):
    class Meta:
        model=Boglanish
        fields='__all__'

