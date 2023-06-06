function printDeckOfCards(cards) {
    function createCard(card) {
        const ranks = {
            '1': 'A',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            'J': 'J',
            'Q': 'Q',
            'K': 'K',
        };

        const suits = {
            'S': '♠',
            'H': '♥',
            'D': '♦',
            'C': '♣',
        };

        const rank = ranks[card.slice(0, -1)];
        const suit = suits[card.slice(-1)];

        if (rank && suit) {
            return rank + suit;
        } else {
            return null;
        }
    }

    const validCards = [];

    for (let i = 0; i < cards.length; i++) {
        const card = createCard(cards[i]);

        if (card) {
            validCards.push(card);
        } else {
            console.log(`Invalid card: ${cards[i]}`);
        }
    }

    console.log(validCards.join(' '));
}
