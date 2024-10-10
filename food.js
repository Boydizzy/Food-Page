// scripts.js
let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  totalPrice += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((cartItem) => {
    const li = document.createElement('li');
    li.textContent = cartItem.item + ' - $' + cartItem.price;
    cartItems.appendChild(li);
  });
  document.getElementById('total-price').textContent = totalPrice;
}

function showPaymentOptions() {
  document.getElementById('payment-methods').style.display = 'block';
}

function submitOrder() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (selectedPayment) {
    alert('Order submitted using ' + selectedPayment.value + '!');
    // Reset cart and total price
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
    document.getElementById('payment-methods').style.display = 'none';
  } else {
    alert('Please select a payment method.');
  }
}
