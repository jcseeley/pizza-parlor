function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === 14) {
    this.price = 14;
  } else if (this.size === 16) {
    this.price = 16;
  } else {
    this.price = 12;
  } return this.price;
}

Pizza.prototype.toppingsPrice = function() {
  if (this.toppings["length"] === 2) {
    this.price += 2;
  } else if (this.toppings["length"] > 2 && this.toppings <= 5) {
    this.price += 8;
  } else if (this.toppings["length"] > 5 && this.toppings <= 8) {
    this.price += 12;
  } return this.price;
}