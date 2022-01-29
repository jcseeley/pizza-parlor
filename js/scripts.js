function Pizza(size, toppings, crust, price) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.price = price;
}

Pizza.prototype.sizePrice = function() {
  this.price = this.size;
  return this.price;
}

Pizza.prototype.toppingsPrice = function() {
  this.price += this.toppings["length"] * 2;
  return this.price;
}

Pizza.prototype.crustPrice = function() {
  if (this.crust === 'garlicHerb') {
  this.price += 2;
  } else if (this.crust === 'glutenFree') {
  this.price += 3;
  } else if (this.crust === 'pan') {
  this.price += 4;
  } else if (this.crust === 'stuffed') {
  this.price += 5;
  }
}

$(document).ready(function() {
  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();
    const pizzaSize = parseInt($("select#size").val());
    const pizzaCrust = $("select#crust").val();
    const pizzaToppings = $("input[type=checkbox]:checked").map(function(_, el) {
      return $(el).val();
    }).get();
    let newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust);
    newPizza.sizePrice();
    newPizza.toppingsPrice();
    newPizza.crustPrice();
    $("#price").text("Price: " + "$" + newPizza.price);
    $("#your-size").text("Pizza size: " + newPizza.size + '"');
    $("#your-toppings").text(newPizza.toppings);
    $("#pizza-maker").fadeOut();
    $("#show-price").fadeIn();
  })
})