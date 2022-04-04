# Pizza Parlor

#### By Jase Seeley

#### Epicodus Week #4 Independent Code Review: Object-Orientated JavaScript  
Create your own pizza and see the price.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

A mock pizza parlor page. Choose a pizza size, pick a crust, select your toppings, and click submit to see the price. 

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
  Test: "It should add 2 to price property value if crust is garlic & herb."  
Code: Pizza.prototype.crustPrice = function() {
    if (this.crust === 'Garlic-&-Herb') {
    this.price += 2;
    } 
}  
Expected Output: {size 12, ['pepperoni'], 'Garlic-&-Herb', 2}
    
    Test: "It should add 3 to price property value if crust is gluten free."  
Code: Pizza.prototype.crustPrice = function() {
    else if (this.crust === 'Gluten-Free') {
    this.price += 3;
    }}  
Expected Output: {size 12, ['pepperoni'], 'Gluten-Free', 3}  
  
  Test: "It should add 4 to price property value if crust is pan."  
Code: Pizza.prototype.crustPrice = function() {
    else if (this.crust === 'Pan') {
    this.price += 4;
    } 
}  
Expected Output: {size 12, ['pepperoni'], 'Pan', 4}  
  
  Test: "It should add 5 to price property value if crust is stuffed."  
Code: Pizza.prototype.crustPrice = function() {
    else if (this.crust === 'Stuffed') {
    this.price += 5;
    } 
}  
Expected Output: {size 12, ['pepperoni'], 'Stuffed', 5}  
  
  Test: "It should add 0 to price property value if crust is original or wheat."  
Code: Pizza.prototype.crustPrice = function() {
    else {
    this.price += 0;
    } 
}  
Expected Output: {size 12, ['pepperoni'], 'Original', 0}


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
