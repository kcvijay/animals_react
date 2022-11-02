import React, { Component } from "react";
import { Animals } from "./Animals.js";
import Card from "./Card";
import "./App.css";

class App extends Component {
  state = {
    Animals: Animals,
    likes: 0,
  };

  addLikes = () => {
    // this.setState({ likes: this.state.likes + 1 });
    console.log("Add is clicked");
  };

  removeCard = (e) => {
    console.log("Remove this card", e);
  };

  AnimalList = this.state.Animals.map((Animal) => (
    <Card
      key={Animal.name}
      name={Animal.name}
      likes={Animal.likes}
      addLikes={this.addLikes}
      removeCard={() => this.removeCard(Animal.name)}
    />
  ));

  render() {
    return (
      <div>
        <h1>Animals</h1>
        <div className="animalList">{this.AnimalList}</div>
      </div>
    );
  }
}

export default App;
