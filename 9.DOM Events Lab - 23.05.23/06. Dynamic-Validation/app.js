function validate() {
    let input = document.getElementById('email')
    input.addEventListener('change', changeHandler)
 
 
    let regex = /^[a-z]*@[a-z]*.[a-z]*$/g
 
    function changeHandler(e) {
        let element = e.target
        let value = element.value
 
        let test = regex.test(value)
        if (test) {
            input.classList.remove('error')
 
        } else {
            input.classList.add('error')
 
        }
 
 
    }
 
}