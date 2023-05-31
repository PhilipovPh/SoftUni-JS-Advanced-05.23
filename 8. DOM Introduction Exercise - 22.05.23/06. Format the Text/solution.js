function solve() {
  let textAriaValue = document.getElementById('input').value;
  let resultElement = document.getElementById('output');

  let textArr = textAriaValue
    .split('.')
    .filter(s => s !== '')
    .map(s => s + '.');

  const paragraphRoof = Math.ceil(textArr.length / 3);

  for (let i = 0; i < paragraphRoof; i++) {
    const joinedSentences = textArr.splice(0, 3).join('');

    resultElement.innerHTML += `<p>${joinedSentences}</p>`

  }
}