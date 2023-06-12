function tickets(arr, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    return [...arr]
        .map(x => x.split('|'))
        .map(([d, p, s]) => new Ticket(d, Number(p), s))
        .sort((a, b) => {
            return typeof a[sorting] === 'number'
                ? a[sorting] - b[sorting]
                : a[sorting].localeCompare(b[sorting]);
        })
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')