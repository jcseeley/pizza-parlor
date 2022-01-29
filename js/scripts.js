function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
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

function displayToppingDetails() {

}

$(document).ready(function() {
  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();
    const pizzaSize = parseInt($("select#size").val());
    const pizzaToppings = $("input[type=checkbox]:checked").map(function(_, el) {
      return $(el).val();
    }).get();
    let newPizza = new Pizza(pizzaSize, pizzaToppings);
    newPizza.sizePrice();
    newPizza.toppingsPrice();
    $("#price").text("$" + newPizza.price);
    $("#size").html(newPizza.size + '"');
    console.log(newPizza.size + '"');
    $("#pizza-maker").fadeOut();
    $("#show-price").fadeIn();
  })
})