function wordsUppercase(input) {

    let pattern = /[A-Za-z]+/gm;
    let words = input.match(pattern);
    console.log(words.join(', ').toUpperCase())
}
wordsUppercase('Hi, my name is Philip?')