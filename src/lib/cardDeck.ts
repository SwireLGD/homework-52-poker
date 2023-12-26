import Card from "./card";

class CardDeck {
    private deck: Card[];

    constructor() {
        this.deck = [];

        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['hearts', 'spades', 'diams', 'clubs'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    private getRandomNum(): number {
        return Math.floor(Math.random() * this.deck.length);
    } 

    getCard(): Card {
        return this.deck.splice(this.getRandomNum(), 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }

        return cards;
  }
}

export default CardDeck;