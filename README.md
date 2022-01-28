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
* Describe Pizza(size, toppings)  
Test: "It should construct a pizza object with name and toppings properties."  
Code: let pizza1 = new Pizza(16, "cheese");  
Expected Output: {size: 16, toppings: "cheese"}  
  
  Test: "It should add multiple values to toppings property."  
  Code: let pizza1 = new Pizza(12, ["cheese", "pepperoni"]);  
  Expected Output: {size: 12, toppings: ["cheese", "pepperoni"]}  
  
* Describe Pizza.prototype.addSize = function(pizzaSize) {
    this.size = pizzaSize;
  }  
  Test: "It should change pizza1 size to 14."  
  Code: pizza1.addSize(14);  
  Expected Output: {size: 14}