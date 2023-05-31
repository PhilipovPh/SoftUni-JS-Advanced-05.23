function toggle() {

    const MORE = 'More';
    const LESS = 'Less';

    let changeElement = document.querySelector('.button');
    let lettextElement = document.querySelector('#extra');

    changeElement.textContent = changeElement.textContent === MORE ? LESS : MORE;

    lettextElement.style.display =
        lettextElement.style.display === 'none' ||
        lettextElement.style.display === '' ? 
            'block' : 
            'none';
}