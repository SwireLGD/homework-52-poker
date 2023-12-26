import React, { useState } from 'react';
import cardDeck from './lib/cardDeck';
import card from './lib/card';

const getSuit = (suit: string): string => {
  switch (suit) {
    case 'diams':
      return '♦';
    case 'hearts':
      return '♥';
    case 'clubs':
      return '♣';
    case 'spades':
      return '♠';
    default:
      return '';
  }
};

const App: React.FC = () => {
  const [cards, setCards] = useState<card[]>([]);

  const dealCards = () => {
    const deck = new cardDeck();
    const dealtCards = deck.getCards(5);
    setCards(dealtCards);
  };

  return (
    <div>
      <button onClick={dealCards}>Раздать карты</button>
      {cards.length === 0 ? null : (
        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <span key={index} className={`card rank-${card.rank} ${card.suit}`}>
              <span className="rank">{card.rank}</span>
              <span className="suit">{getSuit(card.suit)}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;