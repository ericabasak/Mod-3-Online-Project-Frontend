import React, { Component } from 'react';
import './App.css';

const newestBook = (a,b) => Date.parse(a.added) < Date.parse(b.added);

class App extends Component {
  constructor(){
    super()
    this.state = {
      sortOrder: "added",
      books: [
         { bookTitle: "Grit" },
         { bookTitle: "The Secret" },
         { bookTitle: "From Good to Great!" },
      ]
    }
  }
  render() {
    let sortedBooks = this.state.sortOrder === "added" ?  newestBook : undefined;

    return (
      <div className="App">
        <ul>
          <div
            style={{ fontWeight: this.state.sortedBooks === null ? "bold" : "normal"}}
            onClick={() => this.setState({ sortedBooks: null})}>Natural sorting</div>
          <div 
            style={{ fontWeight: this.state.sortedBooks === "added" ? "bold" : "normal"}}
            onClick={() => this.setState({ sortedBooks: "added"})}>Time sorting</div>
          {this.state.books.slice().sort(sortedBooks).map(book => 
            <li>{book.bookTitle}</li>
          )}
        </ul>
      </div>
    );
  }   
}

export default App;
