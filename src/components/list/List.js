import React from 'react';
import Card from '../card/Card';
import './list.css';

function List({header, cards}) {

    return (
    <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
            {cards.map(card => <Card key={card.id} title={card.title} content={card.content}></Card>)}
        </div>
    </section>);
}

export default List;

