# Pizza Parlor

#### By Jase Seeley

#### Create your own pizza and see the price.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

A mock pizza parlor page. Choose a pizza size, select your toppings, and click submit to see the price. 

## Setup/Installation Requirements

* Visit https://jcseeley.github.io/pizza-parlor
* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open the index.html file in your browser.

## Known Bugs

* No known bugs at this time.

## License

MIT

Copyright (c) 2022 Jase Seeley

## Tests
* Describe: Pizza(size, toppings, price)  
Test: "It should construct a pizza object with name, toppings, and price properties."  
Code: let pizza1 = new Pizza(16, "cheese", 12);  
Expected Output: {size: 16, toppings: "cheese", price: 12}  
  
  Test: "It should add multiple values to toppings property."  
  Code: let pizza1 = new Pizza(12, ["cheese", "pepperoni"], 12);  
  Expected Output: {size: 12, toppings: ["cheese", "pepperoni"], price: 12}  
  
* Describe: Pizza.prototype.sizePrice()   
Test: "It should change the price property value to 12 if the pizza size is equal to 12."  
Code:  Pizza.prototype.sizePrice = function() {
  if (this.size === 12) {
    this.price = 12;
  }
}  
Expected Output: {size: 12, toppings: "cheese", "pepperoni", price: 12}  
  
* Describe: Pizza.prototype.toppingsPrice()  
Test: "It should add 2 to price property value if pizza has two toppings."  
Code: Pizza.prototype.toppingsPrice = function() {
  if (this.toppings["length"] === 2) {
    this.price += 2;
  } 
}  
Expected Output: {size: 12, toppings: ["cheese", "pepperoni"], price: 14}

* Describe Pizza.prototype.crustPrice()  
Test: "It should add 2 to price property value if crust is gluten free."  
Code: Pizza.prototype.crustPrice = function() {
    if (this.crust === 'glutenFree') {
    this.price += 2;
    } 
}  
Expected Output: {size 12, ['pepperoni'], 'garlicHerb', 2}


## Refactored Tests
* Describe: Pizza.prototype.sizePrice()   
Test: "It should change the price property value to equal the size property value."  
Code:  Pizza.prototype.sizePrice = function() {
  this.price = this.size;
}  
let pizza = new Pizza(12, 'cheese');  
pizza.sizePrice();  
Expected Output: {size: 12, toppings: 'cheese', price: 12} 
  
* Describe: Pizza.prototype.toppingsPrice()  
Test: "It should add $2 to the price for each topping."  
Code: Pizza.prototype.toppingsPrice = function() {
  this.price += this.toppings["length"] * 2
}  
let pizza = new Pizza(12, ['pepperoni'], 12)
Expected Output: {size: 12, toppings: ['pepperoni'], price: 14}
