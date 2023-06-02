function focused() {
    let inputElement = document.querySelectorAll('input');
    let inputArr = Array.from(inputElement);

    inputArr.forEach(x => {
        x.addEventListener('focus', focusHendler);
        x.addEventListener('blur', blurHendler);
    })

    function focusHendler(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.add('focused');
    }

    function blurHendler(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.remove('focused')
    }
}
