function search() {

   let listItems = document.querySelectorAll('#towns li');
   let inputItem = document.querySelector('#searchText').value;
   let result = document.querySelector('#result');

   let sum = 0

   for (const li of listItems) {
      let liToLowerCase = li.textContent.toLowerCase();
      let inputToLowerCase = inputItem.toLowerCase();

      if (liToLowerCase.includes(inputToLowerCase)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }

   result.textContent = `${sum} matches found`;
}
