function solve() {
  let input = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let resultArr = input.split(' ');

  let resultElement = document.getElementById('result');

  if (namingConvention == 'Camel Case') {
    let result = resultArr.map(x => x.toLowerCase()).map(x => x.replace(x[0], x[0].toUpperCase()));
    result[0] = result[0].toLowerCase();
    resultElement.innerHTML = result.join('');
    return;
  } else if (namingConvention == 'Pascal Case') {
    let result = resultArr.map(x => x.toLowerCase()).map(x => x.replace(x[0], x[0].toUpperCase()));
    resultElement.innerHTML = result.join('');
    return;
  } else {
    resultElement.innerHTML = 'Error!';
    return;
  }
}
