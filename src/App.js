import React, { Component } from "react";
import { Animals } from "./Animals.js";
import { Birds } from "./Animals.js";
import Card from "./Card";
import "./App.css";

class App extends Component {
  state = {
    Animals: Animals,
    Birds: Birds,
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

  removeLikes = (name) => {
    this.setState((state) => {
      const updatedArray = state.Animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes - 1 };
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
    const birdsFilter = this.state.Birds.filter((bird) => {
      return bird.name.includes(this.state.value);
    });
    const AnimalList = animalsFilter.map((Animal) => (
      <Card
        key={Animal.name}
        name={Animal.name}
        likes={Animal.likes}
        addLikes={() => this.addLikes(Animal.name)}
        removeLikes={() => this.removeLikes(Animal.name)}
        removeCard={() => this.removeCard(Animal.name)}
      />
    ));
    const birdList = birdsFilter.map((Bird) => (
      <Card
        key={Bird.name}
        name={Bird.name}
        likes={Bird.likes}
        addLikes={() => this.addLikes(Bird.name)}
        removeLikes={() => this.removeLikes(Bird.name)}
        removeCard={() => this.removeCard(Bird.name)}
      />
    ));
    return (
      <div>
        <h1>
          We've got {this.state.Animals.length + this.state.Birds.length}{" "}
          animals for you!
        </h1>
        <div>
          <select>
            <option name="animals">Animals</option>
            <option name="birds">Birds</option>
          </select>
        </div>
        <input
          type="text"
          name="search-input"
          placeholder="Search.."
          onChange={this.searchHandler}
        />
        <div className="animalList">{AnimalList}</div>
        <div className="birdList">{birdList}</div>
      </div>
    );
  }
}

export default App;
