from django.shortcuts import render


# Create your views here.
def index(request):
	"""Display the login template."""
	return render(request, 'views/angular_base.html', {'request': request})
