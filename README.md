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
* Describe Pizza(size, toppings, price)  
Test: "It should construct a pizza object with name, toppings, and price properties."  
Code: let pizza1 = new Pizza(16, "cheese", 12);  
Expected Output: {size: 16, toppings: "cheese", price: 12}  
  
  Test: "It should add multiple values to toppings property."  
  Code: let pizza1 = new Pizza(12, ["cheese", "pepperoni"], 12);  
  Expected Output: {size: 12, toppings: ["cheese", "pepperoni"], price: 12}  
  
* Describe Pizza.prototype.sizePrice()   
Test: "It should change the price property value to 12 if the pizza size is equal to 12."  
Code:  pizza1.sizePrice = function() {
  if (this.size = 12) {
    this.price = 12;
  }
}  
Expected Output: {size: 12, toppings: "cheese", "pepperoni", price: 12}  
