import React from 'react';
import Card from '../card/Card';
import './list.css';

function List(props) {

    return (
    <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
          <button type="button" onClick={() => props.handleAdd(props.id)}>add</button>
        </header>
        <div className="List-cards">
            {props.cards.map(card => {
             return (<Card 
              key={card.id}
              id={card.id}
              title={card.title}
              content={card.content}
              handleDelete={props.handleDelete}
            />)})}
        </div>
    </section>);
}

export default List;

