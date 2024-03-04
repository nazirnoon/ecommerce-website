document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const checkoutItemsEl = document.getElementById('checkout-items');
    const totalAmountEl = document.getElementById('total-amount');
  
    function calculateTotal() {
      let total = cart.reduce((acc, product) => acc + product.price, 0);
      totalAmountEl.textContent = total.toFixed(2);
    }
    
    function addToCart(product, price) {
      cart.push({product, price});
      let itemEl = document.createElement('div');
      itemEl.textContent = `${product} - $${price.toFixed(2)}`;
      checkoutItemsEl.appendChild(itemEl);
      
      calculateTotal();
    }
    
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const productEl = this.closest('.product');
        const price = parseFloat(productEl.dataset.price);
        const productName = productEl.querySelector('h2').textContent;
        addToCart(productName, price);
      });
    });
  });