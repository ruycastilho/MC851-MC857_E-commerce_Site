# Instalação

Usar python3 no projeto, precisei usar algumas funções que existem em Django2 mas ele só é suportado em python3.  
Basico:  
  - pip3 install django
  - pip3 install djangorestframework
  - pip3 install django-cors-headers  
  - pip3 install requests

Instalando via pip3 vc pega o django2.  
djangorestframework é o framework que permite criar API's REST em django.  
O django-cors-headers eu não sei se é necessário para nós mas vi que é comum ter que usar em algum momento no projeto. 
Finalmente, requests é uma lib em python que permite fazer requisições http muito facilmente e tem uma documentação boa.

Podem fazer isso em ambiente virtual com env ou schroot, ou instalar direto na máquina. Eu instalei direto na máquina porque não sei quando vou mexer com isso de novo.  

Depois de instalado, dar um "python3 manage.py runserver" para rodar o servidor. O acesso é em "localhost:8000". No momento, se vc usar localhost:8000/admin vc consegue acessar o sistema.  

# Notas

Nem tudo o que eu colocar aqui está pode estar 100% certo, se ficar em dúvida dar um google.  
Sobre o fluxo, como a gnt conversou outro dia, hj tá assim:  

React (front) <-> Django (back) <-> API's de módulos (azure no nosso caso)

Tem dois diretorios importantes dentro de backend/: mc85x_backend e sac

### mc85x_backend
Tem uns arquivos de configuração mais gerais (settings.py) e um que define urls para view (urls.py).  
No urls.py é onde vc declara, por exemplo, o /admin/ que a gnt usa para acessar o sistema.  
É onde vc coloca tb outras URL's que for criar. Eu criei o /api/ que é uma que usei para fazer a parte de integração com o front-end.  

### sac
sac é um app que eu criei. A maior parte do trabalho no backend vai ser em apps que temos que criar. O conceito de app ainda é meio confuso, mas acredito que seja uma modularização de funcionalidades do site para poder reutilizar em outro projeto depois. Notar que no settings.py eu adiciono o 'sac' à lista de installed apps.  
Alguns arquivos importantes:
1. models.py - Aqui é onde fica a criação de um modelo, eu penso nisso como algo a ser traduzido em um "esquema" (tabela) em banco de dados pelo django.
2. urls.py - Aqui é onde a gnt linka uma URL com uma função de uma view  
3. admin.py - Aqui é onde vc faz o seu modelo poder ser interagido com o sistema no /admin/
4. views.py - Esta é a parte mais importante, é onde vc define funções que vão ser chamadas quando ocorrer uma requisição. 

Sobre o views.py, defini uma função deste modo:  
def add_ticket(request):
[...]

Toda função aqui precisa retornar um HttpResponse. Se for necessário, dá para realizar a interação com o BD definido tb.  
Por exemplo no add_ticket eu quero adicionar a mensagem que foi enviada no banco de dados na tabela de tickets. Consigo fazer isso deste modo:  
```
models.Ticket.objects.create(ticket_description=body['message'], ticket_id=ticket_id)
```

Em resumo, o fluxo de dev no django parece algo assim:
  - Criar modelo no models.py
  - Adição do modelo no admin
  - Definir a interação da URL com alguma função no views.py, no APP_NAME/urls.py
  - Tratar a requisição no APP_NAME/views.py, usar o requests para chamar as API's dos outros módulos.

Onde APP_NAME é o nome do app que for criado para determinada funcionalidade.  

# Referencias  
Documentação do requests:  
http://docs.python-requests.org/en/master/  

Tutoriais em Django:  
http://www.django-rest-framework.org/tutorial/quickstart/  
https://tutorial.djangogirls.org/pt/ //Este é mto bom!  
https://docs.djangoproject.com/pt-br/2.0/intro/tutorial01/  

