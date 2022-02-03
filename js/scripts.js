function Pizza(size, toppings, crust) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  this.price = this.size;
}

Pizza.prototype.toppingsPrice = function() {
  this.price += this.toppings["length"] * 2;
}

Pizza.prototype.crustPrice = function() {
  if (this.crust === 'Garlic-&-Herb') {
    this.price += 2;
  } else if (this.crust === 'Gluten-Free') {
    this.price += 3;
  } else if (this.crust === 'Pan') {
    this.price += 4;
  } else if (this.crust === 'Stuffed') {
    this.price += 5;
  } else {
    this.price += 0;
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
    $("#your-crust").text("Crust: " + newPizza.crust);
    $("#your-toppings").text(newPizza.toppings);
    $("#pizza-maker").fadeOut();
    $("#show-price").fadeIn();
  })
})