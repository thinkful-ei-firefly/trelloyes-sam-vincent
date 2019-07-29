import React from 'react';
import List from './components/list/List';
import './app.css';

function App({store:{lists, allCards}}) {

  const createList = list => {
    const cardList = [];
    list.cardIds.forEach(id => {
      if (allCards[id]) {
        cardList.push(allCards[id]);
      }
    });
    return <List key={list.id} header={list.header} cards={cardList} />;
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists.map(createList)}
      </div>
    </div>
  );
}

export default App;

//app store -> list (header, list of cardsinfo) -> Card (title, content)