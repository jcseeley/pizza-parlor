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

$(document).ready(function() {
  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();
    const pizzaSize = parseInt($("select#size").val());
    const pizzaCrust = $("select#crust").val();
    const pizzaToppings = $("input[type=checkbox]:checked").map(function(_, el) {
      return $(el).val();
    }).get();
    let newPizza = new Pizza(pizzaSize, pizzaToppings);
    newPizza.sizePrice();
    newPizza.toppingsPrice();
    $("#price").text("Price: " + "$" + newPizza.price);
    $("#your-size").text("Pizza size: " + newPizza.size + '"');
    $("#your-toppings").text(newPizza.toppings);
    $("#pizza-maker").fadeOut();
    $("#show-price").fadeIn();
  })
})