import React from 'react';
import './Card.css';

const Ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

type Rank = typeof Ranks[number];

type Props = {
    rank: Rank;
    suit: string;
}

const getSuit = (suit: string): string => {
  switch (suit) {
    case 'hearts':
        return '♥';
    case 'spades':
        return '♠';
    case 'diams':
        return '♦';
    case 'clubs':
        return '♣';
    default:
      return '';
  }
};

const Card: React.FC<Props> = ({ rank, suit }) => {
    return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{getSuit(suit)}</span>
    </span>
  );
}

export default Card;