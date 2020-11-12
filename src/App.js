import logo from './logo.svg';
import React from 'react';
import { cardData } from './cardData';
import Card from './card';
import './App.css';


class App extends React.Component {
  constructor() {
      super();
      this.state = {
          cardData: []
      };
  }

  componentDidMount() {
      this.setState({ cardData: cardData });
  }

  shuffleBackward = () => {
      const { cardData } = this.state;
      const newCardData = [cardData[6], ...cardData.slice(0, 6)];
      this.setState({ cardData: newCardData });
  }

  shuffleForward = () => {
      const { cardData } = this.state;
      const newCardData = [...cardData.slice(1), cardData[0]];
      this.setState({ cardData: newCardData });
  }

  render() {
      return (
          <div className='App'>
              <h1 className='title'>
                  Flashback
              </h1>
              <p className='sub-title'>
                  An interactive flashcard app.
              </p>
              <div className='card-list'>
                  {this.state.cardData.map((card, index) => <Card key={index} index={index} front={card.front} back={card.back} />)}
              </div>
              <div className='buttons'>
                  <button onClick={() => this.shuffleBackward()}>
                      &lt;
                  </button>
                  <button onClick={() => this.shuffleForward()}>
                      &gt;
                  </button>
              </div>
          </div> 
      );
  }
}

export default App;
