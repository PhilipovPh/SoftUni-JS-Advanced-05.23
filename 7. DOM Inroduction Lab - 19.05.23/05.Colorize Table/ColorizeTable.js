function colorize() {
    let rowElements = document.getElementsByTagName('tr');

    let rows = Array.from(rowElements);

    for (const row of rows) {
        if (rows.indexOf(row) % 2 != 0) {
            row.style.backgroundColor = 'teal';
        }
    }
}