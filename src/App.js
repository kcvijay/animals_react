import React, { Component } from "react";
import { Animals } from "./Animals.js";
import Card from "./Card";
import "./App.css";

class App extends Component {
  state = {
    Animals: Animals,
    likes: 0,
    value: "",
  };

  searchHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  //If the particular card button is clicked, go in that card's like section, add +1 and update whole animal object.
  addLikes = (name) => {
    this.setState((state) => {
      const updatedArray = state.Animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        Animals: updatedArray,
      };
    });
  };

  //Filtering the Animals array with given card's animal name and if found, create an updated array and show every other cards except that card.
  removeCard = (name) => {
    const updatedArray = this.state.Animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ Animals: updatedArray });
  };

  render() {
    const animalsFilter = this.state.Animals.filter((animal) => {
      return animal.name.includes(this.state.value);
    });
    const AnimalList = animalsFilter.map((Animal) => (
      <Card
        key={Animal.name}
        name={Animal.name}
        likes={Animal.likes}
        addLikes={() => this.addLikes(Animal.name)}
        removeCard={() => this.removeCard(Animal.name)}
      />
    ));
    return (
      <div>
        <h1>Here are {this.state.Animals.length} Animals</h1>
        <input
          type="text"
          name="search-input"
          placeholder="Search animals..."
          onChange={this.searchHandler}
        />
        <div className="animalList">{AnimalList}</div>
      </div>
    );
  }
}

export default App;
