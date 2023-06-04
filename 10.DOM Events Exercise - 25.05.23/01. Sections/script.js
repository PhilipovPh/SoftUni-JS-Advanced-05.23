function create(words) {
   const contendDiv = document.getElementById('content');

   words.forEach(word => {

      const div = document.createElement('div');
      const praragraph = document.createElement('p');

      praragraph.textContent = word;
      praragraph.style.display = 'none';

      div.appendChild(praragraph);
      div.addEventListener('click', revealTextonClick);

      contendDiv.appendChild(div);
   });

   function revealTextonClick(e) {
      e.currentTarget.children[0].style.display = 'block';
   }
}