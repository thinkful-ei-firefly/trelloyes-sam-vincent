import React from 'react';
import List from './components/list/List';
import './app.css';

class App extends React.Component {

  state = {
    lists: this.props.store.lists,
    cards: this.props.store.allCards
  }

  deleteCard = (id) => {
    function omit(obj, keyToOmit) {
      return Object.entries(obj).reduce(
        (newObj, [key, value]) =>
            key === keyToOmit ? newObj : {...newObj, [key]: value},
        {}
      );
    }
    const newCardList = omit(this.state.cards, id);
    this.setState({
      cards: newCardList
    })
  }

  addCard = (listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const newCard = newRandomCard();
    const cardObj = {};
    cardObj[newCard.id] = newCard;
    const newCards = Object.assign(this.state.cards, cardObj)
    console.log(this.state.cards)
    console.log(newCards)
    const newLists = this.state.lists.map(list => 
      { if (list.id === listId) {
         return { ...list, cardIds: [...list.cardIds, newCard.id] }; 
        } return list; 
      })
    // this.setState({
    //   lists: newLists
    // })
  }



  createList = list => {
    const cardList = [];
    list.cardIds.forEach(id => {
      if (this.state.cards[id]) {
        cardList.push(this.state.cards[id]);
      }
    });
    return (
      <List 
        key={list.id}
        id={list.id}
        header={list.header}
        cards={cardList}
        handleDelete={this.deleteCard}
        handleAdd={this.addCard}
      />
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(this.createList)}
        </div>
      </div>
    );
  }
}

export default App;

//app store -> list (header, list of cardsinfo) -> Card (title, content)