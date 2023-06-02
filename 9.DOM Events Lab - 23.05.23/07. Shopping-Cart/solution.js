function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let addButtonsArr = Array.from(addButtons);
   let textArea = document.querySelector('textarea');
   let totalAum = 0;
   let checkoutBtn = document.querySelector('.checkout');

   addButtonsArr.forEach(x => x.addEventListener('click', addHandler));
   checkoutBtn.addEventListener('click', checkoutHandler)

   function checkoutHandler(e) {
      addButtonsArr.forEach(x => x.dsabled = 'disabled');
      let productNames = Object.keys(products).join(', ')
   }

   function addHandler(e) {
      let element = e.target;
      let productDiv = element.parentElement.parentElement;

      let title = productDiv.querySelector('.product-title');
      let priceDiv = productDiv.querySelector('.product-line-price');

      let name = title.textContent;
      let price = priceDiv.textContent;
      totalAum += price;
      products[name] = true;

      textArea.textContent += `Aded ${pro} for ${price.toFixed(2)} to the cart \n`;
   }
}