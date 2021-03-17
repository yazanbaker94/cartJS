/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementById('tbody');
 tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.getElementById('tbody');

  // TODO: Iterate over the items in the cart
  for(let i=0; i<cart.items.length; i++) {
      // TODO: Create a TR

    let tRow = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tDDelete = document.createElement('td');
  let tDQuantity = document.createElement('td');
  let tDItem = document.createElement('td');

  tDDelete.textContent = 'X';
  tDDelete.setAttribute('x', i);
  tDDelete.addEventListener('click', removeItemFromCart)

  tDItem.textContent = cart.items[i].product;
  tDQuantity.textContent = cart.items[i].quantity;

 
  tRow.appendChild(tDDelete);
  tRow.appendChild(tDQuantity);
  tRow.appendChild(tDItem);


  
 
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tbody.appendChild(tRow);
}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  const index = event.target.getAttribute('x');

  cart.removeItem(cart.items[index]);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
