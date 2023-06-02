function deleteByEmail() {
    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let inputValueElement = document.querySelector(`input[name="email"]`);
    let resultElement = document.querySelector('#result');
    let emailArr = Array.from(emailElements);

    let sortedEmail = emailArr.find(x => x.textContent === inputValueElement.value);


    if (sortedEmail) {
        sortedEmail.parentNode.remove();
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.'
    }
}