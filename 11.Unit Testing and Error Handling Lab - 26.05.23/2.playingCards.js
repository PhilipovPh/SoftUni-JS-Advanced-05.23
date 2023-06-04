function createCard(face, suit) {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const validSuits = ["S", "H", "D", "C"];
    
    if (!validFaces.includes(face)) {
      throw new Error("Invalid card face");
    }
    
    if (!validSuits.includes(suit)) {
      throw new Error("Invalid card suit");
    }
    
    return {
      face,
      suit,
      toString() {
        const suitsMapping = {
          S: "\u2660", // Spades (♠)
          H: "\u2665", // Hearts (♥)
          D: "\u2666", // Diamonds (♦)
          C: "\u2663", // Clubs (♣)
        };
        return `${face}${suitsMapping[suit]}`;
      },
    };
  }