import Card from './card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }
    
private flush(): boolean {
        const sameRankNum: { [rank: string]: number } = {};

        for (const card of this.cards) {
            if (sameRankNum[card.rank]) {
                sameRankNum[card.rank]++;
            } else {
            sameRankNum[card.rank] = 1;
            }
        }

        for (const rank in sameRankNum) {
            if (sameRankNum[rank] === 5) {
                return true;
            }
        }

    return false;
    }

    private threeOfAKind(): boolean {
        const sameRankNum: { [rank: string]: number } = {};

        for (const card of this.cards) {
            if (sameRankNum[card.rank]) {
                sameRankNum[card.rank]++;
            } else {
            sameRankNum[card.rank] = 1;
            }
        }

        for (const rank in sameRankNum) {
            if (sameRankNum[rank] === 3) {
                return true;
            }
        }

    return false;
    }

    private twoPairs(): boolean {
        const sameRankNum: { [rank: string]: number } = {};

        for (const card of this.cards) {
            if (sameRankNum[card.rank]) {
            sameRankNum[card.rank]++;
            } else {
            sameRankNum[card.rank] = 1;
            }
        }

        let pairCount = 0;

        for (const rank in sameRankNum) {
            if (sameRankNum[rank] === 2) {
            pairCount++;
            }
        }

    return pairCount === 2;
    }

    private onePair(): boolean {
        const sameRankNum: { [rank: string]: number } = {};

        for (const card of this.cards) {
            if (sameRankNum[card.rank]) {
            sameRankNum[card.rank]++;
            } else {
            sameRankNum[card.rank] = 1;
            }
        }

        let pairCount = 0;

        for (const rank in sameRankNum) {
            if (sameRankNum[rank] === 2) {
            pairCount++;
            }
        }

    return pairCount === 1;
    }

    getOutcome(): string {
        if (this.flush()) {
            return 'Flush';
        } else if (this.threeOfAKind()) {
            return 'Three of a kind';
        } else if (this.twoPairs()) {
            return 'Two pairs';
        } else if (this.onePair()) {
            return 'One pair';
        } else {
            return 'High card';
        }
    }
}

export default PokerHand;