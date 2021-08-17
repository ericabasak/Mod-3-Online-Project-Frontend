import { timesSeries } from 'async';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: [
         { bookTitle: "Grit" },
         { bookTitle: "The Secret" },
         { bookTitle: "From Good to Great!" },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.books.map(book => 
            <li>{book.bookTitle}</li>
          )}
        </ul>
      </div>
    );
  }   
}

export default App;
