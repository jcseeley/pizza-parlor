function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addSize = function(pizzaSize) {
  this.size = pizzaSize;
}