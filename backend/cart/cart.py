from decimal import Decimal
from django.conf import settings

class Cart(object):
    def __init__(self, request):
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart
     
    def add_product(self, product_id, quantity):
        if product_id not in self.cart:
            self.cart[product_id] = {'quantity': quantity}
        self.save_session()

    def update_product(self, product_id, quantity):
        if product_id in self.cart:
            self.cart[product_id] = {'quantity': quantity}
        self.save_session()
 
    def save_session(self):
        self.session[settings.CART_SESSION_ID] = self.cart
        self.session.modified = True

    def clear_session(self):
        del self.session[settings.CART_SESSION_ID]
        self.session.modified = True
 
    def remove_product(self, product_id):
        if product_id in self.cart:
            del self.cart[product_id]
            self.save_session()
 
    # TODO aqui precisa de integracao com as API's de Produtos 1
    # def get_total_price(self):
    #     pass
 
    # TODO Talvez retornar os itens do carrinho para que a compra prossiga
    def get_cart_itens(self):
        cart_itens = {}
        for product_id in self.cart:
            cart_itens[product_id] = self.cart[product_id]
        return self.cart