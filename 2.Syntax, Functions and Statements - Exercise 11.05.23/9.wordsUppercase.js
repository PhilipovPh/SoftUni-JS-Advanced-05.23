function wordsUppercase(input) {

    let pattern = /\w+/g;
    const words = input.match(pattern).join(', ').toUpperCase();
    console.log(words);
}
wordsUppercase('Hi, my name is Philip?')


